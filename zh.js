(function () {
  var translations = {
    'The Shift': '战略转变', 'Winning Variations': '赢家变体', 'The Engine': '创意引擎', 'The Pod': '团队分工', 'RACI': 'RACI', 'Asset Routing': '资产请求路由', 'Edit copy': '编辑文案',
    'DTC CONTENT STRATEGY 2.0 · TEAM PLAYBOOK': 'DTC 内容策略 2.0 · 团队手册',
    'From recycling assets<br>to engineering winners.': '从重复利用素材<br>到系统化打造赢家。',
    'Walk the system <span aria-hidden="true">↓</span>': '查看系统 <span aria-hidden="true">↓</span>',
    'START HERE · PROVEN SIGNALS': '从这里开始 · 已验证信号', 'Build from what has already earned the right to scale.': '从已经证明值得扩大的方向开始。',
    'THE STRATEGIC SHIFT': '战略转变', 'Volume follows the account.<br>Every asset carries a hypothesis.': '素材量跟随账户需求。<br>每个资产都承载一个假设。',
    'THE CREATIVE ENGINE': '创意引擎', 'Eight levers.<br>One clear learning.': '八个变量。<br>一个清晰结论。',
    'Message angle': '信息角度', Hook: '开头钩子', 'Setting element': '场景', 'Body script': '主体脚本', 'Visual / graphic element': '视觉 / 图形元素', 'Content format': '内容形式', 'Call to action': '行动号召', 'Audio / BGM track': '音频 / 背景音乐',
    'DECISION RIGHTS': '决策权限', 'One owner per handoff.': '每个交接点只有一个负责人。', 'CREATOR ASSET SYSTEM': '创作者资产系统', 'One Collaboration.<br>Many variations.': '一次协作。<br>打造多种变体。',
    'STATIC DISPLAY ADS': '静态展示广告', 'THE POD': '团队分工', 'ASSET REQUEST ROUTING': '资产请求路由', 'WEEKLY OUTPUT TARGET': '每周产出目标',
    'THE RULE': '规则', 'Competitor breakdown analysis is the primary idea source for new variations': '竞品拆解分析是新变体的首要创意来源',
    'Click to see competitor breakdown analysis ↗': '点击查看竞品拆解分析 ↗', '中文': '中文', 'English': 'English'
  };
  function translate(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var nodes = [], node;
    while ((node = walker.nextNode())) nodes.push(node);
    nodes.forEach(function (text) {
      var value = text.nodeValue;
      Object.keys(translations).forEach(function (key) {
        if (key.indexOf('<') >= 0) return;
        if (value.indexOf(key) >= 0) value = value.split(key).join(translations[key]);
      });
      text.nodeValue = value;
    });
    document.querySelectorAll('[data-content="rule"]').forEach(function (el) { el.innerHTML = '<a class="rule-source-link" href="https://imrm1t9197.feishu.cn/wiki/SDsNwGTEliQCtakS1XFc4ELonhh?sheet=72zbtt" target="_blank" rel="noreferrer">竞品拆解分析是新变体的首要创意来源<em>点击查看竞品拆解分析 ↗</em></a>'; });
  }
  document.documentElement.lang = 'zh-CN';
  function finish() {
    translate(document.body);
    var toggle = document.createElement('a'); toggle.href = 'index.html'; toggle.textContent = 'English'; toggle.className = 'language-toggle';
    var label = document.querySelector('.security-label'); if (label && !label.querySelector('.language-toggle')) label.insertBefore(toggle, label.firstChild);
  }
  if (window.WonderContent && window.WonderContent.loadPublishedPage) window.WonderContent.loadPublishedPage().then(finish); else finish();
})();
