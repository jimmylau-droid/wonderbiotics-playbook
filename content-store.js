(function () {
  window.WonderContent = {
    heroTitle: 'From recycling assets<br>to engineering winners.',
    heroCopy: 'A live, media-led creative system that turns performance gaps into isolated tests, modular production, and a repeatable flow of ads built to scale.',
    provenTitle: 'Build from what has already earned the right to scale.',
    provenIntro: 'Before asking for more assets, refresh the team on the combinations that have generated real orders, then use existing workflows to replicate the underlying pattern across new faces, formats, and controlled variations.',
    sourceTableTitle: 'What × Who × How × Validation × Opportunities',
    sourceTableNote: 'Values transcribed from the shared planning sheet. Treat validation as a current snapshot, not a permanent claim.',
    rule: 'Competitor breakdown analysis is the <a class="rule-source-link" href="https://imrm1t9197.feishu.cn/wiki/SDsNwGTEliQCtakS1XFc4ELonhh?sheet=72zbtt" target="_blank" rel="noreferrer"><strong>primary</strong> idea source for new variations</a>. Brand-new concepts are welcome when backed by voice-of-customer evidence and aligned with the Media Buyer. The eight levers are the isolation system. Performance results decide what becomes yours.',
    engineTitle: 'Eight levers.<br>One clear learning.',
    engineIntro: 'Every lever begins as an observation from a competitor breakdown. Select a lever to see how the team converts that observation into a controlled test.'
  };

  var storageKey = 'wonderbioticsContentOverrides';
  var pageStorageKey = 'wonderbioticsPlaybookMainOverride';
  window.WonderContent.load = function () {
    try { return Object.assign({}, window.WonderContent, JSON.parse(localStorage.getItem(storageKey) || '{}')); }
    catch (e) { return Object.assign({}, window.WonderContent); }
  };
  window.WonderContent.save = function (values) { localStorage.setItem(storageKey, JSON.stringify(values)); };
  window.WonderContent.savePage = function (markup) { localStorage.setItem(pageStorageKey, JSON.stringify(markup)); };
  window.WonderContent.loadPage = function () {
    var raw = localStorage.getItem(pageStorageKey);
    if (!raw || raw === '[object Object]') return null;
    try {
      var parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' ? parsed : null;
    } catch (e) {
      return null;
    }
  };
  window.WonderContent.reset = function () { localStorage.removeItem(storageKey); localStorage.removeItem(pageStorageKey); };
  window.WonderContent.apply = function () {
    var pageMarkup = window.WonderContent.loadPage();
    if (pageMarkup) {
      ['header', 'main', 'footer'].forEach(function (tag) {
        var element = document.querySelector(tag);
        if (element && pageMarkup[tag] !== undefined) element.innerHTML = pageMarkup[tag];
      });
      return;
    }
    var values = window.WonderContent.load();
    document.querySelectorAll('[data-content]').forEach(function (el) {
      var key = el.getAttribute('data-content');
      if (values[key] !== undefined) el.innerHTML = values[key];
    });
  };
  // The editor has its own controls and an iframe preview; never replace the
  // editor shell with the playbook markup.
  if (!document.body || !document.body.classList.contains('editor-page')) {
    window.WonderContent.apply();
  }

  // The public source of truth is a page snapshot committed to GitHub. A
  // browser-local draft may render first, but the published snapshot wins.
  window.WonderContent.loadPublishedPage = function () {
    return fetch('playbook-content.json', { cache: 'no-store' })
      .then(function (response) {
        if (!response.ok) return null;
        return response.json();
      })
      .then(function (page) {
        if (!page || typeof page !== 'object') return null;
        ['header', 'main', 'footer'].forEach(function (tag) {
          var element = document.querySelector(tag);
          if (element && page[tag] !== undefined && !document.body.classList.contains('editor-page')) element.innerHTML = page[tag];
        });
        if (typeof window.initWonderMatrix === 'function') window.initWonderMatrix();
        return page;
      })
      .catch(function () { return null; });
  };
  window.WonderContent.loadPublishedPage();
})();
