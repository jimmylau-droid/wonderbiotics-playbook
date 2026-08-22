(function () {
  var translations = {
    'The Shift': '战略转变', 'Winning Variations': '赢家变体', 'The Engine': '创意引擎', 'The Pod': '团队分工', 'RACI': 'RACI', 'Asset Routing': '资产请求路由', 'Edit copy': '编辑文案',
    'DTC CONTENT STRATEGY 2.0 · TEAM PLAYBOOK': 'DTC 内容策略 2.0 · 团队手册', 'WonderBiotics DTC Playbook 2.0': 'WonderBiotics DTC 内容策略手册 2.0',
    'From recycling assets<br>to engineering winners.': '从重复利用素材<br>到系统化打造赢家。',
    'Walk the system <span aria-hidden="true">↓</span>': '查看系统 <span aria-hidden="true">↓</span>',
    'START HERE · PROVEN SIGNALS': '从这里开始 · 已验证信号', 'Build from what has already earned the right to scale.': '从已经证明值得扩大的方向开始。',
    'THE STRATEGIC SHIFT': '战略转变', 'Volume follows the account.<br>Every asset carries a hypothesis.': '素材量跟随账户需求。<br>每个资产都承载一个假设。',
    'THE CREATIVE ENGINE': '创意引擎', 'Eight levers.<br>One clear learning.': '八个变量。<br>一个清晰结论。',
    'Message angle': '信息角度', Hook: '开头钩子', 'Setting element': '场景', 'Body script': '主体脚本', 'Visual / graphic element': '视觉 / 图形元素', 'Content format': '内容形式', 'Call to action': '行动号召', 'Audio / BGM track': '音频 / 背景音乐',
    'DECISION RIGHTS': '决策权限', 'One owner per handoff.': '每个交接点只有一个负责人。', 'CREATOR ASSET SYSTEM': '创作者资产系统', 'One Collaboration.<br>Many variations.': '一次协作。<br>打造多种变体。',
    'STATIC DISPLAY ADS': '静态展示广告', 'THE POD': '团队分工', 'ASSET REQUEST ROUTING': '资产请求路由', 'WEEKLY OUTPUT TARGET': '每周产出目标',
    'THE RULE': '规则', 'Competitor breakdown analysis is the primary idea source for new variations': '竞品拆解分析是新变体的首要创意来源',
    'Click to see competitor breakdown analysis ↗': '点击查看竞品拆解分析 ↗', '中文': '中文', 'English': 'English',
    'PROVEN WORKING': '已验证有效', 'PROVEN SIGNALS': '已验证信号', 'THE MESSAGE PORTFOLIO': '信息组合', 'Five angles. Distinct jobs.': '五个角度。五种明确任务。',
    'VALIDATED COMBINATION': '已验证组合', 'CONTINUE TO VALIDATE': '继续验证', 'WATCH CLOSELY': '重点观察', 'CURRENT EFFICIENCY SIGNAL': '当前效率信号',
    'WHAT (Message angle)': 'WHAT（信息角度）', 'HOW (Format)': 'HOW（内容形式）', 'VALIDATION': '验证结果', 'OPPORTUNITIES': '机会',
    'NEXT FOCUS': '下一步重点', 'Replication before reinvention': '先复制，再创新', 'THE STRATEGIC SHIFT': '战略转变', 'Before': '之前', 'Strategy 2.0': '策略 2.0',
    'Asset recycling': '重复利用素材', 'Variable-isolated testing': '按变量拆分测试', 'Media buyer sets the creative demand': '媒体买手定义创意需求',
    'SELECT': '选择', 'ISOLATE': '拆分变量', 'ROUTE': '路由', 'READ': '读取结果', 'Proven signal': '已验证信号', 'One lever': '一个变量', 'Existing workflow': '现有工作流', 'Scale or archive': '扩大或归档',
    'STATIC DISPLAY ADS': '静态展示广告', 'One direction. One RTB. One clear image.': '一个方向。一个 RTB。一个清晰画面。', 'CHOOSE THE AD DIRECTION': '选择广告方向', 'CHOOSE ONE SPECIFIC RTB': '选择一个具体 RTB', 'CREATE THE IMAGE IN ATRIA': '在 Atria 中制作图片', 'FINALIZE + UPLOAD': '定稿并上传',
    'Start with the commercial lane': '从商业方向开始', 'Keep the proof focused': '让证据保持聚焦', 'Clone the visual logic': '复制视觉逻辑', 'QA before launch': '上线前完成质检', 'WEEKLY OUTPUT TARGET': '每周产出目标', 'Produce 10 new display ads every week.': '每周产出 10 个新的展示广告。',
    'GRAPHIC ELEMENTS': '图形元素', 'Graphic Designer': '平面设计师', 'SCIENCE AUTHORITY SUPPORT': '科学权威支持', 'Taylor · SAB Advisor': 'Taylor · SAB 顾问', 'Creator Team': '创作者团队', 'Jimmy + Becky': 'Jimmy + Becky',
    'MASTER PACKAGE': '主素材包', 'raw assets per Tier 1 creator': '每位 Tier 1 创作者的原始素材', 'Full reels × 1': '完整成片 × 1', 'Hooks × 4': '开头钩子 × 4', 'Voiceovers × 4': '配音 × 4', 'Product-in-use/Lifestyle Clips × 8': '产品使用 / 生活方式片段 × 8', 'Tier 2-4 KOLs assets halved': 'Tier 2-4 KOL 素材数量减半', 'THE STANDARD': '标准',
    'One Collaboration.': '一次协作。', 'Many variations.': '多种变体。', 'More useful learning per asset.': '让每个资产带来更多有效学习。'
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
