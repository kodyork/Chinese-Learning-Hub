const day36Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 36 Advanced Masterclass (Week 6 Start)</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 36: 相槌・リアクション第8弾（That's hilarious! / Next level!） ＆ 累加構文（尚且…何况…）
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">Week 6 Start • Native Reactions & B2-C1 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                感情豊かに盛り上がる「ネイティブの相槌・ツッコミ表現」と、「〜でさえ…なのだから、まして…はなおさらだ（尚且…何况…）」という洗練された累加・漸層構文をマスターします。
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <main class="max-w-4xl mx-auto px-4 py-10 space-y-12">

        <!-- Speed Controller -->
        <div class="bg-white border border-neutral-200/80 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          <div class="flex items-center space-x-2 text-neutral-800">
            <i data-lucide="volume-2" class="w-5 h-5 shrink-0 text-rose-600"></i>
            <span class="text-sm font-semibold">発音スピード調整（Audio Speed Controller）:</span>
          </div>
          <div class="flex items-center space-x-2">
            <button onclick="setSpeed(0.75)" id="speed-075" class="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-900 bg-neutral-900 text-white font-medium transition cursor-pointer">0.75x (Slow)</button>
            <button onclick="setSpeed(1.0)" id="speed-100" class="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-900 font-medium transition cursor-pointer">1.0x (Normal)</button>
          </div>
        </div>

        <!-- Section 1: Native Reaction & Conversational Phrases -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="zap" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">1. 会話が弾む！ネイティブの相槌・リアクション集（第8弾）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">Tap to Listen</span>
          </div>

          <p class="text-xs sm:text-sm text-neutral-600">
            爆笑したとき、相手の手腕に脱帽したとき、あるいは「もうその話は思い出したくない！」と軽く愚痴をこぼすときに使える、表情豊かなネイティブ表現です。タップして発音を聴いてみましょう！
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Card 1 -->
            <div onclick="speak('笑死我了！太逗了！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">That's hilarious! / Cracking me up!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">笑死我了！ / 太逗了！</p>
              <p class="text-xs text-rose-600 font-medium">Xiào sǐ wǒ le! / Tài dòu le!</p>
              <p class="text-xs text-neutral-600">「笑い死にしそう（爆笑した）！」「めっちゃ面白い・ウケる！」と、ユーモアのある話に大笑いするときの超定番リアクションです。</p>
            </div>

            <!-- Card 2 -->
            <div onclick="speak('绝了！太绝了！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Next level! / Genius! / Amazing!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">绝了！ / 太绝了！</p>
              <p class="text-xs text-rose-600 font-medium">Jué le! / Tài jué le!</p>
              <p class="text-xs text-neutral-600">「最高すぎる！」「神がかってる！」と、料理の美味しさやアイデアの秀逸さに感動したときに思わず出る一言です。</p>
            </div>

            <!-- Card 3 -->
            <div onclick="speak('说来话长……')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">It's a long story...</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">说来话长……</p>
              <p class="text-xs text-rose-600 font-medium">Shuō lái huà cháng...</p>
              <p class="text-xs text-neutral-600">「話せば長くなるんだけど……」と、複雑な経緯やちょっとしたドラマがあったことを匂わせるこなれた前置きフレーズです。</p>
            </div>

            <!-- Card 4 -->
            <div onclick="speak('算你厉害！服了你了！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">You win! / I hand it to you!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">算你厉害！ / 服了你了！</p>
              <p class="text-xs text-rose-600 font-medium">Suàn nǐ lìhai! / Fú le nǐ le!</p>
              <p class="text-xs text-neutral-600">「参りました、君の勝ちだよ！」「いや〜、君には敵わないな！」と、相手の実力や機転に笑顔で降参するときの相槌です。</p>
            </div>

            <!-- Card 5 -->
            <div onclick="speak('这还差不多！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Now you're talking! / That's more like it!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">这还差不多！</p>
              <p class="text-xs text-rose-600 font-medium">Zhè hái chàbuduō!</p>
              <p class="text-xs text-neutral-600">「そうこなくっちゃ！」「それなら納得だよ！」と、状況が改善したり相手がようやく良い提案をしてくれたときのフレーズです。</p>
            </div>

            <!-- Card 6 -->
            <div onclick="speak('别提了！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Don't even get me started! / Don't remind me!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">别提了！</p>
              <p class="text-xs text-rose-600 font-medium">Bié tí le!</p>
              <p class="text-xs text-neutral-600">「もう言わないでよ！」「思い出したくもないよ！」と、失敗談や大変だった出来事を話題にされたときの鉄板リアクションです。</p>
            </div>
          </div>
        </section>

        <!-- Section 2: Detailed Grammar Explanations -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 深掘り解説：累加・漸層の高度構文（「尚且…何况…」「既…又…」）</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 漸層・類推を表す「尚且 A，何况 B（shàngqiě A, hékuàng B / Aでさえ…なのだから、ましてBはなおさらだ）」</h4>
              <p class="text-neutral-600">
                前句で程度が軽い（または条件が良い）ケースを挙げて「それでさえそうなのだから」、後句で「まして条件が厳しいBなら言わずもがなだ」と強調するB2〜C1重要構文です。口語では <code class="bg-neutral-100 px-1 rounded">连…都…，更何况…</code> もよく使われます。<br>
                ・<code class="bg-neutral-100 px-1 rounded">成年人尚且觉得吃力，何况是一个孩子呢？</code>（大人でさえ大変だと感じるのだから、まして子供ならなおさらだ）<br>
                ・<code class="bg-neutral-100 px-1 rounded">母语者尚且需要反复推敲，何况我们学习者？</code>（ネイティブでさえ推敲を重ねる必要があるのだから、まして私たち学習者は言うまでもない）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 2つの性質や動作の同時成立を表す「既…又…（jì... yòu... / 〜でもあり、〜でもある）」</h4>
              <p class="text-neutral-600">
                形容詞・動詞・フレーズを対等に結びつけ、プラス面同士またはマイナス面同士の「両立」をスマートに描写します（プラスとマイナスの混在には使わないのがポイントです）。<br>
                ・<code class="bg-neutral-100 px-1 rounded">新房子既安静又宽敞。</code>（新しい部屋は静かだし、広々としてもいる）<br>
                ・<code class="bg-neutral-100 px-1 rounded">这种方法既省时间又省力气。</code>（この方法は時間の節約にもなるし、労力の節約にもなる）
              </p>
            </div>
          </div>
        </section>

        <!-- Section 3: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">3. 実践会話：相槌 × 累加構文（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('最近刚搬到公司附近，新房子既安静又宽敞，每天早上能多睡一个小时！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Zuìjìn gāng bān dào gōngsī fùjìn, xīn fángzi jì ānjìng yòu kuānchang, měitiān zǎoshang néng duō shuì yí ge xiǎoshí!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">最近刚搬到公司附近，新房子既安静又宽敞，每天早上能多睡一个小时！</p>
                <p class="text-xs text-neutral-500">最近会社の近くに引っ越したばかりなんだけど、新しい部屋は静かで広々しているし、毎朝1時間多く寝られるんだ！</p>
              </div>
            </div>

            <div onclick="speak('绝了！每天不用早起挤地铁，简直太幸福了。像我这样每天通勤两小时尚且觉得吃不消，何况还要天天加班呢！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-rose-100 text-rose-700 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-rose-600">Bさん（相槌＋「尚且…何况…」！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Jué le! Měitiān búyòng zǎoqǐ jǐ dìtiě, jiǎnzhí tài xìngfú le. Xiàng wǒ zhèyàng měitiān tōngqín liǎng xiǎoshí shàngqiě juéde chībuxiāo, hékuàng hái yào tiāntiān jiābān ne!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">绝了！每天不用早起挤地铁，简直太幸福了。像我这样每天通勤两小时尚且觉得吃不消，何况还要天天加班呢！</p>
                <p class="text-xs text-neutral-500">最高すぎる！毎日早起きして満員電車に乗らなくていいなんて、本当に幸せだね。私みたいに毎日通勤2時間だけでも体がもたないと感じるのに、まして毎日残業まであるならなおさらだよ！</p>
              </div>
            </div>

            <div onclick="speak('别提了，我以前也是那样，说来话长……不过现在总算熬过来了，这还差不多！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん（相槌3連発！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Bié tí le, wǒ yǐqián yě shì nàyàng, shuō lái huà cháng... Búguò xiànzài zǒngsuàn áo guòlái le, zhè hái chàbuduō!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">别提了，我以前也是那样，说来话长……不过现在总算熬过来了，这还差不多！</p>
                <p class="text-xs text-neutral-500">もう言わないでよ、私も以前はそうだったんだ、話せば長くなるけど……でも今はようやく乗り越えたから、これでやっと一安心だよ！</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 4: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">4. Day 36 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 相槌クイズ：Don't remind me!</span>
            <p class="font-medium text-neutral-900">大変だった過去の出来事を話題にされて「もう言わないでよ！思い出したくもないよ！」と返すときの自然な相槌は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 别提了！(Bié tí le!) は「もう言わないでよ！」の超定番リアクションです。', '不正解！ 算你厉害 は「参りました・君の勝ちだよ」の意味です。', '别提了')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 别提了！ (Bié tí le!)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 别提了！(Bié tí le!) は「もう言わないでよ！」の超定番リアクションです。', '不正解！ 算你厉害 は「参りました・君の勝ちだよ」の意味です。', '别提了')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 算你厉害！ (Suàn nǐ lìhai!)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：That's hilarious!</span>
            <p class="font-medium text-neutral-900">「笑い死にしそう・爆笑した！（笑[ ]我了！）」の空欄に入る一文字は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>笑</span>
              <span onclick="revealAnswer(2, 'sǐ (死)', '笑死我了')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>我了！</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：Now you're talking!</span>
            <p class="font-medium text-neutral-900">「そうこなくっちゃ・それなら納得だよ（zhè hái chàbuduō）」の漢字5文字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-44 bg-white">
              <button onclick="checkInput(3, ['这还差不多', '這還差不多'], '这还差不多')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 選択問題：「尚且 A，何况 B」の呼応</span>
            <p class="font-medium text-neutral-900">「大人でさえ大変だと感じるのだから、まして子供ならなおさらだ（成年人[ ]觉得吃力，何况是一个孩子呢？）」の空欄に入る語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 尚且 A，何况 B で「Aでさえ…なのだから、ましてBはなおさらだ」を表します。', '不正解！ 尽管 は譲歩構文（尽管…也…）に使います。', '成年人尚且觉得吃力，何况是一个孩子呢')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 尚且 (shàngqiě)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 尚且 A，何况 B で「Aでさえ…なのだから、ましてBはなおさらだ」を表します。', '不正解！ 尽管 は譲歩構文（尽管…也…）に使います。', '成年人尚且觉得吃力，何况是一个孩子呢')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 尽管 (jǐnguǎn)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「最高すぎる！毎日早起きして満員電車に乗らなくていいなんて、本当に幸せだね」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '绝了！每天不用早起挤地铁，简直太幸福了。', '绝了！每天不用早起挤地铁，简直太幸福了。')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 5: C-POP Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 36 Special • Healing Mandopop Classic
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              5. 光良（Michael Wong）『童话』に学ぶ純粋な願いと変化の表現
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              アジア中で大ヒットを記録した珠玉のピアノバラードから、一途な想いを託す美しい中国語フレーズを味わおう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">童话 (Tónghuà / Fairy Tale)</h4>
                <p class="text-xs text-neutral-500">原唱：光良 (Michael Wong)</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【楽曲コラム：『童话』と信じ続ける力】</strong><br>
              マレーシア出身のシンガーソングライター・光良が2005年にリリースし、中華圏の音楽チャートを席巻した不朽の名曲。「おとぎ話の結末は自分たちの手で書ける」というメッセージと澄み切ったピアノの旋律は、中国語学習者の定番ソングとしても不動の人気を誇ります。
            </p>
          </div>

          <!-- 歌詞フレーズセクション -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-6">
            <div class="flex justify-between items-center border-b border-neutral-200 pb-3">
              <h4 class="text-md font-bold text-neutral-900 flex items-center space-x-2">
                <i data-lucide="mic" class="w-4 h-4 text-rose-600"></i>
                <span>名フレーズを聴いてみよう</span>
              </h4>
            </div>

            <div class="space-y-4 text-xs sm:text-sm">
              <div class="p-4 rounded-xl border-2 border-rose-200 bg-rose-50/30 hover-lift transition space-y-1">
                <div class="flex justify-between items-start">
                  <span class="font-bold text-lg text-rose-950">我愿变成童话里，你爱的那个天使，张开双手变成翅膀守护你</span>
                  <button onclick="speak('我愿变成童话里，你爱的那个天使，张开双手变成翅膀守护你')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Wǒ yuàn biànchéng tónghuà lǐ, nǐ ài de nàge tiānshǐ, zhāngkāi shuāngshǒu biànchéng chìbǎng shǒuhù nǐ</p>
                <p class="text-neutral-700 font-medium">僕は童話の中で君が愛するあの天使になりたい、両手を広げて翼に変え、君を守り抜くよ</p>
              </div>
            </div>
          </div>

          <!-- 文法解説 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-5">
            <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
              <i data-lucide="sparkles" class="w-5 h-5 text-rose-600"></i>
              <h4 class="text-lg font-bold text-neutral-900">歌から学べる！重要表現解説</h4>
            </div>

            <div class="grid gap-4 text-xs sm:text-sm">
              <div class="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1.5">
                <div class="flex items-center space-x-2">
                  <span class="bg-rose-600 text-white font-bold px-2 py-0.5 rounded text-xs">ポイント 1</span>
                  <span class="font-bold text-neutral-900">結果補語「变成 (biànchéng / 〜に変わる)」と「张开 (zhāngkāi / 広げる)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  動詞 <code class="bg-neutral-200 px-1 rounded">变</code> に結果補語 <code class="bg-neutral-200 px-1 rounded">成</code>（〜になる・変化の結果を表す）を付けることで、「別の姿へと生まれ変わる」変化の結果を明確に示しています。また、<code class="bg-neutral-200 px-1 rounded">守护 (shǒuhù)</code> は「（大切な人や夢などを）見守り、守り抜く」という温かく力強い動詞です。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
