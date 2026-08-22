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
  Object.assign(translations, {
    'Static Display Ads': '静态展示广告', 'START HERE · PROVEN WORKING': '从这里开始 · 已验证有效', 'Focus on the current proven work directions.': '聚焦当前已验证有效的方向。',
    'Use current workflow to conduct controlled variation testing of testing winners starting with competitor analysis X existing KOL faces + new KOL faces. ': '基于当前工作流，从竞品分析、现有 KOL 面孔和新 KOL 面孔开始，对赢家进行受控变体测试。',
    'Menopause mid-section belly fat': '更年期腰腹部脂肪', 'Fitness instructors + science authorities + Menopause Age Weight Loss Journey': '健身教练 + 科学权威 + 更年期减重旅程', 'Creator Educational sharing + remix': '创作者科普分享 + Remix 变体', 'order rate': '订单率', 'spend': '花费', 'avg revenue/ad': '平均广告收入',
    'Static display ads follow a dedicated workflow. Every image should make one product direction and one specific reason-to-believe easy to understand.': '静态展示广告遵循独立工作流。每张图片都应让一个产品方向和一个具体信任理由易于理解。', 'Select one product direction before choosing the RTB.': '先选择一个产品方向，再选择 RTB。', 'Weight-management direction': '体重管理方向', 'Category-comparison direction': '品类对比方向', 'Choose one proof job per image. Do not combine multiple selling points.': '每张图片只承担一个证据任务，不要组合多个卖点。', 'Research, ingredients, or study data': '研究、成分或研究数据', 'How the product works': '产品如何发挥作用', 'Customer reviews or KOL quotes': '客户评价或 KOL 引用', 'Expert opinions, SAB quotes, or third-party endorsements': '专家观点、SAB 引用或第三方背书', 'Risk reversal or purchase reassurance': '风险逆转或购买保障',
    'START HERE · PROVEN SIGNALS': '从这里开始 · 已验证信号', 'WHAT (Message angle)': 'WHAT（信息角度）', 'WHO (KOL)': 'WHO（KOL）', 'HOW (Format)': 'HOW（内容形式）',
    'A creative system to clarify existing workflows when building out variations of winning ads and establish new workflows for testing new creative formats to improve creative diversity to help scale to new prospects.': '一套以创意为核心的系统：明确赢家广告变体的现有工作流，并建立测试新创意形式的新工作流，通过提升创意多样性触达更多潜在客户。',
    'Use current workflow to conduct controlled variation testing of testing winners starting with competitor analysis X existing KOL faces + new KOL faces.': '基于当前工作流，从竞品分析、现有 KOL 面孔和新 KOL 面孔开始，对赢家进行受控变体测试。',
    'Fitness instructors + science authorities + Menopause Age Weight Loss Journey': '健身教练 + 科学权威 + 更年期减重旅程', 'Creator Educational sharing + remix': '创作者科普分享 + Remix 变体',
    'This is the strongest current direction, not a universal conclusion.': '这是目前最强的方向，但不是普遍结论。', 'Orders and efficiency remain concentrated in a small number of creators and need replication across 3–5 new KOLs.': '订单和效率仍集中在少数创作者，需要复制到 3–5 个新 KOL。',
    'Current snapshot: 43% OG rate, $350 CPA, and $154 average revenue per ad.': '当前快照：OG 率 43%，CPA $350，每条广告平均收入 $154。', 'Use this as a focused commercial test lane until it the conclusion has been validated.': '在结论得到验证前，将其作为聚焦的商业测试方向。',
    'Currently testing with new GLP1 science authorities and GLP1 Weight Loss Journey KOLS with approved RTB GLP1 landing page': '目前正在测试新的 GLP-1 科学权威和 GLP-1 减重旅程 KOL，并使用已批准 RTB 的 GLP-1 落地页。',
    'Optimize from competitor analysis': '基于竞品分析优化', 'Add fresh KOL faces': '加入新的 KOL 面孔', 'Develop new creative formats': '开发新的创意形式', 'Increase static-display testing.': '增加静态展示广告测试。',
    'Replicate the authority structure across new experts while improving efficiency before scaling.': '在扩大规模前，将权威结构复制到新专家，同时提升效率。', 'Test medical-doctor and nutrition-doctor authority angles with a matched RTB, format, and landing page.': '用匹配的 RTB、形式和落地页，测试医生和营养医生的权威角度。',
    'Our content expansion for the proven working directions will focus on 4 main directions:': '我们将围绕已验证方向，从四个主要方向扩展内容：', 'Test based on competitor breakdown': '基于竞品拆解测试', 'New KOL faces & assets': '新 KOL 面孔和资产', 'New Video Formats': '新视频形式', 'New Static Ads': '新静态广告',
    'Track what levers changes and what must remain constant so that each week it is clear what variable we are tested, what assumptions worked and what didn\'t work.': '记录哪些变量发生变化、哪些必须保持不变，确保每周都清楚测试了什么变量、哪些假设有效、哪些无效。',
    'Extend the messaging to new audiences through new KOL faces in our proven work KOL types, made more efficient by The Creator 2.0 package': '在已验证的 KOL 类型中加入新 KOL 面孔，将信息传递给新受众，并通过 Creator 2.0 素材包提升效率。',
    'The pod does not invent variations in a vacuum': '团队不会凭空发明变体', 'Live competitor analysis reveals the format, angle, hook, structure, and proof worth isolating before a brief is written': '在写 Brief 之前，实时竞品分析会揭示值得拆分测试的形式、角度、钩子、结构和证据。',
    'Spend, fatigue, scaling needs, or a competitor pattern creates the request.': '花费、素材疲劳、规模化需求或竞品模式会产生请求。', 'Hook, script, setting, proof, format, CTA, and visual system are recorded.': '记录钩子、脚本、场景、证据、形式、CTA 和视觉系统。', 'The eight-variable matrix turns the observation into a controlled hypothesis.': '八变量矩阵将观察转化为受控假设。', 'Creators, designers, and editors receive modular inputs built to test one change.': '创作者、设计师和剪辑师收到用于测试单一变化的模块化输入。',
    'The strategic promise being tested.': '正在测试的战略承诺。', 'Every execution stays anchored to one approved angle and its corresponding reasons to believe.': '每个执行都必须锚定一个已批准的角度及其对应的信任理由。', 'Competitor opening frames from April\'s breakdown': '来自 April 竞品拆解的开场画面', 'How context changes the same message': '场景如何改变同一条信息',
    'Competitor script mapped by timestamp so the team can isolate narrative sequence and proof order.': '按时间戳映射竞品脚本，帮助团队拆分叙事顺序和证据顺序。', 'Use Atria to generate a structurally similar script, then use AI voiceover to test it as a mashup/remix with creator footage.': '使用 Atria 生成结构相似的脚本，再用 AI 配音与创作者素材组合成 Mashup/Remix 进行测试。', 'Create additional winner iterations by changing the order of the sequence map, such as mechanism → proof → differentiation → offer.': '通过改变顺序图的排列创建更多赢家变体，例如：机制 → 证据 → 差异化 → Offer。',
    'Every lever begins as an observation from a competitor breakdown.': '每个变量都始于竞品拆解中的观察。', 'Select a lever to see how the team converts that observation into a controlled test.': '选择一个变量，查看团队如何将观察转化为受控测试。', 'Open the Feishu breakdown and review the underlying competitor evidence.': '打开 Feishu 拆解，查看底层竞品证据。',
    'Route the request by format type': '按形式类型路由请求', 'After aligning with the media buyer, the Content Manager defines the format and required assets for the following 2 weeks': '与媒体买手对齐后，内容经理定义未来两周所需的形式和资产。', 'The requests then follows 1 of 4 operating lanes based on the capability required': '请求根据所需能力进入四条工作流之一。', 'Content asset request': '内容资产请求', 'Can KOL team support this format': 'KOL 团队能否支持该形式？',
    'Existing KOLs, new KOLS, and quick asset request add-on workflows': '现有 KOL、新 KOL，以及快速资产追加工作流', 'For complete shoots and asset packages that require creator sourcing, contracting, briefing, product delivery, filming, and review.': '适用于需要寻找创作者、签约、Brief、寄送产品、拍摄和审核的完整拍摄及资产包。', 'For simple, low-production asks sent to active creators who already have product and an established working relationship.': '适用于发送给已有产品且已有合作关系的活跃创作者的简单低制作需求。', 'Content Manager classifies the ask as Standard or Rapid': '内容经理将请求分类为标准或快速', 'KOL Team confirms creator availability and delivery timing': 'KOL 团队确认创作者可用性和交付时间', 'Editor assembles the variation after asset QA': '资产质检后，剪辑师组装变体。',
    'Use when the format needs capabilities outside the current KOL system': '当形式需要当前 KOL 系统之外的能力时使用', 'Media Buyer + Content Manager raise in daily standup with evidence': '媒体买手和内容经理带着证据在每日站会上提出', 'Jimmy + Becky select execution route': 'Jimmy + Becky 选择执行路径', 'Purchase or acquire actors, locations, crews, and specialist production': '购买或获取演员、场地、摄制团队和专业制作能力。',
    'Static display ads follow a dedicated workflow': '静态展示广告遵循独立工作流', 'Every image should make one product direction and one specific reason-to-believe easy to understand.': '每张图片都应让一个产品方向和一个具体信任理由易于理解。', 'Select one product direction before choosing the RTB.': '先选择一个产品方向，再选择 RTB。', 'Choose one proof job per image.': '每张图片只承担一个证据任务。', 'Do not combine multiple selling points.': '不要在一张图片中组合多个卖点。', 'Science-authority copy and SAB quotes can be sourced from Taylor.': '科学权威文案和 SAB 引用可向 Taylor 获取。', 'Find a strong competitor or historical reference, evaluate its lifecycle and quality, then clone the composition in Atria at approximately 90% similarity.': '找到强竞品或历史参考，评估其生命周期和质量，再在 Atria 中以约 90% 相似度复制构图。', 'Select the strongest layout, remove unnecessary versions, replace the copy, and check product imagery, numbers, spelling, layout, and launch upload.': '选择最强版式，删除不必要版本，替换文案，并检查产品图片、数字、拼写、版式和上线上传。',
    'The Media Buyer owns demand and strategic direction': '媒体买手负责需求和战略方向', 'All other roles in the growth pod support the media buyer by supplying the needed creative type, volume and quality': '增长团队的其他角色通过提供所需的创意类型、数量和质量来支持媒体买手。', 'Breaks down competitors and converts the breakdowns into scripts, storyboards and content asset production briefs.': '拆解竞品，并将拆解结果转化为脚本、分镜和内容资产制作 Brief。', 'Builds the final video output based on brief combined with studying the visual and editing techniques from competitor best performing content': '结合 Brief 以及对竞品高表现内容视觉和剪辑技巧的研究，制作最终视频。', 'One owner per handoff.': '每个交接点只有一个负责人。', 'RACI makes the pod\'s operating model visible: one accountable owner, named contributors, and no ambiguous "someone should" work.': 'RACI 让团队运作模式清晰可见：明确一名负责人、贡献者，不再有模糊的“应该有人做”。'
  });
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
  window.setTimeout(finish, 600);
  window.setTimeout(finish, 1600);
})();
