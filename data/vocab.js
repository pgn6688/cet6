/* ===== 词汇数据:A式串句(每句5个目标词)=====
   字段:w 单词 / ph 音标 / m 词性+释义 / tip 记忆钩子(词根或谐音,难词才有)
   en 整句 / zh 中文翻译。
   目标词在 en、zh 中均用 {{...}} 标出。
   中文用 {{中文|英文词}} 形式,英文词须与该句 words[].w 对应(中英语序不同也不会错位)。 */
window.VOCAB = [
  { id: 1,
    en: "The {{notorious}} official {{provoked}} public fury, so {{advocates}} urged the government to {{abolish}} the unfair law and {{reverse}} its policy.",
    zh: "那位{{臭名昭著的|notorious}}官员{{激起|provoke}}了公众的愤怒,于是{{倡导者|advocate}}们敦促政府{{废除|abolish}}这条不公平的法律并{{扭转|reverse}}其政策。",
    words: [
      { w:"notorious", ph:"/nəʊˈtɔːriəs/", m:"adj. 臭名昭著的", tip:"联想 torture(折磨):坏到让人忘不掉 → 臭名昭著" },
      { w:"provoke", ph:"/prəˈvəʊk/", m:"vt. 激起;招惹", tip:"pro(向前)+voke(=voice 喊)→ 冲你喊 → 激怒" },
      { w:"advocate", ph:"/ˈædvəkeɪt/", m:"vt. 提倡 n. 倡导者", tip:"ad(向)+voc(说)+ate → 向众人说 → 倡导" },
      { w:"abolish", ph:"/əˈbɒlɪʃ/", m:"vt. 废除(制度、法律)", tip:"谐音'啊抛离':把旧制度抛离 → 废除" },
      { w:"reverse", ph:"/rɪˈvɜːs/", m:"vt. 颠倒;扭转 n. 相反", tip:"re(反)+verse(转)→ 反转 → 扭转" }
    ] },
  { id: 2,
    en: "A {{significant}} {{decline}} in birth rates may {{contribute}} to economic trouble — a {{factor}} with serious long-term {{consequences}}.",
    zh: "出生率的{{大幅|significant}}{{下降|decline}}可能{{引发|contribute}}经济问题——这是一个有着严重长期{{后果|consequence}}的{{因素|factor}}。",
    words: [
      { w:"significant", ph:"/sɪɡˈnɪfɪkənt/", m:"adj. 重要的;显著的", tip:"sign(记号)→ 值得做记号的 → 重要的" },
      { w:"decline", ph:"/dɪˈklaɪn/", m:"v./n. 下降;婉拒", tip:"de(向下)+cline(倾斜)→ 往下走 → 下降" },
      { w:"contribute", ph:"/kənˈtrɪbjuːt/", m:"v. 贡献;contribute to 导致", tip:"con+tribute(贡品)→ 一起进贡 → 贡献/导致" },
      { w:"factor", ph:"/ˈfæktə/", m:"n. 因素;要素", tip:"谐音'反客':左右局面的 → 因素" },
      { w:"consequence", ph:"/ˈkɒnsɪkwəns/", m:"n. 后果;结果", tip:"con+sequ(跟随)→ 跟着来的 → 后果" }
    ] },
  { id: 3,
    en: "Teachers {{emphasize}} that {{acquiring}} a {{fluent}} second language is {{essential}}, and the internet now offers {{abundant}} resources for it.",
    zh: "老师们{{强调|emphasize}},{{习得|acquire}}一门{{流利的|fluent}}第二语言{{至关重要|essential}},而互联网如今为此提供了{{丰富的|abundant}}资源。",
    words: [
      { w:"emphasize", ph:"/ˈemfəsaɪz/", m:"vt. 强调;着重", tip:"em+phas(显示)→ 着重显示 → 强调" },
      { w:"acquire", ph:"/əˈkwaɪə/", m:"vt. 获得;习得", tip:"ac+quire(=seek 求)→ 努力求得 → 获得" },
      { w:"fluent", ph:"/ˈfluːənt/", m:"adj. 流利的;流畅的", tip:"flu(流)+ent → 像水流 → 流利" },
      { w:"essential", ph:"/ɪˈsenʃl/", m:"adj. 必不可少的 n. 要素", tip:"essence(本质)→ 本质的 → 必不可少" },
      { w:"abundant", ph:"/əˈbʌndənt/", m:"adj. 丰富的;大量的", tip:"a+bund(波涌)→ 像波浪涌来 → 丰富" }
    ] },
  { id: 4,
    en: "To {{pursue}} her {{ambition}}, she was willing to {{sacrifice}} her free time, knowing that real {{achievement}} demands {{persistence}}.",
    zh: "为了{{追求|pursue}}{{理想|ambition}},她愿意{{牺牲|sacrifice}}空闲时间,因为她明白真正的{{成就|achievement}}需要{{坚持不懈|persistence}}。",
    words: [
      { w:"pursue", ph:"/pəˈsjuː/", m:"vt. 追求;从事", tip:"pur(向前)+sue(追)→ 向前追 → 追求" },
      { w:"ambition", ph:"/æmˈbɪʃn/", m:"n. 雄心;抱负", tip:"amb(到处拉票)→ 想出头的心 → 抱负" },
      { w:"sacrifice", ph:"/ˈsækrɪfaɪs/", m:"v./n. 牺牲;献出", tip:"sacri(神圣)+fice(做)→ 献给神 → 牺牲" },
      { w:"achievement", ph:"/əˈtʃiːvmənt/", m:"n. 成就;成绩", tip:"achieve(实现)+ment → 成就" },
      { w:"persistence", ph:"/pəˈsɪstəns/", m:"n. 坚持;执着", tip:"per(始终)+sist(站)→ 一直站着 → 坚持" }
    ] },
  { id: 5,
    en: "Prices {{vary}} {{considerably}} between cities, so a careful {{budget}} helps families control their {{expenses}} and {{afford}} essentials.",
    zh: "各城市物价{{差异|vary}}{{很大|considerable}},因此精打细算的{{预算|budget}}能帮家庭控制{{开支|expense}}、{{负担得起|afford}}必需品。",
    words: [
      { w:"vary", ph:"/ˈveəri/", m:"vi. 变化;不同", tip:"variety(多样)的动词 → 各不相同" },
      { w:"considerable", ph:"/kənˈsɪdərəbl/", m:"adj. 相当大的(副 considerably)", tip:"consider+able → 值得考虑的量 → 相当大" },
      { w:"budget", ph:"/ˈbʌdʒɪt/", m:"n. 预算 v. 编预算", tip:"谐音'巴结':想巴结也得看预算" },
      { w:"expense", ph:"/ɪkˈspens/", m:"n. 费用;开支", tip:"ex(出)+pense(花)→ 花出去 → 开支" },
      { w:"afford", ph:"/əˈfɔːd/", m:"vt. 负担得起;抽得出", tip:"af+ford(给)→ 给得起 → 负担得起" }
    ] },
  { id: 6,
    en: "{{Severe}} {{pollution}} {{threatens}} the fragile {{ecosystem}}, and scientists warn it may take decades to {{restore}} the environment.",
    zh: "{{严重的|severe}}{{污染|pollution}}{{威胁|threaten}}着脆弱的{{生态系统|ecosystem}},科学家警告说{{修复|restore}}环境可能需要数十年。",
    words: [
      { w:"severe", ph:"/sɪˈvɪə/", m:"adj. 严重的;严厉的", tip:"谐音'死围':被严重包围 → 严重的" },
      { w:"pollution", ph:"/pəˈluːʃn/", m:"n. 污染", tip:"pollute(弄脏)+ion → 污染" },
      { w:"threaten", ph:"/ˈθretn/", m:"vt. 威胁;预示凶兆", tip:"threat(威胁)+en → 威胁" },
      { w:"ecosystem", ph:"/ˈiːkəʊsɪstəm/", m:"n. 生态系统", tip:"eco(生态)+system → 生态系统" },
      { w:"restore", ph:"/rɪˈstɔː/", m:"vt. 恢复;修复;归还", tip:"re(重新)+store(建立)→ 恢复" }
    ] },
  { id: 7,
    en: "The most {{qualified}} {{candidate}} {{impressed}} the managers during the {{interview}}, so the company decided to {{recruit}} her at once.",
    zh: "最{{合格的|qualified}}{{候选人|candidate}}在{{面试|interview}}中给经理们留下了{{深刻印象|impress}},于是公司决定立即{{录用|recruit}}她。",
    words: [
      { w:"qualified", ph:"/ˈkwɒlɪfaɪd/", m:"adj. 合格的;有资格的", tip:"quality(资质)→ 有资质的 → 合格" },
      { w:"candidate", ph:"/ˈkændɪdət/", m:"n. 候选人;应试者", tip:"谐音'砍得'多:被挑中的 → 候选人" },
      { w:"impress", ph:"/ɪmˈpres/", m:"vt. 给…深刻印象", tip:"im(进)+press(压)→ 压进心里 → 印象深" },
      { w:"interview", ph:"/ˈɪntəvjuː/", m:"n./v. 面试;采访", tip:"inter(相互)+view(看)→ 互相看" },
      { w:"recruit", ph:"/rɪˈkruːt/", m:"vt. 招募 n. 新成员", tip:"re+cruit(增长)→ 让队伍增长 → 招募" }
    ] },
  { id: 8,
    en: "With his teacher's {{encouragement}}, the shy boy {{gradually}} {{overcame}} his {{anxiety}} and spoke with growing {{confidence}}.",
    zh: "在老师的{{鼓励|encouragement}}下,这个害羞的男孩{{逐渐|gradually}}{{克服|overcome}}了{{焦虑|anxiety}},说话越来越有{{信心|confidence}}。",
    words: [
      { w:"encouragement", ph:"/ɪnˈkʌrɪdʒmənt/", m:"n. 鼓励(动 encourage)", tip:"en(使)+courage(勇气)→ 鼓励" },
      { w:"gradually", ph:"/ˈɡrædʒuəli/", m:"adv. 逐渐地", tip:"grad(步)+ual → 一步步 → 逐渐" },
      { w:"overcome", ph:"/ˌəʊvəˈkʌm/", m:"vt. 克服;战胜", tip:"over(越过)+come → 越过来 → 克服" },
      { w:"anxiety", ph:"/æŋˈzaɪəti/", m:"n. 焦虑;担忧", tip:"anxious(焦虑的)的名词" },
      { w:"confidence", ph:"/ˈkɒnfɪdəns/", m:"n. 信心;信任", tip:"con+fid(信)→ 充分信(自己)→ 自信" }
    ] },
  { id: 9,
    en: "Technological {{innovation}} has {{transformed}} the {{industry}}, {{dramatically}} improving {{efficiency}} while cutting costs.",
    zh: "技术{{创新|innovation}}已经{{改变|transform}}了这个{{行业|industry}},在降低成本的同时{{大幅|dramatically}}提高了{{效率|efficiency}}。",
    words: [
      { w:"innovation", ph:"/ˌɪnəˈveɪʃn/", m:"n. 创新;革新", tip:"in+nov(新)→ 弄出新东西 → 创新" },
      { w:"transform", ph:"/trænsˈfɔːm/", m:"vt. 彻底改变;转换", tip:"trans(转)+form(形)→ 变形 → 转变" },
      { w:"industry", ph:"/ˈɪndəstri/", m:"n. 工业;行业;勤奋", tip:"industri(勤勉)→ 工业;勤奋" },
      { w:"dramatically", ph:"/drəˈmætɪkli/", m:"adv. 戏剧性地;大幅地", tip:"drama(戏剧)→ 像戏剧般 → 大幅" },
      { w:"efficiency", ph:"/ɪˈfɪʃnsi/", m:"n. 效率;功效", tip:"effic(效)+iency → 效率" }
    ] },
  { id: 10,
    en: "{{Cautious}} shoppers learn to {{distinguish}} {{genuine}} products from {{fake}} ones so dishonest sellers cannot {{deceive}} them.",
    zh: "{{谨慎的|cautious}}购物者学会{{区分|distinguish}}{{正品|genuine}}和{{假货|fake}},这样不诚实的卖家就无法{{欺骗|deceive}}他们。",
    words: [
      { w:"cautious", ph:"/ˈkɔːʃəs/", m:"adj. 谨慎的;小心的", tip:"caut(小心)+ious → 谨慎" },
      { w:"distinguish", ph:"/dɪˈstɪŋɡwɪʃ/", m:"vt. 区分;辨别", tip:"di+sting(刺)→ 刺记号来分 → 区分" },
      { w:"genuine", ph:"/ˈdʒenjuɪn/", m:"adj. 真正的;真诚的", tip:"gen(生)→ 天生的 → 真正的" },
      { w:"fake", ph:"/feɪk/", m:"adj. 假的 n. 赝品 v. 伪造", tip:"谐音'废克':假货" },
      { w:"deceive", ph:"/dɪˈsiːv/", m:"vt. 欺骗;蒙蔽", tip:"de(坏)+ceive(拿)→ 坏手段拿 → 骗" }
    ] },
  { id: 11,
    en: "{{Generous}} citizens {{donate}} to {{charity}} every year, hoping to {{relieve}} the {{poverty}} that still traps millions of families.",
    zh: "{{慷慨的|generous}}市民每年向{{慈善机构|charity}}{{捐款|donate}},希望{{缓解|relieve}}仍困住数百万家庭的{{贫困|poverty}}。",
    words: [
      { w:"generous", ph:"/ˈdʒenərəs/", m:"adj. 慷慨的;大方的", tip:"gener(给予)+ous → 乐于给 → 慷慨" },
      { w:"donate", ph:"/dəʊˈneɪt/", m:"vt. 捐赠;捐献", tip:"don(给)+ate → 给出去 → 捐" },
      { w:"charity", ph:"/ˈtʃærəti/", m:"n. 慈善;慈善机构", tip:"char(=care 关爱)→ 慈善" },
      { w:"relieve", ph:"/rɪˈliːv/", m:"vt. 缓解;减轻;救济", tip:"re+lieve(=light 轻)→ 使变轻 → 缓解" },
      { w:"poverty", ph:"/ˈpɒvəti/", m:"n. 贫穷;贫困", tip:"poor(穷)的名词 → 贫穷" }
    ] },
  { id: 12,
    en: "Because the {{deadline}} was {{urgent}}, the {{efficient}} team refused to {{postpone}} the project and {{accomplished}} it overnight.",
    zh: "由于{{截止期限|deadline}}{{紧迫|urgent}},这支{{高效的|efficient}}团队拒绝{{推迟|postpone}}项目,一夜之间就{{完成|accomplish}}了它。",
    words: [
      { w:"deadline", ph:"/ˈdedlaɪn/", m:"n. 截止期限", tip:"dead(死)+line(线)→ 过线就死 → 期限" },
      { w:"urgent", ph:"/ˈɜːdʒənt/", m:"adj. 紧急的;急迫的", tip:"urge(催促)+ent → 紧急" },
      { w:"efficient", ph:"/ɪˈfɪʃnt/", m:"adj. 高效的;效率高的", tip:"见 efficiency → 高效的" },
      { w:"postpone", ph:"/pəˈspəʊn/", m:"vt. 推迟;延期", tip:"post(后)+pone(放)→ 放到后面 → 推迟" },
      { w:"accomplish", ph:"/əˈkʌmplɪʃ/", m:"vt. 完成;实现", tip:"ac+compl(满)→ 做满 → 完成" }
    ] },
  { id: 13,
    en: "{{Strict}} {{regulations}} impose heavy {{penalties}} on drivers who {{violate}} traffic rules, and the police {{enforce}} them rigorously.",
    zh: "{{严格的|strict}}{{法规|regulation}}对{{违反|violate}}交通规则的司机处以{{重罚|penalty}},警方严格{{执行|enforce}}这些规定。",
    words: [
      { w:"strict", ph:"/strɪkt/", m:"adj. 严格的;严厉的", tip:"谐音'死抓得'紧 → 严格" },
      { w:"regulation", ph:"/ˌreɡjuˈleɪʃn/", m:"n. 规章;条例;管理", tip:"regul(规则)+ation → 规章" },
      { w:"penalty", ph:"/ˈpenəlti/", m:"n. 处罚;罚款;点球", tip:"pen(罚)+alty → 处罚" },
      { w:"violate", ph:"/ˈvaɪəleɪt/", m:"vt. 违反;侵犯", tip:"viol(暴力)+ate → 暴力对待规则 → 违反" },
      { w:"enforce", ph:"/ɪnˈfɔːs/", m:"vt. 执行;实施;强制", tip:"en(使)+force(力)→ 用力推行 → 执行" }
    ] },
  { id: 14,
    en: "After the doctor {{diagnosed}} her {{symptoms}} and wrote a {{prescription}}, the patient gradually {{recovered}}, though no instant {{cure}} exists.",
    zh: "医生{{诊断|diagnose}}了她的{{症状|symptom}}并开了{{处方|prescription}}后,病人逐渐{{康复|recover}}了,尽管并不存在立竿见影的{{疗法|cure}}。",
    words: [
      { w:"diagnose", ph:"/ˈdaɪəɡnəʊz/", m:"vt. 诊断;判断", tip:"dia(穿过)+gno(知)→ 看穿病情 → 诊断" },
      { w:"symptom", ph:"/ˈsɪmptəm/", m:"n. 症状;征兆", tip:"sym(一起)+ptom → 一起显现 → 症状" },
      { w:"prescription", ph:"/prɪˈskrɪpʃn/", m:"n. 处方;药方", tip:"pre(预先)+scrib(写)→ 预先写好 → 处方" },
      { w:"recover", ph:"/rɪˈkʌvə/", m:"v. 康复;恢复;找回", tip:"re(重新)+cover(得到)→ 重获健康 → 康复" },
      { w:"cure", ph:"/kjʊə/", m:"v./n. 治愈;疗法", tip:"care 的近亲:照料到好 → 治愈" }
    ] },
  { id: 15,
    en: "People with an {{optimistic}} {{attitude}} tend to {{adapt}} to {{obstacles}} quickly and even {{thrive}} under pressure.",
    zh: "持{{乐观|optimistic}}{{态度|attitude}}的人往往能迅速{{适应|adapt}}{{障碍|obstacle}},甚至在压力下{{茁壮成长|thrive}}。",
    words: [
      { w:"optimistic", ph:"/ˌɒptɪˈmɪstɪk/", m:"adj. 乐观的", tip:"optim(最好)→ 总往最好想 → 乐观" },
      { w:"attitude", ph:"/ˈætɪtjuːd/", m:"n. 态度;看法", tip:"apt(倾向)→ 心理倾向 → 态度" },
      { w:"adapt", ph:"/əˈdæpt/", m:"v. 适应;改编", tip:"ad+apt(合适)→ 使合适 → 适应" },
      { w:"obstacle", ph:"/ˈɒbstəkl/", m:"n. 障碍;阻碍", tip:"ob(对着)+sta(站)→ 挡路站着 → 障碍" },
      { w:"thrive", ph:"/θraɪv/", m:"vi. 兴旺;茁壮成长", tip:"谐音'survive 升级版':活得旺 → 兴旺" }
    ] },
  { id: 16,
    en: "Detectives {{investigated}} the case, gathered {{reliable}} {{evidence}}, questioned the {{suspect}}, and finally {{concluded}} who was guilty.",
    zh: "侦探们{{调查|investigate}}了案件,收集了{{可靠的|reliable}}{{证据|evidence}},审问了{{嫌疑人|suspect}},最终{{断定|conclude}}谁有罪。",
    words: [
      { w:"investigate", ph:"/ɪnˈvestɪɡeɪt/", m:"v. 调查;研究", tip:"in+vestig(足迹)→ 顺足迹查 → 调查" },
      { w:"reliable", ph:"/rɪˈlaɪəbl/", m:"adj. 可靠的;可信赖的", tip:"rely(依靠)+able → 可靠" },
      { w:"evidence", ph:"/ˈevɪdəns/", m:"n. 证据;迹象", tip:"e(出)+vid(看)→ 看得出 → 证据" },
      { w:"suspect", ph:"/səˈspekt/", m:"v. 怀疑 n. 嫌疑人", tip:"sus(下)+spect(看)→ 偷看 → 怀疑" },
      { w:"conclude", ph:"/kənˈkluːd/", m:"v. 断定;推断;结束", tip:"con+clude(关)→ 关上讨论 → 下结论" }
    ] },
  { id: 17,
    en: "Each {{generation}} has a duty to {{preserve}} cultural {{heritage}} and pass down the {{traditions}} it {{inherited}} from the past.",
    zh: "每一{{代人|generation}}都有责任{{保护|preserve}}文化{{遗产|heritage}},并传承从过去{{继承|inherit}}下来的{{传统|tradition}}。",
    words: [
      { w:"generation", ph:"/ˌdʒenəˈreɪʃn/", m:"n. 一代人;产生", tip:"gener(生)+ation → 一代;产生" },
      { w:"preserve", ph:"/prɪˈzɜːv/", m:"vt. 保护;保存;腌制", tip:"pre(预先)+serve(守)→ 保护" },
      { w:"heritage", ph:"/ˈherɪtɪdʒ/", m:"n. 遗产;传统", tip:"herit(继承)+age → 遗产" },
      { w:"tradition", ph:"/trəˈdɪʃn/", m:"n. 传统;惯例", tip:"trad(传递)+ition → 传下来的 → 传统" },
      { w:"inherit", ph:"/ɪnˈherɪt/", m:"vt. 继承;经遗传获得", tip:"in+herit(继承)→ 继承" }
    ] },
  { id: 18,
    en: "To avoid {{wasting}} limited {{resources}}, we must {{consume}} less and seek {{sustainable}} {{alternatives}} such as solar power.",
    zh: "为了避免{{浪费|waste}}有限的{{资源|resource}},我们必须减少{{消耗|consume}},寻找{{可持续的|sustainable}}{{替代品|alternative}},比如太阳能。",
    words: [
      { w:"waste", ph:"/weɪst/", m:"vt./n. 浪费;废物", tip:"waist(腰)同音:别浪费腰力 → 浪费" },
      { w:"resource", ph:"/rɪˈsɔːs/", m:"n. 资源;财力", tip:"re+source(源)→ 资源" },
      { w:"consume", ph:"/kənˈsjuːm/", m:"vt. 消耗;消费;吃喝", tip:"con+sume(拿)→ 全拿走 → 消耗" },
      { w:"sustainable", ph:"/səˈsteɪnəbl/", m:"adj. 可持续的", tip:"sustain(维持)+able → 可持续" },
      { w:"alternative", ph:"/ɔːlˈtɜːnətɪv/", m:"n. 替代品 adj. 可替代的", tip:"alter(改变)→ 可换的 → 替代品" }
    ] },
  { id: 19,
    en: "When {{conflicts}} arise, wise partners {{cooperate}}, {{negotiate}} calmly, and reach a {{compromise}} based on {{mutual}} respect.",
    zh: "当{{冲突|conflict}}出现时,明智的伙伴会{{合作|cooperate}}、冷静{{谈判|negotiate}},并在{{相互|mutual}}尊重的基础上达成{{妥协|compromise}}。",
    words: [
      { w:"conflict", ph:"/ˈkɒnflɪkt/", m:"n. 冲突;矛盾 v. 抵触", tip:"con(共)+flict(打)→ 互打 → 冲突" },
      { w:"cooperate", ph:"/kəʊˈɒpəreɪt/", m:"vi. 合作;配合", tip:"co(共)+operate(做)→ 一起做 → 合作" },
      { w:"negotiate", ph:"/nɪˈɡəʊʃieɪt/", m:"v. 谈判;协商", tip:"neg(不)+oti(闲)→ 不得闲地谈 → 谈判" },
      { w:"compromise", ph:"/ˈkɒmprəmaɪz/", m:"n./v. 妥协;折中", tip:"com(共)+promise → 各退一步的约定" },
      { w:"mutual", ph:"/ˈmjuːtʃuəl/", m:"adj. 相互的;共同的", tip:"mut(交换)+ual → 互相的" }
    ] },
  { id: 20,
    en: "Fair {{rewards}} {{motivate}} employees, and managers who {{evaluate}} {{performance}} honestly usually build a more {{productive}} team.",
    zh: "公平的{{奖励|reward}}能{{激励|motivate}}员工,而诚实{{评估|evaluate}}{{绩效|performance}}的管理者通常能打造更{{高效的|productive}}团队。",
    words: [
      { w:"reward", ph:"/rɪˈwɔːd/", m:"n./v. 奖励;回报", tip:"re+ward(给)→ 给回报 → 奖励" },
      { w:"motivate", ph:"/ˈməʊtɪveɪt/", m:"vt. 激励;成为…的动机", tip:"motiv(动)+ate → 给动力 → 激励" },
      { w:"evaluate", ph:"/ɪˈvæljueɪt/", m:"vt. 评估;评价", tip:"e+valu(价值)→ 估价 → 评估" },
      { w:"performance", ph:"/pəˈfɔːməns/", m:"n. 表现;业绩;演出", tip:"perform(执行/表演)→ 表现" },
      { w:"productive", ph:"/prəˈdʌktɪv/", m:"adj. 多产的;高效的", tip:"produce(生产)→ 能产出 → 高效" }
    ] },
  { id: 21,
    en: "The {{vague}} wording was so {{ambiguous}} that lawyers {{interpreted}} its {{definition}} in two {{precise}} but opposite ways.",
    zh: "措辞{{含糊|vague}},极其{{模棱两可|ambiguous}},以致律师们对其{{定义|definition}}做出了两种{{精确|precise}}却相反的{{解读|interpret}}。",
    words: [
      { w:"vague", ph:"/veɪɡ/", m:"adj. 模糊的;含糊的", tip:"谐音'外哥':说话含糊 → 模糊" },
      { w:"ambiguous", ph:"/æmˈbɪɡjuəs/", m:"adj. 模棱两可的;有歧义的", tip:"ambi(两)+gu(走)→ 两边走 → 模棱两可" },
      { w:"interpret", ph:"/ɪnˈtɜːprɪt/", m:"v. 解释;口译;理解", tip:"inter(之间)+pret(说)→ 在双方间说 → 口译" },
      { w:"definition", ph:"/ˌdefɪˈnɪʃn/", m:"n. 定义;清晰度", tip:"de+fin(界限)→ 划定界限 → 定义" },
      { w:"precise", ph:"/prɪˈsaɪs/", m:"adj. 精确的;准确的", tip:"pre+cise(切)→ 切得准 → 精确" }
    ] },
  { id: 22,
    en: "To {{expand}} {{profits}}, the firm adopted a bold {{strategy}} to {{compete}} with rivals beyond the {{domestic}} market.",
    zh: "为了{{扩大|expand}}{{利润|profit}},该公司采取了大胆的{{战略|strategy}},与对手在{{国内|domestic}}市场之外展开{{竞争|compete}}。",
    words: [
      { w:"expand", ph:"/ɪkˈspænd/", m:"v. 扩张;膨胀;详述", tip:"ex(向外)+pand(展)→ 向外展 → 扩张" },
      { w:"profit", ph:"/ˈprɒfɪt/", m:"n. 利润 v. 获益", tip:"pro(向前)+fit → 往前赚 → 利润" },
      { w:"strategy", ph:"/ˈstrætədʒi/", m:"n. 战略;策略", tip:"strat(军队)→ 用兵之道 → 战略" },
      { w:"compete", ph:"/kəmˈpiːt/", m:"vi. 竞争;比赛", tip:"com(共)+pete(求)→ 一起争 → 竞争" },
      { w:"domestic", ph:"/dəˈmestɪk/", m:"adj. 国内的;家庭的", tip:"dom(家)+estic → 家里的 → 国内的" }
    ] },
  { id: 23,
    en: "Without {{sufficient}} sleep, students cannot {{concentrate}} or stay {{alert}}, and {{fatigue}} makes them {{perform}} poorly in exams.",
    zh: "没有{{充足的|sufficient}}睡眠,学生无法{{集中注意力|concentrate}}或保持{{警觉|alert}},{{疲劳|fatigue}}会使他们在考试中{{发挥|perform}}糟糕。",
    words: [
      { w:"sufficient", ph:"/səˈfɪʃnt/", m:"adj. 充足的;足够的", tip:"suf(下)+fic(做)→ 做够了 → 充足" },
      { w:"concentrate", ph:"/ˈkɒnsntreɪt/", m:"v. 集中(注意力);浓缩", tip:"con+centr(中心)→ 聚到中心 → 专注" },
      { w:"alert", ph:"/əˈlɜːt/", m:"adj. 警觉的 n./v. 警报", tip:"谐音'我热的':热得睁大眼 → 警觉" },
      { w:"fatigue", ph:"/fəˈtiːɡ/", m:"n. 疲劳;劳累", tip:"谐音'father 累哥' → 疲劳" },
      { w:"perform", ph:"/pəˈfɔːm/", m:"v. 执行;表演;表现", tip:"per(彻底)+form(做)→ 做到底 → 执行" }
    ] },
  { id: 24,
    en: "She {{assumed}} the audience would disagree, but her {{logical}} {{argument}} soon {{persuaded}} and {{convinced}} almost everyone.",
    zh: "她{{原以为|assume}}听众会反对,但她{{合乎逻辑的|logical}}{{论证|argument}}很快{{说服|persuade}}并使几乎所有人{{信服|convince}}。",
    words: [
      { w:"assume", ph:"/əˈsjuːm/", m:"vt. 假定;承担;呈现", tip:"as+sume(拿)→ 先拿来当真 → 假定" },
      { w:"logical", ph:"/ˈlɒdʒɪkl/", m:"adj. 合乎逻辑的;合理的", tip:"logic(逻辑)+al → 合逻辑的" },
      { w:"argument", ph:"/ˈɑːɡjumənt/", m:"n. 论点;论据;争论", tip:"argue(争论)+ment → 论点/争论" },
      { w:"persuade", ph:"/pəˈsweɪd/", m:"vt. 说服;劝说", tip:"per(彻底)+suade(劝)→ 劝到底 → 说服" },
      { w:"convince", ph:"/kənˈvɪns/", m:"vt. 使信服;使确信", tip:"con+vince(征服)→ 征服想法 → 使信服" }
    ] },
  { id: 25,
    en: "A {{comprehensive}} {{curriculum}} should {{stimulate}} students' {{intellectual}} curiosity and gradually build their {{capacity}} for independent thinking.",
    zh: "{{全面的|comprehensive}}{{课程|curriculum}}应当{{激发|stimulate}}学生的{{求知欲|intellectual}},并逐步培养他们独立思考的{{能力|capacity}}。",
    words: [
      { w:"comprehensive", ph:"/ˌkɒmprɪˈhensɪv/", m:"adj. 全面的;综合的", tip:"com(全)+prehens(抓)→ 全抓住 → 全面" },
      { w:"curriculum", ph:"/kəˈrɪkjələm/", m:"n. 课程(总称)", tip:"谐音'课日历':课程表 → 课程" },
      { w:"stimulate", ph:"/ˈstɪmjuleɪt/", m:"vt. 刺激;激励", tip:"stimul(刺)+ate → 用刺扎 → 刺激" },
      { w:"intellectual", ph:"/ˌɪntəˈlektʃuəl/", m:"adj. 智力的 n. 知识分子", tip:"intellect(智力)+ual → 智力的" },
      { w:"capacity", ph:"/kəˈpæsəti/", m:"n. 能力;容量", tip:"cap(容纳)→ 能容纳的量 → 能力/容量" }
    ] },
  { id: 26,
    en: "Traveling exposes us to {{diverse}} cultures, {{broadens}} our {{horizons}}, and offers fresh {{perspectives}} and deeper {{insight}} into life.",
    zh: "旅行让我们接触{{多元|diverse}}文化,{{开阔|broaden}}{{眼界|horizon}},并提供对生活的全新{{视角|perspective}}和更深刻的{{洞察|insight}}。",
    words: [
      { w:"diverse", ph:"/daɪˈvɜːs/", m:"adj. 多种多样的", tip:"di(分开)+verse(转)→ 转向各方 → 多样" },
      { w:"broaden", ph:"/ˈbrɔːdn/", m:"vt. 拓宽;扩大", tip:"broad(宽)+en → 使变宽 → 拓宽" },
      { w:"horizon", ph:"/həˈraɪzn/", m:"n. 地平线;眼界", tip:"天地交界 → 地平线 → 眼界" },
      { w:"perspective", ph:"/pəˈspektɪv/", m:"n. 视角;观点", tip:"per(透过)+spect(看)→ 透视 → 视角" },
      { w:"insight", ph:"/ˈɪnsaɪt/", m:"n. 洞察力;见解", tip:"in(内)+sight(看)→ 看到内部 → 洞察" }
    ] },
  { id: 27,
    en: "As social media {{emerges}} as a dominant {{phenomenon}}, this trend {{prevails}} worldwide and {{accelerates}} the spread of information, coming to {{dominate}} daily life.",
    zh: "随着社交媒体{{成为|emerge}}一种主导{{现象|phenomenon}},这一趋势在全球{{盛行|prevail}},{{加速|accelerate}}了信息传播,并逐渐{{主导|dominate}}日常生活。",
    words: [
      { w:"emerge", ph:"/iˈmɜːdʒ/", m:"vi. 出现;浮现;兴起", tip:"e(出)+merge(没入)→ 从水里冒出 → 出现" },
      { w:"phenomenon", ph:"/fəˈnɒmɪnən/", m:"n. 现象", tip:"谐音'非弄么难':奇特的 → 现象" },
      { w:"prevail", ph:"/prɪˈveɪl/", m:"vi. 盛行;占优势", tip:"pre(先)+vail(力量)→ 力压群雄 → 盛行" },
      { w:"accelerate", ph:"/əkˈseləreɪt/", m:"vt. 加速;促进", tip:"ac+celer(快)→ 使变快 → 加速" },
      { w:"dominate", ph:"/ˈdɒmɪneɪt/", m:"vt. 支配;占主导", tip:"domin(主人)+ate → 当主人 → 支配" }
    ] },
  { id: 28,
    en: "{{Amid}} the economic {{recession}}, the government tried to {{stabilize}} the {{currency}}, which still continued to {{fluctuate}} sharply.",
    zh: "{{在|amid}}经济{{衰退|recession}}期间,政府试图{{稳定|stabilize}}{{货币|currency}},但货币仍然剧烈{{波动|fluctuate}}。",
    words: [
      { w:"amid", ph:"/əˈmɪd/", m:"prep. 在…之中;被…围绕", tip:"a+mid(中间)→ 在…中" },
      { w:"recession", ph:"/rɪˈseʃn/", m:"n.(经济)衰退;萧条", tip:"re(往回)+cess(走)→ 往回退 → 衰退" },
      { w:"stabilize", ph:"/ˈsteɪbəlaɪz/", m:"vt. 使稳定", tip:"stable(稳定)+ize → 使稳定" },
      { w:"currency", ph:"/ˈkʌrənsi/", m:"n. 货币;通货", tip:"cur(流动 current)→ 流通的 → 货币" },
      { w:"fluctuate", ph:"/ˈflʌktʃueɪt/", m:"vi. 波动;涨落", tip:"fluct(波 flu流)→ 像波浪 → 波动" }
    ] },
  { id: 29,
    en: "To win {{consumer}} {{loyalty}} in a {{fierce}} market, the {{brand}} kept improving quality until it {{surpassed}} its rivals.",
    zh: "为了在{{激烈的|fierce}}市场中赢得{{消费者|consumer}}{{忠诚|loyalty}},该{{品牌|brand}}不断提升质量,直到{{超越|surpass}}竞争对手。",
    words: [
      { w:"consumer", ph:"/kənˈsjuːmə/", m:"n. 消费者", tip:"consume(消费)+r → 消费者" },
      { w:"loyalty", ph:"/ˈlɔɪəlti/", m:"n. 忠诚;忠心", tip:"loyal(忠诚的)+ty → 忠诚" },
      { w:"fierce", ph:"/fɪəs/", m:"adj. 激烈的;凶猛的", tip:"谐音'飞死':凶猛激烈" },
      { w:"brand", ph:"/brænd/", m:"n. 品牌 vt. 打烙印", tip:"原意烙印 → 牌子 → 品牌" },
      { w:"surpass", ph:"/səˈpɑːs/", m:"vt. 超过;胜过", tip:"sur(超)+pass(过)→ 超过" }
    ] },
  { id: 30,
    en: "A balanced {{diet}} rich in {{nutrition}} strengthens the {{immune}} system and helps {{prevent}} many {{chronic}} diseases.",
    zh: "{{营养|nutrition}}丰富的均衡{{饮食|diet}}能增强{{免疫|immune}}系统,有助于{{预防|prevent}}许多{{慢性|chronic}}疾病。",
    words: [
      { w:"diet", ph:"/ˈdaɪət/", m:"n. 饮食;节食", tip:"谐音'大爱它':吃的 → 饮食" },
      { w:"nutrition", ph:"/njuˈtrɪʃn/", m:"n. 营养;营养学", tip:"nutri(滋养)+tion → 营养" },
      { w:"immune", ph:"/ɪˈmjuːn/", m:"adj. 免疫的;不受影响的", tip:"im(不)+mune(侵害)→ 不受侵害 → 免疫" },
      { w:"prevent", ph:"/prɪˈvent/", m:"vt. 预防;阻止", tip:"pre(预先)+vent(来)→ 抢先挡住 → 预防" },
      { w:"chronic", ph:"/ˈkrɒnɪk/", m:"adj. 慢性的;长期的", tip:"chron(时间)→ 拖很久 → 慢性的" }
    ] },
  { id: 31,
    en: "Long {{isolation}} can trigger {{stress}} and even {{depression}}, so experts encourage people to seek {{counsel}} and learn to {{cope}}.",
    zh: "长期{{孤立|isolation}}可能引发{{压力|stress}}甚至{{抑郁|depression}},因此专家鼓励人们寻求{{咨询|counsel}}并学会{{应对|cope}}。",
    words: [
      { w:"isolation", ph:"/ˌaɪsəˈleɪʃn/", m:"n. 孤立;隔离", tip:"isol(岛 isle)→ 像孤岛 → 孤立" },
      { w:"stress", ph:"/stres/", m:"n. 压力;强调 vt. 强调", tip:"谐音'死锤死':压力山大" },
      { w:"depression", ph:"/dɪˈpreʃn/", m:"n. 抑郁;萧条;洼地", tip:"de(向下)+press(压)→ 压下去 → 抑郁" },
      { w:"counsel", ph:"/ˈkaʊnsl/", m:"n. 忠告;辅导 vt. 建议", tip:"council 近亲:商议 → 忠告/咨询" },
      { w:"cope", ph:"/kəʊp/", m:"vi.(cope with)应对;处理", tip:"谐音'扛':扛住困难 → 应对" }
    ] },
  { id: 32,
    en: "Cutting {{carbon}} {{emissions}}, switching to {{renewable}} energy, and {{conserving}} water all help prevent us from {{contaminating}} nature.",
    zh: "减少{{碳|carbon}}{{排放|emission}}、改用{{可再生|renewable}}能源以及{{节约|conserve}}用水,都有助于防止我们{{污染|contaminate}}自然。",
    words: [
      { w:"carbon", ph:"/ˈkɑːbən/", m:"n. 碳", tip:"carbo(碳)→ 碳" },
      { w:"emission", ph:"/ɪˈmɪʃn/", m:"n. 排放;排放物", tip:"e(出)+miss(送)→ 送出去 → 排放" },
      { w:"renewable", ph:"/rɪˈnjuːəbl/", m:"adj. 可再生的", tip:"re(再)+new(新)+able → 可再生" },
      { w:"conserve", ph:"/kənˈsɜːv/", m:"vt. 保护;节约", tip:"con+serve(保持)→ 保住 → 节约" },
      { w:"contaminate", ph:"/kənˈtæmɪneɪt/", m:"vt. 污染;弄脏", tip:"con+tamin(接触)→ 接触脏物 → 污染" }
    ] },
  { id: 33,
    en: "{{Artificial}} intelligence can {{automate}} dull tasks and boost {{productivity}}, yet some fear it may {{displace}} workers and create a {{hazard}}.",
    zh: "{{人工|artificial}}智能能让枯燥的工作{{自动化|automate}}、提升{{生产力|productivity}},但有些人担心它会{{取代|displace}}工人、造成{{隐患|hazard}}。",
    words: [
      { w:"artificial", ph:"/ˌɑːtɪˈfɪʃl/", m:"adj. 人造的;人工的", tip:"arti(技艺 art)+fic(做)→ 人做的 → 人造" },
      { w:"automate", ph:"/ˈɔːtəmeɪt/", m:"vt. 使自动化", tip:"auto(自动)+mate → 自动化" },
      { w:"productivity", ph:"/ˌprɒdʌkˈtɪvəti/", m:"n. 生产力;生产率", tip:"productive(高效)的名词 → 生产力" },
      { w:"displace", ph:"/dɪsˈpleɪs/", m:"vt. 取代;迫使离开", tip:"dis+place(位置)→ 挪走位置 → 取代" },
      { w:"hazard", ph:"/ˈhæzəd/", m:"n. 危险;隐患", tip:"谐音'害咗的':危险" }
    ] },
  { id: 34,
    en: "As more personal {{data}} is collected online, {{privacy}} grows {{vulnerable}}, and a single {{leak}} can expose users who no longer feel {{secure}}.",
    zh: "随着越来越多的个人{{数据|data}}被在线收集,{{隐私|privacy}}变得{{脆弱|vulnerable}},一次{{泄露|leak}}就能让自觉不再{{安全|secure}}的用户暴露无遗。",
    words: [
      { w:"data", ph:"/ˈdeɪtə/", m:"n. 数据;资料", tip:"datum 的复数 → 数据" },
      { w:"privacy", ph:"/ˈprɪvəsi/", m:"n. 隐私;私密", tip:"private(私人的)的名词 → 隐私" },
      { w:"vulnerable", ph:"/ˈvʌlnərəbl/", m:"adj. 脆弱的;易受伤的", tip:"vulner(伤口)+able → 易受伤 → 脆弱" },
      { w:"leak", ph:"/liːk/", m:"v./n. 泄漏;渗漏", tip:"谐音'离开':水离开容器 → 泄漏" },
      { w:"secure", ph:"/sɪˈkjʊə/", m:"adj. 安全的 vt. 获得;保护", tip:"se(无)+cure(担忧)→ 无忧 → 安全" }
    ] },
  { id: 35,
    en: "My {{diligent}} {{colleague}} {{devotes}} herself to every project, so she truly {{deserves}} the {{promotion}} she received.",
    zh: "我那位{{勤奋的|diligent}}{{同事|colleague}}{{全身心投入|devote}}每个项目,所以她确实{{配得上|deserve}}得到的{{晋升|promotion}}。",
    words: [
      { w:"diligent", ph:"/ˈdɪlɪdʒənt/", m:"adj. 勤奋的;勤勉的", tip:"dili(用心)+gent → 用心做 → 勤奋" },
      { w:"colleague", ph:"/ˈkɒliːɡ/", m:"n. 同事", tip:"col(共)+league(联盟)→ 一队人 → 同事" },
      { w:"devote", ph:"/dɪˈvəʊt/", m:"vt. 致力于;奉献", tip:"de+vote(投/誓)→ 把自己投入 → 奉献" },
      { w:"deserve", ph:"/dɪˈzɜːv/", m:"vt. 应得;值得", tip:"de+serve(服务)→ 服务到位就该得 → 应得" },
      { w:"promotion", ph:"/prəˈməʊʃn/", m:"n. 晋升;促销", tip:"promote(提升)的名词 → 晋升" }
    ] },
  { id: 36,
    en: "A fair society should promote {{equality}}, refuse to {{discriminate}} against any {{minority}}, and help newcomers {{integrate}} without {{prejudice}}.",
    zh: "一个公平的社会应当促进{{平等|equality}},拒绝{{歧视|discriminate}}任何{{少数群体|minority}},并帮助新来者在没有{{偏见|prejudice}}的情况下{{融入|integrate}}。",
    words: [
      { w:"equality", ph:"/iˈkwɒləti/", m:"n. 平等;均等", tip:"equal(平等的)+ity → 平等" },
      { w:"discriminate", ph:"/dɪˈskrɪmɪneɪt/", m:"v. 歧视;区别对待", tip:"dis+crimin(区分)→ 区别对待 → 歧视" },
      { w:"minority", ph:"/maɪˈnɒrəti/", m:"n. 少数;少数群体", tip:"minor(较小的)+ity → 少数" },
      { w:"integrate", ph:"/ˈɪntɪɡreɪt/", m:"v. 使融合;成为一体", tip:"integr(完整)+ate → 合成整体 → 融合" },
      { w:"prejudice", ph:"/ˈpredʒudɪs/", m:"n. 偏见;成见", tip:"pre(预先)+jud(判断)→ 预先下判 → 偏见" }
    ] },
  { id: 37,
    en: "The {{witness}} testified in court, but without solid proof the jury refused to {{accuse}} the {{innocent}} man, and {{justice}} delivered a fair {{verdict}}.",
    zh: "{{证人|witness}}出庭作证,但在没有确凿证据的情况下,陪审团拒绝{{指控|accuse}}这名{{无辜的|innocent}}人,{{正义|justice}}最终做出了公正的{{裁决|verdict}}。",
    words: [
      { w:"witness", ph:"/ˈwɪtnəs/", m:"n. 目击者;证人 vt. 目睹", tip:"wit(知道)+ness → 知情者 → 证人" },
      { w:"accuse", ph:"/əˈkjuːz/", m:"vt. 指控;指责", tip:"ac+cuse(=cause 缘由)→ 加罪名 → 指控" },
      { w:"innocent", ph:"/ˈɪnəsnt/", m:"adj. 无辜的;天真的", tip:"in(无)+noc(害)→ 无害 → 无辜" },
      { w:"justice", ph:"/ˈdʒʌstɪs/", m:"n. 正义;司法;公正", tip:"just(公正)+ice → 正义" },
      { w:"verdict", ph:"/ˈvɜːdɪkt/", m:"n. 裁决;判决", tip:"ver(真)+dict(说)→ 说出真相 → 裁决" }
    ] },
  { id: 38,
    en: "She was {{grateful}} for her friend's {{sincere}} {{sympathy}}, whose warm words {{comforted}} her and {{consoled}} her grief.",
    zh: "她很{{感激|grateful}}朋友{{真诚的|sincere}}{{同情|sympathy}},那温暖的话语{{安慰|comfort}}了她,{{抚平|console}}了她的悲伤。",
    words: [
      { w:"grateful", ph:"/ˈɡreɪtfl/", m:"adj. 感激的;感谢的", tip:"grat(感谢)+ful → 满怀感谢 → 感激" },
      { w:"sincere", ph:"/sɪnˈsɪə/", m:"adj. 真诚的;诚挚的", tip:"谐音'信洗呀':真心实意 → 真诚" },
      { w:"sympathy", ph:"/ˈsɪmpəθi/", m:"n. 同情;赞同", tip:"sym(共)+pathy(感受)→ 同感 → 同情" },
      { w:"comfort", ph:"/ˈkʌmfət/", m:"v./n. 安慰;舒适", tip:"com+fort(力量)→ 给力量 → 安慰" },
      { w:"console", ph:"/kənˈsəʊl/", m:"vt. 安慰;慰藉", tip:"con+sole(孤独)→ 陪伴不孤单 → 安慰" }
    ] },
  { id: 39,
    en: "The {{elegant}} vase, {{delicate}} and {{fragile}}, served as a beautiful {{ornament}} that {{fascinated}} every visitor.",
    zh: "那只{{优雅的|elegant}}花瓶,{{精致|delicate}}而{{易碎|fragile}},是一件令每位访客{{着迷|fascinate}}的精美{{装饰品|ornament}}。",
    words: [
      { w:"elegant", ph:"/ˈelɪɡənt/", m:"adj. 优雅的;雅致的", tip:"eleg(精挑 select)→ 精挑的 → 优雅" },
      { w:"delicate", ph:"/ˈdelɪkət/", m:"adj. 精致的;脆弱的;微妙的", tip:"deli(美味/细)→ 细巧 → 精致" },
      { w:"fragile", ph:"/ˈfrædʒaɪl/", m:"adj. 易碎的;脆弱的", tip:"frag(碎 fract)→ 易碎" },
      { w:"ornament", ph:"/ˈɔːnəmənt/", m:"n. 装饰品 vt. 装饰", tip:"orn(装饰)+ment → 装饰品" },
      { w:"fascinate", ph:"/ˈfæsɪneɪt/", m:"vt. 使着迷;吸引", tip:"谐音'发神奶':看得入神 → 着迷" }
    ] },
  { id: 40,
    en: "The manager {{undertook}} the plan, {{coordinated}} the team, {{supervised}} every step, and {{ensured}} it was {{implemented}} on time.",
    zh: "经理{{承担|undertake}}了这项计划,{{协调|coordinate}}团队,{{监督|supervise}}每个环节,并{{确保|ensure}}它按时{{实施|implement}}。",
    words: [
      { w:"undertake", ph:"/ˌʌndəˈteɪk/", m:"vt. 承担;着手;保证", tip:"under(下)+take(拿)→ 接下任务 → 承担" },
      { w:"coordinate", ph:"/kəʊˈɔːdɪneɪt/", m:"v. 协调;使配合", tip:"co(共)+ordin(顺序)→ 共同安排 → 协调" },
      { w:"supervise", ph:"/ˈsuːpəvaɪz/", m:"vt. 监督;管理", tip:"super(上)+vise(看)→ 从上往下看 → 监督" },
      { w:"ensure", ph:"/ɪnˈʃʊə/", m:"vt. 确保;保证", tip:"en(使)+sure(确定)→ 确保" },
      { w:"implement", ph:"/ˈɪmplɪment/", m:"vt. 实施;执行 n. 工具", tip:"im+ple(满 fill)→ 填满落实 → 实施" }
    ] },
  { id: 41,
    en: "Analysts {{calculate}} {{accurate}} {{statistics}} rather than rely on a rough {{estimate}}, though an {{approximate}} figure is sometimes enough.",
    zh: "分析师{{计算|calculate}}{{精确的|accurate}}{{统计数据|statistics}},而不是依赖粗略的{{估算|estimate}},尽管有时一个{{大概的|approximate}}数字就足够了。",
    words: [
      { w:"calculate", ph:"/ˈkælkjuleɪt/", m:"v. 计算;估计", tip:"calcul(小石子,古人用来算)→ 计算" },
      { w:"accurate", ph:"/ˈækjərət/", m:"adj. 精确的;准确的", tip:"ac+cur(用心 care)→ 用心 → 精确" },
      { w:"statistics", ph:"/stəˈtɪstɪks/", m:"n. 统计数据;统计学", tip:"stat(状态)→ 国情数据 → 统计" },
      { w:"estimate", ph:"/ˈestɪmeɪt/", m:"v./n. 估计;估价", tip:"estim(价值 esteem)→ 估价 → 估计" },
      { w:"approximate", ph:"/əˈprɒksɪmət/", m:"adj. 近似的 v. 接近", tip:"ap+proxim(近)→ 接近 → 近似" }
    ] },
  { id: 42,
    en: "Even without words, a simple {{gesture}} can {{convey}} meaning, and people often {{comprehend}} such non-{{verbal}} signals as a clear {{response}}.",
    zh: "即使没有语言,一个简单的{{手势|gesture}}也能{{传达|convey}}意思,人们常常能把这种非{{言语|verbal}}信号{{理解|comprehend}}为明确的{{回应|response}}。",
    words: [
      { w:"gesture", ph:"/ˈdʒestʃə/", m:"n. 手势;姿态;表示", tip:"gest(动作)+ure → 手势" },
      { w:"convey", ph:"/kənˈveɪ/", m:"vt. 传达;运送", tip:"con+vey(路 way)→ 一路带过去 → 传达" },
      { w:"comprehend", ph:"/ˌkɒmprɪˈhend/", m:"vt. 理解;领会", tip:"com(全)+prehend(抓)→ 全抓住 → 理解" },
      { w:"verbal", ph:"/ˈvɜːbl/", m:"adj. 言语的;口头的", tip:"verb(词)+al → 言语的" },
      { w:"response", ph:"/rɪˈspɒns/", m:"n. 回应;反应", tip:"re(回)+spons(承诺)→ 回话 → 回应" }
    ] },
  { id: 43,
    en: "Over the past {{decade}}, the technology has {{evolved}} and {{matured}} {{remarkably}}, marking great {{progress}} in the field.",
    zh: "在过去{{十年|decade}}里,这项技术{{显著地|remarkable}}{{演进|evolve}}并{{成熟|mature}},标志着该领域的巨大{{进步|progress}}。",
    words: [
      { w:"decade", ph:"/ˈdekeɪd/", m:"n. 十年", tip:"dec(十)+ade → 十年" },
      { w:"evolve", ph:"/iˈvɒlv/", m:"v. 进化;逐步发展", tip:"e(出)+volve(转)→ 转出来 → 演变" },
      { w:"mature", ph:"/məˈtʃʊə/", m:"adj. 成熟的 v. (使)成熟", tip:"谐音'马丘':长大 → 成熟" },
      { w:"remarkable", ph:"/rɪˈmɑːkəbl/", m:"adj. 显著的;非凡的", tip:"re+mark(标记)+able → 值得标记 → 非凡" },
      { w:"progress", ph:"/ˈprəʊɡres/", m:"n. 进步 v. 前进", tip:"pro(向前)+gress(走)→ 向前走 → 进步" }
    ] },
  { id: 44,
    en: "Despite many {{barriers}} that {{frustrated}} her, she {{struggled}} on and {{persisted}}, {{eventually}} reaching her goal.",
    zh: "尽管许多{{障碍|barrier}}令她{{沮丧|frustrate}},她仍{{奋力|struggle}}{{坚持|persist}},{{最终|eventually}}实现了目标。",
    words: [
      { w:"barrier", ph:"/ˈbæriə/", m:"n. 障碍;屏障", tip:"bar(横杆)+rier → 拦路杆 → 障碍" },
      { w:"frustrate", ph:"/frʌˈstreɪt/", m:"vt. 使沮丧;挫败", tip:"谐音'敷热死':努力白费 → 沮丧" },
      { w:"struggle", ph:"/ˈstrʌɡl/", m:"vi./n. 挣扎;奋斗", tip:"谐音'死抓狗':拼命 → 挣扎" },
      { w:"persist", ph:"/pəˈsɪst/", m:"vi. 坚持;持续", tip:"per(始终)+sist(站)→ 一直站着 → 坚持" },
      { w:"eventually", ph:"/ɪˈventʃuəli/", m:"adv. 最终;终于", tip:"event(事件)→ 事到最后 → 最终" }
    ] },
  { id: 45,
    en: "People {{admire}} him not only for his talent but also for his {{humble}}, {{modest}} manner and his {{integrity}}, a rare {{virtue}} today.",
    zh: "人们{{钦佩|admire}}他,不仅因为他的才华,还因为他{{谦逊|humble}}{{低调|modest}}的举止和他的{{正直|integrity}}——这在当今是难得的{{美德|virtue}}。",
    words: [
      { w:"admire", ph:"/ədˈmaɪə/", m:"vt. 钦佩;欣赏", tip:"ad+mire(惊奇 miracle)→ 惊叹 → 钦佩" },
      { w:"humble", ph:"/ˈhʌmbl/", m:"adj. 谦逊的;卑微的", tip:"hum(土 humus)→ 放低如尘土 → 谦逊" },
      { w:"modest", ph:"/ˈmɒdɪst/", m:"adj. 谦虚的;适度的", tip:"mode(适度)+st → 不张扬 → 谦虚" },
      { w:"integrity", ph:"/ɪnˈteɡrəti/", m:"n. 正直;诚实;完整", tip:"integr(完整)→ 人格完整 → 正直" },
      { w:"virtue", ph:"/ˈvɜːtʃuː/", m:"n. 美德;优点", tip:"vir(力量/德)→ 高尚品质 → 美德" }
    ] },
  { id: 46,
    en: "Scientists {{observe}} carefully, design an {{experiment}} to test a {{hypothesis}}, and {{verify}} each {{outcome}} before they trust it.",
    zh: "科学家仔细{{观察|observe}},设计{{实验|experiment}}来检验{{假设|hypothesis}},并在相信每个{{结果|outcome}}之前对其加以{{验证|verify}}。",
    words: [
      { w:"observe", ph:"/əbˈzɜːv/", m:"vt. 观察;遵守;评论", tip:"ob(对着)+serve(守)→ 盯着看 → 观察" },
      { w:"experiment", ph:"/ɪkˈsperɪmənt/", m:"n./v. 实验;试验", tip:"ex(出)+peri(试)→ 试出来 → 实验" },
      { w:"hypothesis", ph:"/haɪˈpɒθəsɪs/", m:"n. 假设;假说", tip:"hypo(下)+thesis(论点)→ 论点之下 → 假设" },
      { w:"verify", ph:"/ˈverɪfaɪ/", m:"vt. 核实;证明", tip:"ver(真)+ify → 使为真 → 核实" },
      { w:"outcome", ph:"/ˈaʊtkʌm/", m:"n. 结果;成果", tip:"out(出)+come → 出来的东西 → 结果" }
    ] },
  { id: 47,
    en: "It is {{crucial}} to grasp the {{fundamental}} {{principle}} first; making it our {{priority}} means we should never {{neglect}} the basics.",
    zh: "首先掌握{{基本|fundamental}}{{原理|principle}}{{至关重要|crucial}};把它作为{{优先事项|priority}}意味着我们绝不应{{忽视|neglect}}基础。",
    words: [
      { w:"crucial", ph:"/ˈkruːʃl/", m:"adj. 至关重要的;决定性的", tip:"cruc(十字路口 cross)→ 关键路口 → 关键" },
      { w:"fundamental", ph:"/ˌfʌndəˈmentl/", m:"adj. 基本的 n. 基本原则", tip:"fund(基础)+amental → 基础的" },
      { w:"principle", ph:"/ˈprɪnsəpl/", m:"n. 原则;原理", tip:"princip(首要)→ 首要规则 → 原则" },
      { w:"priority", ph:"/praɪˈɒrəti/", m:"n. 优先;优先事项", tip:"prior(在前的)+ity → 优先" },
      { w:"neglect", ph:"/nɪˈɡlekt/", m:"vt. 忽视;疏忽", tip:"neg(不)+lect(挑选)→ 没挑中 → 忽视" }
    ] },
  { id: 48,
    en: "An {{influential}} blogger may {{exaggerate}} facts and {{mislead}} a huge {{audience}}, so we must judge whether the source is {{credible}}.",
    zh: "{{有影响力的|influential}}博主可能{{夸大|exaggerate}}事实、{{误导|mislead}}庞大的{{受众|audience}},因此我们必须判断信息来源是否{{可信|credible}}。",
    words: [
      { w:"influential", ph:"/ˌɪnfluˈenʃl/", m:"adj. 有影响力的", tip:"influence(影响)+ial → 有影响力" },
      { w:"exaggerate", ph:"/ɪɡˈzædʒəreɪt/", m:"vt. 夸大;夸张", tip:"ex+agger(堆积)→ 堆得过多 → 夸大" },
      { w:"mislead", ph:"/ˌmɪsˈliːd/", m:"vt. 误导;使误解", tip:"mis(错)+lead(带)→ 带错路 → 误导" },
      { w:"audience", ph:"/ˈɔːdiəns/", m:"n. 观众;听众;读者", tip:"audi(听 audio)+ence → 听众" },
      { w:"credible", ph:"/ˈkredəbl/", m:"adj. 可信的;可靠的", tip:"cred(相信)+ible → 可信" }
    ] },
  { id: 49,
    en: "To {{tackle}} the crisis, the mayor refused to {{confront}} critics rashly and instead worked to {{resolve}} the {{dilemma}} and {{address}} every concern.",
    zh: "为了{{应对|tackle}}危机,市长拒绝鲁莽地{{对抗|confront}}批评者,而是努力{{解决|resolve}}这一{{困境|dilemma}}并{{处理|address}}每一个关切。",
    words: [
      { w:"tackle", ph:"/ˈtækl/", m:"vt. 处理;应对;阻截", tip:"踢球'擒抱'→ 上去解决 → 应对" },
      { w:"confront", ph:"/kənˈfrʌnt/", m:"vt. 面对;对抗", tip:"con+front(前面)→ 站到前面 → 面对" },
      { w:"resolve", ph:"/rɪˈzɒlv/", m:"vt. 解决;决心 n. 决心", tip:"re+solve(解)→ 彻底解开 → 解决" },
      { w:"dilemma", ph:"/dɪˈlemə/", m:"n. 困境;进退两难", tip:"di(二)+lemma(命题)→ 两难选择 → 困境" },
      { w:"address", ph:"/əˈdres/", m:"vt. 处理;演说 n. 地址", tip:"对准问题'发话'→ 处理" }
    ] },
  { id: 50,
    en: "Rising {{inflation}} cut government {{revenue}} while {{expenditure}} grew, widening the {{deficit}} and forcing tighter {{fiscal}} policy.",
    zh: "不断上升的{{通货膨胀|inflation}}减少了政府{{收入|revenue}},而{{支出|expenditure}}却在增长,扩大了{{赤字|deficit}},迫使采取更紧缩的{{财政|fiscal}}政策。",
    words: [
      { w:"inflation", ph:"/ɪnˈfleɪʃn/", m:"n. 通货膨胀;膨胀", tip:"inflate(充气)+ion → 物价'充气' → 通胀" },
      { w:"revenue", ph:"/ˈrevənjuː/", m:"n. 收入;税收", tip:"re+venue(来 ven)→ 回来的钱 → 收入" },
      { w:"expenditure", ph:"/ɪkˈspendɪtʃə/", m:"n. 支出;花费", tip:"expend(花费)+iture → 支出" },
      { w:"deficit", ph:"/ˈdefɪsɪt/", m:"n. 赤字;亏损;不足", tip:"de(去)+fic(做)→ 做亏了 → 赤字" },
      { w:"fiscal", ph:"/ˈfɪskl/", m:"adj. 财政的;国库的", tip:"fisc(国库)+al → 财政的" }
    ] },
  { id: 51,
    en: "After a wave of {{layoffs}} pushed up {{unemployment}}, each {{applicant}} fought for any {{occupation}} that paid a decent {{wage}}.",
    zh: "在一波{{裁员|layoff}}推高{{失业率|unemployment}}之后,每个{{求职者|applicant}}都为任何能付得起像样{{工资|wage}}的{{职业|occupation}}而竞争。",
    words: [
      { w:"layoff", ph:"/ˈleɪɒf/", m:"n. 裁员;解雇", tip:"lay off(放下不用)→ 裁员" },
      { w:"unemployment", ph:"/ˌʌnɪmˈplɔɪmənt/", m:"n. 失业;失业率", tip:"un(不)+employment(就业)→ 失业" },
      { w:"applicant", ph:"/ˈæplɪkənt/", m:"n. 申请人;求职者", tip:"apply(申请)→ applicant → 申请人" },
      { w:"occupation", ph:"/ˌɒkjuˈpeɪʃn/", m:"n. 职业;占领", tip:"occupy(占据)→ 占据时间的事 → 职业" },
      { w:"wage", ph:"/weɪdʒ/", m:"n. 工资(按周/时计)", tip:"谐音'喂之':按时喂的报酬 → 工资" }
    ] },
  { id: 52,
    en: "High {{tuition}} pushes many an {{undergraduate}} to seek a {{scholarship}}, study with {{discipline}}, and raise their financial {{literacy}}.",
    zh: "高昂的{{学费|tuition}}促使许多{{本科生|undergraduate}}寻求{{奖学金|scholarship}},以{{自律|discipline}}的态度学习,并提升自己的财务{{素养|literacy}}。",
    words: [
      { w:"tuition", ph:"/tjuˈɪʃn/", m:"n. 学费;讲授", tip:"tuit(教 tutor)+ion → 学费/讲授" },
      { w:"undergraduate", ph:"/ˌʌndəˈɡrædʒuət/", m:"n. 本科生", tip:"under(未)+graduate(毕业)→ 未毕业 → 本科生" },
      { w:"scholarship", ph:"/ˈskɒləʃɪp/", m:"n. 奖学金;学问", tip:"scholar(学者)+ship → 奖学金" },
      { w:"discipline", ph:"/ˈdɪsəplɪn/", m:"n. 纪律;学科 vt. 训练", tip:"disciple(门徒)→ 受训守规 → 纪律" },
      { w:"literacy", ph:"/ˈlɪtərəsi/", m:"n. 读写能力;素养", tip:"liter(字母 letter)+acy → 识字 → 素养" }
    ] },
  { id: 53,
    en: "A changing {{climate}} brings extreme weather: a long {{drought}} in one region and a sudden {{flood}} in another can both turn into a {{disaster}} that poisons the {{atmosphere}}.",
    zh: "不断变化的{{气候|climate}}带来极端天气:一个地区长期{{干旱|drought}}、另一地区突发{{洪水|flood}},都可能演变成毒害{{大气|atmosphere}}的{{灾难|disaster}}。",
    words: [
      { w:"climate", ph:"/ˈklaɪmət/", m:"n. 气候;风气", tip:"谐音'克莱嘛':长期天气 → 气候" },
      { w:"drought", ph:"/draʊt/", m:"n. 干旱;旱灾", tip:"dry(干)的亲戚 → 干旱" },
      { w:"flood", ph:"/flʌd/", m:"n. 洪水 v. 淹没", tip:"flo(流 flow)→ 大水漫流 → 洪水" },
      { w:"disaster", ph:"/dɪˈzɑːstə/", m:"n. 灾难;彻底失败", tip:"dis(坏)+aster(星)→ 灾星 → 灾难" },
      { w:"atmosphere", ph:"/ˈætməsfɪə/", m:"n. 大气;气氛", tip:"atmo(气)+sphere(球)→ 包住地球的气 → 大气" }
    ] },
  { id: 54,
    en: "The new {{device}} runs powerful {{software}}, stores {{digital}} files, and lets users meet in a {{virtual}} room without any extra {{gadget}}.",
    zh: "这款新{{设备|device}}运行强大的{{软件|software}},存储{{数字|digital}}文件,还能让用户在{{虚拟|virtual}}房间见面,无需任何额外{{小装置|gadget}}。",
    words: [
      { w:"device", ph:"/dɪˈvaɪs/", m:"n. 装置;设备;手段", tip:"devise(设计)的名词 → 设备" },
      { w:"software", ph:"/ˈsɒftweə/", m:"n. 软件", tip:"soft(软)+ware(件)→ 软件" },
      { w:"digital", ph:"/ˈdɪdʒɪtl/", m:"adj. 数字的;数码的", tip:"digit(数字)+al → 数字的" },
      { w:"virtual", ph:"/ˈvɜːtʃuəl/", m:"adj. 虚拟的;实际上的", tip:"virtu(虚)→ 虚拟" },
      { w:"gadget", ph:"/ˈɡædʒɪt/", m:"n. 小器具;小装置", tip:"谐音'嘎吱':小玩意 → 小装置" }
    ] },
  { id: 55,
    en: "To fight {{obesity}}, a {{physician}} stresses good {{hygiene}}, regular {{therapy}}, and a timely {{vaccine}} as the cheapest medicine.",
    zh: "为了对抗{{肥胖|obesity}},{{医生|physician}}强调良好的{{卫生|hygiene}}、定期的{{治疗|therapy}},以及及时{{接种疫苗|vaccine}}是最廉价的良药。",
    words: [
      { w:"obesity", ph:"/əʊˈbiːsəti/", m:"n. 肥胖;过度肥胖", tip:"obese(肥胖的)的名词 → 肥胖" },
      { w:"physician", ph:"/fɪˈzɪʃn/", m:"n. 内科医生;医师", tip:"physic(医术)+ian → 医生" },
      { w:"hygiene", ph:"/ˈhaɪdʒiːn/", m:"n. 卫生;保健", tip:"谐音'孩计':讲卫生 → 卫生" },
      { w:"therapy", ph:"/ˈθerəpi/", m:"n. 治疗;疗法", tip:"谐音'瑟拉皮':做理疗 → 治疗" },
      { w:"vaccine", ph:"/ˈvæksiːn/", m:"n. 疫苗", tip:"vacc(牛 cow)→ 牛痘 → 疫苗" }
    ] },
  { id: 56,
    en: "As the {{urban}} population swells, families move to a quiet {{suburb}}, where a modest {{dwelling}} becomes the {{residence}} they share with a friendly {{neighbourhood}}.",
    zh: "随着{{城市|urban}}人口膨胀,家庭们搬到安静的{{郊区|suburb}},在那里一处朴素的{{住所|dwelling}}成了他们与友好{{社区|neighbourhood}}共享的{{居所|residence}}。",
    words: [
      { w:"urban", ph:"/ˈɜːbən/", m:"adj. 城市的;市区的", tip:"urb(城市)+an → 城市的" },
      { w:"suburb", ph:"/ˈsʌbɜːb/", m:"n. 郊区;近郊", tip:"sub(下/近)+urb(城)→ 城边 → 郊区" },
      { w:"dwelling", ph:"/ˈdwelɪŋ/", m:"n. 住所;住宅", tip:"dwell(居住)+ing → 住所" },
      { w:"residence", ph:"/ˈrezɪdəns/", m:"n. 住宅;居住", tip:"reside(居住)+nce → 住宅" },
      { w:"neighbourhood", ph:"/ˈneɪbəhʊd/", m:"n. 社区;街坊;附近", tip:"neighbour(邻居)+hood → 街坊 → 社区" }
    ] },
  { id: 57,
    en: "In a healthy {{democracy}}, every {{citizen}} can {{vote}} in an {{election}}, and candidates run a fair {{campaign}} to win support.",
    zh: "在健康的{{民主|democracy}}制度中,每位{{公民|citizen}}都能在{{选举|election}}中{{投票|vote}},候选人通过公平的{{竞选活动|campaign}}争取支持。",
    words: [
      { w:"democracy", ph:"/dɪˈmɒkrəsi/", m:"n. 民主;民主制", tip:"demo(人民)+cracy(统治)→ 人民当家 → 民主" },
      { w:"citizen", ph:"/ˈsɪtɪzn/", m:"n. 公民;市民", tip:"city(城市)→ 城里人 → 市民/公民" },
      { w:"vote", ph:"/vəʊt/", m:"v./n. 投票;表决", tip:"谐音'我投':投票" },
      { w:"election", ph:"/ɪˈlekʃn/", m:"n. 选举;当选", tip:"elect(选举)+ion → 选举" },
      { w:"campaign", ph:"/kæmˈpeɪn/", m:"n. 运动;战役 v. 参加竞选", tip:"camp(营地)→ 行军作战 → 战役/运动" }
    ] },
  { id: 58,
    en: "Global {{commerce}} depends on free {{trade}}: when one country raises a {{tariff}}, both {{import}} and {{export}} volumes can fall sharply.",
    zh: "全球{{商业|commerce}}依赖自由{{贸易|trade}}:当一国提高{{关税|tariff}}时,{{进口|import}}和{{出口|export}}量都可能大幅下降。",
    words: [
      { w:"commerce", ph:"/ˈkɒmɜːs/", m:"n. 商业;贸易", tip:"com(共)+merc(交易)→ 互相交易 → 商业" },
      { w:"trade", ph:"/treɪd/", m:"n./v. 贸易;交易", tip:"track(路径)→ 走商路 → 贸易" },
      { w:"tariff", ph:"/ˈtærɪf/", m:"n. 关税;价目表", tip:"谐音'他日付':进口要付 → 关税" },
      { w:"import", ph:"/ɪmˈpɔːt/", m:"v./n. 进口", tip:"im(进)+port(港口)→ 进港 → 进口" },
      { w:"export", ph:"/ɪkˈspɔːt/", m:"v./n. 出口", tip:"ex(出)+port(港口)→ 出港 → 出口" }
    ] },
  { id: 59,
    en: "Lacking enough {{capital}}, the young couple took out a {{loan}} and a {{mortgage}}, accepting some {{debt}} to buy an {{asset}} that might grow in value.",
    zh: "由于缺乏足够的{{资本|capital}},这对年轻夫妇申请了{{贷款|loan}}和{{按揭|mortgage}},承担一些{{债务|debt}}去购买一项可能会升值的{{资产|asset}}。",
    words: [
      { w:"capital", ph:"/ˈkæpɪtl/", m:"n. 资本;首都;大写字母", tip:"capit(头)→ 最要紧的钱 → 资本" },
      { w:"loan", ph:"/ləʊn/", m:"n. 贷款 vt. 借出", tip:"谐音'楼恩':借钱买楼 → 贷款" },
      { w:"mortgage", ph:"/ˈmɔːɡɪdʒ/", m:"n. 抵押贷款;按揭", tip:"mort(死)+gage(抵押)→ 长期抵押 → 按揭(t 不发音)" },
      { w:"debt", ph:"/det/", m:"n. 债务;欠款", tip:"b 不发音;欠的钱 → 债务" },
      { w:"asset", ph:"/ˈæset/", m:"n. 资产;有价值的人/物", tip:"ass+et → 谐音'爱实':值钱的 → 资产" }
    ] },
  { id: 60,
    en: "A good assistant will {{arrange}} the day's {{agenda}}, fix each {{appointment}} on the {{schedule}}, and send a {{reminder}} before every meeting.",
    zh: "一个好的助理会{{安排|arrange}}当天的{{议程|agenda}},把每个{{约会|appointment}}定在{{日程|schedule}}上,并在每次会议前发送{{提醒|reminder}}。",
    words: [
      { w:"arrange", ph:"/əˈreɪndʒ/", m:"vt. 安排;整理;布置", tip:"ar+range(排列)→ 排好 → 安排" },
      { w:"agenda", ph:"/əˈdʒendə/", m:"n. 议程;待办事项", tip:"谐音'我尖达':要议的事 → 议程" },
      { w:"appointment", ph:"/əˈpɔɪntmənt/", m:"n. 约会;任命", tip:"appoint(指定)+ment → 约定 → 约会" },
      { w:"schedule", ph:"/ˈʃedjuːl/", m:"n. 日程;时间表 vt. 安排", tip:"谐音'谁九哦':排时间 → 日程" },
      { w:"reminder", ph:"/rɪˈmaɪndə/", m:"n. 提醒(物);提示", tip:"remind(提醒)+er → 提醒物" }
    ] },
  { id: 61,
    en: "To {{settle}} a long {{dispute}}, the two nations formed an {{alliance}}, opened {{diplomatic}} talks, and finally signed a peace {{treaty}}.",
    zh: "为了{{解决|settle}}长期{{争端|dispute}},两国结成{{联盟|alliance}},展开{{外交|diplomatic}}谈判,最终签署了和平{{条约|treaty}}。",
    words: [
      { w:"settle", ph:"/ˈsetl/", m:"v. 解决;定居;安顿", tip:"set(放)+tle → 放定 → 解决/定居" },
      { w:"dispute", ph:"/dɪˈspjuːt/", m:"n./v. 争论;争端", tip:"dis+pute(想/说)→ 各说各话 → 争论" },
      { w:"alliance", ph:"/əˈlaɪəns/", m:"n. 联盟;结盟", tip:"ally(结盟)+ance → 联盟" },
      { w:"diplomatic", ph:"/ˌdɪpləˈmætɪk/", m:"adj. 外交的;圆滑的", tip:"diploma(证书)→ 持国书出使 → 外交的" },
      { w:"treaty", ph:"/ˈtriːti/", m:"n. 条约;协定", tip:"treat(协商)+y → 协商结果 → 条约" }
    ] },
  { id: 62,
    en: "Every {{athlete}} dreamed of the {{championship}}; in a packed {{stadium}}, each {{spectator}} cheered through the final {{tournament}}.",
    zh: "每位{{运动员|athlete}}都梦想着{{冠军|championship}};在座无虚席的{{体育场|stadium}}里,每位{{观众|spectator}}都为最后的{{锦标赛|tournament}}欢呼。",
    words: [
      { w:"athlete", ph:"/ˈæθliːt/", m:"n. 运动员", tip:"athl(竞赛)+ete → 运动员" },
      { w:"championship", ph:"/ˈtʃæmpiənʃɪp/", m:"n. 锦标赛;冠军称号", tip:"champion(冠军)+ship → 冠军赛" },
      { w:"stadium", ph:"/ˈsteɪdiəm/", m:"n. 体育场;运动场", tip:"谐音'死爹姆':大球场 → 体育场" },
      { w:"spectator", ph:"/spekˈteɪtə/", m:"n. 观众;旁观者", tip:"spect(看)+ator → 看的人 → 观众" },
      { w:"tournament", ph:"/ˈtʊənəmənt/", m:"n. 锦标赛;联赛", tip:"turn(轮)→ 一轮轮比 → 锦标赛" }
    ] },
  { id: 63,
    en: "The {{fiction}} won praise for its tight {{plot}}, vivid {{narrative}}, and a brave {{protagonist}} who reshaped the entire {{genre}}.",
    zh: "这部{{小说|fiction}}因其紧凑的{{情节|plot}}、生动的{{叙述|narrative}},以及重塑整个{{体裁|genre}}的勇敢{{主人公|protagonist}}而广受赞誉。",
    words: [
      { w:"fiction", ph:"/ˈfɪkʃn/", m:"n. 小说;虚构", tip:"fict(编造)+ion → 编出来的 → 小说" },
      { w:"plot", ph:"/plɒt/", m:"n. 情节;阴谋 v. 密谋", tip:"谐音'扑捞':编故事 → 情节" },
      { w:"narrative", ph:"/ˈnærətɪv/", m:"n. 叙述;故事 adj. 叙事的", tip:"narrate(叙述)+ive → 叙述" },
      { w:"protagonist", ph:"/prəˈtæɡənɪst/", m:"n. 主角;主人公", tip:"prot(首)+agonist(角色)→ 第一角色 → 主角" },
      { w:"genre", ph:"/ˈʒɒnrə/", m:"n. 体裁;类型;风格", tip:"gen(种类 gene)→ 类型 → 体裁" }
    ] },
  { id: 64,
    en: "The {{orchestra}} began to {{compose}} a new piece, weaving a gentle {{melody}} and steady {{rhythm}} for every {{instrument}}.",
    zh: "这支{{管弦乐队|orchestra}}开始{{创作|compose}}一首新曲,为每件{{乐器|instrument}}编织出柔和的{{旋律|melody}}和稳定的{{节奏|rhythm}}。",
    words: [
      { w:"orchestra", ph:"/ˈɔːkɪstrə/", m:"n. 管弦乐队", tip:"谐音'凹科斯戳':一大队人演奏 → 乐队" },
      { w:"compose", ph:"/kəmˈpəʊz/", m:"vt. 创作;组成;使平静", tip:"com(共)+pose(放)→ 把音符放一起 → 创作" },
      { w:"melody", ph:"/ˈmelədi/", m:"n. 旋律;曲调", tip:"melo(歌)+dy → 旋律" },
      { w:"rhythm", ph:"/ˈrɪðəm/", m:"n. 节奏;韵律", tip:"无元音难拼;谐音'瑞瑟姆':打节拍 → 节奏" },
      { w:"instrument", ph:"/ˈɪnstrəmənt/", m:"n. 乐器;工具;仪器", tip:"instru(装备)+ment → 工具/乐器" }
    ] },
  { id: 65,
    en: "At the {{exhibition}}, the {{gallery}} displayed a marble {{sculpture}} hailed as a {{masterpiece}}, admired for its rare {{aesthetic}} value.",
    zh: "在{{展览|exhibition}}上,这家{{画廊|gallery}}展出了一尊被誉为{{杰作|masterpiece}}的大理石{{雕塑|sculpture}},因其罕见的{{审美|aesthetic}}价值而备受赞赏。",
    words: [
      { w:"exhibition", ph:"/ˌeksɪˈbɪʃn/", m:"n. 展览;展览会", tip:"exhibit(展出)+ion → 展览" },
      { w:"gallery", ph:"/ˈɡæləri/", m:"n. 画廊;美术馆", tip:"谐音'嘎了瑞':挂画的地方 → 画廊" },
      { w:"sculpture", ph:"/ˈskʌlptʃə/", m:"n. 雕塑;雕刻", tip:"sculpt(雕刻)+ure → 雕塑" },
      { w:"masterpiece", ph:"/ˈmɑːstəpiːs/", m:"n. 杰作;名著", tip:"master(大师)+piece(作品)→ 杰作" },
      { w:"aesthetic", ph:"/iːsˈθetɪk/", m:"adj. 审美的;美学的", tip:"谐音'爱思梯克':讲究美 → 审美的" }
    ] },
  { id: 66,
    en: "Local {{cuisine}} relies on a careful {{recipe}}: the right {{ingredient}} and balanced {{flavour}} can tempt even a weak {{appetite}}.",
    zh: "地方{{菜肴|cuisine}}依赖讲究的{{食谱|recipe}}:合适的{{食材|ingredient}}和均衡的{{味道|flavour}}能勾起即便是不佳的{{食欲|appetite}}。",
    words: [
      { w:"cuisine", ph:"/kwɪˈziːn/", m:"n. 菜肴;烹饪风格", tip:"谐音'亏赞':一国好菜 → 菜肴" },
      { w:"recipe", ph:"/ˈresəpi/", m:"n. 食谱;诀窍", tip:"谐音'瑞色皮':照着做菜 → 食谱" },
      { w:"ingredient", ph:"/ɪnˈɡriːdiənt/", m:"n. 原料;成分;要素", tip:"in+gredi(进入)→ 进锅的东西 → 原料" },
      { w:"flavour", ph:"/ˈfleɪvə/", m:"n. 味道;风味", tip:"flav(味)+our → 味道" },
      { w:"appetite", ph:"/ˈæpɪtaɪt/", m:"n. 食欲;欲望", tip:"appet(渴求)+ite → 想吃 → 食欲" }
    ] },
  { id: 67,
    en: "Before the trip, she booked {{accommodation}}, packed light {{luggage}}, checked her {{passport}}, planned the {{itinerary}}, and confirmed the final {{destination}}.",
    zh: "出发前,她预订了{{住宿|accommodation}},收拾了轻便的{{行李|luggage}},检查了{{护照|passport}},规划好{{行程|itinerary}},并确认了最终的{{目的地|destination}}。",
    words: [
      { w:"accommodation", ph:"/əˌkɒməˈdeɪʃn/", m:"n. 住宿;膳宿", tip:"accommodate(容纳)+ion → 住宿(两 c 两 m)" },
      { w:"luggage", ph:"/ˈlʌɡɪdʒ/", m:"n. 行李", tip:"lug(拖拉)+gage → 拖着走的 → 行李" },
      { w:"passport", ph:"/ˈpɑːspɔːt/", m:"n. 护照", tip:"pass(通过)+port(港口)→ 过关凭证 → 护照" },
      { w:"itinerary", ph:"/aɪˈtɪnərəri/", m:"n. 行程;旅行路线", tip:"itiner(旅行)+ary → 行程" },
      { w:"destination", ph:"/ˌdestɪˈneɪʃn/", m:"n. 目的地;终点", tip:"destine(注定去)+ation → 目的地" }
    ] },
  { id: 68,
    en: "When the storm hit, volunteers rushed to {{rescue}} each {{survivor}}, {{evacuate}} the town, and offer {{shelter}} as a temporary {{refuge}}.",
    zh: "暴风雨来袭时,志愿者们冲去{{营救|rescue}}每一位{{幸存者|survivor}},{{疏散|evacuate}}全镇,并提供{{庇护所|shelter}}作为临时{{避难所|refuge}}。",
    words: [
      { w:"rescue", ph:"/ˈreskjuː/", m:"vt./n. 营救;救援", tip:"re+scue(摇 shake free)→ 抢出来 → 营救" },
      { w:"survivor", ph:"/səˈvaɪvə/", m:"n. 幸存者;生还者", tip:"survive(幸存)+or → 幸存者" },
      { w:"evacuate", ph:"/ɪˈvækjueɪt/", m:"vt. 疏散;撤离", tip:"e(出)+vacu(空 vacant)→ 腾空 → 疏散" },
      { w:"shelter", ph:"/ˈʃeltə/", m:"n. 庇护所 v. 保护;躲避", tip:"谐音'谢尔特':遮风挡雨 → 庇护所" },
      { w:"refuge", ph:"/ˈrefjuːdʒ/", m:"n. 避难所;庇护", tip:"re+fuge(逃 flee)→ 逃去的地方 → 避难所" }
    ] },
  { id: 69,
    en: "After the serious {{offence}}, police moved to {{arrest}} the {{criminal}}, whose {{crime}} earned a long {{prison}} term.",
    zh: "在这起严重{{罪行|offence}}发生后,警方着手{{逮捕|arrest}}这名{{罪犯|criminal}},其{{犯罪|crime}}行为换来了长期{{监禁|prison}}。",
    words: [
      { w:"offence", ph:"/əˈfens/", m:"n. 罪行;冒犯(美 offense)", tip:"offend(冒犯)的名词 → 罪行" },
      { w:"arrest", ph:"/əˈrest/", m:"vt./n. 逮捕;阻止", tip:"ar+rest(停)→ 让你停下 → 逮捕" },
      { w:"criminal", ph:"/ˈkrɪmɪnl/", m:"n. 罪犯 adj. 犯罪的", tip:"crime(罪)+inal → 罪犯" },
      { w:"crime", ph:"/kraɪm/", m:"n. 罪行;犯罪", tip:"谐音'抠揿':违法的事 → 犯罪" },
      { w:"prison", ph:"/ˈprɪzn/", m:"n. 监狱", tip:"谐音'婆里怎':关人的地方 → 监狱" }
    ] },
  { id: 70,
    en: "The young {{scholar}} built a clear {{framework}} and rigorous {{methodology}} to test the {{theory}} put forward in her doctoral {{thesis}}.",
    zh: "这位年轻{{学者|scholar}}构建了清晰的{{框架|framework}}和严谨的{{方法论|methodology}},以检验她在博士{{论文|thesis}}中提出的{{理论|theory}}。",
    words: [
      { w:"scholar", ph:"/ˈskɒlə/", m:"n. 学者;奖学金生", tip:"school(学校)→ 治学的人 → 学者" },
      { w:"framework", ph:"/ˈfreɪmwɜːk/", m:"n. 框架;结构;体系", tip:"frame(框)+work → 框架" },
      { w:"methodology", ph:"/ˌmeθəˈdɒlədʒi/", m:"n. 方法论;一套方法", tip:"method(方法)+ology(学)→ 方法论" },
      { w:"theory", ph:"/ˈθɪəri/", m:"n. 理论;学说", tip:"谐音'西饿瑞':成体系的看法 → 理论" },
      { w:"thesis", ph:"/ˈθiːsɪs/", m:"n. 论文;论点", tip:"the(放置)+sis → 提出的主张 → 论文" }
    ] },
  { id: 71,
    en: "A {{curious}} child loves to {{explore}} the unknown, chase every {{mystery}}, make a small {{discovery}}, and gaze in pure {{wonder}}.",
    zh: "{{好奇的|curious}}孩子喜欢{{探索|explore}}未知,追逐每一个{{谜团|mystery}},做出小小的{{发现|discovery}},并满怀纯粹的{{惊奇|wonder}}凝望世界。",
    words: [
      { w:"curious", ph:"/ˈkjʊəriəs/", m:"adj. 好奇的;奇特的", tip:"cure(关心 care)→ 想知道 → 好奇" },
      { w:"explore", ph:"/ɪkˈsplɔː/", m:"v. 探索;探险", tip:"ex(出)+plore(喊 → 找)→ 出去找 → 探索" },
      { w:"mystery", ph:"/ˈmɪstri/", m:"n. 谜;神秘", tip:"myst(神秘)+ery → 谜" },
      { w:"discovery", ph:"/dɪˈskʌvəri/", m:"n. 发现", tip:"dis(去掉)+cover(盖)→ 揭盖 → 发现" },
      { w:"wonder", ph:"/ˈwʌndə/", m:"n. 惊奇;奇迹 v. 想知道", tip:"won+der → 谐音'万得':叹为观止 → 惊奇" }
    ] },
  { id: 72,
    en: "The {{ancient}} {{civilization}} grew into a vast {{empire}} that went on to {{conquer}} its neighbours, leaving only silent {{ruins}} behind.",
    zh: "这个{{古老的|ancient}}{{文明|civilization}}发展成一个庞大的{{帝国|empire}},继而{{征服|conquer}}了周边邻邦,最终只留下沉默的{{废墟|ruins}}。",
    words: [
      { w:"ancient", ph:"/ˈeɪnʃənt/", m:"adj. 古代的;古老的", tip:"anci(早 ante)+ent → 古老的" },
      { w:"civilization", ph:"/ˌsɪvəlaɪˈzeɪʃn/", m:"n. 文明;文明社会", tip:"civil(文明的)+ization → 文明" },
      { w:"empire", ph:"/ˈempaɪə/", m:"n. 帝国", tip:"emper(or 皇帝)→ 皇帝的国 → 帝国" },
      { w:"conquer", ph:"/ˈkɒŋkə/", m:"vt. 征服;攻克", tip:"con+quer(求取)→ 强取 → 征服" },
      { w:"ruins", ph:"/ˈruːɪnz/", m:"n. 废墟;遗迹(ruin 毁灭)", tip:"ruin(毁灭)的复数 → 废墟" }
    ] },
  { id: 73,
    en: "Their {{religion}} rests on deep {{faith}}: believers gather in a {{sacred}} hall to {{worship}} and perform an ancient {{ritual}}.",
    zh: "他们的{{宗教|religion}}建立在深厚的{{信仰|faith}}之上:信徒们聚集在{{神圣的|sacred}}殿堂里{{敬拜|worship}},并举行古老的{{仪式|ritual}}。",
    words: [
      { w:"religion", ph:"/rɪˈlɪdʒən/", m:"n. 宗教;信仰", tip:"re+lig(捆 → 联结)→ 把人与神联结 → 宗教" },
      { w:"faith", ph:"/feɪθ/", m:"n. 信仰;信任", tip:"谐音'非死':至死不渝 → 信仰" },
      { w:"sacred", ph:"/ˈseɪkrɪd/", m:"adj. 神圣的;宗教的", tip:"sacr(神圣 sacrifice)→ 神圣的" },
      { w:"worship", ph:"/ˈwɜːʃɪp/", m:"v./n. 崇拜;敬拜", tip:"worth(价值)+ship → 视为至高 → 崇拜" },
      { w:"ritual", ph:"/ˈrɪtʃuəl/", m:"n. 仪式;惯例 adj. 仪式的", tip:"rite(仪式)+ual → 仪式" }
    ] },
  { id: 74,
    en: "A good thinker uses {{reason}} to stay {{rational}}, can {{justify}} each claim, examine every {{premise}}, and {{infer}} the right conclusion.",
    zh: "优秀的思考者用{{理性|reason}}保持{{理智|rational}},能为每个主张{{辩护|justify}},审视每条{{前提|premise}},并{{推断|infer}}出正确的结论。",
    words: [
      { w:"reason", ph:"/ˈriːzn/", m:"n. 理由;理性 v. 推理", tip:"谐音'瑞怎':讲道理 → 理由/理性" },
      { w:"rational", ph:"/ˈræʃnəl/", m:"adj. 理性的;合理的", tip:"ratio(比率/理)+nal → 讲理的 → 理性" },
      { w:"justify", ph:"/ˈdʒʌstɪfaɪ/", m:"vt. 证明…正当;为…辩护", tip:"just(公正)+ify → 说成正当 → 辩护" },
      { w:"premise", ph:"/ˈpremɪs/", m:"n. 前提;假设", tip:"pre(前)+mise(送)→ 先摆出 → 前提" },
      { w:"infer", ph:"/ɪnˈfɜː/", m:"vt. 推断;推论", tip:"in+fer(带)→ 从中带出 → 推断" }
    ] },
  { id: 75,
    en: "Strong {{emotion}} can cloud judgment: a sudden {{temper}} or shifting {{mood}} may bury the tender {{sentiment}} behind real {{passion}}.",
    zh: "强烈的{{情绪|emotion}}会蒙蔽判断:突然的{{脾气|temper}}或起伏的{{心情|mood}}可能掩盖真正{{热情|passion}}背后那份温柔的{{情感|sentiment}}。",
    words: [
      { w:"emotion", ph:"/ɪˈməʊʃn/", m:"n. 情绪;情感", tip:"e(出)+mot(动)→ 心被打动 → 情绪" },
      { w:"temper", ph:"/ˈtempə/", m:"n. 脾气;情绪 vt. 缓和", tip:"谐音'摊泼':乱发脾气 → 脾气" },
      { w:"mood", ph:"/muːd/", m:"n. 心情;情绪", tip:"谐音'木的':心情阴晴 → 心情" },
      { w:"sentiment", ph:"/ˈsentɪmənt/", m:"n. 情感;感伤;观点", tip:"sent(感觉 sense)+iment → 情感" },
      { w:"passion", ph:"/ˈpæʃn/", m:"n. 激情;热情", tip:"pass(受难 → 强烈)→ 强烈感情 → 激情" }
    ] },
  { id: 76,
    en: "A {{polite}} host is always {{courteous}} and {{gracious}}, {{considerate}} of every guest, and {{respectful}} toward different customs.",
    zh: "{{有礼貌的|polite}}主人总是{{彬彬有礼|courteous}}且{{亲切的|gracious}},{{体贴|considerate}}每一位客人,并对不同习俗心怀{{尊重|respectful}}。",
    words: [
      { w:"polite", ph:"/pəˈlaɪt/", m:"adj. 有礼貌的;客气的", tip:"poli(磨光 polish)→ 言行磨光 → 有礼" },
      { w:"courteous", ph:"/ˈkɜːtiəs/", m:"adj. 彬彬有礼的;谦恭的", tip:"court(宫廷)→ 宫廷礼数 → 谦恭" },
      { w:"gracious", ph:"/ˈɡreɪʃəs/", m:"adj. 亲切的;慈祥的;优雅的", tip:"grace(优雅)+ious → 亲切优雅" },
      { w:"considerate", ph:"/kənˈsɪdərət/", m:"adj. 考虑周到的;体贴的", tip:"consider(考虑)+ate → 替人考虑 → 体贴" },
      { w:"respectful", ph:"/rɪˈspektfl/", m:"adj. 恭敬的;尊重人的", tip:"respect(尊重)+ful → 充满尊重" }
    ] },
  { id: 77,
    en: "The {{brave}} firefighter showed great {{courage}}, made a {{bold}} dash into the flames, stayed {{fearless}}, and earned a {{heroic}} reputation.",
    zh: "这位{{勇敢的|brave}}消防员展现出极大的{{勇气|courage}},{{大胆地|bold}}冲入火海,始终{{无畏|fearless}},赢得了{{英雄般的|heroic}}声誉。",
    words: [
      { w:"brave", ph:"/breɪv/", m:"adj. 勇敢的 vt. 勇敢面对", tip:"谐音'布瑞夫':无惧 → 勇敢" },
      { w:"courage", ph:"/ˈkʌrɪdʒ/", m:"n. 勇气;胆量", tip:"cour(心 cor)+age → 有心劲 → 勇气" },
      { w:"bold", ph:"/bəʊld/", m:"adj. 大胆的;醒目的", tip:"谐音'抱的':敢抱风险 → 大胆" },
      { w:"fearless", ph:"/ˈfɪələs/", m:"adj. 无畏的;大胆的", tip:"fear(害怕)+less(无)→ 无畏" },
      { w:"heroic", ph:"/həˈrəʊɪk/", m:"adj. 英雄的;英勇的", tip:"hero(英雄)+ic → 英雄的" }
    ] },
  { id: 78,
    en: "An {{idle}} and {{passive}} worker grows {{reluctant}} to take on tasks, {{indifferent}} to results, and {{stubborn}} when asked to change.",
    zh: "一个{{懒散|idle}}而{{被动的|passive}}员工会变得{{不情愿|reluctant}}承担任务,对结果{{漠不关心|indifferent}},被要求改变时还很{{固执|stubborn}}。",
    words: [
      { w:"idle", ph:"/ˈaɪdl/", m:"adj. 懒散的;闲置的", tip:"谐音'爱斗':无所事事 → 懒散" },
      { w:"passive", ph:"/ˈpæsɪv/", m:"adj. 被动的;消极的", tip:"pass(承受)+ive → 只承受 → 被动" },
      { w:"reluctant", ph:"/rɪˈlʌktənt/", m:"adj. 不情愿的;勉强的", tip:"re(反)+luct(挣扎)→ 心里挣扎 → 不情愿" },
      { w:"indifferent", ph:"/ɪnˈdɪfrənt/", m:"adj. 漠不关心的;一般的", tip:"in(不)+different(在意区别)→ 无所谓 → 冷漠" },
      { w:"stubborn", ph:"/ˈstʌbən/", m:"adj. 固执的;顽固的", tip:"谐音'死大笨':不听劝 → 固执" }
    ] },
  { id: 79,
    en: "We trust an {{honest}} partner who stays {{frank}} and {{candid}}, remains {{loyal}} in hard times, and is {{faithful}} to every promise.",
    zh: "我们信任{{诚实的|honest}}伙伴——他们保持{{坦率|frank}}与{{直言不讳|candid}},在艰难时刻依然{{忠诚|loyal}},并对每个承诺{{信守|faithful}}。",
    words: [
      { w:"honest", ph:"/ˈɒnɪst/", m:"adj. 诚实的;正直的", tip:"h 不发音;honor(荣誉)亲戚 → 诚实" },
      { w:"frank", ph:"/fræŋk/", m:"adj. 坦率的;直率的", tip:"谐音'弗兰克':有话直说 → 坦率" },
      { w:"candid", ph:"/ˈkændɪd/", m:"adj. 坦诚的;直言的", tip:"cand(白 → 清白)→ 坦白 → 坦诚" },
      { w:"loyal", ph:"/ˈlɔɪəl/", m:"adj. 忠诚的;忠实的", tip:"谐音'劳呦':死心塌地 → 忠诚" },
      { w:"faithful", ph:"/ˈfeɪθfl/", m:"adj. 忠实的;守信的", tip:"faith(信)+ful → 守信 → 忠实" }
    ] },
  { id: 80,
    en: "The {{wise}} engineer, both {{clever}} and {{brilliant}}, devised an {{ingenious}} solution that only a true {{genius}} could imagine.",
    zh: "这位{{睿智的|wise}}工程师既{{聪明|clever}}又{{才华横溢|brilliant}},设计出一个只有真正{{天才|genius}}才能想到的{{巧妙|ingenious}}方案。",
    words: [
      { w:"wise", ph:"/waɪz/", m:"adj. 明智的;睿智的", tip:"谐音'歪死':阅历深 → 睿智" },
      { w:"clever", ph:"/ˈklevə/", m:"adj. 聪明的;机灵的", tip:"谐音'可乐玩':脑子灵 → 聪明" },
      { w:"brilliant", ph:"/ˈbrɪliənt/", m:"adj. 才华横溢的;辉煌的", tip:"brill(闪光)+iant → 闪闪发光 → 杰出" },
      { w:"ingenious", ph:"/ɪnˈdʒiːniəs/", m:"adj. 巧妙的;有独创性的", tip:"in+geni(天才 genius)→ 有天才劲 → 巧妙" },
      { w:"genius", ph:"/ˈdʒiːniəs/", m:"n. 天才;天赋", tip:"gen(生)→ 天生奇才 → 天才" }
    ] },
  { id: 81,
    en: "The {{abstract}} painting seemed {{obscure}} at first, yet its {{subtle}} colours and {{distinct}} shapes hid a {{profound}} message.",
    zh: "这幅{{抽象的|abstract}}画起初显得{{晦涩|obscure}},然而其{{微妙的|subtle}}色彩和{{清晰的|distinct}}形状藏着{{深刻的|profound}}寓意。",
    words: [
      { w:"abstract", ph:"/ˈæbstrækt/", m:"adj. 抽象的 n. 摘要", tip:"abs(离)+tract(拉)→ 从实物中抽离 → 抽象" },
      { w:"obscure", ph:"/əbˈskjʊə/", m:"adj. 晦涩的;模糊的 vt. 遮掩", tip:"ob+scure(盖 cover)→ 盖住 → 模糊" },
      { w:"subtle", ph:"/ˈsʌtl/", m:"adj. 微妙的;细微的", tip:"b 不发音;谐音'萨头':细到难察 → 微妙" },
      { w:"distinct", ph:"/dɪˈstɪŋkt/", m:"adj. 清晰的;独特的;明显不同的", tip:"di+stinct(刺)→ 刺出区别 → 分明" },
      { w:"profound", ph:"/prəˈfaʊnd/", m:"adj. 深刻的;深远的", tip:"pro+found(底 fund)→ 触及底层 → 深刻" }
    ] },
  { id: 82,
    en: "A {{vigorous}} debate on the {{controversial}} bill turned {{intense}}, but the chair stayed {{neutral}} and kept the tone {{moderate}}.",
    zh: "围绕这项{{有争议的|controversial}}法案的{{激烈的|vigorous}}辩论变得{{紧张|intense}},但主席保持{{中立|neutral}},让语气维持{{温和|moderate}}。",
    words: [
      { w:"vigorous", ph:"/ˈvɪɡərəs/", m:"adj. 精力充沛的;激烈的", tip:"vigor(精力)+ous → 有劲的 → 激烈" },
      { w:"controversial", ph:"/ˌkɒntrəˈvɜːʃl/", m:"adj. 有争议的", tip:"contro(对着)+vers(转)→ 各执一词 → 争议" },
      { w:"intense", ph:"/ɪnˈtens/", m:"adj. 强烈的;紧张的", tip:"in+tens(拉紧 tension)→ 绷紧 → 强烈" },
      { w:"neutral", ph:"/ˈnjuːtrəl/", m:"adj. 中立的;中性的", tip:"neut(=neither 都不)→ 哪边都不站 → 中立" },
      { w:"moderate", ph:"/ˈmɒdərət/", m:"adj. 适度的;温和的", tip:"mode(尺度)+rate → 有分寸 → 温和" }
    ] },
  { id: 83,
    en: "The committee will {{assess}} the proposal, {{revise}} weak parts, {{approve}} the budget, and finally {{endorse}} the plan they {{anticipate}} will succeed.",
    zh: "委员会将{{评估|assess}}该提案,{{修改|revise}}薄弱部分,{{批准|approve}}预算,并最终{{支持|endorse}}这个他们{{预期|anticipate}}会成功的计划。",
    words: [
      { w:"assess", ph:"/əˈses/", m:"vt. 评估;评定", tip:"as+sess(坐 → 陪审估价)→ 评估" },
      { w:"revise", ph:"/rɪˈvaɪz/", m:"vt. 修订;修改;复习", tip:"re(再)+vise(看)→ 再看一遍 → 修订" },
      { w:"approve", ph:"/əˈpruːv/", m:"v. 批准;赞成", tip:"ap+prove(证明)→ 证明可行 → 批准" },
      { w:"endorse", ph:"/ɪnˈdɔːs/", m:"vt. 支持;背书;赞同", tip:"en+dorse(背 → 背面签名)→ 背书 → 支持" },
      { w:"anticipate", ph:"/ænˈtɪsɪpeɪt/", m:"vt. 预期;预料", tip:"anti(前)+cip(拿)→ 提前拿主意 → 预期" }
    ] },
  { id: 84,
    en: "Faced with {{inconsistent}} data, the analyst stayed {{objective}}, kept her view {{coherent}}, drew a {{plausible}} conclusion, and avoided being {{biased}}.",
    zh: "面对{{前后矛盾的|inconsistent}}数据,分析师保持{{客观|objective}},让观点{{连贯|coherent}},得出{{合理的|plausible}}结论,并避免{{有偏见的|biased}}。",
    words: [
      { w:"inconsistent", ph:"/ˌɪnkənˈsɪstənt/", m:"adj. 前后矛盾的;不一致的", tip:"in(不)+consistent(一致)→ 不一致 → 矛盾" },
      { w:"objective", ph:"/əbˈdʒektɪv/", m:"adj. 客观的 n. 目标", tip:"object(物体)→ 就事论事 → 客观" },
      { w:"coherent", ph:"/kəʊˈhɪərənt/", m:"adj. 连贯的;条理清晰的", tip:"co(共)+here(黏)→ 黏在一起 → 连贯" },
      { w:"plausible", ph:"/ˈplɔːzəbl/", m:"adj. 貌似合理的;可信的", tip:"plaus(鼓掌 applaud)→ 让人信服 → 合理" },
      { w:"biased", ph:"/ˈbaɪəst/", m:"adj. 有偏见的", tip:"bias(偏见)+ed → 有偏见的" }
    ] },
  { id: 85,
    en: "The startup hopes to {{succeed}} by being {{flexible}}, staying {{competitive}}, finding a {{lucrative}} niche, and keeping costs {{minimal}}.",
    zh: "这家初创公司希望通过保持{{灵活|flexible}}、保持{{有竞争力|competitive}}、找到{{利润丰厚的|lucrative}}细分市场并把成本控制到{{最低|minimal}}来{{成功|succeed}}。",
    words: [
      { w:"succeed", ph:"/səkˈsiːd/", m:"vi. 成功;接替", tip:"suc(下)+ceed(走)→ 一路走下去 → 成功" },
      { w:"flexible", ph:"/ˈfleksəbl/", m:"adj. 灵活的;可弯曲的", tip:"flex(弯)+ible → 能弯 → 灵活" },
      { w:"competitive", ph:"/kəmˈpetətɪv/", m:"adj. 有竞争力的;竞争的", tip:"compete(竞争)+itive → 有竞争力" },
      { w:"lucrative", ph:"/ˈluːkrətɪv/", m:"adj. 利润丰厚的;赚钱的", tip:"lucr(利 → lucre 钱财)→ 赚钱的" },
      { w:"minimal", ph:"/ˈmɪnɪml/", m:"adj. 最低限度的;极小的", tip:"mini(小)+mal → 最小的" }
    ] },
  { id: 86,
    en: "After the {{tragic}} accident, the family felt {{miserable}} and {{desperate}}, yet patient {{counselling}} slowly brought a sense of {{relief}}.",
    zh: "在那场{{悲惨的|tragic}}事故后,这家人感到{{痛苦|miserable}}而{{绝望|desperate}},但耐心的{{心理疏导|counselling}}慢慢带来了一丝{{宽慰|relief}}。",
    words: [
      { w:"tragic", ph:"/ˈtrædʒɪk/", m:"adj. 悲惨的;悲剧的", tip:"tragedy(悲剧)→ 悲惨的" },
      { w:"miserable", ph:"/ˈmɪzrəbl/", m:"adj. 痛苦的;悲惨的", tip:"miser(吝啬鬼 → 苦)→ 苦巴巴 → 痛苦" },
      { w:"desperate", ph:"/ˈdespərət/", m:"adj. 绝望的;不顾一切的", tip:"de(无)+sper(希望 spirit)→ 无望 → 绝望" },
      { w:"counselling", ph:"/ˈkaʊnsəlɪŋ/", m:"n. 心理咨询;辅导", tip:"counsel(忠告)+ling → 心理疏导" },
      { w:"relief", ph:"/rɪˈliːf/", m:"n. 宽慰;减轻;救济", tip:"relieve(缓解)的名词 → 宽慰" }
    ] },
  { id: 87,
    en: "A {{prominent}} expert gave a {{convincing}} talk, used {{relevant}} examples, made an {{impressive}} point, and left a {{lasting}} impression.",
    zh: "一位{{杰出的|prominent}}专家做了{{令人信服的|convincing}}演讲,用了{{相关的|relevant}}例子,提出{{令人印象深刻的|impressive}}观点,并留下{{持久的|lasting}}印象。",
    words: [
      { w:"prominent", ph:"/ˈprɒmɪnənt/", m:"adj. 杰出的;突出的", tip:"pro(向前)+min(突 → eminent)→ 突出的" },
      { w:"convincing", ph:"/kənˈvɪnsɪŋ/", m:"adj. 令人信服的", tip:"convince(使信服)+ing → 有说服力" },
      { w:"relevant", ph:"/ˈreləvənt/", m:"adj. 相关的;切题的", tip:"re+lev(举起 → 关联)→ 与之有关 → 相关" },
      { w:"impressive", ph:"/ɪmˈpresɪv/", m:"adj. 令人印象深刻的", tip:"impress(印象)+ive → 令人印象深刻" },
      { w:"lasting", ph:"/ˈlɑːstɪŋ/", m:"adj. 持久的;耐久的", tip:"last(持续)+ing → 持久" }
    ] },
  { id: 88,
    en: "The reform aims to {{enhance}} efficiency, {{eliminate}} waste, {{simplify}} rules, {{modify}} old habits, and {{optimize}} the whole process.",
    zh: "这项改革旨在{{提升|enhance}}效率、{{消除|eliminate}}浪费、{{简化|simplify}}规则、{{改进|modify}}旧习惯,并{{优化|optimize}}整个流程。",
    words: [
      { w:"enhance", ph:"/ɪnˈhɑːns/", m:"vt. 提高;增强", tip:"en(使)+hance(高 → enhance)→ 抬高 → 提升" },
      { w:"eliminate", ph:"/ɪˈlɪmɪneɪt/", m:"vt. 消除;淘汰", tip:"e(出)+limin(门槛 limit)→ 扫地出门 → 消除" },
      { w:"simplify", ph:"/ˈsɪmplɪfaɪ/", m:"vt. 简化", tip:"simple(简单)+ify → 使简单 → 简化" },
      { w:"modify", ph:"/ˈmɒdɪfaɪ/", m:"vt. 修改;调整", tip:"mode(方式)+ify → 改方式 → 修改" },
      { w:"optimize", ph:"/ˈɒptɪmaɪz/", m:"vt. 优化;使最优", tip:"optim(最好)+ize → 使最优 → 优化" }
    ] },
  { id: 89,
    en: "His {{arrogant}} manner and {{rude}} words seemed {{hostile}} and {{aggressive}}, making even patient colleagues feel {{offended}}.",
    zh: "他{{傲慢的|arrogant}}的态度和{{粗鲁的|rude}}言辞显得{{充满敌意|hostile}}而{{咄咄逼人|aggressive}},连有耐心的同事也感到{{被冒犯|offended}}。",
    words: [
      { w:"arrogant", ph:"/ˈærəɡənt/", m:"adj. 傲慢的;自大的", tip:"ar+rog(要求 → 索取过分)→ 自大 → 傲慢" },
      { w:"rude", ph:"/ruːd/", m:"adj. 粗鲁的;无礼的", tip:"谐音'入的':莽撞 → 粗鲁" },
      { w:"hostile", ph:"/ˈhɒstaɪl/", m:"adj. 敌对的;不友好的", tip:"host(敌 → host army)→ 敌意" },
      { w:"aggressive", ph:"/əˈɡresɪv/", m:"adj. 好斗的;积极进取的", tip:"ag+gress(走)→ 步步进逼 → 好斗" },
      { w:"offended", ph:"/əˈfendɪd/", m:"adj. 被冒犯的;生气的", tip:"offend(冒犯)+ed → 被冒犯" }
    ] },
  { id: 90,
    en: "The teacher tried to {{arouse}} students' interest, {{cultivate}} good habits, {{foster}} teamwork, and awaken a desire to {{inquire}} and {{create}}.",
    zh: "老师努力{{激发|arouse}}学生的兴趣、{{培养|cultivate}}好习惯、{{促进|foster}}团队协作,并唤起{{探询|inquire}}与{{创造|create}}的渴望。",
    words: [
      { w:"arouse", ph:"/əˈraʊz/", m:"vt. 激起;唤醒", tip:"a+rouse(唤醒)→ 唤起" },
      { w:"cultivate", ph:"/ˈkʌltɪveɪt/", m:"vt. 培养;耕作", tip:"cult(耕 culture)+ivate → 耕耘 → 培养" },
      { w:"foster", ph:"/ˈfɒstə/", m:"vt. 培养;促进;收养", tip:"food(喂养)亲戚 → 养育 → 培育" },
      { w:"inquire", ph:"/ɪnˈkwaɪə/", m:"v. 询问;调查", tip:"in+quire(求 → 探求)→ 探询" },
      { w:"create", ph:"/kriˈeɪt/", m:"vt. 创造;创作", tip:"creat(造)+e → 创造" }
    ] },
  { id: 91,
    en: "The {{annual}} report shows a {{steady}} rise in {{output}}, a {{substantial}} profit, and a {{surplus}} large enough to reinvest.",
    zh: "这份{{年度|annual}}报告显示{{产量|output}}{{稳定|steady}}上升、利润{{可观|substantial}},以及足以再投资的{{盈余|surplus}}。",
    words: [
      { w:"annual", ph:"/ˈænjuəl/", m:"adj. 每年的 n. 年刊", tip:"ann(年 anniversary)+ual → 每年的" },
      { w:"steady", ph:"/ˈstedi/", m:"adj. 稳定的;平稳的", tip:"st(站 stand)→ 站得稳 → 稳定" },
      { w:"output", ph:"/ˈaʊtpʊt/", m:"n. 产量;输出", tip:"out(出)+put(放)→ 产出 → 产量" },
      { w:"substantial", ph:"/səbˈstænʃl/", m:"adj. 大量的;实质的", tip:"substance(实质)+ial → 有分量 → 可观" },
      { w:"surplus", ph:"/ˈsɜːpləs/", m:"n. 盈余;过剩 adj. 剩余的", tip:"sur(超)+plus(加)→ 多出来 → 盈余" }
    ] },
  { id: 92,
    en: "To stay healthy, you should {{maintain}} a routine, {{manage}} stress early, {{boost}} your immunity, and {{sustain}} steady {{momentum}}.",
    zh: "为了保持健康,你应当{{维持|maintain}}规律作息、尽早{{管理|manage}}压力、{{增强|boost}}免疫力,并{{保持|sustain}}稳定的{{势头|momentum}}。",
    words: [
      { w:"maintain", ph:"/meɪnˈteɪn/", m:"vt. 维持;保养;主张", tip:"main(手 manu)+tain(握)→ 一直握住 → 维持" },
      { w:"manage", ph:"/ˈmænɪdʒ/", m:"v. 管理;设法做到", tip:"man(手 manu)+age → 一手掌控 → 管理" },
      { w:"boost", ph:"/buːst/", m:"vt. 促进;增强 n. 推动", tip:"谐音'不死它':往上推 → 增强" },
      { w:"sustain", ph:"/səˈsteɪn/", m:"vt. 维持;支撑;遭受", tip:"sus(下)+tain(握)→ 在下托住 → 维持" },
      { w:"momentum", ph:"/məˈmentəm/", m:"n. 势头;动力;动量", tip:"moment(瞬间动量)→ 势头" }
    ] },
  { id: 93,
    en: "A {{transparent}} government should be {{accountable}}, act with {{fairness}}, ensure {{equity}}, and protect every {{civilian}}.",
    zh: "{{透明的|transparent}}政府应当{{负责的|accountable}}、行事{{公正|fairness}}、确保{{公平|equity}},并保护每一位{{平民|civilian}}。",
    words: [
      { w:"transparent", ph:"/trænsˈpærənt/", m:"adj. 透明的;易懂的", tip:"trans(穿)+parent(显现 appear)→ 看得穿 → 透明" },
      { w:"accountable", ph:"/əˈkaʊntəbl/", m:"adj. 负有责任的;应说明的", tip:"account(交代)+able → 要交代 → 负责" },
      { w:"fairness", ph:"/ˈfeənəs/", m:"n. 公平;公正", tip:"fair(公平的)+ness → 公平" },
      { w:"equity", ph:"/ˈekwəti/", m:"n. 公平;公正;股权", tip:"equ(平 equal)+ity → 公平" },
      { w:"civilian", ph:"/səˈvɪliən/", m:"n. 平民 adj. 平民的", tip:"civil(民间的)+ian → 平民" }
    ] },
  { id: 94,
    en: "The detective tried to {{detect}} hidden clues, {{trace}} the route, {{identify}} the suspect, and {{confirm}} every {{alibi}}.",
    zh: "侦探设法{{察觉|detect}}隐藏的线索、{{追踪|trace}}路线、{{辨认|identify}}嫌疑人,并{{核实|confirm}}每一个{{不在场证明|alibi}}。",
    words: [
      { w:"detect", ph:"/dɪˈtekt/", m:"vt. 察觉;探测", tip:"de+tect(盖 → 揭盖)→ 揭出 → 察觉" },
      { w:"trace", ph:"/treɪs/", m:"vt. 追踪 n. 痕迹", tip:"track(踪迹)亲戚 → 追踪" },
      { w:"identify", ph:"/aɪˈdentɪfaɪ/", m:"vt. 识别;确认;认同", tip:"ident(相同 identity)+ify → 认出 → 识别" },
      { w:"confirm", ph:"/kənˈfɜːm/", m:"vt. 确认;证实", tip:"con+firm(坚定)→ 使确定 → 确认" },
      { w:"alibi", ph:"/ˈæləbaɪ/", m:"n. 不在场证明;借口", tip:"拉丁'别处':案发时在别处 → 不在场证明" }
    ] },
  { id: 95,
    en: "Heavy {{traffic}} and worn {{infrastructure}} cause delays, so the city plans to {{upgrade}} roads, expand public {{transit}}, and ease {{congestion}}.",
    zh: "繁忙的{{交通|traffic}}和老化的{{基础设施|infrastructure}}造成延误,因此城市计划{{升级|upgrade}}道路、扩大公共{{交通|transit}},并缓解{{拥堵|congestion}}。",
    words: [
      { w:"traffic", ph:"/ˈtræfɪk/", m:"n. 交通;运输;流量", tip:"谐音'踹फ克':车来车往 → 交通" },
      { w:"infrastructure", ph:"/ˈɪnfrəstrʌktʃə/", m:"n. 基础设施", tip:"infra(下)+structure(结构)→ 底层结构 → 基建" },
      { w:"upgrade", ph:"/ˌʌpˈɡreɪd/", m:"vt. 升级;提升", tip:"up(上)+grade(级)→ 升级" },
      { w:"transit", ph:"/ˈtrænzɪt/", m:"n. 运输;公共交通;过境", tip:"trans(转)+it(走)→ 运送 → 运输" },
      { w:"congestion", ph:"/kənˈdʒestʃən/", m:"n. 拥堵;堵塞", tip:"con+gest(携带 → 挤)→ 挤成一团 → 拥堵" }
    ] },
  { id: 96,
    en: "The scientist will {{conduct}} an experiment, {{examine}} the {{reaction}}, record each {{pattern}}, and {{publish}} the findings.",
    zh: "科学家将{{进行|conduct}}实验、{{检查|examine}}{{反应|reaction}}、记录每个{{规律|pattern}},并{{发表|publish}}研究结果。",
    words: [
      { w:"conduct", ph:"/kənˈdʌkt/", m:"vt. 进行;实施;指挥", tip:"con+duct(引导)→ 引着做 → 进行" },
      { w:"examine", ph:"/ɪɡˈzæmɪn/", m:"vt. 检查;审查;考试", tip:"exam(考试 → 细查)→ 检查" },
      { w:"reaction", ph:"/riˈækʃn/", m:"n. 反应;反作用", tip:"re(回)+action(动作)→ 回应的动作 → 反应" },
      { w:"pattern", ph:"/ˈpætn/", m:"n. 模式;规律;图案", tip:"谐音'pa疼':重复出现 → 规律" },
      { w:"publish", ph:"/ˈpʌblɪʃ/", m:"vt. 出版;发表;公布", tip:"public(公开)+ish → 公之于众 → 发表" }
    ] },
  { id: 97,
    en: "A {{thorough}} review can {{reveal}} a hidden {{flaw}}, {{avert}} a costly error, and {{guarantee}} a reliable result.",
    zh: "{{彻底的|thorough}}审查能{{揭示|reveal}}隐藏的{{缺陷|flaw}}、{{避免|avert}}代价高昂的错误,并{{保证|guarantee}}可靠的结果。",
    words: [
      { w:"thorough", ph:"/ˈθʌrə/", m:"adj. 彻底的;细致的", tip:"through(穿透)亲戚 → 穿透到底 → 彻底" },
      { w:"reveal", ph:"/rɪˈviːl/", m:"vt. 揭示;显露", tip:"re+veal(面纱 veil)→ 揭开面纱 → 揭示" },
      { w:"flaw", ph:"/flɔː/", m:"n. 缺陷;瑕疵", tip:"谐音'弗劳':小毛病 → 瑕疵" },
      { w:"avert", ph:"/əˈvɜːt/", m:"vt. 避免;防止;转移", tip:"a(离)+vert(转)→ 转开 → 避免" },
      { w:"guarantee", ph:"/ˌɡærənˈtiː/", m:"vt./n. 保证;担保", tip:"谐音'嘎兰提':打包票 → 保证" }
    ] },
  { id: 98,
    en: "Online {{shopping}} offers great {{convenience}}, but a smart {{customer}} compares each {{retail}} price before any {{transaction}}.",
    zh: "网络{{购物|shopping}}提供极大{{便利|convenience}},但精明的{{顾客|customer}}会在每笔{{交易|transaction}}前比较各家{{零售|retail}}价。",
    words: [
      { w:"shopping", ph:"/ˈʃɒpɪŋ/", m:"n. 购物", tip:"shop(商店)+ping → 购物" },
      { w:"convenience", ph:"/kənˈviːniəns/", m:"n. 便利;方便", tip:"convenient(方便)的名词 → 便利" },
      { w:"customer", ph:"/ˈkʌstəmə/", m:"n. 顾客;客户", tip:"custom(习惯光顾)+er → 常客 → 顾客" },
      { w:"retail", ph:"/ˈriːteɪl/", m:"n. 零售 v. 零售", tip:"re+tail(切 → 切小卖)→ 零售" },
      { w:"transaction", ph:"/trænˈzækʃn/", m:"n. 交易;业务", tip:"trans(转)+action(行动)→ 钱货转手 → 交易" }
    ] },
  { id: 99,
    en: "The novel explores {{identity}}, {{loneliness}}, and {{belonging}}, themes that resonate with anyone seeking real {{intimacy}} and lasting {{companionship}}.",
    zh: "这部小说探讨{{身份|identity}}、{{孤独|loneliness}}与{{归属感|belonging}}——这些主题能引起任何寻求真正{{亲密|intimacy}}和长久{{陪伴|companionship}}之人的共鸣。",
    words: [
      { w:"identity", ph:"/aɪˈdentəti/", m:"n. 身份;特性;认同", tip:"ident(相同)+ity → 是谁 → 身份" },
      { w:"loneliness", ph:"/ˈləʊnlinəs/", m:"n. 孤独;寂寞", tip:"lonely(孤独的)+ness → 孤独" },
      { w:"belonging", ph:"/bɪˈlɒŋɪŋ/", m:"n. 归属感;(pl.)财物", tip:"belong(属于)+ing → 归属感" },
      { w:"intimacy", ph:"/ˈɪntɪməsi/", m:"n. 亲密;密切", tip:"intim(最内 inmost)+acy → 亲密" },
      { w:"companionship", ph:"/kəmˈpæniənʃɪp/", m:"n. 陪伴;友谊", tip:"companion(同伴)+ship → 陪伴" }
    ] },
  { id: 100,
    en: "Good leaders {{delegate}} tasks, {{oversee}} teams, {{prioritize}} goals, {{allocate}} resources wisely, and {{assign}} duties fairly.",
    zh: "优秀的领导者会{{委派|delegate}}任务、{{统管|oversee}}团队、{{排定优先级|prioritize}}目标、明智地{{分配|allocate}}资源,并公平地{{指派|assign}}职责。",
    words: [
      { w:"delegate", ph:"/ˈdelɪɡeɪt/", m:"vt. 委派 n. 代表", tip:"de+leg(派遣 legate)→ 派下去 → 委派" },
      { w:"oversee", ph:"/ˌəʊvəˈsiː/", m:"vt. 监督;管理", tip:"over(上)+see(看)→ 从上看 → 监管" },
      { w:"prioritize", ph:"/praɪˈɒrətaɪz/", m:"vt. 优先处理;排序", tip:"priority(优先)+ize → 排优先级" },
      { w:"allocate", ph:"/ˈæləkeɪt/", m:"vt. 分配;拨给", tip:"al+loc(地方 locate)→ 分到各处 → 分配" },
      { w:"assign", ph:"/əˈsaɪn/", m:"vt. 分派;指定", tip:"as+sign(签 → 签派)→ 指派" }
    ] },
  { id: 101,
    en: "The {{unstable}} peace could {{collapse}} if either side chose to {{retaliate}}, so envoys rushed to {{mediate}} and {{ease}} the tension.",
    zh: "若任何一方选择{{报复|retaliate}},这{{不稳定的|unstable}}和平就可能{{崩溃|collapse}},于是使节们急忙去{{调停|mediate}},以{{缓和|ease}}紧张局势。",
    words: [
      { w:"unstable", ph:"/ʌnˈsteɪbl/", m:"adj. 不稳定的;易变的", tip:"un(不)+stable(稳定)→ 不稳定" },
      { w:"collapse", ph:"/kəˈlæps/", m:"vi./n. 倒塌;崩溃", tip:"col(共)+lapse(滑落)→ 整体塌下 → 崩溃" },
      { w:"retaliate", ph:"/rɪˈtælieɪt/", m:"vi. 报复;反击", tip:"re(回)+tali(同 → 以牙还牙)→ 报复" },
      { w:"mediate", ph:"/ˈmiːdieɪt/", m:"v. 调停;斡旋", tip:"medi(中间)+ate → 居中调和 → 调停" },
      { w:"ease", ph:"/iːz/", m:"vt. 缓和;减轻 n. 容易", tip:"easy(容易)→ 使变松 → 缓和" }
    ] },
  { id: 102,
    en: "The professor will {{illustrate}} the idea, {{clarify}} a hard term, {{summarize}} the chapter, and {{highlight}} what students must {{memorize}}.",
    zh: "教授会{{举例说明|illustrate}}这个观点、{{澄清|clarify}}难词、{{总结|summarize}}本章,并{{强调|highlight}}学生必须{{记住|memorize}}的内容。",
    words: [
      { w:"illustrate", ph:"/ˈɪləstreɪt/", m:"vt. 举例说明;图解", tip:"il+lustr(光 → 照亮)→ 照清楚 → 说明" },
      { w:"clarify", ph:"/ˈklærəfaɪ/", m:"vt. 澄清;阐明", tip:"clar(清 clear)+ify → 使清楚 → 澄清" },
      { w:"summarize", ph:"/ˈsʌməraɪz/", m:"vt. 总结;概述", tip:"summary(摘要)+ize → 概括 → 总结" },
      { w:"highlight", ph:"/ˈhaɪlaɪt/", m:"vt. 强调;突出 n. 亮点", tip:"high(高)+light(光)→ 打亮 → 突出" },
      { w:"memorize", ph:"/ˈmeməraɪz/", m:"vt. 记住;背诵", tip:"memory(记忆)+ize → 记住" }
    ] },
  { id: 103,
    en: "A {{heartfelt}} apology should {{acknowledge}} the harm, {{admit}} the fault, {{compensate}} the loss, and {{rebuild}} broken trust.",
    zh: "{{真诚的|heartfelt}}道歉应当{{承认|acknowledge}}伤害、{{坦承|admit}}过错、{{补偿|compensate}}损失,并{{重建|rebuild}}破裂的信任。",
    words: [
      { w:"heartfelt", ph:"/ˈhɑːtfelt/", m:"adj. 衷心的;真诚的", tip:"heart(心)+felt(感受)→ 发自内心 → 真诚" },
      { w:"acknowledge", ph:"/əkˈnɒlɪdʒ/", m:"vt. 承认;致谢", tip:"ac+knowledge(知道)→ 认了 → 承认" },
      { w:"admit", ph:"/ədˈmɪt/", m:"vt. 承认;准许进入", tip:"ad+mit(送)→ 把真相放进来 → 承认" },
      { w:"compensate", ph:"/ˈkɒmpenseɪt/", m:"v. 补偿;弥补", tip:"com+pens(称量 → 抵)→ 抵上 → 补偿" },
      { w:"rebuild", ph:"/ˌriːˈbɪld/", m:"vt. 重建;重新建立", tip:"re(重新)+build(建)→ 重建" }
    ] },
  { id: 104,
    en: "The {{remote}} village stayed {{isolated}} for years, but a new road helped it {{modernize}}, {{prosper}}, and finally {{advance}}.",
    zh: "这个{{偏远的|remote}}村庄多年来一直{{与世隔绝|isolated}},但一条新路帮助它{{现代化|modernize}}、{{繁荣|prosper}},并最终{{进步|advance}}。",
    words: [
      { w:"remote", ph:"/rɪˈməʊt/", m:"adj. 偏远的;遥远的", tip:"re+mote(移 move)→ 移得远 → 偏远" },
      { w:"isolated", ph:"/ˈaɪsəleɪtɪd/", m:"adj. 孤立的;隔绝的", tip:"isol(岛 isle)→ 像孤岛 → 隔绝" },
      { w:"modernize", ph:"/ˈmɒdənaɪz/", m:"vt. 使现代化", tip:"modern(现代)+ize → 现代化" },
      { w:"prosper", ph:"/ˈprɒspə/", m:"vi. 繁荣;兴旺", tip:"pro(前)+sper(希望)→ 前景好 → 繁荣" },
      { w:"advance", ph:"/ədˈvɑːns/", m:"v. 前进;进步 n. 进展", tip:"adv(前)+ance → 向前 → 进步" }
    ] },
  { id: 105,
    en: "The committee voted to {{ban}} the product, {{impose}} a fine, {{prohibit}} false ads, and {{regulate}} the whole {{sector}}.",
    zh: "委员会投票决定{{禁止|ban}}该产品、{{处以|impose}}罚款、{{禁止|prohibit}}虚假广告,并{{监管|regulate}}整个{{行业|sector}}。",
    words: [
      { w:"ban", ph:"/bæn/", m:"vt./n. 禁止;禁令", tip:"谐音'扳':一扳脸禁止 → 禁止" },
      { w:"impose", ph:"/ɪmˈpəʊz/", m:"vt. 强加;征(税/罚)", tip:"im(上)+pose(放)→ 强压上 → 强加" },
      { w:"prohibit", ph:"/prəˈhɪbɪt/", m:"vt. 禁止;阻止", tip:"pro(前)+hibit(拿住)→ 拦在前 → 禁止" },
      { w:"regulate", ph:"/ˈreɡjuleɪt/", m:"vt. 管理;调节;监管", tip:"regul(规则)+ate → 立规矩 → 监管" },
      { w:"sector", ph:"/ˈsektə/", m:"n. 部门;行业;扇形", tip:"sect(切)+or → 切出的一块 → 部门" }
    ] },
  { id: 106,
    en: "An {{eloquent}} speaker can {{captivate}} a crowd, {{stir}} deep thought, {{evoke}} emotion, and {{sway}} listeners to act.",
    zh: "{{雄辩的|eloquent}}演讲者能{{吸引|captivate}}人群、{{激起|stir}}深思、{{唤起|evoke}}情感,并{{打动|sway}}听众行动。",
    words: [
      { w:"eloquent", ph:"/ˈeləkwənt/", m:"adj. 雄辩的;有口才的", tip:"e(出)+loqu(说 → loquacious)→ 能说会道 → 雄辩" },
      { w:"captivate", ph:"/ˈkæptɪveɪt/", m:"vt. 迷住;吸引", tip:"capt(抓 capture)→ 抓住人心 → 迷住" },
      { w:"stir", ph:"/stɜː/", m:"vt. 激起;搅动", tip:"谐音'搅':搅动情绪 → 激起" },
      { w:"evoke", ph:"/iˈvəʊk/", m:"vt. 唤起;引起", tip:"e(出)+voke(喊)→ 喊出来 → 唤起" },
      { w:"sway", ph:"/sweɪ/", m:"vt. 影响;使动摇 v. 摇摆", tip:"谐音'甩':左右摇 → 左右人心 → 影响" }
    ] },
  { id: 107,
    en: "When demand {{exceeds}} supply, prices {{soar}}; when stock {{accumulates}}, prices {{plunge}}, and the market may slowly {{rebound}}.",
    zh: "当需求{{超过|exceed}}供给,价格{{飙升|soar}};当库存{{积压|accumulate}},价格{{暴跌|plunge}},市场随后可能缓慢{{反弹|rebound}}。",
    words: [
      { w:"exceed", ph:"/ɪkˈsiːd/", m:"vt. 超过;超出", tip:"ex(出)+ceed(走)→ 走出界 → 超过" },
      { w:"soar", ph:"/sɔː/", m:"vi. 猛增;高飞", tip:"谐音'扫':直冲云霄 → 飙升" },
      { w:"accumulate", ph:"/əˈkjuːmjuleɪt/", m:"v. 积累;积聚", tip:"ac+cumul(堆 cumulus 积云)→ 堆积 → 积累" },
      { w:"plunge", ph:"/plʌndʒ/", m:"vi. 暴跌;猛跌;投入", tip:"谐音'扑浪去':一头扎下 → 暴跌" },
      { w:"rebound", ph:"/rɪˈbaʊnd/", m:"vi. 反弹;回升", tip:"re(回)+bound(弹)→ 弹回 → 反弹" }
    ] },
  { id: 108,
    en: "The {{durable}} fabric is {{waterproof}} and {{lightweight}}, making the jacket both {{practical}} and surprisingly {{affordable}}.",
    zh: "这种{{耐用的|durable}}面料{{防水|waterproof}}又{{轻便|lightweight}},使这件夹克既{{实用|practical}}又出奇地{{实惠|affordable}}。",
    words: [
      { w:"durable", ph:"/ˈdjʊərəbl/", m:"adj. 耐用的;持久的", tip:"dur(持续 during)+able → 耐用" },
      { w:"waterproof", ph:"/ˈwɔːtəpruːf/", m:"adj. 防水的", tip:"water(水)+proof(防)→ 防水" },
      { w:"lightweight", ph:"/ˈlaɪtweɪt/", m:"adj. 轻量的 n. 轻量级", tip:"light(轻)+weight(重量)→ 轻便" },
      { w:"practical", ph:"/ˈpræktɪkl/", m:"adj. 实用的;务实的", tip:"practice(实践)+al → 实用" },
      { w:"affordable", ph:"/əˈfɔːdəbl/", m:"adj. 负担得起的;实惠的", tip:"afford(负担得起)+able → 实惠" }
    ] },
  { id: 109,
    en: "The {{ambitious}} plan was {{feasible}} only if the team stayed {{determined}}, worked with {{dedication}}, and showed real {{resilience}}.",
    zh: "这个{{雄心勃勃的|ambitious}}计划只有在团队保持{{坚定|determined}}、以{{奉献|dedication}}精神工作并展现真正的{{韧性|resilience}}时才{{可行|feasible}}。",
    words: [
      { w:"ambitious", ph:"/æmˈbɪʃəs/", m:"adj. 雄心勃勃的;有野心的", tip:"ambition(抱负)+ous → 有抱负" },
      { w:"feasible", ph:"/ˈfiːzəbl/", m:"adj. 可行的;行得通的", tip:"feas(做 fact)+ible → 做得成 → 可行" },
      { w:"determined", ph:"/dɪˈtɜːmɪnd/", m:"adj. 坚定的;下定决心的", tip:"determine(决定)+d → 已决心 → 坚定" },
      { w:"dedication", ph:"/ˌdedɪˈkeɪʃn/", m:"n. 奉献;专注", tip:"dedicate(献身)+ion → 奉献" },
      { w:"resilience", ph:"/rɪˈzɪliəns/", m:"n. 韧性;恢复力", tip:"re(回)+sil(跳 → 弹回)→ 弹得回 → 韧性" }
    ] },
  { id: 110,
    en: "A {{competent}} nurse must be {{patient}}, {{attentive}}, {{punctual}}, and {{compassionate}} toward every frightened patient.",
    zh: "{{称职的|competent}}护士必须{{耐心|patient}}、{{专注|attentive}}、{{守时|punctual}},并对每位受惊的病人怀有{{同情心|compassionate}}。",
    words: [
      { w:"competent", ph:"/ˈkɒmpɪtənt/", m:"adj. 称职的;有能力的", tip:"compete(胜任)+ent → 能胜任 → 称职" },
      { w:"patient", ph:"/ˈpeɪʃnt/", m:"adj. 耐心的 n. 病人", tip:"pati(忍受)+ent → 能忍 → 耐心" },
      { w:"attentive", ph:"/əˈtentɪv/", m:"adj. 专注的;周到的", tip:"attend(注意)+ive → 专注" },
      { w:"punctual", ph:"/ˈpʌŋktʃuəl/", m:"adj. 准时的;守时的", tip:"punct(点 point)→ 卡在点上 → 准时" },
      { w:"compassionate", ph:"/kəmˈpæʃənət/", m:"adj. 有同情心的", tip:"com(共)+passion(受苦)→ 同其苦 → 同情" }
    ] },
  { id: 111,
    en: "The {{impartial}} reporter promised to verify each {{source}}, expose any {{corruption}}, defend the right to {{scrutiny}}, and stay {{trustworthy}}.",
    zh: "{{公正的|impartial}}记者承诺核实每个{{消息来源|source}}、揭露任何{{腐败|corruption}}、捍卫{{监督|scrutiny}}权,并保持{{值得信赖|trustworthy}}。",
    words: [
      { w:"impartial", ph:"/ɪmˈpɑːʃl/", m:"adj. 公正的;不偏不倚的", tip:"im(不)+partial(偏袒的)→ 不偏 → 公正" },
      { w:"source", ph:"/sɔːs/", m:"n. 来源;消息源", tip:"sour(涌出 surge)→ 源头 → 来源" },
      { w:"corruption", ph:"/kəˈrʌpʃn/", m:"n. 腐败;贪污", tip:"cor+rupt(断裂)→ 道德崩坏 → 腐败" },
      { w:"scrutiny", ph:"/ˈskruːtəni/", m:"n. 仔细审查;监督", tip:"scrut(察看)+iny → 细看 → 审查" },
      { w:"trustworthy", ph:"/ˈtrʌstwɜːði/", m:"adj. 值得信赖的;可靠的", tip:"trust(信任)+worthy(值得)→ 值得信赖" }
    ] },
  { id: 112,
    en: "Climate talks aim to {{pledge}} cuts, {{tighten}} limits, {{monitor}} each {{pollutant}}, and {{curb}} the rise in temperature.",
    zh: "气候谈判旨在{{承诺|pledge}}减排、{{收紧|tighten}}限额、{{监测|monitor}}每种{{污染物|pollutant}},并{{遏制|curb}}气温上升。",
    words: [
      { w:"pledge", ph:"/pledʒ/", m:"vt./n. 保证;承诺;抵押", tip:"谐音'破累着':立誓 → 承诺" },
      { w:"tighten", ph:"/ˈtaɪtn/", m:"v. 收紧;变紧", tip:"tight(紧)+en → 使更紧 → 收紧" },
      { w:"monitor", ph:"/ˈmɒnɪtə/", m:"vt. 监测 n. 显示器;班长", tip:"moni(警告 → 盯)→ 盯着 → 监测" },
      { w:"pollutant", ph:"/pəˈluːtənt/", m:"n. 污染物", tip:"pollute(污染)+ant → 污染物" },
      { w:"curb", ph:"/kɜːb/", m:"vt. 遏制;控制 n. 路缘", tip:"谐音'卡步':勒住 → 遏制" }
    ] },
  { id: 113,
    en: "The {{innovative}} firm rolled out a {{cutting-edge}} chip, filed a key {{patent}}, and gained a clear {{advantage}} over every {{competitor}}.",
    zh: "这家{{创新的|innovative}}公司推出一款{{尖端的|cutting-edge}}芯片,申请了关键{{专利|patent}},并取得了对每个{{竞争对手|competitor}}的明显{{优势|advantage}}。",
    words: [
      { w:"innovative", ph:"/ˈɪnəveɪtɪv/", m:"adj. 创新的;革新的", tip:"innovate(创新)+ive → 创新的" },
      { w:"cutting-edge", ph:"/ˌkʌtɪŋ ˈedʒ/", m:"adj. 尖端的;前沿的", tip:"cutting edge(刀刃)→ 最前沿 → 尖端" },
      { w:"patent", ph:"/ˈpætnt/", m:"n. 专利 adj. 专利的", tip:"pat(公开 → 公开保护)→ 专利" },
      { w:"advantage", ph:"/ədˈvɑːntɪdʒ/", m:"n. 优势;有利条件", tip:"advant(在前 advance)+age → 领先 → 优势" },
      { w:"competitor", ph:"/kəmˈpetɪtə/", m:"n. 竞争者;对手", tip:"compete(竞争)+itor → 竞争者" }
    ] },
  { id: 114,
    en: "A wise investor will {{diversify}} holdings, {{weigh}} each {{risk}}, ignore market {{rumour}}, and hold for the long {{term}}.",
    zh: "聪明的投资者会{{分散|diversify}}持仓、{{权衡|weigh}}每项{{风险|risk}}、无视市场{{谣言|rumour}},并长{{期|term}}持有。",
    words: [
      { w:"diversify", ph:"/daɪˈvɜːsɪfaɪ/", m:"vt. 使多样化;分散(投资)", tip:"diverse(多样)+ify → 弄多样 → 分散" },
      { w:"weigh", ph:"/weɪ/", m:"vt. 权衡;称重", tip:"weight(重量)→ 掂量 → 权衡" },
      { w:"risk", ph:"/rɪsk/", m:"n. 风险 vt. 冒…险", tip:"谐音'瑞斯克':可能赔 → 风险" },
      { w:"rumour", ph:"/ˈruːmə/", m:"n. 谣言;传闻", tip:"谐音'入末':没影的话 → 谣言" },
      { w:"term", ph:"/tɜːm/", m:"n. 期限;术语;学期", tip:"谐音'特么':一段时间 → 期限" }
    ] },
  { id: 115,
    en: "The {{magnificent}} palace, with its {{splendid}} halls and {{exquisite}} carvings, is a {{spectacular}} {{landmark}} of the old capital.",
    zh: "这座{{宏伟的|magnificent}}宫殿,凭借其{{壮丽的|splendid}}厅堂和{{精美的|exquisite}}雕刻,是这座古都{{壮观的|spectacular}}{{地标|landmark}}。",
    words: [
      { w:"magnificent", ph:"/mæɡˈnɪfɪsnt/", m:"adj. 宏伟的;壮丽的", tip:"magni(大 magnify)+fic(做)→ 做得宏大 → 宏伟" },
      { w:"splendid", ph:"/ˈsplendɪd/", m:"adj. 壮丽的;极好的", tip:"splend(发光 → splendor)→ 光彩夺目 → 壮丽" },
      { w:"exquisite", ph:"/ɪkˈskwɪzɪt/", m:"adj. 精美的;精致的", tip:"ex+quisit(寻 → 精挑)→ 精挑细选 → 精美" },
      { w:"spectacular", ph:"/spekˈtækjələ/", m:"adj. 壮观的;惊人的", tip:"spect(看)+acular → 值得一看 → 壮观" },
      { w:"landmark", ph:"/ˈlændmɑːk/", m:"n. 地标;里程碑", tip:"land(地)+mark(标)→ 地标" }
    ] },
  { id: 116,
    en: "The therapist helped him {{endure}} grief, {{withstand}} fear, {{regain}} hope, {{embrace}} change, and recover his {{optimism}}.",
    zh: "治疗师帮助他{{忍受|endure}}悲伤、{{抵御|withstand}}恐惧、{{重获|regain}}希望、{{欣然接受|embrace}}改变,并恢复他的{{乐观|optimism}}。",
    words: [
      { w:"endure", ph:"/ɪnˈdjʊə/", m:"vt. 忍受;持久", tip:"en+dur(持续 during)→ 撑下去 → 忍受" },
      { w:"withstand", ph:"/wɪðˈstænd/", m:"vt. 抵御;经受住", tip:"with(对抗)+stand(站)→ 顶住 → 抵御" },
      { w:"regain", ph:"/rɪˈɡeɪn/", m:"vt. 重获;恢复", tip:"re(再)+gain(获得)→ 重获" },
      { w:"embrace", ph:"/ɪmˈbreɪs/", m:"vt. 拥抱;欣然接受", tip:"em+brace(臂 → 张臂)→ 拥抱 → 接受" },
      { w:"optimism", ph:"/ˈɒptɪmɪzəm/", m:"n. 乐观;乐观主义", tip:"optim(最好)+ism → 乐观" }
    ] },
  { id: 117,
    en: "The audit found that the firm tried to {{conceal}} losses, {{manipulate}} figures, {{defraud}} investors, and {{evade}} every {{liability}}.",
    zh: "审计发现该公司试图{{隐瞒|conceal}}亏损、{{操纵|manipulate}}数据、{{诈骗|defraud}}投资者,并{{逃避|evade}}一切{{责任|liability}}。",
    words: [
      { w:"conceal", ph:"/kənˈsiːl/", m:"vt. 隐藏;隐瞒", tip:"con+ceal(盖 → ceiling)→ 盖住 → 隐瞒" },
      { w:"manipulate", ph:"/məˈnɪpjuleɪt/", m:"vt. 操纵;操控", tip:"mani(手 manual)+pul(拉)→ 手里摆弄 → 操纵" },
      { w:"defraud", ph:"/dɪˈfrɔːd/", m:"vt. 诈骗;骗取", tip:"de+fraud(欺诈)→ 诈骗" },
      { w:"evade", ph:"/iˈveɪd/", m:"vt. 逃避;规避", tip:"e(出)+vade(走 → invade)→ 溜走 → 逃避" },
      { w:"liability", ph:"/ˌlaɪəˈbɪləti/", m:"n. 责任;债务;累赘", tip:"liable(有责任的)+ity → 责任" }
    ] },
  { id: 118,
    en: "To win the bid, the company must {{comply}} with rules, {{submit}} documents, {{tender}} a fair price, and {{fulfil}} every {{obligation}}.",
    zh: "为了中标,公司必须{{遵守|comply}}规则、{{提交|submit}}文件、{{投标|tender}}公道价格,并{{履行|fulfil}}每一项{{义务|obligation}}。",
    words: [
      { w:"comply", ph:"/kəmˈplaɪ/", m:"vi.(comply with)遵守;服从", tip:"com+ply(弯 → 顺从)→ 顺从 → 遵守" },
      { w:"submit", ph:"/səbˈmɪt/", m:"v. 提交;服从", tip:"sub(下)+mit(送)→ 呈递上去 → 提交" },
      { w:"tender", ph:"/ˈtendə/", m:"v. 投标;提出 adj. 温柔的", tip:"tend(伸出 → 递上)→ 递上标书 → 投标" },
      { w:"fulfil", ph:"/fʊlˈfɪl/", m:"vt. 履行;实现;满足", tip:"ful(满 full)+fil(填 fill)→ 填满 → 履行" },
      { w:"obligation", ph:"/ˌɒblɪˈɡeɪʃn/", m:"n. 义务;责任", tip:"ob+lig(捆 → 束缚)→ 被束缚 → 义务" }
    ] },
  { id: 119,
    en: "The volunteers gathered to {{distribute}} food, {{reassure}} the {{victims}}, {{organize}} aid, and {{renew}} hope in the flooded town.",
    zh: "志愿者们聚集起来{{分发|distribute}}食物、{{安抚|reassure}}{{受灾者|victim}}、{{组织|organize}}援助,并为被淹的小镇{{重燃|renew}}希望。",
    words: [
      { w:"distribute", ph:"/dɪˈstrɪbjuːt/", m:"vt. 分发;分配", tip:"dis(分开)+tribute(给)→ 分给 → 分发" },
      { w:"reassure", ph:"/ˌriːəˈʃʊə/", m:"vt. 使安心;安抚", tip:"re+assure(保证)→ 反复保证 → 安抚" },
      { w:"victim", ph:"/ˈvɪktɪm/", m:"n. 受害者;牺牲品", tip:"谐音'未克他们':遭殃的人 → 受害者" },
      { w:"organize", ph:"/ˈɔːɡənaɪz/", m:"vt. 组织;安排", tip:"organ(器官 → 有机体)+ize → 使有条理 → 组织" },
      { w:"renew", ph:"/rɪˈnjuː/", m:"vt. 更新;重燃;续订", tip:"re(再)+new(新)→ 重新 → 更新" }
    ] },
  { id: 120,
    en: "A balanced life lets you {{relax}}, {{recharge}}, {{reflect}} on goals, {{appreciate}} small joys, and {{flourish}} day by day.",
    zh: "平衡的生活让你{{放松|relax}}、{{充电|recharge}}、{{反思|reflect}}目标、{{欣赏|appreciate}}小确幸,并日益{{蓬勃|flourish}}。",
    words: [
      { w:"relax", ph:"/rɪˈlæks/", m:"v. 放松;松弛", tip:"re+lax(松 → lax)→ 放松" },
      { w:"recharge", ph:"/ˌriːˈtʃɑːdʒ/", m:"v. 再充电;恢复精力", tip:"re(再)+charge(充)→ 再充电" },
      { w:"reflect", ph:"/rɪˈflekt/", m:"v. 反思;反射;反映", tip:"re(回)+flect(弯 → 折回)→ 折回想 → 反思" },
      { w:"appreciate", ph:"/əˈpriːʃieɪt/", m:"vt. 欣赏;感激;领会", tip:"ap+preci(价值 price)→ 看到价值 → 欣赏" },
      { w:"flourish", ph:"/ˈflʌrɪʃ/", m:"vi. 繁荣;茂盛", tip:"flour(花 flower)→ 开花 → 茂盛" }
    ] },
  { id: 121,
    en: "After an {{abrupt}} decision to {{abandon}} the old plan, the team chose to {{absorb}} new ideas, make the tool more {{accessible}}, and won wide {{acclaim}}.",
    zh: "在{{突然|abrupt}}决定{{放弃|abandon}}旧方案后,团队选择{{吸收|absorb}}新想法、让工具更{{易用|accessible}},并赢得广泛{{赞誉|acclaim}}。",
    words: [
      { w:"abrupt", ph:"/əˈbrʌpt/", m:"adj. 突然的;唐突的", tip:"ab+rupt(断裂)→ 突然断开 → 突然" },
      { w:"abandon", ph:"/əˈbændən/", m:"vt. 放弃;遗弃", tip:"谐音'我born灯':弃之不顾 → 放弃" },
      { w:"absorb", ph:"/əbˈzɔːb/", m:"vt. 吸收;使专注", tip:"ab+sorb(吸)→ 吸进去 → 吸收" },
      { w:"accessible", ph:"/əkˈsesəbl/", m:"adj. 易接近的;可使用的", tip:"access(进入)+ible → 可进入 → 易用" },
      { w:"acclaim", ph:"/əˈkleɪm/", m:"n./vt. 称赞;欢呼", tip:"ac+claim(喊)→ 齐声喊好 → 称赞" }
    ] },
  { id: 122,
    en: "In {{accord}} with strict rules, the {{acute}} nurse must {{adhere}} to procedures, watch the {{adjacent}} ward, and {{administer}} medicine on time.",
    zh: "为与严格规章保持{{一致|accord}},这位{{敏锐的|acute}}护士必须{{遵守|adhere}}流程、照看{{邻近的|adjacent}}病房,并按时{{给药|administer}}。",
    words: [
      { w:"accord", ph:"/əˈkɔːd/", m:"n. 一致 v. 给予;符合", tip:"ac+cord(心)→ 心一致 → 一致" },
      { w:"acute", ph:"/əˈkjuːt/", m:"adj. 敏锐的;严重的;急性的", tip:"谐音'我Q他':反应快 → 敏锐" },
      { w:"adhere", ph:"/ədˈhɪə/", m:"vi. 黏附;坚持;遵守", tip:"ad+here(黏)→ 黏住 → 坚持/遵守" },
      { w:"adjacent", ph:"/əˈdʒeɪsnt/", m:"adj. 邻近的;毗连的", tip:"ad+jac(躺 → 挨着躺)→ 邻近" },
      { w:"administer", ph:"/ədˈmɪnɪstə/", m:"vt. 管理;给予(药)", tip:"administ(管理 → minister 部长)→ 管理/施行" }
    ] },
  { id: 123,
    en: "Despite {{adverse}} conditions, experts {{affirm}} that the {{aggregate}} data, though it may {{agitate}} the public, is {{akin}} to earlier trends.",
    zh: "尽管条件{{不利|adverse}},专家{{断言|affirm}},这些{{总计的|aggregate}}数据虽可能{{使…不安|agitate}}公众,却与早先趋势{{类似|akin}}。",
    words: [
      { w:"adverse", ph:"/ˈædvɜːs/", m:"adj. 不利的;相反的", tip:"ad+vers(转)→ 转着对着干 → 不利" },
      { w:"affirm", ph:"/əˈfɜːm/", m:"vt. 断言;肯定;证实", tip:"af+firm(坚定)→ 坚定地说 → 断言" },
      { w:"aggregate", ph:"/ˈæɡrɪɡət/", m:"adj. 总计的 n. 总数", tip:"ag+greg(群 → 聚集)→ 聚成总数 → 总计" },
      { w:"agitate", ph:"/ˈædʒɪteɪt/", m:"vt. 使焦虑;煽动;搅动", tip:"agit(驱动 act)→ 搅动情绪 → 使不安" },
      { w:"akin", ph:"/əˈkɪn/", m:"adj. 类似的;同族的", tip:"a+kin(亲属)→ 沾亲 → 类似" }
    ] },
  { id: 124,
    en: "Critics {{allege}} the {{aloof}} official did little to {{alleviate}} poverty despite {{ample}} funds, drawing an {{analogy}} with past failures.",
    zh: "批评者{{声称|allege}},这位{{冷漠的|aloof}}官员虽有{{充足的|ample}}资金却几乎未能{{缓解|alleviate}}贫困,并以往日的失败作{{类比|analogy}}。",
    words: [
      { w:"allege", ph:"/əˈledʒ/", m:"vt. 断言;指控(未证实)", tip:"al+lege(说 → legal)→ 单方面说 → 声称" },
      { w:"aloof", ph:"/əˈluːf/", m:"adj. 冷漠的;疏远的", tip:"a+loof(远)→ 离得远 → 冷漠" },
      { w:"alleviate", ph:"/əˈliːvieɪt/", m:"vt. 减轻;缓解", tip:"al+lev(轻 light)→ 使变轻 → 减轻" },
      { w:"ample", ph:"/ˈæmpl/", m:"adj. 充足的;宽敞的", tip:"谐音'俺谱了':底气足 → 充足" },
      { w:"analogy", ph:"/əˈnælədʒi/", m:"n. 类比;相似", tip:"ana(类)+logy(说)→ 类比" }
    ] },
  { id: 125,
    en: "An {{anonymous}} tip helped police {{apprehend}} the thief; the news {{anchor}} reported it to loud {{applause}} as new {{apparatus}} arrived.",
    zh: "一条{{匿名的|anonymous}}线报帮警方{{逮捕|apprehend}}了窃贼;新闻{{主播|anchor}}在新{{设备|apparatus}}到位时报道此事,引来热烈{{掌声|applause}}。",
    words: [
      { w:"anonymous", ph:"/əˈnɒnɪməs/", m:"adj. 匿名的;无名的", tip:"an(无)+onym(名 name)→ 无名 → 匿名" },
      { w:"apprehend", ph:"/ˌæprɪˈhend/", m:"vt. 逮捕;理解;忧虑", tip:"ap+prehend(抓)→ 抓住 → 逮捕" },
      { w:"anchor", ph:"/ˈæŋkə/", m:"n. 锚;主播 vt. 固定", tip:"锚定全场 → 主播" },
      { w:"applause", ph:"/əˈplɔːz/", m:"n. 鼓掌;喝彩", tip:"applaud(鼓掌)的名词 → 掌声" },
      { w:"apparatus", ph:"/ˌæpəˈreɪtəs/", m:"n. 设备;器械;机构", tip:"ap+par(准备 prepare)→ 备好的器械 → 设备" }
    ] },
  { id: 126,
    en: "The {{apt}} player, an {{ardent}} fan favourite, made an {{arbitrary}} move, traced a perfect {{arc}}, and silenced the whole {{arena}}.",
    zh: "这位{{恰当的|apt}}球员、{{热情的|ardent}}球迷宠儿,做了一个{{随意的|arbitrary}}动作,划出完美的{{弧线|arc}},让整个{{竞技场|arena}}鸦雀无声。",
    words: [
      { w:"apt", ph:"/æpt/", m:"adj. 恰当的;易于…的;聪明的", tip:"谐音'爱普它':正合适 → 恰当" },
      { w:"ardent", ph:"/ˈɑːdnt/", m:"adj. 热情的;热心的", tip:"ard(燃烧 → ardor)+ent → 火热 → 热情" },
      { w:"arbitrary", ph:"/ˈɑːbɪtrəri/", m:"adj. 任意的;武断的", tip:"arbiter(裁判)→ 凭裁判一句 → 武断" },
      { w:"arc", ph:"/ɑːk/", m:"n. 弧;弧形", tip:"arch(拱)亲戚 → 弧形" },
      { w:"arena", ph:"/əˈriːnə/", m:"n. 竞技场;舞台;领域", tip:"谐音'阿瑞娜':比武场 → 竞技场" }
    ] },
  { id: 127,
    en: "Students who {{aspire}} to greatness {{assert}} their views, {{assimilate}} knowledge, {{astonish}} teachers, and {{attain}} top marks.",
    zh: "{{渴望|aspire}}卓越的学生会{{主张|assert}}自己的观点、{{吸收|assimilate}}知识、{{使…惊讶|astonish}}老师,并{{取得|attain}}优异成绩。",
    words: [
      { w:"aspire", ph:"/əˈspaɪə/", m:"vi. 渴望;立志", tip:"a+spir(呼吸 spirit)→ 心向往 → 渴望" },
      { w:"assert", ph:"/əˈsɜːt/", m:"vt. 主张;断言;维护", tip:"as+sert(连接 → 加重语气)→ 主张" },
      { w:"assimilate", ph:"/əˈsɪmɪleɪt/", m:"vt. 吸收;同化", tip:"as+simil(相似 similar)→ 化为同类 → 吸收" },
      { w:"astonish", ph:"/əˈstɒnɪʃ/", m:"vt. 使惊讶", tip:"as+ton(雷 → 打雷)→ 惊如雷 → 惊讶" },
      { w:"attain", ph:"/əˈteɪn/", m:"vt. 达到;获得", tip:"at+tain(握)→ 够到 → 达到" }
    ] },
  { id: 128,
    en: "The museum will {{attribute}} the {{authentic}} painting to a master, {{authorize}} its display, grant the curator {{autonomy}}, and {{avail}} visitors of free tours.",
    zh: "博物馆会把这幅{{真迹|authentic}}{{归功于|attribute}}某位大师、{{授权|authorize}}展出、给予馆长{{自主权|autonomy}},并让游客{{得益于|avail}}免费导览。",
    words: [
      { w:"attribute", ph:"/əˈtrɪbjuːt/", m:"vt. 归因于 n. 属性", tip:"at+tribute(给予)→ 把功劳给 → 归因" },
      { w:"authentic", ph:"/ɔːˈθentɪk/", m:"adj. 真正的;可信的", tip:"author(作者)→ 出自本人 → 真品" },
      { w:"authorize", ph:"/ˈɔːθəraɪz/", m:"vt. 授权;批准", tip:"author(权威)+ize → 给权 → 授权" },
      { w:"autonomy", ph:"/ɔːˈtɒnəmi/", m:"n. 自治;自主权", tip:"auto(自)+nomy(治)→ 自治" },
      { w:"avail", ph:"/əˈveɪl/", m:"vt. 有益于 n. 效用", tip:"a+vail(力量 value)→ 有用 → 有益" }
    ] },
  { id: 129,
    en: "Standing in {{awe}} on the {{barren}} hill, the {{awkward}} boy saw a lighthouse {{beam}} {{beckon}} him home.",
    zh: "站在{{贫瘠的|barren}}山丘上心怀{{敬畏|awe}},这个{{笨拙的|awkward}}男孩看见灯塔的{{光束|beam}}在{{召唤|beckon}}他回家。",
    words: [
      { w:"awe", ph:"/ɔː/", m:"n. 敬畏 vt. 使敬畏", tip:"谐音'噢':肃然 → 敬畏" },
      { w:"barren", ph:"/ˈbærən/", m:"adj. 贫瘠的;不育的", tip:"bare(光秃)+ren → 寸草不生 → 贫瘠" },
      { w:"awkward", ph:"/ˈɔːkwəd/", m:"adj. 笨拙的;尴尬的", tip:"谐音'呕克沃德':别扭 → 尴尬/笨拙" },
      { w:"beam", ph:"/biːm/", m:"n. 光束;梁 vi. 微笑", tip:"谐音'必莫':一道光 → 光束" },
      { w:"beckon", ph:"/ˈbekən/", m:"v. 招手;召唤;吸引", tip:"beck(点头)+on → 招手 → 召唤" }
    ] },
  { id: 130,
    en: "The {{bleak}} winter may {{bewilder}} farmers, but after a cold {{blast}} the {{blunt}} branches soon {{blossom}} again.",
    zh: "{{荒凉的|bleak}}冬天可能让农民{{困惑|bewilder}},但在一阵冷{{风|blast}}之后,那些{{秃钝的|blunt}}枝条很快又会{{开花|blossom}}。",
    words: [
      { w:"bleak", ph:"/bliːk/", m:"adj. 荒凉的;暗淡的", tip:"black(黑)亲戚 → 暗淡 → 荒凉" },
      { w:"bewilder", ph:"/bɪˈwɪldə/", m:"vt. 使迷惑;使昏乱", tip:"be+wild(野 → 乱)→ 弄乱头脑 → 迷惑" },
      { w:"blast", ph:"/blɑːst/", m:"n. 一阵(风);爆炸 vt. 炸", tip:"谐音'不拉死它':一阵猛劲 → 爆炸/一阵" },
      { w:"blunt", ph:"/blʌnt/", m:"adj. 钝的;直率的 vt. 使钝", tip:"谐音'不浪头':不锋利 → 钝" },
      { w:"blossom", ph:"/ˈblɒsəm/", m:"vi. 开花;兴旺 n. 花", tip:"bloom(开花)亲戚 → 开花" }
    ] },
  { id: 131,
    en: "A scientific {{breakthrough}} crossed every {{boundary}}, {{bred}} new hope, earned a {{bonus}}, yet risked a {{breach}} of ethics.",
    zh: "一项科学{{突破|breakthrough}}跨越了一切{{边界|boundary}},{{孕育|breed}}了新希望、赢得{{奖金|bonus}},却也冒着{{违反|breach}}伦理的风险。",
    words: [
      { w:"breakthrough", ph:"/ˈbreɪkθruː/", m:"n. 突破;重大进展", tip:"break(破)+through(穿)→ 突破" },
      { w:"boundary", ph:"/ˈbaʊndri/", m:"n. 边界;界限", tip:"bound(界限)+ary → 边界" },
      { w:"breed", ph:"/briːd/", m:"v. 繁殖;孕育 n. 品种", tip:"谐音'布里的':养出来 → 繁殖" },
      { w:"bonus", ph:"/ˈbəʊnəs/", m:"n. 奖金;额外好处", tip:"bon(好 → bonus)→ 好处 → 奖金" },
      { w:"breach", ph:"/briːtʃ/", m:"n./vt. 违反;破裂", tip:"break 亲戚 → 破坏 → 违反" }
    ] },
  { id: 132,
    en: "On the {{brink}} of collapse, the {{bureau}} took {{brisk}} action to move the {{bulk}} of the {{brittle}} records to safety.",
    zh: "在崩溃的{{边缘|brink}},该{{局|bureau}}采取{{迅速的|brisk}}行动,把{{大部分|bulk}}{{易碎的|brittle}}档案转移到安全处。",
    words: [
      { w:"brink", ph:"/brɪŋk/", m:"n. (悬崖)边缘;濒临", tip:"谐音'不淋克':悬崖边 → 边缘" },
      { w:"bureau", ph:"/ˈbjʊərəʊ/", m:"n. 局;办事处", tip:"谐音'比有偶':政府机构 → 局" },
      { w:"brisk", ph:"/brɪsk/", m:"adj. 轻快的;活跃的", tip:"谐音'不立刻':动作麻利 → 轻快" },
      { w:"bulk", ph:"/bʌlk/", m:"n. 主体;大量;体积", tip:"谐音'包了':一大坨 → 大量" },
      { w:"brittle", ph:"/ˈbrɪtl/", m:"adj. 易碎的;脆弱的", tip:"break 亲戚 → 一掰就碎 → 易碎" }
    ] },
  { id: 133,
    en: "To {{bypass}} traffic, the chef would {{carve}} a shortcut, {{cater}} the {{celestial}}-themed gala, and never {{cease}} to impress.",
    zh: "为{{绕过|bypass}}拥堵,这位大厨会{{开辟|carve}}一条捷径、{{承办|cater}}以{{天空|celestial}}为主题的盛宴,并从不{{停止|cease}}带来惊艳。",
    words: [
      { w:"bypass", ph:"/ˈbaɪpɑːs/", m:"vt. 绕过 n. 旁路", tip:"by(旁)+pass(过)→ 从旁过 → 绕过" },
      { w:"carve", ph:"/kɑːv/", m:"vt. 雕刻;开辟", tip:"谐音'卡夫':刻出来 → 雕刻" },
      { w:"cater", ph:"/ˈkeɪtə/", m:"vi. 承办伙食;迎合", tip:"谐音'凯特':备餐 → 承办" },
      { w:"celestial", ph:"/səˈlestiəl/", m:"adj. 天空的;天的", tip:"cele(天 → ceiling)→ 天上的 → 天空的" },
      { w:"cease", ph:"/siːs/", m:"v. 停止;终止", tip:"谐音'西死':到头 → 停止" }
    ] },
  { id: 134,
    en: "Amid the {{chaos}}, the council met in the {{chamber}} to {{cherish}} old values, {{chronicle}} events, and {{clamp}} down on fraud.",
    zh: "在一片{{混乱|chaos}}中,委员会在{{会议厅|chamber}}开会,以{{珍视|cherish}}旧价值观、{{记录|chronicle}}事件,并{{压制|clamp}}舞弊。",
    words: [
      { w:"chaos", ph:"/ˈkeɪɒs/", m:"n. 混乱;无序", tip:"谐音'凯傲死':乱成一团 → 混乱" },
      { w:"chamber", ph:"/ˈtʃeɪmbə/", m:"n. (会议)厅;室;膛", tip:"谐音'强不':大房间 → 厅" },
      { w:"cherish", ph:"/ˈtʃerɪʃ/", m:"vt. 珍爱;怀有(希望)", tip:"cher(亲爱 → cheri)→ 珍爱" },
      { w:"chronicle", ph:"/ˈkrɒnɪkl/", m:"n. 编年史 vt. 记录", tip:"chron(时间)+icle → 按时间记 → 编年史" },
      { w:"clamp", ph:"/klæmp/", m:"vt. 夹紧;(down)压制 n. 夹钳", tip:"谐音'克拉mp':夹死 → 夹紧/压制" }
    ] },
  { id: 135,
    en: "The {{clumsy}} climber would {{clasp}} the rope, {{cling}} to the {{coarse}} rock, and try not to {{collide}} with falling stones.",
    zh: "那位{{笨拙的|clumsy}}登山者会{{紧握|clasp}}绳索、{{紧贴|cling}}{{粗糙的|coarse}}岩石,并尽量不与落石{{相撞|collide}}。",
    words: [
      { w:"clumsy", ph:"/ˈklʌmzi/", m:"adj. 笨拙的;难处理的", tip:"谐音'克拉姆兹':手脚不灵 → 笨拙" },
      { w:"clasp", ph:"/klɑːsp/", m:"vt. 紧握;扣住 n. 扣子", tip:"clas(=clamp 夹)+p → 紧扣 → 紧握" },
      { w:"cling", ph:"/klɪŋ/", m:"vi. 紧贴;依附;坚持", tip:"谐音'克令':黏住 → 紧贴" },
      { w:"coarse", ph:"/kɔːs/", m:"adj. 粗糙的;粗俗的", tip:"course 同音:不精细 → 粗糙" },
      { w:"collide", ph:"/kəˈlaɪd/", m:"vi. 碰撞;冲突", tip:"col(共)+lide(撞)→ 互撞 → 碰撞" }
    ] },
  { id: 136,
    en: "The city will {{commemorate}} the hero, {{commence}} a ceremony, {{commend}} volunteers, and display each {{compact}} {{commodity}}.",
    zh: "城市将{{纪念|commemorate}}这位英雄、{{开始|commence}}典礼、{{表扬|commend}}志愿者,并展示每一件{{小巧的|compact}}{{商品|commodity}}。",
    words: [
      { w:"commemorate", ph:"/kəˈmeməreɪt/", m:"vt. 纪念;庆祝", tip:"com+memor(记忆 memory)→ 共同记 → 纪念" },
      { w:"commence", ph:"/kəˈmens/", m:"v. 开始;着手", tip:"com+mence(开始)→ 开始" },
      { w:"commend", ph:"/kəˈmend/", m:"vt. 表扬;推荐", tip:"com+mend(命令 → 嘉许)→ 表扬" },
      { w:"compact", ph:"/kəmˈpækt/", m:"adj. 紧凑的;小巧的", tip:"com+pact(压紧)→ 压实 → 紧凑" },
      { w:"commodity", ph:"/kəˈmɒdəti/", m:"n. 商品;日用品", tip:"commod(方便)+ity → 好用的 → 商品" }
    ] },
  { id: 137,
    en: "New rules {{compel}} schools to {{comprise}} core subjects, make ethics {{compulsory}}, {{conform}} to standards, and {{complement}} online study.",
    zh: "新规{{迫使|compel}}学校{{包含|comprise}}核心科目、把伦理设为{{必修的|compulsory}}、{{遵从|conform}}标准,并与在线学习{{互补|complement}}。",
    words: [
      { w:"compel", ph:"/kəmˈpel/", m:"vt. 强迫;迫使", tip:"com+pel(推)→ 硬推 → 强迫" },
      { w:"comprise", ph:"/kəmˈpraɪz/", m:"vt. 包含;由…组成", tip:"com+pris(抓 → 囊括)→ 包含" },
      { w:"compulsory", ph:"/kəmˈpʌlsəri/", m:"adj. 强制的;必修的", tip:"compel(强迫)的形容词 → 必修" },
      { w:"conform", ph:"/kənˈfɔːm/", m:"vi. 遵从;符合", tip:"con+form(形)→ 形状一致 → 遵从" },
      { w:"complement", ph:"/ˈkɒmplɪment/", m:"vt. 补充;补足 n. 补充物", tip:"com+ple(满 fill)→ 填满 → 补充" }
    ] },
  { id: 138,
    en: "Guided by {{conscience}}, members reached a {{consensus}} after three {{consecutive}} talks, gave their {{consent}}, and few would {{contend}} it.",
    zh: "在{{良心|conscience}}的指引下,成员们经过三次{{连续的|consecutive}}会谈达成{{共识|consensus}}、给予{{同意|consent}},几乎无人{{争辩|contend}}。",
    words: [
      { w:"conscience", ph:"/ˈkɒnʃəns/", m:"n. 良心;良知", tip:"con+sci(知 science)→ 内心知对错 → 良心" },
      { w:"consensus", ph:"/kənˈsensəs/", m:"n. 共识;一致", tip:"con+sens(感觉 sense)→ 同感 → 共识" },
      { w:"consecutive", ph:"/kənˈsekjətɪv/", m:"adj. 连续的;接连的", tip:"con+sec(跟随 sequence)→ 一个接一个 → 连续" },
      { w:"consent", ph:"/kənˈsent/", m:"n./vi. 同意;赞成", tip:"con+sent(感觉)→ 同感 → 同意" },
      { w:"contend", ph:"/kənˈtend/", m:"v. 争辩;竞争;搏斗", tip:"con+tend(伸 → 较劲)→ 较量 → 争辩" }
    ] },
  { id: 139,
    en: "The {{contemporary}} artist would {{contemplate}} society's {{contempt}} for beauty, fight {{continual}} doubt, and spread {{contagious}} passion.",
    zh: "这位{{当代的|contemporary}}艺术家会{{沉思|contemplate}}社会对美的{{蔑视|contempt}}、对抗{{持续不断的|continual}}怀疑,并传播{{有感染力的|contagious}}热情。",
    words: [
      { w:"contemporary", ph:"/kənˈtemprəri/", m:"adj. 当代的;同时代的", tip:"con+tempor(时间 temporary)→ 同时代 → 当代" },
      { w:"contemplate", ph:"/ˈkɒntəmpleɪt/", m:"vt. 沉思;考虑;凝视", tip:"con+templ(神殿 → 静观)→ 静思 → 沉思" },
      { w:"contempt", ph:"/kənˈtempt/", m:"n. 轻视;蔑视", tip:"con+tempt(=temn 轻视)→ 蔑视" },
      { w:"continual", ph:"/kənˈtɪnjuəl/", m:"adj. 频繁的;持续不断的", tip:"continue(继续)+al → 不断的" },
      { w:"contagious", ph:"/kənˈteɪdʒəs/", m:"adj. 传染性的;有感染力的", tip:"con+tag(接触 contact)→ 一触即染 → 传染" }
    ] },
  { id: 140,
    en: "Rejecting {{conventional}} thinking, engineers {{contrive}} ways to {{converge}} ideas, build a {{convertible}} design, and keep a {{cordial}} team.",
    zh: "摒弃{{传统的|conventional}}思维,工程师们{{设法想出|contrive}}让想法{{汇聚|converge}}的办法、打造{{可转换的|convertible}}设计,并维系一支{{热忱的|cordial}}团队。",
    words: [
      { w:"conventional", ph:"/kənˈvenʃənl/", m:"adj. 传统的;常规的", tip:"convention(惯例)+al → 常规的" },
      { w:"contrive", ph:"/kənˈtraɪv/", m:"vt. 设法做到;谋划", tip:"con+trive(找 → 想办法)→ 设法" },
      { w:"converge", ph:"/kənˈvɜːdʒ/", m:"vi. 汇聚;聚集;趋同", tip:"con+verge(边 → 朝一点)→ 汇聚" },
      { w:"convertible", ph:"/kənˈvɜːtəbl/", m:"adj. 可转换的 n. 敞篷车", tip:"convert(转换)+ible → 可转换" },
      { w:"cordial", ph:"/ˈkɔːdiəl/", m:"adj. 热忱的;友好的", tip:"cord(心 cor)+ial → 真心 → 热忱" }
    ] },
  { id: 141,
    en: "The medical {{corps}} found that stress and illness {{correlate}}, that fear can {{corrode}} courage, and that no soldier is a {{coward}}, unlike his rival {{counterpart}}.",
    zh: "这支医疗{{队|corps}}发现压力与疾病{{相关|correlate}}、恐惧会{{腐蚀|corrode}}勇气,而没有士兵是{{懦夫|coward}},不像对手那边的{{对应者|counterpart}}。",
    words: [
      { w:"corps", ph:"/kɔː/", m:"n. 队;军团;兵种", tip:"corp(身体 → 团体)→ 队;ps 不发音" },
      { w:"correlate", ph:"/ˈkɒrəleɪt/", m:"v. 相关联;有联系", tip:"co(共)+relate(关联)→ 相互关联" },
      { w:"corrode", ph:"/kəˈrəʊd/", m:"v. 腐蚀;侵蚀", tip:"cor+rode(咬 → rodent)→ 一点点咬 → 腐蚀" },
      { w:"coward", ph:"/ˈkaʊəd/", m:"n. 懦夫;胆小鬼", tip:"谐音'考挖德':临阵退缩 → 懦夫" },
      { w:"counterpart", ph:"/ˈkaʊntəpɑːt/", m:"n. 对应的人/物", tip:"counter(对)+part(部分)→ 对应方" }
    ] },
  { id: 142,
    en: "From the {{cradle}}, the child would {{craft}} small boats, ignore a leg {{cramp}}, imagine a moon {{crater}}, and {{crave}} adventure.",
    zh: "从{{摇篮|cradle}}时期起,这孩子就会{{精心制作|craft}}小船、不顾腿部{{抽筋|cramp}}、想象月球{{陨石坑|crater}},并{{渴望|crave}}冒险。",
    words: [
      { w:"cradle", ph:"/ˈkreɪdl/", m:"n. 摇篮;发源地", tip:"谐音'凯抖':晃来晃去 → 摇篮" },
      { w:"craft", ph:"/krɑːft/", m:"vt. 精制 n. 工艺;手艺", tip:"手艺活 → 精心制作" },
      { w:"cramp", ph:"/kræmp/", m:"n. 抽筋 vt. 束缚", tip:"谐音'克软扑':肌肉抽紧 → 抽筋" },
      { w:"crater", ph:"/ˈkreɪtə/", m:"n. 火山口;弹坑;陨石坑", tip:"谐音'克瑞特':大坑 → 火山口" },
      { w:"crave", ph:"/kreɪv/", m:"vt. 渴望;恳求", tip:"谐音'渴慰':极想要 → 渴望" }
    ] },
  { id: 143,
    en: "On a relaxing {{cruise}}, the {{crisp}} morning air, the {{crude}} jokes, and small daily {{credit}} had a {{cumulative}} charm.",
    zh: "在一次惬意的{{乘船游|cruise}}中,{{清新的|crisp}}晨间空气、{{粗俗的|crude}}玩笑,以及每日点滴的{{赞许|credit}},有一种{{累积的|cumulative}}魅力。",
    words: [
      { w:"cruise", ph:"/kruːz/", m:"n./vi. 乘船游览;巡航", tip:"谐音'巡兹':悠游航行 → 巡游" },
      { w:"crisp", ph:"/krɪsp/", m:"adj. 清新的;脆的", tip:"谐音'克瑞死扑':又脆又爽 → 清新/脆" },
      { w:"crude", ph:"/kruːd/", m:"adj. 粗糙的;天然的;粗俗的", tip:"谐音'枯oodd':未加工 → 粗糙" },
      { w:"credit", ph:"/ˈkredɪt/", m:"n. 赞扬;信用;学分", tip:"cred(相信)+it → 信用 → 赞许" },
      { w:"cumulative", ph:"/ˈkjuːmjələtɪv/", m:"adj. 累积的;渐增的", tip:"cumul(堆 cumulus)+ative → 累积" }
    ] },
  { id: 144,
    en: "The {{cunning}} magician would {{dazzle}} the crowd, {{deem}} failure impossible, {{defy}} the odds, and never fall back to a dull {{default}}.",
    zh: "这位{{狡猾的|cunning}}魔术师会{{使眼花|dazzle}}观众、{{认为|deem}}失败不可能、{{违抗|defy}}概率,绝不退回到乏味的{{默认做法|default}}。",
    words: [
      { w:"cunning", ph:"/ˈkʌnɪŋ/", m:"adj. 狡猾的 n. 狡诈", tip:"谐音'坑宁':会算计 → 狡猾" },
      { w:"dazzle", ph:"/ˈdæzl/", m:"vt. 使眼花;使倾倒", tip:"谐音'大走':亮得发花 → 眩目" },
      { w:"deem", ph:"/diːm/", m:"vt. 认为;视为", tip:"谐音'丁':认定 → 认为" },
      { w:"defy", ph:"/dɪˈfaɪ/", m:"vt. 违抗;蔑视;使落空", tip:"de(否)+fy(信 fid)→ 不服 → 违抗" },
      { w:"default", ph:"/dɪˈfɔːlt/", m:"n. 默认;违约 vi. 拖欠", tip:"de+fault(过错 → 缺)→ 缺省 → 默认" }
    ] },
  { id: 145,
    en: "After {{deliberate}} thought, the pilot would {{descend}} through {{dense}} cloud, {{designate}} a landing site, and refuse to {{deprive}} anyone of safety.",
    zh: "经过{{深思熟虑的|deliberate}}思考,飞行员会穿过{{浓密的|dense}}云层{{下降|descend}}、{{指定|designate}}降落点,并拒绝{{剥夺|deprive}}任何人的安全。",
    words: [
      { w:"deliberate", ph:"/dɪˈlɪbərət/", m:"adj. 深思熟虑的;故意的", tip:"de+liber(权衡 → 天平 libra)→ 反复掂量 → 深思熟虑" },
      { w:"descend", ph:"/dɪˈsend/", m:"vi. 下降;降临;遗传", tip:"de(向下)+scend(爬)→ 往下走 → 下降" },
      { w:"dense", ph:"/dens/", m:"adj. 密集的;浓厚的;愚钝的", tip:"谐音'担死':挤得密 → 密集" },
      { w:"designate", ph:"/ˈdezɪɡneɪt/", m:"vt. 指定;标明;任命", tip:"de+sign(记号)→ 做记号定下 → 指定" },
      { w:"deprive", ph:"/dɪˈpraɪv/", m:"vt. 剥夺;使丧失", tip:"de(去)+priv(私有 private)→ 夺走私产 → 剥夺" }
    ] },
  { id: 146,
    en: "Believing in {{destiny}}, she would {{detach}} from fear, let nothing {{deter}} her, {{devour}} every book, and refuse to let others {{dictate}} her path.",
    zh: "她相信{{命运|destiny}},会从恐惧中{{抽离|detach}}、不让任何事{{阻止|deter}}自己、{{如饥似渴地读|devour}}每本书,并拒绝让别人{{支配|dictate}}她的人生路。",
    words: [
      { w:"destiny", ph:"/ˈdestɪni/", m:"n. 命运;天数", tip:"destin(注定 destined)+y → 命运" },
      { w:"detach", ph:"/dɪˈtætʃ/", m:"vt. 使分离;派遣", tip:"de+tach(接触 attach)→ 解除接触 → 分离" },
      { w:"deter", ph:"/dɪˈtɜː/", m:"vt. 阻止;威慑", tip:"de+ter(吓 terror)→ 吓退 → 阻止" },
      { w:"devour", ph:"/dɪˈvaʊə/", m:"vt. 吞食;如饥似渴地读", tip:"de+vour(吃 → voracious)→ 狼吞 → 吞食" },
      { w:"dictate", ph:"/dɪkˈteɪt/", m:"v. 支配;口授;命令", tip:"dict(说)+ate → 发号施令 → 支配" }
    ] },
  { id: 147,
    en: "To protect his {{dignity}}, the {{discreet}} lawyer would not {{disclose}} secrets, {{dilute}} the truth, or bring {{disgrace}} to the firm.",
    zh: "为维护{{尊严|dignity}},这位{{谨慎的|discreet}}律师不会{{透露|disclose}}秘密、{{淡化|dilute}}真相,或给公司带来{{耻辱|disgrace}}。",
    words: [
      { w:"dignity", ph:"/ˈdɪɡnəti/", m:"n. 尊严;高贵", tip:"dign(高贵 → deign)+ity → 尊严" },
      { w:"discreet", ph:"/dɪˈskriːt/", m:"adj. 谨慎的;考虑周到的", tip:"dis+creet(分辨 → 慎重)→ 谨慎" },
      { w:"disclose", ph:"/dɪsˈkləʊz/", m:"vt. 透露;揭露", tip:"dis(不)+close(关)→ 打开 → 揭露" },
      { w:"dilute", ph:"/daɪˈluːt/", m:"vt. 稀释;削弱 adj. 稀的", tip:"di+lute(冲 → 洗)→ 冲淡 → 稀释" },
      { w:"disgrace", ph:"/dɪsˈɡreɪs/", m:"n. 耻辱 vt. 使蒙羞", tip:"dis(失)+grace(优雅)→ 丢脸 → 耻辱" }
    ] },
  { id: 148,
    en: "In {{disguise}}, the spy hid his {{dismay}}, watched the crowd {{disperse}}, refused to {{dismiss}} the threat, and prepared for the {{disposal}} of evidence.",
    zh: "{{乔装|disguise}}之下,这名间谍掩饰{{沮丧|dismay}},看着人群{{散去|disperse}},拒绝{{不予理会|dismiss}}威胁,并准备{{销毁|disposal}}证据。",
    words: [
      { w:"disguise", ph:"/dɪsˈɡaɪz/", m:"vt./n. 假扮;伪装;掩饰", tip:"dis+guise(样子)→ 改样子 → 伪装" },
      { w:"dismay", ph:"/dɪsˈmeɪ/", m:"n./vt. 沮丧;惊愕", tip:"dis(无)+may(力量)→ 无力 → 沮丧" },
      { w:"disperse", ph:"/dɪˈspɜːs/", m:"v. 驱散;散开;传播", tip:"di+sperse(撒 → sparse)→ 撒开 → 驱散" },
      { w:"dismiss", ph:"/dɪsˈmɪs/", m:"vt. 解雇;解散;不予考虑", tip:"dis+miss(送)→ 打发走 → 解雇" },
      { w:"disposal", ph:"/dɪˈspəʊzl/", m:"n. 处理;清除;支配", tip:"dispose(处理)+al → 处理" }
    ] },
  { id: 149,
    en: "Protests may {{disrupt}} the city, {{dissolve}} old ties, {{divert}} resources, make paths {{diverge}}, and challenge official {{doctrine}}.",
    zh: "抗议可能{{扰乱|disrupt}}城市、{{瓦解|dissolve}}旧有联系、{{转移|divert}}资源、使道路{{分岔|diverge}},并挑战官方{{教条|doctrine}}。",
    words: [
      { w:"disrupt", ph:"/dɪsˈrʌpt/", m:"vt. 扰乱;使中断", tip:"dis+rupt(断)→ 打断 → 扰乱" },
      { w:"dissolve", ph:"/dɪˈzɒlv/", m:"v. 溶解;解散;瓦解", tip:"dis+solve(解)→ 化开 → 溶解/解散" },
      { w:"divert", ph:"/daɪˈvɜːt/", m:"vt. 转移;转向;使娱乐", tip:"di+vert(转)→ 转开 → 转移" },
      { w:"diverge", ph:"/daɪˈvɜːdʒ/", m:"vi. 分岔;分歧;偏离", tip:"di(分开)+verge(边)→ 各奔一边 → 分岔" },
      { w:"doctrine", ph:"/ˈdɒktrɪn/", m:"n. 教条;学说;主义", tip:"doc(教 doctor)+trine → 教义 → 教条" }
    ] },
  { id: 150,
    en: "The {{eccentric}} scientist had a {{dual}} role, faced {{dubious}} critics, fought a quiet {{dread}}, yet transformed our view of {{ecology}}.",
    zh: "这位{{古怪的|eccentric}}科学家身兼{{双重的|dual}}角色,面对{{怀疑的|dubious}}批评者、对抗内心的{{恐惧|dread}},却改变了我们对{{生态|ecology}}的看法。",
    words: [
      { w:"eccentric", ph:"/ɪkˈsentrɪk/", m:"adj. 古怪的 n. 怪人", tip:"ec(出)+centr(中心)→ 偏离中心 → 古怪" },
      { w:"dual", ph:"/ˈdjuːəl/", m:"adj. 双重的;两部分的", tip:"du(二 duo)+al → 双重" },
      { w:"dubious", ph:"/ˈdjuːbiəs/", m:"adj. 怀疑的;可疑的", tip:"doubt(怀疑)亲戚 → 可疑" },
      { w:"dread", ph:"/dred/", m:"n./vt. 恐惧;惧怕", tip:"谐音'拽的':心里发怵 → 恐惧" },
      { w:"ecology", ph:"/iˈkɒlədʒi/", m:"n. 生态学;生态", tip:"eco(生态)+logy(学)→ 生态学" }
    ] },
  { id: 151,
    en: "As hours {{elapse}}, the coach tries to {{elevate}} morale, {{elicit}} effort, fill players with {{ecstasy}}, and keep them {{eligible}} to compete.",
    zh: "随着时间{{流逝|elapse}},教练设法{{提升|elevate}}士气、{{引出|elicit}}努力、让球员充满{{狂喜|ecstasy}},并让他们保有参赛{{资格|eligible}}。",
    words: [
      { w:"elapse", ph:"/ɪˈlæps/", m:"vi. (时间)流逝;消逝", tip:"e(出)+lapse(滑)→ 悄悄滑走 → 流逝" },
      { w:"elevate", ph:"/ˈelɪveɪt/", m:"vt. 提升;抬高;振奋", tip:"e(上)+lev(举 lift)→ 举起 → 提升" },
      { w:"elicit", ph:"/iˈlɪsɪt/", m:"vt. 引出;探出(信息)", tip:"e(出)+licit(引 → lure)→ 引出来" },
      { w:"ecstasy", ph:"/ˈekstəsi/", m:"n. 狂喜;入迷", tip:"ec(出)+stasy(站 → 神不守舍)→ 忘形 → 狂喜" },
      { w:"eligible", ph:"/ˈelɪdʒəbl/", m:"adj. 有资格的;合适的", tip:"e+lig(选 elect)+ible → 可入选 → 有资格" }
    ] },
  { id: 152,
    en: "The {{eminent}} professor would {{embody}} wisdom, rely on {{empirical}} proof, {{enchant}} students, and {{enclose}} notes with every reply.",
    zh: "这位{{杰出的|eminent}}教授{{体现|embody}}智慧、依靠{{经验的|empirical}}证据、{{使陶醉|enchant}}学生,并在每次回信中{{附上|enclose}}笔记。",
    words: [
      { w:"eminent", ph:"/ˈemɪnənt/", m:"adj. 杰出的;著名的", tip:"e(出)+min(突 → prominent)→ 突出 → 杰出" },
      { w:"embody", ph:"/ɪmˈbɒdi/", m:"vt. 体现;具体表达", tip:"em(使)+body(身体)→ 化为实体 → 体现" },
      { w:"empirical", ph:"/ɪmˈpɪrɪkl/", m:"adj. 经验的;实证的", tip:"em+pir(试 → experience)→ 凭经验 → 实证" },
      { w:"enchant", ph:"/ɪnˈtʃɑːnt/", m:"vt. 使陶醉;施魔法", tip:"en+chant(咒语)→ 念咒迷住 → 陶醉" },
      { w:"enclose", ph:"/ɪnˈkləʊz/", m:"vt. 附上;围住", tip:"en(进)+close(关)→ 封进去 → 附上" }
    ] },
  { id: 153,
    en: "A generous {{enterprise}} will {{endow}} a school, {{enlighten}} the poor, {{enroll}} orphans, and accept all the cost it may {{entail}}.",
    zh: "一家慷慨的{{企业|enterprise}}会{{捐赠|endow}}一所学校、{{启发|enlighten}}穷人、{{招收|enroll}}孤儿,并承担这一切可能{{带来|entail}}的成本。",
    words: [
      { w:"enterprise", ph:"/ˈentəpraɪz/", m:"n. 企业;事业;进取心", tip:"enter(进入)+prise(抓)→ 大胆经营 → 企业" },
      { w:"endow", ph:"/ɪnˈdaʊ/", m:"vt. 捐赠;赋予", tip:"en+dow(给 → dowry 嫁妆)→ 赠予 → 捐赠" },
      { w:"enlighten", ph:"/ɪnˈlaɪtn/", m:"vt. 启发;开导", tip:"en+light(光)→ 给人光 → 启迪" },
      { w:"enroll", ph:"/ɪnˈrəʊl/", m:"v. 招收;登记;入学", tip:"en+roll(名册)→ 上名册 → 注册" },
      { w:"entail", ph:"/ɪnˈteɪl/", m:"vt. 需要;使必要;牵涉", tip:"en+tail(尾 → 附带)→ 附带 → 需要" }
    ] },
  { id: 154,
    en: "During the {{epidemic}}, leaders {{erect}} clinics, refuse to {{equate}} panic with care, {{entitle}} all to treatment, and calm fears before they {{erupt}}.",
    zh: "{{流行病|epidemic}}期间,领导者{{建立|erect}}诊所、拒绝把恐慌{{等同于|equate}}关怀、{{赋予|entitle}}所有人受治权,并在恐惧{{爆发|erupt}}前加以平息。",
    words: [
      { w:"epidemic", ph:"/ˌepɪˈdemɪk/", m:"n. 流行病 adj. 流行的", tip:"epi(在…中)+dem(人民)→ 在人群蔓延 → 流行病" },
      { w:"erect", ph:"/ɪˈrekt/", m:"vt. 建立;竖立 adj. 直立的", tip:"e(上)+rect(直)→ 竖直立起 → 建立" },
      { w:"equate", ph:"/iˈkweɪt/", m:"vt. 使相等;等同", tip:"equ(等 equal)+ate → 等同" },
      { w:"entitle", ph:"/ɪnˈtaɪtl/", m:"vt. 赋予权利;给…命名", tip:"en+title(头衔)→ 给名分 → 赋权" },
      { w:"erupt", ph:"/ɪˈrʌpt/", m:"vi. 爆发;喷发", tip:"e(出)+rupt(断 → 冲破)→ 冲出 → 爆发" }
    ] },
  { id: 155,
    en: "The {{evergreen}} forest, home to {{exotic}} birds, is {{exempt}} from logging; rangers {{expel}} poachers before their licences {{expire}}.",
    zh: "这片{{常青的|evergreen}}森林是{{异国的|exotic}}鸟类的家园,{{免于|exempt}}砍伐;护林员在偷猎者执照{{到期|expire}}前就把他们{{驱逐|expel}}。",
    words: [
      { w:"evergreen", ph:"/ˈevəɡriːn/", m:"adj. 常青的 n. 常青树", tip:"ever(总是)+green(绿)→ 常青" },
      { w:"exotic", ph:"/ɪɡˈzɒtɪk/", m:"adj. 异国的;奇异的", tip:"exo(外 → exit)+tic → 外来的 → 异国" },
      { w:"exempt", ph:"/ɪɡˈzempt/", m:"adj. 被免除的 vt. 免除", tip:"ex(出)+empt(拿 → 取走)→ 取出在外 → 豁免" },
      { w:"expel", ph:"/ɪkˈspel/", m:"vt. 驱逐;开除;排出", tip:"ex(出)+pel(推)→ 推出去 → 驱逐" },
      { w:"expire", ph:"/ɪkˈspaɪə/", m:"vi. 到期;期满;断气", tip:"ex(出)+pir(气 spirit)→ 出最后一口气 → 到期" }
    ] },
  { id: 156,
    en: "Without {{explicit}} proof, do not {{fabricate}} stories about {{extinct}} species; every {{fabulous}} discovery has many a hidden {{facet}}.",
    zh: "没有{{明确的|explicit}}证据,别{{捏造|fabricate}}关于{{灭绝的|extinct}}物种的故事;每个{{极好的|fabulous}}发现都有许多隐藏的{{方面|facet}}。",
    words: [
      { w:"explicit", ph:"/ɪkˈsplɪsɪt/", m:"adj. 明确的;清晰的", tip:"ex(出)+plic(折 → 展开)→ 摊开说 → 明确" },
      { w:"fabricate", ph:"/ˈfæbrɪkeɪt/", m:"vt. 捏造;制造", tip:"fabric(织物 → 编)+ate → 编造 → 捏造" },
      { w:"extinct", ph:"/ɪkˈstɪŋkt/", m:"adj. 灭绝的;熄灭的", tip:"ex(出)+stinct(刺 → 熄)→ 火灭尽 → 灭绝" },
      { w:"fabulous", ph:"/ˈfæbjələs/", m:"adj. 极好的;难以置信的", tip:"fable(寓言)+ous → 像传说般好 → 极好" },
      { w:"facet", ph:"/ˈfæsɪt/", m:"n. 方面;(宝石的)刻面", tip:"face(面)+t → 一个面 → 方面" }
    ] },
  { id: 157,
    en: "The {{faculty}} warned that a passing {{fad}}, a {{feeble}} excuse, or one {{fatal}} error could {{ferment}} lasting trouble.",
    zh: "{{全体教员|faculty}}警告说,一时的{{风尚|fad}}、一个{{无力的|feeble}}借口,或一个{{致命的|fatal}}错误,都可能{{酝酿|ferment}}出长久的麻烦。",
    words: [
      { w:"faculty", ph:"/ˈfæklti/", m:"n. 全体教员;才能;系", tip:"fac(做 → 能力)+ulty → 才能;教员" },
      { w:"fad", ph:"/fæd/", m:"n. 一时的风尚;狂热", tip:"谐音'发的':一阵风潮 → 时尚" },
      { w:"feeble", ph:"/ˈfiːbl/", m:"adj. 虚弱的;无力的", tip:"谐音'非薄':弱不禁风 → 虚弱" },
      { w:"fatal", ph:"/ˈfeɪtl/", m:"adj. 致命的;灾难性的", tip:"fate(命运 → 死)+al → 要命的 → 致命" },
      { w:"ferment", ph:"/fəˈment/", m:"v. 发酵;酝酿 n. 骚动", tip:"ferm(发酵 → fervor)→ 发酵 → 酝酿" }
    ] },
  { id: 158,
    en: "On {{fertile}} land, the {{fervent}} farmer would {{fetch}} water at dawn, never {{flatter}} idle hands, and tend a {{fleet}} of tractors.",
    zh: "在{{肥沃的|fertile}}土地上,这位{{热情的|fervent}}农民会在黎明{{取来|fetch}}水、从不{{奉承|flatter}}懒人,并照管一{{队|fleet}}拖拉机。",
    words: [
      { w:"fertile", ph:"/ˈfɜːtaɪl/", m:"adj. 肥沃的;多产的", tip:"fer(带来 → bear)+tile → 多产 → 肥沃" },
      { w:"fervent", ph:"/ˈfɜːvənt/", m:"adj. 热情的;炽热的", tip:"ferv(沸腾 → fervor)+ent → 火热 → 热情" },
      { w:"fetch", ph:"/fetʃ/", m:"vt. 取来;请来;卖得", tip:"谐音'飞去':去拿来 → 取来" },
      { w:"flatter", ph:"/ˈflætə/", m:"vt. 奉承;使高兴", tip:"flat(平 → 拍平 → 拍马)→ 奉承" },
      { w:"fleet", ph:"/fliːt/", m:"n. 舰队;车队 adj. 快速的", tip:"float(浮)亲戚 → 一队船 → 舰队" }
    ] },
  { id: 159,
    en: "With a quick {{flick}}, she would {{fling}} the door open, watch curtains {{flutter}}, and {{forge}} ahead against a {{formidable}} storm.",
    zh: "手指轻轻一{{弹|flick}},她会猛地{{抛|fling}}开门、看着窗帘{{飘动|flutter}},并迎着{{可怕的|formidable}}风暴{{奋力前行|forge}}。",
    words: [
      { w:"flick", ph:"/flɪk/", m:"n./vt. 轻弹;轻拂", tip:"谐音'夫立刻':快速一弹 → 轻弹" },
      { w:"fling", ph:"/flɪŋ/", m:"vt. 猛扔;猛动 n. 一时放纵", tip:"谐音'夫拎':一把甩出 → 猛扔" },
      { w:"flutter", ph:"/ˈflʌtə/", m:"vi. 飘动;振翅 n. 慌乱", tip:"flit(轻飞)亲戚 → 翩翩 → 飘动" },
      { w:"forge", ph:"/fɔːdʒ/", m:"vt. 锻造;伪造;奋进", tip:"forge(铁匠铺)→ 打铁 → 锻造;forge ahead 奋进" },
      { w:"formidable", ph:"/fɔːˈmɪdəbl/", m:"adj. 可怕的;令人敬畏的;艰巨的", tip:"formid(怕 → fear)+able → 可怕的" }
    ] },
  { id: 160,
    en: "To {{fortify}} the bank against {{fraud}}, guards check every {{fraction}} of data, recover each {{fragment}}, and calm the {{frantic}} crowd.",
    zh: "为{{加固|fortify}}银行以防{{欺诈|fraud}},警卫核查数据的每一{{部分|fraction}}、找回每一块{{碎片|fragment}},并安抚{{疯狂的|frantic}}人群。",
    words: [
      { w:"fortify", ph:"/ˈfɔːtɪfaɪ/", m:"vt. 加强;设防;增强", tip:"fort(堡垒)+ify → 筑堡 → 加固" },
      { w:"fraud", ph:"/frɔːd/", m:"n. 欺诈;骗子", tip:"谐音'否得':骗人钱财 → 欺诈" },
      { w:"fraction", ph:"/ˈfrækʃn/", m:"n. 小部分;分数;片段", tip:"fract(断裂 fracture)+ion → 断出的一块 → 小部分" },
      { w:"fragment", ph:"/ˈfræɡmənt/", m:"n. 碎片 v. 使破碎", tip:"frag(断 fract)+ment → 碎片" },
      { w:"frantic", ph:"/ˈfræntɪk/", m:"adj. 疯狂的;狂乱的", tip:"谐音'夫软teak':慌乱发疯 → 疯狂" }
    ] },
  { id: 161,
    en: "Soldiers must {{abide}} by orders, {{combat}} fear, defend the {{rampart}}, never {{falter}}, and stay {{valiant}} to the end.",
    zh: "士兵必须{{遵守|abide}}命令、{{搏斗|combat}}恐惧、守住{{壁垒|rampart}}、绝不{{动摇|falter}},并{{勇敢|valiant}}到底。",
    words: [
      { w:"abide", ph:"/əˈbaɪd/", m:"vi.(by)遵守;容忍", tip:"a+bide(等待 → 守)→ 守住 → 遵守" },
      { w:"combat", ph:"/ˈkɒmbæt/", m:"v./n. 战斗;搏斗", tip:"com(共)+bat(打)→ 互打 → 战斗" },
      { w:"rampart", ph:"/ˈræmpɑːt/", m:"n. 壁垒;防御", tip:"ramp(斜坡)+art → 土坡防墙 → 壁垒" },
      { w:"falter", ph:"/ˈfɔːltə/", m:"vi. 动摇;蹒跚;支吾", tip:"谐音'否他':犹豫 → 动摇" },
      { w:"valiant", ph:"/ˈvæliənt/", m:"adj. 勇敢的;英勇的", tip:"val(力量 value)+iant → 有力 → 勇敢" }
    ] },
  { id: 162,
    en: "The {{amiable}} guide would {{acquaint}} tourists with the local {{dialect}}, {{depict}} old legends, and share each amusing {{anecdote}}.",
    zh: "这位{{和蔼的|amiable}}导游会让游客{{熟悉|acquaint}}当地{{方言|dialect}}、{{描绘|depict}}古老传说,并分享每个有趣的{{轶事|anecdote}}。",
    words: [
      { w:"amiable", ph:"/ˈeɪmiəbl/", m:"adj. 和蔼的;亲切的", tip:"ami(友爱 amigo)+able → 友善 → 和蔼" },
      { w:"acquaint", ph:"/əˈkweɪnt/", m:"vt. 使熟悉;使了解", tip:"ac+quaint(知道)→ 使知道 → 熟悉" },
      { w:"dialect", ph:"/ˈdaɪəlekt/", m:"n. 方言;土语", tip:"dia(之间)+lect(说)→ 地方间的话 → 方言" },
      { w:"depict", ph:"/dɪˈpɪkt/", m:"vt. 描绘;描述", tip:"de+pict(画 picture)→ 画出来 → 描绘" },
      { w:"anecdote", ph:"/ˈænɪkdəʊt/", m:"n. 轶事;趣闻", tip:"谐音'安你刻逗':小故事 → 轶事" }
    ] },
  { id: 163,
    en: "After the {{outbreak}}, doctors would {{prescribe}} an {{antibiotic}}, treat each {{ailment}}, and {{cleanse}} the wards daily.",
    zh: "{{爆发|outbreak}}之后,医生会{{开出|prescribe}}{{抗生素|antibiotic}}、治疗每种{{小病|ailment}},并每日{{清洁|cleanse}}病房。",
    words: [
      { w:"outbreak", ph:"/ˈaʊtbreɪk/", m:"n.(疾病/战争)爆发", tip:"out(出)+break(破)→ 突然爆出 → 爆发" },
      { w:"prescribe", ph:"/prɪˈskraɪb/", m:"vt. 开(药);规定", tip:"pre(预先)+scribe(写)→ 写药方 → 开药" },
      { w:"antibiotic", ph:"/ˌæntibaɪˈɒtɪk/", m:"n. 抗生素", tip:"anti(抗)+bio(生命)→ 抗菌 → 抗生素" },
      { w:"ailment", ph:"/ˈeɪlmənt/", m:"n. 小病;不适", tip:"ail(生病)+ment → 小病" },
      { w:"cleanse", ph:"/klenz/", m:"vt. 清洗;净化", tip:"clean(干净)+se → 弄净 → 清洗" }
    ] },
  { id: 164,
    en: "A {{frugal}} family must {{allot}} money wisely, avoid {{deficient}} budgets, {{augment}} savings, and never {{squander}} a coin.",
    zh: "{{节俭的|frugal}}家庭必须明智地{{分配|allot}}金钱、避免{{不足的|deficient}}预算、{{增加|augment}}储蓄,绝不{{挥霍|squander}}一分钱。",
    words: [
      { w:"frugal", ph:"/ˈfruːɡl/", m:"adj. 节俭的;朴素的", tip:"谐音'抚logo':省着用 → 节俭" },
      { w:"allot", ph:"/əˈlɒt/", m:"vt. 分配;拨给", tip:"a+lot(份额)→ 分份额 → 分配" },
      { w:"deficient", ph:"/dɪˈfɪʃnt/", m:"adj. 不足的;有缺陷的", tip:"de(去)+fic(做)→ 做得不够 → 不足" },
      { w:"augment", ph:"/ɔːɡˈment/", m:"vt. 增加;增大", tip:"aug(增 → auction)+ment → 增加" },
      { w:"squander", ph:"/ˈskwɒndə/", m:"vt. 挥霍;浪费", tip:"谐音'死亏的':乱花光 → 挥霍" }
    ] },
  { id: 165,
    en: "The {{ruthless}} tyrant would {{condemn}} rivals, {{detain}} the innocent, {{plunder}} villages, and {{persecute}} anyone who disagreed.",
    zh: "这个{{残忍的|ruthless}}暴君会{{谴责|condemn}}对手、{{拘留|detain}}无辜者、{{掠夺|plunder}}村庄,并{{迫害|persecute}}任何持异议的人。",
    words: [
      { w:"ruthless", ph:"/ˈruːθləs/", m:"adj. 无情的;残忍的", tip:"ruth(怜悯)+less(无)→ 无怜悯 → 无情" },
      { w:"condemn", ph:"/kənˈdem/", m:"vt. 谴责;判刑", tip:"con+demn(罪 damn)→ 定罪 → 谴责(n 不发音)" },
      { w:"detain", ph:"/dɪˈteɪn/", m:"vt. 拘留;留住", tip:"de(离)+tain(握)→ 扣住 → 拘留" },
      { w:"plunder", ph:"/ˈplʌndə/", m:"vt./n. 掠夺;抢劫", tip:"谐音'扑兰的':抢光 → 掠夺" },
      { w:"persecute", ph:"/ˈpɜːsɪkjuːt/", m:"vt. 迫害;骚扰", tip:"per(彻底)+secute(追)→ 穷追猛打 → 迫害" }
    ] },
  { id: 166,
    en: "The {{earnest}} scholar would {{appraise}} each {{manuscript}}, {{deduce}} its origin, and {{inscribe}} a careful note.",
    zh: "这位{{认真的|earnest}}学者会{{评估|appraise}}每份{{手稿|manuscript}}、{{推断|deduce}}其来历,并{{题写|inscribe}}一段细致的批注。",
    words: [
      { w:"earnest", ph:"/ˈɜːnɪst/", m:"adj. 认真的;诚挚的", tip:"谐音'额你思特':一本正经 → 认真" },
      { w:"appraise", ph:"/əˈpreɪz/", m:"vt. 评估;鉴定", tip:"ap+praise(价 price)→ 估价 → 评估" },
      { w:"manuscript", ph:"/ˈmænjuskrɪpt/", m:"n. 手稿;原稿", tip:"manu(手)+script(写)→ 手写稿 → 手稿" },
      { w:"deduce", ph:"/dɪˈdjuːs/", m:"vt. 推断;演绎", tip:"de(下)+duce(引)→ 顺推下来 → 推断" },
      { w:"inscribe", ph:"/ɪnˈskraɪb/", m:"vt. 题写;铭刻", tip:"in(进)+scribe(写)→ 刻进去 → 铭刻" }
    ] },
  { id: 167,
    en: "On a {{dreary}} morning, the {{melancholy}} poet would {{muse}} by the {{marsh}} and {{lament}} his lost youth.",
    zh: "在{{沉闷的|dreary}}清晨,{{忧郁的|melancholy}}诗人会在{{沼泽|marsh}}边{{沉思|muse}},并{{哀叹|lament}}逝去的青春。",
    words: [
      { w:"dreary", ph:"/ˈdrɪəri/", m:"adj. 沉闷的;阴郁的", tip:"谐音'锥瑞':无聊到困 → 沉闷" },
      { w:"melancholy", ph:"/ˈmelənkəli/", m:"n./adj. 忧郁(的)", tip:"melan(黑)+choly(胆汁)→ 黑胆汁 → 忧郁" },
      { w:"muse", ph:"/mjuːz/", m:"vi. 沉思;冥想 n. 缪斯", tip:"music 的缪斯 → 凝神 → 沉思" },
      { w:"marsh", ph:"/mɑːʃ/", m:"n. 沼泽;湿地", tip:"谐音'马湿':湿软地 → 沼泽" },
      { w:"lament", ph:"/ləˈment/", m:"v./n. 哀悼;悲叹", tip:"谐音'勒悶它':痛惜 → 哀叹" }
    ] },
  { id: 168,
    en: "The {{jubilant}} crowd gave an {{ovation}}, waved a {{banner}}, formed a {{coalition}}, and saluted the {{eternal}} flame.",
    zh: "{{欢腾的|jubilant}}人群报以{{热烈鼓掌|ovation}}、挥舞{{横幅|banner}}、结成{{联盟|coalition}},并向{{永恒的|eternal}}火焰致敬。",
    words: [
      { w:"jubilant", ph:"/ˈdʒuːbɪlənt/", m:"adj. 欢欣的;喜气洋洋的", tip:"jubil(欢呼 jubilee)+ant → 欢腾" },
      { w:"ovation", ph:"/əʊˈveɪʃn/", m:"n. 热烈鼓掌;欢迎", tip:"谐音'欧为申':全场鼓掌 → 喝彩" },
      { w:"banner", ph:"/ˈbænə/", m:"n. 横幅;旗帜", tip:"ban(布告)+ner → 横幅" },
      { w:"coalition", ph:"/ˌkəʊəˈlɪʃn/", m:"n. 联盟;结合", tip:"co(共)+alit(联合 ally)→ 联合体 → 联盟" },
      { w:"eternal", ph:"/ɪˈtɜːnl/", m:"adj. 永恒的;不朽的", tip:"etern(永久 eternity)+al → 永恒" }
    ] },
  { id: 169,
    en: "The {{audible}} alarm made everyone {{flinch}}; people would {{gasp}}, {{huddle}} together, and rush down the dark {{avenue}}.",
    zh: "那{{听得见的|audible}}警报让所有人{{畏缩|flinch}};人们{{倒抽冷气|gasp}}、{{挤作一团|huddle}},冲下漆黑的{{大街|avenue}}。",
    words: [
      { w:"audible", ph:"/ˈɔːdəbl/", m:"adj. 听得见的", tip:"audi(听 audio)+ble → 听得见" },
      { w:"flinch", ph:"/flɪntʃ/", m:"vi. 退缩;畏缩", tip:"谐音'夫林吃':吓得一缩 → 畏缩" },
      { w:"gasp", ph:"/ɡɑːsp/", m:"vi. 喘息;倒抽气", tip:"谐音'尬死扑':张口吸气 → 喘息" },
      { w:"huddle", ph:"/ˈhʌdl/", m:"vi. 挤作一团;蜷缩", tip:"谐音'哈豆':缩成一堆 → 挤" },
      { w:"avenue", ph:"/ˈævənjuː/", m:"n. 大街;林荫道;途径", tip:"a+ven(来 → 通行)→ 通行大道 → 大街" }
    ] },
  { id: 170,
    en: "A wise editor will {{amend}} errors, {{discard}} weak lines, {{compress}} long parts into a {{terse}} style, and keep prose {{legible}}.",
    zh: "明智的编辑会{{修改|amend}}错误、{{舍弃|discard}}弱句、把冗长部分{{压缩|compress}}成{{简洁的|terse}}风格,并让文字保持{{清晰易读|legible}}。",
    words: [
      { w:"amend", ph:"/əˈmend/", m:"vt. 修改;修订", tip:"a+mend(修补)→ 修订" },
      { w:"discard", ph:"/dɪsˈkɑːd/", m:"vt. 丢弃;抛弃", tip:"dis+card(牌)→ 出掉废牌 → 丢弃" },
      { w:"compress", ph:"/kəmˈpres/", m:"vt. 压缩;精简", tip:"com(共)+press(压)→ 压到一起 → 压缩" },
      { w:"terse", ph:"/tɜːs/", m:"adj. 简洁的;精练的", tip:"谐音'特死':话极少 → 简洁" },
      { w:"legible", ph:"/ˈledʒəbl/", m:"adj. 字迹清楚的;易读的", tip:"leg(读 legend)+ible → 可读 → 易读" }
    ] },
  { id: 171,
    en: "The {{shrewd}} merchant would {{haggle}} hard, refuse a {{bribe}}, secure good {{collateral}}, and demand proper {{credentials}}.",
    zh: "{{精明的|shrewd}}商人会努力{{讨价|haggle}}、拒收{{贿赂|bribe}}、确保可靠的{{抵押品|collateral}},并索要正规的{{资质证明|credentials}}。",
    words: [
      { w:"shrewd", ph:"/ʃruːd/", m:"adj. 精明的;敏锐的", tip:"谐音'刷如的':算盘精 → 精明" },
      { w:"haggle", ph:"/ˈhæɡl/", m:"vi. 讨价还价;争论", tip:"谐音'哈狗':为价钱缠 → 讨价" },
      { w:"bribe", ph:"/braɪb/", m:"n./vt. 贿赂;行贿", tip:"谐音'不来不':塞钱 → 贿赂" },
      { w:"collateral", ph:"/kəˈlætərəl/", m:"n. 抵押品 adj. 附带的", tip:"col(共)+later(旁)→ 旁边作保的 → 抵押品" },
      { w:"credentials", ph:"/krəˈdenʃlz/", m:"n. 资格证书;证件", tip:"cred(相信)+ential → 凭信之物 → 证书" }
    ] },
  { id: 172,
    en: "Critics {{denounce}} the {{conspicuous}} waste, {{deride}} the {{pompous}} speech, and expose the leader's {{conceit}}.",
    zh: "批评者{{谴责|denounce}}那{{显眼的|conspicuous}}浪费、{{嘲笑|deride}}{{自大的|pompous}}演讲,并揭穿领导者的{{自负|conceit}}。",
    words: [
      { w:"denounce", ph:"/dɪˈnaʊns/", m:"vt. 谴责;公开指责", tip:"de(向下)+nounce(说 announce)→ 当众斥 → 谴责" },
      { w:"conspicuous", ph:"/kənˈspɪkjuəs/", m:"adj. 显眼的;惹人注目的", tip:"con+spic(看 spect)→ 一眼看到 → 显眼" },
      { w:"deride", ph:"/dɪˈraɪd/", m:"vt. 嘲笑;愚弄", tip:"de(向下)+ride(笑)→ 取笑 → 嘲笑" },
      { w:"pompous", ph:"/ˈpɒmpəs/", m:"adj. 自大的;浮夸的", tip:"pomp(排场)+ous → 摆排场 → 自大" },
      { w:"conceit", ph:"/kənˈsiːt/", m:"n. 自负;自大", tip:"con+ceit(想 conceive)→ 自我感觉良好 → 自负" }
    ] },
  { id: 173,
    en: "The {{tenacious}} runner felt his muscles {{throb}}, his lungs {{heave}}, his legs grow {{numb}}, yet he {{surmount}}ed every hill.",
    zh: "{{顽强的|tenacious}}跑者感到肌肉{{抽痛|throb}}、双肺{{起伏|heave}}、双腿{{麻木|numb}},却仍{{克服|surmount}}了每一道坡。",
    words: [
      { w:"tenacious", ph:"/təˈneɪʃəs/", m:"adj. 顽强的;坚持的", tip:"ten(握 tenant)+acious → 死握不放 → 顽强" },
      { w:"throb", ph:"/θrɒb/", m:"vi./n. 抽痛;悸动", tip:"谐音'死罗扑':一跳一跳痛 → 抽痛" },
      { w:"heave", ph:"/hiːv/", m:"v. 起伏;举起;呕吐", tip:"谐音'嗨夫':使劲起伏 → 起伏" },
      { w:"numb", ph:"/nʌm/", m:"adj. 麻木的 vt. 使麻木", tip:"谐音'拿姆':没知觉 → 麻木(b 不发音)" },
      { w:"surmount", ph:"/səˈmaʊnt/", m:"vt. 克服;登上", tip:"sur(上)+mount(山)→ 翻过山 → 克服" }
    ] },
  { id: 174,
    en: "Faced with a {{predicament}}, the {{deputy}} kept her {{poise}}, used {{tact}}, and broke the long {{deadlock}}.",
    zh: "面对{{困境|predicament}},这位{{副手|deputy}}保持{{沉着|poise}}、运用{{机智|tact}},并打破了长久的{{僵局|deadlock}}。",
    words: [
      { w:"predicament", ph:"/prɪˈdɪkəmənt/", m:"n. 困境;窘境", tip:"pre+dic(说)→ 难以言说的处境 → 困境" },
      { w:"deputy", ph:"/ˈdepjuti/", m:"n. 副手;代理人", tip:"depute(委托)→ 受托者 → 副手" },
      { w:"poise", ph:"/pɔɪz/", m:"n. 沉着;平衡 v. 使平衡", tip:"谐音'破易死':稳如泰山 → 沉着" },
      { w:"tact", ph:"/tækt/", m:"n. 机智;圆通;得体", tip:"tact(触 → 分寸)→ 拿捏分寸 → 机智" },
      { w:"deadlock", ph:"/ˈdedlɒk/", m:"n. 僵局;相持不下", tip:"dead(死)+lock(锁)→ 死锁 → 僵局" }
    ] },
  { id: 175,
    en: "The {{vibrant}} festival would {{teem}} with people, the air {{sizzle}} with food, drums {{rattle}}, and lanterns {{gleam}} all night.",
    zh: "{{热闹的|vibrant}}节日{{挤满|teem}}人群,空气里食物{{滋滋作响|sizzle}},鼓声{{咔嗒作响|rattle}},灯笼整夜{{闪烁|gleam}}。",
    words: [
      { w:"vibrant", ph:"/ˈvaɪbrənt/", m:"adj. 充满活力的;鲜艳的", tip:"vibr(振动 vibrate)+ant → 跃动 → 有活力" },
      { w:"teem", ph:"/tiːm/", m:"vi.(with)充满;盛产", tip:"谐音'剔么':多得溢出 → 充满" },
      { w:"sizzle", ph:"/ˈsɪzl/", m:"vi. 发咝咝声(煎炸)", tip:"拟声'滋滋' → 油煎声" },
      { w:"rattle", ph:"/ˈrætl/", m:"v. 咔嗒响 n. 拨浪鼓", tip:"拟声'拉头':嘎啦响 → 咔嗒" },
      { w:"gleam", ph:"/ɡliːm/", m:"vi./n. 微光;闪烁", tip:"glow 亲戚 → 闪光 → 微光" }
    ] },
  { id: 176,
    en: "A {{naive}} novice may {{stammer}} on stage, {{fumble}} with notes, {{blush}} red, then {{improvise}} a clever ending.",
    zh: "一个{{天真的|naive}}新手可能在台上{{结巴|stammer}}、{{笨手笨脚弄|fumble}}讲稿、{{脸红|blush}},然后{{即兴发挥|improvise}}出一个巧妙的结尾。",
    words: [
      { w:"naive", ph:"/naɪˈiːv/", m:"adj. 天真的;幼稚的", tip:"谐音'乃衣服':涉世浅 → 天真" },
      { w:"stammer", ph:"/ˈstæmə/", m:"vi./n. 结巴;口吃", tip:"谐音'死他么':话卡住 → 结巴" },
      { w:"fumble", ph:"/ˈfʌmbl/", m:"vi. 笨拙摸索;弄乱", tip:"谐音'反不':手忙脚乱 → 笨手笨脚" },
      { w:"blush", ph:"/blʌʃ/", m:"vi./n. 脸红;羞愧", tip:"谐音'不拉是':面红 → 脸红" },
      { w:"improvise", ph:"/ˈɪmprəvaɪz/", m:"v. 即兴创作;临时凑成", tip:"im(不)+provise(预见)→ 没准备 → 即兴" }
    ] },
  { id: 177,
    en: "The {{obsolete}} machine would {{creak}}, {{rust}} away, often {{malfunction}}, and finally {{crumble}} into a heap.",
    zh: "这台{{过时的|obsolete}}机器会{{嘎吱响|creak}}、{{生锈|rust}}、常常{{出故障|malfunction}},最终{{崩裂|crumble}}成一堆。",
    words: [
      { w:"obsolete", ph:"/ˈɒbsəliːt/", m:"adj. 过时的;废弃的", tip:"obs(旧)+solete → 不再用 → 过时" },
      { w:"creak", ph:"/kriːk/", m:"vi./n. 嘎吱作响", tip:"拟声'克瑞克':门轴响 → 嘎吱" },
      { w:"rust", ph:"/rʌst/", m:"vi./n. 生锈;锈", tip:"谐音'拉死它':铁被锈住 → 生锈" },
      { w:"malfunction", ph:"/ˌmælˈfʌŋkʃn/", m:"vi./n. 故障;失灵", tip:"mal(坏)+function(功能)→ 功能坏 → 故障" },
      { w:"crumble", ph:"/ˈkrʌmbl/", m:"vi. 崩碎;瓦解", tip:"crumb(面包屑)+le → 碎成屑 → 崩碎" }
    ] },
  { id: 178,
    en: "On a {{humid}} day, sweat would {{trickle}} down, the heat {{swelter}}, mosquitoes {{pester}}, and everyone {{yearn}} for a cool breeze.",
    zh: "{{潮湿的|humid}}日子里,汗水{{滴流|trickle}}而下,暑气{{闷热难当|swelter}},蚊子{{纠缠|pester}},人人{{渴望|yearn}}一阵凉风。",
    words: [
      { w:"humid", ph:"/ˈhjuːmɪd/", m:"adj. 潮湿的;湿润的", tip:"hum(湿 humor 体液)+id → 潮湿" },
      { w:"trickle", ph:"/ˈtrɪkl/", m:"vi. 滴流;细流", tip:"谐音'缀口':一滴滴 → 滴流" },
      { w:"swelter", ph:"/ˈsweltə/", m:"vi. 闷热;热得发昏", tip:"swelt(热晕)+er → 闷热" },
      { w:"pester", ph:"/ˈpestə/", m:"vt. 纠缠;烦扰", tip:"pest(害虫)+er → 像害虫缠人 → 烦扰" },
      { w:"yearn", ph:"/jɜːn/", m:"vi. 渴望;思念", tip:"谐音'庸':心心念念 → 渴望" }
    ] },
  { id: 179,
    en: "The {{eerie}} forest looked {{ghastly}} at dusk; shadows would {{prowl}}, branches {{groan}}, and a cold mist {{shroud}} the path.",
    zh: "{{阴森的|eerie}}森林在黄昏显得{{可怕的|ghastly}};阴影{{潜行|prowl}},枝桠{{呻吟|groan}},一层冷雾{{笼罩|shroud}}着小径。",
    words: [
      { w:"eerie", ph:"/ˈɪəri/", m:"adj. 怪异的;阴森的", tip:"谐音'依瑞':瘆得慌 → 阴森" },
      { w:"ghastly", ph:"/ˈɡɑːstli/", m:"adj. 可怕的;惨白的", tip:"ghost(鬼)亲戚 → 鬼一样 → 可怕" },
      { w:"prowl", ph:"/praʊl/", m:"vi. 潜行;暗中觅食", tip:"谐音'扑肉':伺机扑食 → 潜行" },
      { w:"groan", ph:"/ɡrəʊn/", m:"vi./n. 呻吟;抱怨", tip:"谐音'够嗯':痛得哼 → 呻吟" },
      { w:"shroud", ph:"/ʃraʊd/", m:"vt. 笼罩 n. 寿衣", tip:"谐音'刷绕的':盖住 → 笼罩" }
    ] },
  { id: 180,
    en: "Investors began to {{fret}} as prices {{plummet}}, markets {{slump}}, confidence {{wane}}, and savings reached their {{nadir}}.",
    zh: "随着价格{{暴跌|plummet}}、市场{{衰退|slump}}、信心{{衰减|wane}}、储蓄跌至{{最低点|nadir}},投资者开始{{烦恼|fret}}。",
    words: [
      { w:"fret", ph:"/fret/", m:"vi. 烦恼;焦虑", tip:"谐音'佛瑞特':心里嘀咕 → 烦恼" },
      { w:"plummet", ph:"/ˈplʌmɪt/", m:"vi. 暴跌;骤降", tip:"plumb(铅锤)+et → 像铅坠落 → 暴跌" },
      { w:"slump", ph:"/slʌmp/", m:"vi./n. 暴跌;萧条;瘫坐", tip:"谐音'死浪扑':一下塌下 → 暴跌" },
      { w:"wane", ph:"/weɪn/", m:"vi. 衰减;(月)亏", tip:"谐音'喂嗯':逐渐减弱 → 衰减" },
      { w:"nadir", ph:"/ˈneɪdɪə/", m:"n. 最低点;深渊", tip:"谐音'内底儿':谷底 → 最低点" }
    ] },
  { id: 181,
    en: "The {{hospitable}} host would {{usher}} guests in, {{pamper}} them with a {{sumptuous}} meal, and offer warm {{solace}}.",
    zh: "{{好客的|hospitable}}主人会{{引领|usher}}客人进门、用{{丰盛的|sumptuous}}大餐{{款待|pamper}}他们,并送上温暖的{{慰藉|solace}}。",
    words: [
      { w:"hospitable", ph:"/hɒˈspɪtəbl/", m:"adj. 好客的;友好的", tip:"hospit(客 hospital)+able → 待客 → 好客" },
      { w:"usher", ph:"/ˈʌʃə/", m:"vt. 引领;迎接 n. 引座员", tip:"谐音'阿社':领座 → 引领" },
      { w:"pamper", ph:"/ˈpæmpə/", m:"vt. 娇惯;悉心款待", tip:"谐音'胖剖':养得舒服 → 娇惯" },
      { w:"sumptuous", ph:"/ˈsʌmptʃuəs/", m:"adj. 豪华的;丰盛的", tip:"sumpt(花费 consume)→ 花大钱 → 奢华" },
      { w:"solace", ph:"/ˈsɒləs/", m:"n./vt. 安慰;慰藉", tip:"sol(=console 安慰)→ 慰藉" }
    ] },
  { id: 182,
    en: "The {{vigilant}} guard would {{patrol}} the gate, {{intercept}} intruders, raise the {{alarm}}, and {{thwart}} every plot.",
    zh: "{{警惕的|vigilant}}卫兵会{{巡逻|patrol}}大门、{{拦截|intercept}}入侵者、拉响{{警报|alarm}},并{{挫败|thwart}}每一个阴谋。",
    words: [
      { w:"vigilant", ph:"/ˈvɪdʒɪlənt/", m:"adj. 警惕的;警觉的", tip:"vigil(守夜)+ant → 守夜不眠 → 警惕" },
      { w:"patrol", ph:"/pəˈtrəʊl/", m:"v./n. 巡逻;巡查", tip:"谐音'怕戳':来回查 → 巡逻" },
      { w:"intercept", ph:"/ˌɪntəˈsept/", m:"vt. 拦截;截获", tip:"inter(中间)+cept(拿)→ 半路抓 → 拦截" },
      { w:"alarm", ph:"/əˈlɑːm/", m:"n. 警报;惊恐 vt. 使惊恐", tip:"al+arm(武器 → 戒备)→ 警报" },
      { w:"thwart", ph:"/θwɔːt/", m:"vt. 阻挠;挫败", tip:"谐音'死沃特':横插一杠 → 阻挠" }
    ] },
  { id: 183,
    en: "After the {{upheaval}}, citizens would {{rally}}, demand a {{truce}}, {{vouch}} for peace, and {{vindicate}} the innocent victims.",
    zh: "{{剧变|upheaval}}过后,市民们会{{集结|rally}}、要求{{休战|truce}}、为和平{{担保|vouch}},并为无辜受害者{{昭雪|vindicate}}。",
    words: [
      { w:"upheaval", ph:"/ʌpˈhiːvl/", m:"n. 剧变;动荡", tip:"up(上)+heave(掀)→ 天翻地覆 → 剧变" },
      { w:"rally", ph:"/ˈræli/", m:"v. 集结;团结 n. 集会", tip:"re+ally(联合)→ 重新集合 → 集结" },
      { w:"truce", ph:"/truːs/", m:"n. 休战;停战", tip:"谐音'states':暂停打 → 休战" },
      { w:"vouch", ph:"/vaʊtʃ/", m:"vi.(for)担保;证明", tip:"voc(说 voice)→ 出面作证 → 担保" },
      { w:"vindicate", ph:"/ˈvɪndɪkeɪt/", m:"vt. 证明无罪;为…辩白", tip:"vindic(主张权利)→ 还人清白 → 昭雪" }
    ] },
  { id: 184,
    en: "The {{cumbersome}} cart would {{topple}} on rough roads, {{jolt}} the cargo, and {{hamper}} every {{errand}} the boy ran.",
    zh: "这辆{{笨重的|cumbersome}}手推车在崎岖路上会{{倾倒|topple}}、{{颠簸|jolt}}货物,并{{妨碍|hamper}}男孩跑的每趟{{差事|errand}}。",
    words: [
      { w:"cumbersome", ph:"/ˈkʌmbəsəm/", m:"adj. 笨重的;累赘的", tip:"cumber(妨碍)+some → 累赘 → 笨重" },
      { w:"topple", ph:"/ˈtɒpl/", m:"v. 倾倒;推翻", tip:"top(顶)+ple → 头重脚轻 → 倾倒" },
      { w:"jolt", ph:"/dʒəʊlt/", m:"v./n. 颠簸;震惊", tip:"谐音'锥欧特':猛一颠 → 颠簸" },
      { w:"hamper", ph:"/ˈhæmpə/", m:"vt. 妨碍;阻碍", tip:"谐音'憨剖':绊住 → 妨碍" },
      { w:"errand", ph:"/ˈerənd/", m:"n. 差事;跑腿", tip:"谐音'爱running的':跑腿 → 差事" }
    ] },
  { id: 185,
    en: "The {{turbulent}} river would {{surge}} past the bank, {{erode}} the soil, {{engulf}} the fields, and sweep away the wooden {{vessel}}.",
    zh: "{{湍急的|turbulent}}河水会{{奔涌|surge}}过堤岸、{{侵蚀|erode}}土壤、{{吞没|engulf}}田地,并卷走那艘木{{船|vessel}}。",
    words: [
      { w:"turbulent", ph:"/ˈtɜːbjələnt/", m:"adj. 湍急的;动荡的", tip:"turb(搅动 disturb)+ulent → 翻腾 → 湍急" },
      { w:"surge", ph:"/sɜːdʒ/", m:"vi./n. 汹涌;激增", tip:"谐音'瑟吉':浪头涌 → 汹涌" },
      { w:"erode", ph:"/iˈrəʊd/", m:"v. 侵蚀;腐蚀", tip:"e(出)+rode(咬 rodent)→ 啃蚀 → 侵蚀" },
      { w:"engulf", ph:"/ɪnˈɡʌlf/", m:"vt. 吞没;吞噬", tip:"en+gulf(海湾 → 深渊)→ 卷入深渊 → 吞没" },
      { w:"vessel", ph:"/ˈvesl/", m:"n. 船;容器;血管", tip:"谐音'喂手哦':盛装/航行 → 容器/船" }
    ] },
  { id: 186,
    en: "The {{generic}} drug would {{abate}} the {{nausea}}, {{soothe}} the restless patient, and {{dispel}} every lingering ache.",
    zh: "这种{{通用的|generic}}药物会{{减轻|abate}}{{恶心|nausea}}、{{安抚|soothe}}焦躁的病人,并{{驱散|dispel}}每一处持续的疼痛。",
    words: [
      { w:"generic", ph:"/dʒəˈnerɪk/", m:"adj. 通用的;非专利的", tip:"gener(种类 genus)+ic → 一类通用 → 通用" },
      { w:"abate", ph:"/əˈbeɪt/", m:"v. 减轻;减少;缓和", tip:"a+bate(减 → rebate)→ 减弱 → 减轻" },
      { w:"nausea", ph:"/ˈnɔːziə/", m:"n. 恶心;反胃", tip:"naus(船 → 晕船)→ 反胃 → 恶心" },
      { w:"soothe", ph:"/suːð/", m:"vt. 安抚;缓解", tip:"谐音'舒服':使舒服 → 安抚" },
      { w:"dispel", ph:"/dɪˈspel/", m:"vt. 驱散;消除(疑虑等)", tip:"dis(分开)+pel(推)→ 推散 → 驱散" }
    ] },
  { id: 187,
    en: "The {{painstaking}} artist would {{engrave}} fine lines, mix a rich {{palette}}, polish the {{glossy}} surface, and unveil a {{majestic}} mural.",
    zh: "{{一丝不苟的|painstaking}}艺术家会{{雕刻|engrave}}精细线条、调出浓郁的{{调色板|palette}}、抛光{{光亮的|glossy}}表面,并揭幕一幅{{雄伟的|majestic}}壁画。",
    words: [
      { w:"painstaking", ph:"/ˈpeɪnzteɪkɪŋ/", m:"adj. 煞费苦心的;一丝不苟的", tip:"pains(辛苦)+taking → 下苦功 → 一丝不苟" },
      { w:"engrave", ph:"/ɪnˈɡreɪv/", m:"vt. 雕刻;铭记", tip:"en+grave(刻)→ 雕刻" },
      { w:"palette", ph:"/ˈpælət/", m:"n. 调色板;色调", tip:"谐音'怕了它':画家调色 → 调色板" },
      { w:"glossy", ph:"/ˈɡlɒsi/", m:"adj. 光滑的;有光泽的", tip:"gloss(光泽)+y → 有光泽" },
      { w:"majestic", ph:"/məˈdʒestɪk/", m:"adj. 雄伟的;壮丽的", tip:"majesty(威严)+ic → 雄伟" }
    ] },
  { id: 188,
    en: "An {{indispensable}} worker is rarely {{sluggish}}; she would {{expedite}} tasks, {{streamline}} steps, and lift the team's {{morale}}.",
    zh: "{{不可或缺的|indispensable}}员工很少{{迟钝懒散|sluggish}};她会{{加快|expedite}}任务、{{精简|streamline}}步骤,并提升团队的{{士气|morale}}。",
    words: [
      { w:"indispensable", ph:"/ˌɪndɪˈspensəbl/", m:"adj. 不可或缺的", tip:"in(不)+dispensable(可省的)→ 不可省 → 必需" },
      { w:"sluggish", ph:"/ˈslʌɡɪʃ/", m:"adj. 迟缓的;懒散的", tip:"slug(鼻涕虫)+gish → 像蛞蝓 → 迟缓" },
      { w:"expedite", ph:"/ˈekspədaɪt/", m:"vt. 加快;促进", tip:"ex+ped(脚)→ 给脚提速 → 加快" },
      { w:"streamline", ph:"/ˈstriːmlaɪn/", m:"vt. 精简;使流线型", tip:"stream(流)+line → 流线 → 精简" },
      { w:"morale", ph:"/məˈrɑːl/", m:"n. 士气;斗志", tip:"moral(道德 → 精神)→ 精神面貌 → 士气" }
    ] },
  { id: 189,
    en: "The {{notable}} reformer would {{champion}} change, {{galvanize}} crowds, {{transcend}} old limits, and {{inaugurate}} a new era.",
    zh: "这位{{著名的|notable}}改革者会{{拥护|champion}}变革、{{激励|galvanize}}人群、{{超越|transcend}}旧的局限,并{{开创|inaugurate}}一个新时代。",
    words: [
      { w:"notable", ph:"/ˈnəʊtəbl/", m:"adj. 著名的;显著的", tip:"note(注意)+able → 值得注意 → 著名" },
      { w:"champion", ph:"/ˈtʃæmpiən/", m:"vt. 拥护;为…而战 n. 冠军", tip:"冠军挺身而出 → 拥护" },
      { w:"galvanize", ph:"/ˈɡælvənaɪz/", m:"vt. 激励;使振奋", tip:"电流刺激 → 通电般 → 激励" },
      { w:"transcend", ph:"/trænˈsend/", m:"vt. 超越;胜过", tip:"trans(越过)+scend(爬)→ 爬过去 → 超越" },
      { w:"inaugurate", ph:"/ɪˈnɔːɡjəreɪt/", m:"vt. 开创;为…举行就职典礼", tip:"in+augur(占卜 → 开吉)→ 隆重开启 → 开创" }
    ] },
  { id: 190,
    en: "In the {{arid}} desert, an {{oasis}} would {{quench}} thirst, {{revive}} the herd, and restore the travelers' {{vitality}}.",
    zh: "在{{干旱的|arid}}沙漠里,一片{{绿洲|oasis}}能{{解|quench}}渴、{{使复苏|revive}}畜群,并恢复旅人的{{活力|vitality}}。",
    words: [
      { w:"arid", ph:"/ˈærɪd/", m:"adj. 干旱的;贫瘠的", tip:"谐音'爱锐的':寸草不生 → 干旱" },
      { w:"oasis", ph:"/əʊˈeɪsɪs/", m:"n. 绿洲;舒适之地", tip:"谐音'欧爱戏死':沙漠水草地 → 绿洲" },
      { w:"quench", ph:"/kwentʃ/", m:"vt. 解(渴);熄灭", tip:"谐音'昆吃':一饮而尽 → 解渴" },
      { w:"revive", ph:"/rɪˈvaɪv/", m:"v. 复苏;恢复;重演", tip:"re(再)+viv(活 vivid)→ 重新活 → 复苏" },
      { w:"vitality", ph:"/vaɪˈtæləti/", m:"n. 活力;生命力", tip:"vit(生命 vital)+ality → 活力" }
    ] },
  { id: 191,
    en: "A {{prudent}} saver will {{gauge}} risks, {{apportion}} assets, {{hedge}} against loss, and resist the {{lure}} of fads.",
    zh: "{{谨慎的|prudent}}储蓄者会{{衡量|gauge}}风险、{{分配|apportion}}资产、{{对冲|hedge}}亏损,并抵制时髦的{{诱惑|lure}}。",
    words: [
      { w:"prudent", ph:"/ˈpruːdnt/", m:"adj. 谨慎的;精明的", tip:"prud(=provident 有远见)+ent → 谨慎" },
      { w:"gauge", ph:"/ɡeɪdʒ/", m:"vt. 衡量;估计 n. 量规", tip:"谐音'盖纸':量一量 → 衡量" },
      { w:"apportion", ph:"/əˈpɔːʃn/", m:"vt. 分配;分摊", tip:"ap+portion(份额)→ 按份分 → 分配" },
      { w:"hedge", ph:"/hedʒ/", m:"v. 对冲;回避 n. 树篱", tip:"树篱挡风 → 防范 → 对冲" },
      { w:"lure", ph:"/lʊə/", m:"vt./n. 诱惑;引诱", tip:"谐音'露饵':放饵勾引 → 诱惑" }
    ] },
  { id: 192,
    en: "The {{shabby}} stray dog would {{whine}}, {{cower}} in the rain, {{gnaw}} a bone, then {{wag}} its tail at a kind hand.",
    zh: "那只{{破旧的|shabby}}流浪狗会{{呜咽|whine}}、在雨中{{畏缩|cower}}、{{啃|gnaw}}骨头,然后对一只善意的手{{摇|wag}}尾巴。",
    words: [
      { w:"shabby", ph:"/ˈʃæbi/", m:"adj. 破旧的;卑鄙的", tip:"谐音'瞎掰':破破烂烂 → 破旧" },
      { w:"whine", ph:"/waɪn/", m:"vi./n. 哀鸣;抱怨", tip:"谐音'歪嗯':呜呜叫 → 哀鸣" },
      { w:"cower", ph:"/ˈkaʊə/", m:"vi. 畏缩;蜷缩", tip:"谐音'考娃':吓得发抖 → 畏缩" },
      { w:"gnaw", ph:"/nɔː/", m:"v. 啃;咬;折磨", tip:"谐音'闹':一点点啃 → 啃(g 不发音)" },
      { w:"wag", ph:"/wæɡ/", m:"v. 摇摆(尾巴/头)", tip:"谐音'我哥':摇头摆尾 → 摇" }
    ] },
  { id: 193,
    en: "The {{wicked}} swindler would {{dupe}} the old, {{tarnish}} good names, {{embezzle}} funds, then {{vanish}} without a trace.",
    zh: "这个{{邪恶的|wicked}}骗子会{{欺骗|dupe}}老人、{{玷污|tarnish}}好名声、{{挪用|embezzle}}资金,然后{{消失|vanish}}得无影无踪。",
    words: [
      { w:"wicked", ph:"/ˈwɪkɪd/", m:"adj. 邪恶的;缺德的", tip:"witch(女巫)亲戚 → 巫一样坏 → 邪恶" },
      { w:"dupe", ph:"/djuːp/", m:"vt. 欺骗 n. 受骗者", tip:"谐音'丢谱':被忽悠 → 欺骗" },
      { w:"tarnish", ph:"/ˈtɑːnɪʃ/", m:"vt. 玷污;使失去光泽", tip:"谐音'她你失':抹黑 → 玷污" },
      { w:"embezzle", ph:"/ɪmˈbezl/", m:"vt. 挪用;贪污", tip:"em+bezzle(吞)→ 把公款吞了 → 挪用" },
      { w:"vanish", ph:"/ˈvænɪʃ/", m:"vi. 消失;突然不见", tip:"van(空)+ish → 化空 → 消失" }
    ] },
  { id: 194,
    en: "The envoy would {{summon}} both sides, {{appease}} their anger, {{coax}} a deal, {{salute}} the truce, and {{exalt}} lasting peace.",
    zh: "使节会{{召集|summon}}双方、{{平息|appease}}怒火、{{哄|coax}}成协议、{{致敬|salute}}停战,并{{颂扬|exalt}}持久和平。",
    words: [
      { w:"summon", ph:"/ˈsʌmən/", m:"vt. 召集;传唤;鼓起", tip:"sum(下 sub)+mon(提醒 → 叫)→ 叫来 → 召集" },
      { w:"appease", ph:"/əˈpiːz/", m:"vt. 平息;安抚;姑息", tip:"ap+peace(和平)→ 使平和 → 安抚" },
      { w:"coax", ph:"/kəʊks/", m:"vt. 哄;劝诱", tip:"谐音'考克斯':好言哄 → 哄" },
      { w:"salute", ph:"/səˈluːt/", m:"v./n. 致敬;敬礼", tip:"salut(健康 → 问好)→ 致敬" },
      { w:"exalt", ph:"/ɪɡˈzɔːlt/", m:"vt. 颂扬;提升;使高兴", tip:"ex(出)+alt(高 altitude)→ 抬高 → 颂扬" }
    ] },
  { id: 195,
    en: "The {{robust}} hiker would {{traverse}} ridges, {{ford}} streams, {{clamber}} up cliffs, and reach the {{summit}} by noon.",
    zh: "{{强健的|robust}}徒步者会{{穿越|traverse}}山脊、{{蹚过|ford}}溪流、{{攀爬|clamber}}峭壁,并在正午前抵达{{顶峰|summit}}。",
    words: [
      { w:"robust", ph:"/rəʊˈbʌst/", m:"adj. 强健的;结实的", tip:"rob(力量 robot)+ust → 强壮" },
      { w:"traverse", ph:"/trəˈvɜːs/", m:"vt. 横穿;穿越", tip:"tra(横)+vers(转)→ 横着走 → 穿越" },
      { w:"ford", ph:"/fɔːd/", m:"vt. 涉水而过 n. 浅滩", tip:"谐音'佛的':蹚水 → 涉水" },
      { w:"clamber", ph:"/ˈklæmbə/", m:"vi. 攀爬;爬上", tip:"climb 亲戚 → 手脚并用爬 → 攀爬" },
      { w:"summit", ph:"/ˈsʌmɪt/", m:"n. 顶峰;最高级会议", tip:"sum(最高 supreme)+mit → 峰顶" }
    ] },
  { id: 196,
    en: "Reformers must {{dismantle}} unjust rules, {{empower}} the weak, {{uphold}} fairness, {{redress}} old wrongs, and {{liberate}} the oppressed.",
    zh: "改革者必须{{拆除|dismantle}}不公的规则、{{赋权|empower}}弱者、{{维护|uphold}}公平、{{纠正|redress}}旧错,并{{解放|liberate}}受压迫者。",
    words: [
      { w:"dismantle", ph:"/dɪsˈmæntl/", m:"vt. 拆除;废除", tip:"dis+mantle(外罩)→ 卸下罩子 → 拆除" },
      { w:"empower", ph:"/ɪmˈpaʊə/", m:"vt. 授权;赋能", tip:"em(使)+power(权力)→ 给力量 → 赋权" },
      { w:"uphold", ph:"/ʌpˈhəʊld/", m:"vt. 维护;支持", tip:"up(上)+hold(举)→ 高举 → 维护" },
      { w:"redress", ph:"/rɪˈdres/", m:"vt./n. 纠正;补偿", tip:"re(重)+dress(整理)→ 重新摆正 → 纠正" },
      { w:"liberate", ph:"/ˈlɪbəreɪt/", m:"vt. 解放;释放", tip:"liber(自由 liberty)+ate → 解放" }
    ] },
  { id: 197,
    en: "The {{quaint}} village would {{nestle}} in the hills, {{exude}} calm, {{beguile}} painters, and {{linger}} long in memory.",
    zh: "这个{{古色古香的|quaint}}村庄{{依偎|nestle}}在群山间、{{散发|exude}}宁静、{{迷住|beguile}}画家,并久久{{萦绕|linger}}于记忆。",
    words: [
      { w:"quaint", ph:"/kweɪnt/", m:"adj. 古雅的;离奇有趣的", tip:"谐音'昆特':古朴别致 → 古雅" },
      { w:"nestle", ph:"/ˈnesl/", m:"vi. 依偎;舒适地安顿", tip:"nest(巢)+le → 像入巢 → 依偎" },
      { w:"exude", ph:"/ɪɡˈzjuːd/", m:"vt. 散发;流露", tip:"ex(出)+ude(渗)→ 渗出来 → 散发" },
      { w:"beguile", ph:"/bɪˈɡaɪl/", m:"vt. 迷住;诱骗", tip:"be+guile(欺诈 → 哄)→ 哄住 → 迷住" },
      { w:"linger", ph:"/ˈlɪŋɡə/", m:"vi. 逗留;徘徊;萦绕", tip:"long(长)→ 久久不去 → 逗留" }
    ] },
  { id: 198,
    en: "After the {{parched}} season, rain would {{drench}} the soil, seeds {{germinate}}, buds {{unfurl}}, and the {{verdant}} valley come alive.",
    zh: "{{干涸的|parched}}季节过后,雨水{{浇透|drench}}土壤,种子{{发芽|germinate}},花蕾{{舒展|unfurl}},{{苍翠的|verdant}}山谷重焕生机。",
    words: [
      { w:"parched", ph:"/pɑːtʃt/", m:"adj. 干涸的;焦渴的", tip:"parch(烤干)+ed → 烤得干 → 干涸" },
      { w:"drench", ph:"/drentʃ/", m:"vt. 使湿透;浇透", tip:"谐音'拽吃':淋个透 → 湿透" },
      { w:"germinate", ph:"/ˈdʒɜːmɪneɪt/", m:"vi. 发芽;萌发", tip:"germ(芽 → 细菌)+inate → 萌芽 → 发芽" },
      { w:"unfurl", ph:"/ʌnˈfɜːl/", m:"vt. 展开;舒展(旗、芽)", tip:"un(展)+furl(卷)→ 解卷 → 舒展" },
      { w:"verdant", ph:"/ˈvɜːdnt/", m:"adj. 翠绿的;青葱的", tip:"verd(绿 verde)+ant → 翠绿" }
    ] },
  { id: 199,
    en: "The {{tedious}} report would {{baffle}} readers, {{muddle}} the point, {{blur}} key facts, and {{dampen}} all enthusiasm.",
    zh: "这份{{冗长乏味的|tedious}}报告会{{使困惑|baffle}}读者、{{搅混|muddle}}要点、{{模糊|blur}}关键事实,并{{抑制|dampen}}一切热情。",
    words: [
      { w:"tedious", ph:"/ˈtiːdiəs/", m:"adj. 冗长乏味的;单调的", tip:"谐音'剃丢死':无聊到困 → 乏味" },
      { w:"baffle", ph:"/ˈbæfl/", m:"vt. 使困惑;难住", tip:"谐音'掰否':弄懵 → 困惑" },
      { w:"muddle", ph:"/ˈmʌdl/", m:"vt. 搞混;使糊涂 n. 混乱", tip:"mud(泥)+dle → 搅成一团泥 → 搞混" },
      { w:"blur", ph:"/blɜː/", m:"v. 使模糊 n. 模糊一片", tip:"谐音'不勒':看不清 → 模糊" },
      { w:"dampen", ph:"/ˈdæmpən/", m:"vt. 抑制;使沮丧;弄湿", tip:"damp(潮 → 浇冷水)+en → 泼冷水 → 抑制" }
    ] },
  { id: 200,
    en: "On graduation day, students would {{treasure}} the past, {{embark}} on careers, {{triumph}} over hardship, {{excel}} in their fields, and steadily {{grow}}.",
    zh: "毕业那天,学子们会{{珍藏|treasure}}过去、{{开启|embark}}事业、{{战胜|triumph}}艰难、在各自领域{{出类拔萃|excel}},并稳步{{成长|grow}}。",
    words: [
      { w:"treasure", ph:"/ˈtreʒə/", m:"vt. 珍藏;珍视 n. 财宝", tip:"treasure(宝藏)→ 当宝贝 → 珍藏" },
      { w:"embark", ph:"/ɪmˈbɑːk/", m:"vi.(on)开始;上船", tip:"em+bark(船)→ 上船启程 → 开始" },
      { w:"triumph", ph:"/ˈtraɪəmf/", m:"vi. 战胜;成功 n. 胜利", tip:"谐音'踹母夫':大获全胜 → 胜利" },
      { w:"excel", ph:"/ɪkˈsel/", m:"vi. 擅长;胜过;突出", tip:"ex(出)+cel(高 → 超出)→ 出类拔萃" },
      { w:"grow", ph:"/ɡrəʊ/", m:"vi. 成长;增长", tip:"基础词:生长 → 成长" }
    ] }
];
