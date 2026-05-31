/* ===== 写作数据:万能句式 + 题型范文 + 默写 =====
   patterns: 句式库(en 整句, key 默写时挖掉的核心短语, zh 释义, use 用途)
   topics: 题型 + 提纲 + 范文 + 句子默写 */
window.WRITING = {
  patterns: [
    { use:"开头·引入", en:"It is widely acknowledged that education plays an increasingly vital role in modern society.", key:"is widely acknowledged that", zh:"人们普遍认为……" },
    { use:"开头·引入", en:"When it comes to whether students should take a gap year, opinions vary from person to person.", key:"opinions vary from person to person", zh:"当谈到……时,人们看法各异。" },
    { use:"开头·现象", en:"In recent years, an increasing number of people have begun to attach importance to mental health.", key:"an increasing number of people", zh:"近年来,越来越多的人……" },
    { use:"亮明观点", en:"From my perspective, the benefits of online learning far outweigh its drawbacks.", key:"far outweigh its drawbacks", zh:"在我看来,……的好处远大于弊端。" },
    { use:"亮明观点", en:"As far as I am concerned, we should attach great importance to lifelong learning.", key:"attach great importance to", zh:"就我而言,我们应高度重视……" },
    { use:"论证·举例", en:"A case in point is that many graduates have benefited from internships.", key:"A case in point is that", zh:"一个典型的例子是……" },
    { use:"论证·举例", en:"Take artificial intelligence as an example; it has transformed the way we work.", key:"Take artificial intelligence as an example", zh:"以……为例……" },
    { use:"论证·强调", en:"There is no denying that a positive attitude contributes greatly to one's success.", key:"There is no denying that", zh:"不可否认,……" },
    { use:"论证·数据", en:"Numerous studies have shown that regular exercise improves both body and mind.", key:"Numerous studies have shown that", zh:"大量研究表明……" },
    { use:"让步·转折", en:"Admittedly, new technology may bring some challenges; however, its advantages are undeniable.", key:"Admittedly", zh:"诚然,……;然而……" },
    { use:"让步·转折", en:"While some people argue that money brings happiness, I would contend that it cannot buy everything.", key:"I would contend that", zh:"尽管有人认为……,但我坚持认为……" },
    { use:"递进", en:"What is more, reading not only broadens our horizons but also enriches our inner world.", key:"not only broadens our horizons but also", zh:"更重要的是,……不仅……而且……" },
    { use:"结尾·呼吁", en:"In conclusion, it is high time that we took effective measures to protect the environment.", key:"it is high time that we took effective measures to", zh:"总之,我们该采取有效措施去……了。" },
    { use:"结尾·条件", en:"Only by working together can we build a sustainable future.", key:"Only by working together can we", zh:"只有……,我们才能……(倒装)" },
    { use:"结尾·建议", en:"Therefore, it is advisable for us to plan ahead so as to seize every opportunity.", key:"it is advisable for us to", zh:"因此,我们最好……以便……" },
    { use:"结尾·升华", en:"There is every reason to believe that, with joint efforts, a brighter future awaits us.", key:"There is every reason to believe that", zh:"我们完全有理由相信,在共同努力下,更光明的未来在等着我们。" }
  ],

  topics: [
    {
      id:"low-carbon-2024",
      type:"现象+观点议论文", real:"2024年6月真题",
      title:"低碳生活(Low-carbon life)",
      prompt:"Write an essay that begins with the sentence \"Nowadays more and more people choose to live a low-carbon life by riding bikes or walking instead of driving.\" You can make comments, cite examples or use your personal experiences to develop your essay. (≥150 words)",
      outline:[
        "第1段:复述现象 + 亮明观点(低碳生活值得提倡)",
        "第2段:阐述原因/好处 + 举例(减污染、省钱、强身)",
        "第3段:总结 + 呼吁人人参与"
      ],
      sample:[
        "Nowadays more and more people choose to live a low-carbon life by riding bikes or walking instead of driving. This shift, in my view, is a positive trend that deserves to be encouraged.",
        "Several reasons account for this phenomenon. First and foremost, a low-carbon lifestyle significantly reduces the emission of greenhouse gases, thus relieving the pressure on our fragile environment. In addition, walking and cycling are economical and beneficial to our health. Take my own experience as an example: since I started cycling to school, I have not only saved money but also become far more energetic.",
        "In conclusion, it is high time that we took concrete measures to embrace a greener way of living. Only when every individual makes a little change can we build a sustainable future for generations to come."
      ],
      cloze:[
        { s:"This shift, in my view, is a positive trend that ___ to be encouraged.", a:"deserves", hint:"值得(单数动词)" },
        { s:"A low-carbon lifestyle significantly reduces the ___ of greenhouse gases.", a:"emission", hint:"排放(名词)" },
        { s:"It is high time that we ___ concrete measures to embrace a greener way of living.", a:"took", hint:"该做某事了(虚拟,用过去式)" }
      ]
    },
    {
      id:"importance-innovation",
      type:"重要性议论文(高频)",
      title:"创新/某品质的重要性",
      prompt:"常考变体:论述 innovation / cooperation / perseverance / lifelong learning 等某一品质对个人或社会的重要性。(≥150 words)",
      outline:[
        "第1段:提出该品质 + 它为何重要(总论点)",
        "第2段:分点论证 + 举例(对个人 / 对社会)",
        "第3段:总结呼吁 + 升华"
      ],
      sample:[
        "It is widely acknowledged that innovation plays an increasingly vital role in today's competitive world. Without it, neither individuals nor nations can thrive in the long run.",
        "There is no denying that innovation contributes greatly to social progress. On the one hand, it drives industries to improve efficiency and create new opportunities; the rapid rise of smartphones, for instance, has completely transformed the way we communicate. On the other hand, an innovative mind enables individuals to solve problems creatively and stand out from others.",
        "In conclusion, innovation is the engine of human development. Therefore, it is advisable for us to cultivate creativity and dare to challenge old ideas, so as to embrace a brighter future."
      ],
      cloze:[
        { s:"It is widely ___ that innovation plays an increasingly vital role.", a:"acknowledged", hint:"被公认的" },
        { s:"There is no ___ that innovation contributes greatly to social progress.", a:"denying", hint:"不可否认(deny 的 -ing)" },
        { s:"It is ___ for us to cultivate creativity and dare to challenge old ideas.", a:"advisable", hint:"明智的、可取的" }
      ]
    },
    {
      id:"saying-quote",
      type:"名言/谚语类(高频)",
      title:"名言警句类",
      prompt:"常考变体:给一句名言/谚语(如 \"Knowledge is a treasure, but practice is the key to it.\"),要求阐释其含义并谈看法。(≥150 words)",
      outline:[
        "第1段:引出名言 + 解释其含义",
        "第2段:举例论证名言的道理",
        "第3段:联系自身/现实,总结呼吁"
      ],
      sample:[
        "\"Knowledge is a treasure, but practice is the key to it.\" This well-known saying reminds us that knowledge alone is far from enough; only through practice can its true value be unlocked.",
        "From my perspective, the meaning behind these words is profound. A case in point is learning a foreign language: no matter how many grammar rules we memorize, we can never speak fluently unless we keep practicing. Likewise, scientists must turn their theories into experiments before any real discovery can be made.",
        "In conclusion, knowledge and practice are like two wings of a bird, neither of which can be missing. Only by combining what we learn with constant practice can we make the most of our knowledge."
      ],
      cloze:[
        { s:"Only through practice can its true value be ___.", a:"unlocked", hint:"被开启/解锁" },
        { s:"___ my perspective, the meaning behind these words is profound.", a:"From", hint:"在我看来(From my perspective)" },
        { s:"Only by ___ what we learn with constant practice can we make the most of our knowledge.", a:"combining", hint:"结合(combine 的 -ing)" }
      ]
    }
  ]
};
