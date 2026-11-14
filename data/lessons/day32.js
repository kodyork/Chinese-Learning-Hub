const day32Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 32 Advanced Masterclass (Week 5)</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 32: 相槌・リアクション第4弾（That's a relief! / Take your time!） ＆ 受身構文の応用
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">Week 5 Conversational & B2 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                相手を気遣ったり、ホッとした気持ちを伝えたりする「温かみのある相槌フレーズ」と、被害以外のニュアンスも含むB2レベルの受身構文（被・让・叫・为…所…）を習得します。
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
              <h3 class="text-xl font-bold text-neutral-900">1. 会話が弾む！ネイティブの相槌・リアクション集（第4弾）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">Tap to Listen</span>
          </div>

          <p class="text-xs sm:text-sm text-neutral-600">
            安堵したときや、相手を急かさずに気遣うとき、あるいは「一概には言えないね」と柔らかく返すときに使える大人の相槌フレーズです。タップして音で覚えましょう！
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Card 1 -->
            <div onclick="speak('那就好！总算放心了！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">That is a relief! / Good to hear!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">那就好！ / 总算放心了！</p>
              <p class="text-xs text-rose-600 font-medium">Nà jiù hǎo! / Zǒngsuàn fàngxīn le!</p>
              <p class="text-xs text-neutral-600">「それならよかった！」「ようやく安心したよ！」と、良い報告や無事の知らせを聞いてホッとしたときの定番リアクションです。</p>
            </div>

            <!-- Card 2 -->
            <div onclick="speak('慢慢来，不着急。')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Take your time! / No rush!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">慢慢来，不着急。</p>
              <p class="text-xs text-rose-600 font-medium">Mànmàn lái, bù zháojí.</p>
              <p class="text-xs text-neutral-600">「ゆっくりでいいよ、急がないから」と相手を気遣う優しい一言。中国語を話そうとして言葉に詰まったときにもネイティブがよくかけてくれる言葉です。</p>
            </div>

            <!-- Card 3 -->
            <div onclick="speak('再同意不过了！说到了点子上！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">I could not agree more! / Spot on!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">再同意不过了！ / 说到了点子上！</p>
              <p class="text-xs text-rose-600 font-medium">Zài tóngyì búguò le! / Shuō dào le diǎnzi shàng!</p>
              <p class="text-xs text-neutral-600">「これ以上ないほど賛成！」「まさに核心を突いているね！」という、議論やビジネスの場でも使える知的な賛同表現です。</p>
            </div>

            <!-- Card 4 -->
            <div onclick="speak('那可不一定。难说。')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Not necessarily. / Hard to say.</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">那可不一定。 / 难说。</p>
              <p class="text-xs text-rose-600 font-medium">Nà kě bù yídìng. / Nánshuō.</p>
              <p class="text-xs text-neutral-600">「それはどうかな（一概には言えないよ）」「なんとも言えないね」と、角を立てずに別の可能性を示唆するときのスマートな返しです。</p>
            </div>

            <!-- Card 5 -->
            <div onclick="speak('我想想看……让我想一下。')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Let me see... / Give me a second.</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">我想想看…… / 让我想一下。</p>
              <p class="text-xs text-rose-600 font-medium">Wǒ xiǎngxiang kàn... / Ràng wǒ xiǎng yíxià.</p>
              <p class="text-xs text-neutral-600">「うーん、ちょっと考えてみるね」と、返答する前に自然な間をつなぐフィラー（つなぎ言葉）。沈黙を防ぐ必須フレーズです。</p>
            </div>

            <!-- Card 6 -->
            <div onclick="speak('辛苦了！你真不容易！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Good job! / You have been through a lot!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">辛苦了！ / 你真不容易！</p>
              <p class="text-xs text-rose-600 font-medium">Xīnkǔ le! / Nǐ zhēn bù róngyì!</p>
              <p class="text-xs text-neutral-600">「お疲れ様！」に加えて、「本当に大変だったね（よく頑張ったね）」と相手の苦労を深く労う「你真不容易！」は心を一気に近づけます。</p>
            </div>
          </div>
        </section>

        <!-- Section 2: Detailed Grammar Explanations -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 深掘り解説：受身文（「被 / 让 / 叫 / 为…所…」）の高度表現</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 中立・ポジティブな受身（「被评为」「被录取」「被感动」）</h4>
              <p class="text-neutral-600">
                かつて「被」は被害・迷惑を表すことが中心でしたが、現代中国語では客観的な事実や喜ばしい受身にも広く使われます。<br>
                ・<code class="bg-neutral-100 px-1 rounded">他被北京大学录取了。</code>（彼は北京大学に合格・採用された）<br>
                ・<code class="bg-neutral-100 px-1 rounded">大家都被他的故事感动了。</code>（みんな彼の話に感動させられた）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 口語と書き言葉の使い分け（「让 / 叫 / 给」vs「为…所…」）</h4>
              <p class="text-neutral-600">
                ・<strong>口語では「让 / 叫 ＋ 動作主（＋ 给）」：</strong>話し言葉では「被」よりも「让」や「叫」が自然です（動作主の省略は不可）。<br>
                例：<code class="bg-neutral-100 px-1 rounded">我的手机让我弟弟给弄坏了。</code>（私のスマホは弟に壊されてしまった）<br>
                ・<strong>書き言葉・ニュースでは「为 A 所 B」：</strong>フォーマルな文章や報道で使われる格調高い受身表現です。<br>
                例：<code class="bg-neutral-100 px-1 rounded">这种做法逐渐为人们所接受。</code>（このやり方は次第に人々に受け入れられるようになった）
              </p>
            </div>
          </div>
        </section>

        <!-- Section 3: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">3. 実践会話：相槌 × 受身構文（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('刚才吓我一跳，我还以为文件被我不小心删掉了，还好找回来了。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Gāngcái xià wǒ yí tiào, wǒ hái yǐwéi wénjiàn bèi wǒ bù xiǎoxīn shāndiào le, háihǎo zhǎohuílái le.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">刚才吓我一跳，我还以为文件被我不小心删掉了，还好找回来了。</p>
                <p class="text-xs text-neutral-500">さっきはびっくりしたよ、うっかりファイルを削除しちゃったかと思ったけど、なんとか復元できたよ。</p>
              </div>
            </div>

            <div onclick="speak('那就好！总算放心了！你最近熬夜太多，慢慢来，不着急。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-rose-100 text-rose-700 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-rose-600">Bさん（相槌×気遣いフレーズ！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Nà jiù hǎo! Zǒngsuàn fàngxīn le! Nǐ zuìjìn áoyè tài duō, mànmàn lái, bù zháojí.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">那就好！总算放心了！你最近熬夜太多，慢慢来，不着急。</p>
                <p class="text-xs text-neutral-500">それならよかった！ようやく安心したよ！最近夜更かししすぎだから、ゆっくりでいいよ、急がないから。</p>
              </div>
            </div>

            <div onclick="speak('谢谢你！不过好消息是，我们的方案已经被客户正式采纳了！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Xièxie nǐ! Búguò hǎo xiāoxi shì, wǒmen de fāngàn yǐjīng bèi kèhù zhèngshì cǎinà le!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">谢谢你！不过好消息是，我们的方案已经被客户正式采纳了！</p>
                <p class="text-xs text-neutral-500">ありがとう！でも良い知らせがあって、私たちの企画案がついにクライアントに正式採用されたんだ！</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 4: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">4. Day 32 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 相槌クイズ：That's a relief!</span>
            <p class="font-medium text-neutral-900">無事を知らせる報告を聞いて「それならよかった！安心したよ！」と返すときの自然な相槌は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 那就好！(Nà jiù hǎo!) は「それならよかった！」の定番リアクションです。', '不正解！ 那可不一定 は「それはどうかな（一概には言えない）」の意味です。', '那就好')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 那就好！ (Nà jiù hǎo!)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 那就好！(Nà jiù hǎo!) は「それならよかった！」の定番リアクションです。', '不正解！ 那可不一定 は「それはどうかな（一概には言えない）」の意味です。', '那就好')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 那可不一定！ (Nà kě bù yídìng!)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：Take your time!</span>
            <p class="font-medium text-neutral-900">「ゆっくりでいいよ、急がないから（慢慢来，不[ ]急）」の空欄に入る一文字は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>慢慢来，不</span>
              <span onclick="revealAnswer(2, 'zháo (着)', '慢慢来，不着急')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>急</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：You've been through a lot!</span>
            <p class="font-medium text-neutral-900">相手の苦労を深く労う「本当に大変だったね（nǐ zhēn bù róngyì）」の漢字5文字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-44 bg-white">
              <button onclick="checkInput(3, ['你真不容易'], '你真不容易')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 選択問題：文語的な受身構文</span>
            <p class="font-medium text-neutral-900">ニュースや書き言葉で「人々に受け入れられる（为人们[ ]接受）」の空欄に入る一文字は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 为 A 所 B の形でフォーマルな受身表現を作ります。', '不正解！ 把 は処置構文に使います。', '为人们所接受')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 所 (suǒ)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 为 A 所 B の形でフォーマルな受身表現を作ります。', '不正解！ 把 は処置構文に使います。', '为人们所接受')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 把 (bǎ)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「それならよかった！ようやく安心したよ！ゆっくりでいいよ、急がないから」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '那就好！总算放心了！慢慢来，不着急。', '那就好！总算放心了！慢慢来，不着急。')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 5: C-POP Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 32 Special • King of Mandopop
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              5. 周杰伦（Jay Chou）『晴天』に学ぶノスタルジーと時間表現
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              中華圏の音楽配信サイトで再生数歴代トップクラスを誇る青春アンセムから、切ない記憶を語るフレーズを学ぼう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">晴天 (Qíngtiān / Sunny Day)</h4>
                <p class="text-xs text-neutral-500">原唱：周杰伦 (Jay Chou)</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【楽曲コラム：『晴天』と青春の1ページ】</strong><br>
              2003年のリリース以来、20年以上経った今でも世代を超えて愛され続ける周杰伦の金字塔。学生時代の淡い初恋と、すれ違いのまま終わってしまった記憶を、アコースティックギターの切ない音色とともに描き出しています。
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
                  <span class="font-bold text-lg text-rose-950">从前从前，有个人爱你很久</span>
                  <button onclick="speak('从前从前，有个人爱你很久')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Cóngqián cóngqián, yǒu ge rén ài nǐ hěn jiǔ</p>
                <p class="text-neutral-700 font-medium">むかしむかし、君のことをずっと愛していた人がいたんだよ</p>
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
                  <span class="font-bold text-neutral-900">物語を始める「从前 (cóngqián)」と時間量補語「很久」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <code class="bg-neutral-200 px-1 rounded">从前</code> を2回重ねることで、童話の「むかしむかし（Once upon a time）」のようなノスタルジックな響きを作っています。また、<code class="bg-neutral-200 px-1 rounded">爱你很久</code> のように「動詞＋目的語＋時間量」の語順で動作の継続時間を表すのも重要なポイントです。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
