const day33Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 33 Advanced Masterclass (Week 5)</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 33: 相槌・リアクション第5弾（Speak of the devil! / Your call!） ＆ 使役・存現文
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">Week 5 Conversational & B2 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                日常の雑談で思わず笑ってしまう「ネイティブの決まり文句・相槌」と、感情の変化や情景を映画のように描写する「使役構文（使・令）・存現文」をマスターします。
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
              <h3 class="text-xl font-bold text-neutral-900">1. 会話が弾む！ネイティブの相槌・リアクション集（第5弾）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">Tap to Listen</span>
          </div>

          <p class="text-xs sm:text-sm text-neutral-600">
            友だち同士の会話や職場でのちょっとしたやり取りで、ユーモアや温かみを添えるネイティブ定番のリアクションです。タップして発音を聴いてみましょう！
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Card 1 -->
            <div onclick="speak('说曹操，曹操到！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Speak of the devil!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">说曹操，曹操到！</p>
              <p class="text-xs text-rose-600 font-medium">Shuō Cáocāo, Cáocāo dào!</p>
              <p class="text-xs text-neutral-600">「噂をすれば影！（曹操の話をしていたら曹操本人が現れた）」という、誰かの話題を出した瞬間に本人が来たときの定番ジョーク表現です。</p>
            </div>

            <!-- Card 2 -->
            <div onclick="speak('看你的！随便你吧！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">It is up to you! / Your call!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">看你的！ / 随便你吧！</p>
              <p class="text-xs text-rose-600 font-medium">Kàn nǐ de! / Suíbiàn nǐ ba!</p>
              <p class="text-xs text-neutral-600">「君次第だよ！」「君の好きなようにしていいよ！」と相手に決定権を委ねるときの軽快なフレーズです。</p>
            </div>

            <!-- Card 3 -->
            <div onclick="speak('加油！坚持住！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Hang in there! / You got this!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">加油！ / 坚持住！</p>
              <p class="text-xs text-rose-600 font-medium">Jiāyóu! / Jiānchí zhù!</p>
              <p class="text-xs text-neutral-600">「頑張って！」「あと少し踏ん張って！」と励ますときの鉄板フレーズ。「挺住！(Tǐng zhù!)」もよく使われます。</p>
            </div>

            <!-- Card 4 -->
            <div onclick="speak('别客气！小事一桩！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Do not mention it! / No biggie!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">别客气！ / 小事一桩！</p>
              <p class="text-xs text-rose-600 font-medium">Bié kèqi! / Xiǎoshì yì zhuāng!</p>
              <p class="text-xs text-neutral-600">お礼を言われたときの「どういたしまして！」に加え、「そんなの朝飯前だよ（ほんの些細なことだよ）！」と格好よく返す表現です。</p>
            </div>

            <!-- Card 5 -->
            <div onclick="speak('难怪呢！原来是这样！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">That explains it! / Oh, I get it!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">难怪呢！ / 原来是这样！</p>
              <p class="text-xs text-rose-600 font-medium">Nánguài ne! / Yuánlái shì zhèyàng!</p>
              <p class="text-xs text-neutral-600">「なるほどね、それで納得いったよ！」「そういうことだったのか！」と事情を飲み込んだときの自然な相槌です。</p>
            </div>

            <!-- Card 6 -->
            <div onclick="speak('拭目以待！走着瞧吧！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Wait and see! / Stay tuned!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">拭目以待！ / 走着瞧吧！</p>
              <p class="text-xs text-rose-600 font-medium">Shìmù yǐdài! / Zǒuzhe qiáo ba!</p>
              <p class="text-xs text-neutral-600">「乞うご期待！（目を拭って待とう）」「まあ見ててよ（結果をお楽しみに）！」と期待感や自信を示す表現です。</p>
            </div>
          </div>
        </section>

        <!-- Section 2: Detailed Grammar Explanations -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 深掘り解説：使役表現（「使 / 令」）と情景を描く「存現文」</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 感情・変化を引き起こす使役（「使 / 令」vs 口語の「让 / 叫」）</h4>
              <p class="text-neutral-600">
                「AがBを（ある感情・状態に）させる」を表すとき、口語では <code class="bg-neutral-100 px-1 rounded">让</code> を使いますが、書き言葉や少し改まった会話では <code class="bg-neutral-100 px-1 rounded">使</code> や <code class="bg-neutral-100 px-1 rounded">令</code> を使うと表現がぐっと引き締まります。<br>
                ・<code class="bg-neutral-100 px-1 rounded">这个消息令人振奋。</code>（この知らせは人々を奮い立たせる）<br>
                ・<code class="bg-neutral-100 px-1 rounded">他的进步使大家刮目相看。</code>（彼の進歩はみんなに目を見張らせた）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 情景描写の切り札「存現文（場所 ＋ 動詞＋着/了/来 ＋ 数量詞＋名詞）」</h4>
              <p class="text-neutral-600">
                「どこに何が存在・出現・消失したか」をカメラで映すように描写する構文です。主語の位置に<strong>場所詞</strong>を置き、後ろに<strong>不特定の名詞</strong>を置きます。<br>
                ・<code class="bg-neutral-100 px-1 rounded">墙上挂着一幅水墨画。</code>（壁に水墨画が一幅かかっている）<br>
                ・<code class="bg-neutral-100 px-1 rounded">迎面走来一位老朋友。</code>（向こうから旧友が一人歩いてきた）
              </p>
            </div>
          </div>
        </section>

        <!-- Section 3: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">3. 実践会話：相槌 × 使役・存現文（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('你听说了吗？小王这次演讲的表现真是令人刮目相看！你看，迎面走过来的不就是他吗？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Nǐ tīngshuō le ma? Xiǎo Wáng zhè cì yǎnjiǎng de biǎoxiàn zhēn shì lìng rén guāmù xiāngkàn! Nǐ kàn, yíngmiàn zǒu guòlái de bú jiùshì tā ma?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">你听说了吗？小王这次演讲的表现真是令人刮目相看！你看，迎面走过来的不就是他吗？</p>
                <p class="text-xs text-neutral-500">聞いた？王くんの今回のスピーチでの活躍は本当に目を見張るものがあったよ！ほら、向こうから歩いてくるのって彼じゃない？</p>
              </div>
            </div>

            <div onclick="speak('哈哈，真是说曹操，曹操到！难怪他最近每天都在练习口语呢。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-rose-100 text-rose-700 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-rose-600">Bさん（相槌2連発！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Hāhā, zhēn shì shuō Cáocāo, Cáocāo dào! Nánguài ne, tā zuìjìn měitiān dōu zài liànxí kǒuyǔ.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">哈哈，真是说曹操，曹操到！难怪呢，他最近每天都在练习口语。</p>
                <p class="text-xs text-neutral-500">ははっ、本当に噂をすれば影だね！なるほどね、彼最近毎日スピーキングの練習をしてたんだよ。</p>
              </div>
            </div>

            <div onclick="speak('是啊，接下来的比赛我们拭目以待吧！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Shì a, jiē xiàlái de bǐsài wǒmen shìmù yǐdài ba!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">是啊，接下来的比赛我们拭目以待吧！</p>
                <p class="text-xs text-neutral-500">そうだね、次の大会も乞うご期待だね！</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 4: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">4. Day 33 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 相槌クイズ：Speak of the devil!</span>
            <p class="font-medium text-neutral-900">誰かの噂話をしていたら本人が現れたときの決まり文句「噂をすれば影！」はどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 说曹操，曹操到！ は「噂をすれば影！」の超定番フレーズです。', '不正解！ 小事一桩 は「朝飯前だよ・些細なことだよ」の意味です。', '说曹操，曹操到')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 说曹操，曹操到！ (Shuō Cáocāo, Cáocāo dào!)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 说曹操，曹操到！ は「噂をすれば影！」の超定番フレーズです。', '不正解！ 小事一桩 は「朝飯前だよ・些細なことだよ」の意味です。', '说曹操，曹操到')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 小事一桩！ (Xiǎoshì yì zhuāng!)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：Piece of cake!</span>
            <p class="font-medium text-neutral-900">「朝飯前だよ・ほんの些細なことだよ（小事一[ ]）」の空欄に入る一文字は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>小事一</span>
              <span onclick="revealAnswer(2, 'zhuāng (桩)', '小事一桩')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：It is up to you!</span>
            <p class="font-medium text-neutral-900">「君次第だよ・君に任せるよ（kàn nǐ de）」の漢字3文字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(3, ['看你的'], '看你的')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 選択問題：存現文の動詞形態</span>
            <p class="font-medium text-neutral-900">「壁に水墨画が一幅かかっている（墙上挂[ ]一幅水墨画）」の空欄に入るアスペクト助詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 状態の持続を表す存現文では 动词＋着 を使います。', '不正解！ 过 は過去の経験を表します。', '墙上挂着一幅水墨画')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 着 (zhe)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 状態の持続を表す存現文では 动词＋着 を使います。', '不正解！ 过 は過去の経験を表します。', '墙上挂着一幅水墨画')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 过 (guò)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「ははっ、本当に噂をすれば影だね！なるほどね、彼最近毎日スピーキングの練習をしてたんだよ」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '哈哈，真是说曹操，曹操到！难怪呢，他最近每天都在练习口语。', '哈哈，真是说曹操，曹操到！难怪呢，他最近每天都在练习口语。')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 5: C-POP Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 33 Special • God of Songs Ballad
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              5. 陈奕迅（Eason Chan）『十年』に学ぶ時の流れと関係性の対比
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              香港の歌神・陈奕迅による中華圏カラオケの絶対的定番曲から、時間と距離感を描く美しい対比表現を学ぼう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">十年 (Shínián / Ten Years)</h4>
                <p class="text-xs text-neutral-500">原唱：陈奕迅 (Eason Chan)</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【楽曲コラム：『十年』と大人の切なさ】</strong><br>
              2003年に発表され、北京語圏全体で空前の大ヒットとなった名バラード。「10年前は赤の他人だった二人が、恋人になり、そして10年後にはまたただの友人に戻って挨拶を交わす」という人生のほろ苦さを、感情を抑えた深いバリトンボイスで歌い上げています。
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
                  <span class="font-bold text-lg text-rose-950">十年之前，我不认识你，你不属于我；十年之后，我们是朋友，还可以问候</span>
                  <button onclick="speak('十年之前，我不认识你，你不属于我；十年之后，我们是朋友，还可以问候')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Shínián zhīqián, wǒ bú rènshi nǐ, nǐ bù shǔyú wǒ; shínián zhīhòu, wǒmen shì péngyou, hái kěyǐ wènhòu</p>
                <p class="text-neutral-700 font-medium">10年前、僕は君を知らず、君も僕のものではなかった。10年後、僕たちは友達で、今でもこうして挨拶を交わせる</p>
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
                  <span class="font-bold text-neutral-900">「属于 (shǔyú / 〜に属する)」と「问候 (wènhòu / 挨拶する・安否を気遣う)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <code class="bg-neutral-200 px-1 rounded">属于</code> は「（所有・帰属が）〜に属する」を表す重要動詞で、ビジネス（<code class="bg-neutral-200 px-1 rounded">属于公司</code>）からロマンチックな表現まで幅広く使われます。また、<code class="bg-neutral-200 px-1 rounded">问候</code> は単なる「你好」ではなく、久々に会った相手や離れた人の健康・近況を温かく気遣うニュアンスを持つ美しい単語です。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
