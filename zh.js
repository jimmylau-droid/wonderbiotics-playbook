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
    'WHAT (Message angle)': 'WHAT（信息角度）', 'WHO (KOL)': 'WHO（KOL）', 'HOW (Format)': 'HOW（内容形式）', 'Order rate:': '订单率：', 'Spend:': '花费：', 'Avg. rev/ad:': '平均广告收入：', 'CPA:': 'CPA：',
    'Menopause Belly Fat Loss': '更年期腹部减脂', 'Fat loss, hormone & nutrition fitness coach for women over 38': '女性 38 岁以上的减脂、激素与营养健身教练', "Science authorities: women's health doctors, nutritionists/dietitians": '科学权威：女性健康医生、营养师 / 膳食师', 'Weight-loss journey women UGC over 38': '38 岁以上女性减重旅程 UGC', 'Mature wellness lifestyle': '成熟女性健康生活方式', 'KOL educational sharing': 'KOL 科普分享', 'KOL educational sharing remix': 'KOL 科普分享 Remix', 'Static display': '静态展示广告',
    'Not Your Standard Gut Probiotic;': '不是普通的肠道益生菌；', 'Made for Weight Management': '为体重管理而设计', 'GLP1 Companion / Natural GLP1': 'GLP-1 伴侣 / 天然 GLP-1', 'New Messaging Angles/Concepts': '新信息角度 / 新概念', 'Led by Jimmy': '由 Jimmy 负责', 'Customer-language and market-mining workflow': '客户语言与市场挖掘工作流', 'Evidence source: reviews, Reddit, competitor monitoring': '证据来源：评价、Reddit、竞品监测', 'Translate customer and market signals into new hypotheses, then isolate one of the eight levers.': '将客户和市场信号转化为新假设，再拆分八个变量中的一个进行测试。',
    'Tight Teamwork.<br>One Shared Strategy.': '紧密协作。<br>一个共同策略。', 'The Media Buyer owns demand and strategic direction': '媒体买手负责需求和战略方向。', 'Forecasts volume, leads the daily standup, surfaces gaps, sets test direction, sets content demand and reads the results.': '预测内容量，主持每日站会，发现缺口，设定测试方向和内容需求，并读取结果。', 'CONTENT PROJECT MANAGER': '内容项目经理', 'Content Manager': '内容经理', 'Breaks down competitors and converts the breakdowns into scripts, storyboards and content asset production briefs.': '拆解竞品，并将拆解结果转化为脚本、分镜和内容资产制作 Brief。', 'KOL ASSET SUPPLY': 'KOL 资产供应', 'Creator / KOL Team': '创作者 / KOL 团队', 'Content buyer: Sources new KOL content from new and repeat KOLS. Ensure content bought meets demand and requirements (time, quality, volume) for standard and quick requests.': '内容采购：从新 KOL 和复购 KOL 获取内容，确保购买的内容满足标准请求和快速请求的时间、质量、数量要求。', 'Video Editor': '视频剪辑师', 'Builds the final video output based on brief combined with studying the visual and editing techniques from competitor best performing content': '结合 Brief，并研究竞品高表现内容的视觉与剪辑技巧，制作最终视频。', 'Deliver new messaging angles, RTB and landing-page content to test.': '提供新的信息角度、RTB 和落地页内容进行测试。',
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
  translations['Tight Teamwork.'] = '紧密协作。';
  translations['One Shared Strategy.'] = '一个共同策略。';
  translations['Walk the system'] = '查看系统';
  translations['Owner: Jimmy Lau · Updated August 2026'] = '负责人：Jimmy Lau · 更新于 2026 年 8 月';
  translations['WHERE WINNERS BEGIN'] = '赢家从这里开始';
  translations['Winning variations start with a breakdown.'] = '赢家变体始于竞品拆解。';
  translations['THE CREATIVE ENGINE'] = '创意引擎';
  translations['Eight levers.'] = '八个变量。';
  translations['One clear learning.'] = '一个清晰结论。';
  translations['VARIABLE 01'] = '变量 01';
  translations['VARIABLE 02'] = '变量 02';
  translations['VARIABLE 03'] = '变量 03';
  translations['VARIABLE 04'] = '变量 04';
  translations['VARIABLE 05'] = '变量 05';
  translations['VARIABLE 06'] = '变量 06';
  translations['VARIABLE 07'] = '变量 07';
  translations['VARIABLE 08'] = '变量 08';
  translations['Primary'] = '主要';
  translations['Variables in'] = '测试矩阵中的';
  translations['Proven working'] = '已验证有效的';
  translations['Brief'] = 'Brief';
  Object.assign(translations, {
    'Primary  \nmessaging angles': '主要信息角度', 'Variables in\nthe test matrix': '测试矩阵中的变量', 'Proven working\nmessaging angles': '已验证有效的信息角度', '70% Proven working concepts\n30% Testing new concepts': '70% 已验证概念\n30% 新概念测试',
    'Gut Probiotic vs. Weight Management': '肠道益生菌 vs. 体重管理', 'GLP-1 companion / Natural GLP-1': 'GLP-1 伴侣 / 天然 GLP-1', 'CPA · angle snapshot': 'CPA · 角度快照', 'Currently testing with new GLP1 science authorities and GLP1 Weight Loss Journey KOLS with approved RTB GLP1  landing page': '目前正在测试新的 GLP-1 科学权威和 GLP-1 减重旅程 KOL，并使用已批准 RTB 的 GLP-1 落地页。',
    'What × Who × How × Opportunities': 'What × Who × How × 机会', 'EXISTING FORMAT VARIATIONS': '现有形式变体', 'NEW KOL FACES & ASSETS': '新 KOL 面孔和资产', 'NEW FORMATS': '新形式', 'SOP for new format requests such as AI VSLs, Street Interviews, Podcast, Skits, Supermarket Confessions, etc.': 'AI VSL、街头采访、播客、短剧、超市采访等新形式请求 SOP。', 'SOP for new Static Ads focused on Menopause Belly and Gut vs. Weight Management Probiotic.': '聚焦更年期腹部和肠道 vs. 体重管理益生菌的静态广告 SOP。',
    'Lack of creative diversity': '创意多样性不足', 'Unclear what is being tested each week': '每周测试内容不清晰', 'Long cycle for new creative assets (minimum 2-3 weeks)': '新创意资产周期过长（至少 2–3 周）', 'Learnings trapped in individual teams': '经验被困在各个团队中', 'Media Buyer forecasts weekly demand': '媒体买手预测每周需求', 'Controlled variables per test': '每次测试控制变量', 'One deliberate variable per test': '每次测试只改变一个明确变量', 'Modular inputs unlock many fresh ads': '模块化输入可以解锁大量新广告', 'Short turnaround time for "quick" asset requests': '快速资产请求的短交付周期', 'Daily feedback resets the roadmap': '每日反馈重置路线图', '01 · SIGNAL': '01 · 信号', '02 · BREAKDOWN': '02 · 拆解', '03 · ISOLATE': '03 · 拆分变量', '04 · BRIEF': '04 · Brief', 'Media Buyer flags a gap': '媒体买手发现缺口', 'Content Manager dissects the ad': '内容经理拆解广告', 'Pod chooses the lever': '团队选择变量', 'Production gets a clear request': '制作团队收到清晰请求', 'Spend, fatigue, scaling needs, or a competitor pattern creates the request.': '花费、素材疲劳、规模化需求或竞品模式会产生请求。', 'Hook, script, setting, proof, format, CTA, and visual system are recorded.': '记录钩子、脚本、场景、证据、形式、CTA 和视觉系统。', 'The eight-variable matrix turns the observation into a controlled hypothesis.': '八变量矩阵将观察转化为受控假设。', 'Creators, designers, and editors receive modular inputs built to test one change.': '创作者、设计师和剪辑师收到用于测试单一变化的模块化输入。', 'Open visual example →': '打开视觉示例 →', 'Timed sequence: proof → mechanism → differentiation → offer': '时间顺序：证据 → 机制 → 差异化 → Offer', 'Primary messaging angles': '主要信息角度', 'Variables in': '测试矩阵中的变量', 'Proven working': '已验证有效的', 'messaging angles': '信息角度', '70% Proven working concepts': '70% 已验证概念', '30% Testing new concepts': '30% 新概念测试'
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
    var panelCopy = [
      ['主要信息角度', '竞品拆解确定正在测试的战略承诺。团队将其映射到已批准的 WonderBiotics 信息角度及对应信任理由。'],
      ['开头钩子', '竞品拆解记录第一个视觉动作和开场台词。团队将视觉和语言作为一个注意力装置组合测试，也会在需要更精确拆分时单独改变其中一部分。', '创作者靠近镜头并展示腰腹，同时说出反常识主张；对比同一创作者从产品开始并直接说出结果。'],
      ['场景', '竞品拆解记录故事发生的地点，以及该场景为什么有效。团队单独测试场景变量。', '方向盘前、厨房和杂货店通道，在创作者和脚本不变的情况下进行对比。'],
      ['主体脚本', '将竞品叙事拆成问题、机制、证据、异议和 Offer，再测试不同的叙事顺序。', '先讲机制 vs. 先讲真实经历，同时保持钩子、创作者、场景和 CTA 不变。'],
      ['视觉 / 图形元素', '竞品拆解识别竞品如何让证据易于理解，再为同一沟通任务制作符合 WonderBiotics 要求的图形。', '使用机制图 vs. 客户引述卡片，创作者原始素材保持不变。'],
      ['内容形式', '竞品的叙事容器会转化为形式假设：口播、街头采访、解释型视频、短剧、GRWM、Mashup 或 VSL。', '对比竞品白板解释结构和成分篮子形式，测试同一个天然 GLP-1 假设。'],
      ['行动号召', '竞品拆解记录风险逆转、Offer 和行动指令，让团队能够单独测试转化装置。', '对比 30 天无风险试用和最高 35% 折扣，之前的画面全部保持不变。'],
      ['音频 / 背景音乐', '记录竞品的声音环境，再在不改变剪辑或信息的情况下单独测试。', '同一成片下对比无音乐、Lo-fi 节奏和直效广告节奏。']
    ];
    document.querySelectorAll('.matrix-tab').forEach(function (tab) { tab.addEventListener('click', function () { var i = Number(tab.dataset.index), c = panelCopy[i]; setTimeout(function () { var number = document.querySelector('#matrix-number'), title = document.querySelector('#matrix-title'), desc = document.querySelector('#matrix-description'); if (number) number.textContent = '变量 ' + String(i + 1).padStart(2, '0'); if (title) title.textContent = c[0]; if (desc) desc.textContent = c[1]; }, 0); }); });
    var first = document.querySelector('.matrix-tab.active'); if (first) first.click();
    var toggle = document.createElement('a'); toggle.href = 'index.html'; toggle.textContent = 'English'; toggle.className = 'language-toggle';
    var label = document.querySelector('.security-label'); if (label && !label.querySelector('.language-toggle')) label.insertBefore(toggle, label.firstChild);
  }
  if (window.WonderContent && window.WonderContent.loadPublishedPage) window.WonderContent.loadPublishedPage().then(finish); else finish();
  window.setTimeout(finish, 600);
  window.setTimeout(finish, 1600);
})();
