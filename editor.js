(function () {
  var preview = document.getElementById('playbook-preview');
  var tokenInput = document.getElementById('github-token');
  var tokenStorageKey = 'wonderbioticsGithubPublishToken';
  var githubApiUrl = 'https://api.github.com/repos/jimmylau-droid/wonderbiotics-playbook/contents/playbook-content.json';
  tokenInput.value = sessionStorage.getItem(tokenStorageKey) || '';
  tokenInput.addEventListener('change', function () { sessionStorage.setItem(tokenStorageKey, tokenInput.value.trim()); });

  function pageFromPreview() {
    var previewDocument = preview.contentDocument;
    if (!previewDocument) return null;
    var page = {};
    ['header', 'main', 'footer'].forEach(function (tag) {
      var section = previewDocument.querySelector(tag);
      if (section) page[tag] = section.innerHTML;
    });
    return page;
  }

  function setStatus(message, saved) {
    var status = document.getElementById('save-status');
    status.textContent = message;
    status.className = saved ? 'editor-status saved' : 'editor-status';
  }
  function enableEditing() {
    var previewDocument = preview.contentDocument;
    if (!previewDocument || !previewDocument.body) return false;
    ['header', 'main', 'footer'].forEach(function (tag) {
      var section = previewDocument.querySelector(tag);
      if (!section) return;
      section.setAttribute('contenteditable', 'true');
      section.setAttribute('spellcheck', 'true');
    });
    return true;
  }
  preview.addEventListener('load', function () {
    enableEditing();
    // content-store.js can apply the published snapshot shortly after load.
    // Re-apply the editing state after that asynchronous update completes.
    window.setTimeout(enableEditing, 100);
    window.setTimeout(enableEditing, 500);
    window.setTimeout(enableEditing, 1500);
    var previewDocument = preview.contentDocument;
    if (previewDocument && previewDocument.body && !previewDocument.body.__editingObserver) {
      var observer = new MutationObserver(enableEditing);
      observer.observe(previewDocument.body, { childList: true, subtree: true });
      previewDocument.body.__editingObserver = observer;
    }
  });
  document.getElementById('save-content').addEventListener('click', function () {
    var page = pageFromPreview();
    if (!page) return;
    window.WonderContent.savePage(page);
    setStatus('Draft saved in this browser. Publish when it is approved.', true);
  });
  document.getElementById('publish-content').addEventListener('click', async function () {
    var token = tokenInput.value.trim();
    var page = pageFromPreview();
    if (!token) { setStatus('Paste a repository-only GitHub token before publishing.', false); tokenInput.focus(); return; }
    if (!page) { setStatus('The preview is still loading. Try again in a moment.', false); return; }
    try {
      setStatus('Publishing shared site copy...', true);
      var headers = { Authorization: 'Bearer ' + token, Accept: 'application/vnd.github+json' };
      var existing = await fetch(githubApiUrl, { headers: headers });
      var body = { message: 'Publish playbook copy from Content Editor', content: btoa(unescape(encodeURIComponent(JSON.stringify(page, null, 2)))) };
      if (existing.ok) body.sha = (await existing.json()).sha;
      else if (existing.status !== 404) throw new Error('GitHub could not open the content file.');
      var published = await fetch(githubApiUrl, { method: 'PUT', headers: Object.assign({ 'Content-Type': 'application/json' }, headers), body: JSON.stringify(body) });
      if (!published.ok) throw new Error('GitHub rejected the publish request. Check that the token has Contents read/write permission for this repository.');
      window.WonderContent.savePage(page);
      sessionStorage.setItem(tokenStorageKey, token);
      setStatus('Published. GitHub Pages will update for everyone in about one minute.', true);
    } catch (error) {
      setStatus(error.message || 'Publish failed. Check the token and try again.', false);
    }
  });
  document.getElementById('export-content').addEventListener('click', function () {
    var page = pageFromPreview() || window.WonderContent.loadPage();
    var payload = { version: 1, exportedAt: new Date().toISOString(), page: page, copy: window.WonderContent.load() };
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'wonderbiotics-playbook-copy.json';
    link.click();
    URL.revokeObjectURL(link.href);
    setStatus('Backup downloaded.', true);
  });
  document.getElementById('import-content').addEventListener('click', function () { document.getElementById('import-file').click(); });
  document.getElementById('import-file').addEventListener('change', function (event) {
    var file = event.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var payload = JSON.parse(reader.result);
        if (!payload || !payload.page || typeof payload.page !== 'object') throw new Error('Invalid export');
        window.WonderContent.savePage(payload.page);
        if (payload.copy && typeof payload.copy === 'object') window.WonderContent.save(payload.copy);
        setStatus('Backup loaded. Refreshing preview.', true);
        preview.contentWindow.location.reload();
      } catch (error) {
        setStatus('Import failed: choose a WonderBiotics backup file.', false);
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  });
  document.getElementById('reset-content').addEventListener('click', function () {
    if (!window.confirm('Reset only this browser draft to the published/default copy?')) return;
    window.WonderContent.reset();
    window.location.reload();
  });
})();
