const day29Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 29 Advanced Masterclass (Week 5 Start)</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 29: ネイティブの相槌（That's cool! / Exactly!） ＆ 譲歩構文（尽管…也…）
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">Week 5 Conversational & B2 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                会話のテンポを一気にネイティブ級にする「即答リアクション・相槌フレーズ」と、事実の譲歩を表す重要構文「尽管…也…」をセットで習得します。
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

        <!-- Section 1: Native Reaction & Backchanneling Phrases -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="zap" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">1. 会話が弾む！ネイティブの相槌・リアクション集</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">Tap to Listen</span>
          </div>

          <p class="text-xs sm:text-sm text-neutral-600">
            教科書にはあまり載っていないものの、実際の会話では毎分のように飛び交う「一言リアクション」です。カードをタップしてイントネーションごと覚えましょう！
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Card 1 -->
            <div onclick="speak('太酷了！真厉害！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">That's so cool! / Awesome!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">太酷了！ / 真厉害！</p>
              <p class="text-xs text-rose-600 font-medium">Tài kù le! / Zhēn lìhai!</p>
              <p class="text-xs text-neutral-600">「めっちゃかっこいい！」「すごいね！」と相手を褒めたり感心したりするときの定番。若者同士なら「牛啊！(Niú a! / ヤバい、すげえ！)」もよく使います。</p>
            </div>

            <!-- Card 2 -->
            <div onclick="speak('就是说啊！没错！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Exactly! / Tell me about it!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">就是说啊！ / 没错！</p>
              <p class="text-xs text-rose-600 font-medium">Jiùshì shuō a! / Méicuò!</p>
              <p class="text-xs text-neutral-600">「まさにその通り！」「ほんとそれ！」と強く共感するときの相槌。北京など北方では「可不是嘛！(Kě bùshì ma!)」もネイティブ感が抜群です。</p>
            </div>

            <!-- Card 3 -->
            <div onclick="speak('真的假的？不会吧？')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Seriously? / No way!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">真的假的？ / 不会吧？</p>
              <p class="text-xs text-rose-600 font-medium">Zhēnde jiǎde? / Búhuì ba?</p>
              <p class="text-xs text-neutral-600">「マジで？（本当なの？）」と驚いたときの反応。「不会吧？」は「まさか、そんなはずないでしょ？」という軽い疑いや驚きを表します。</p>
            </div>

            <!-- Card 4 -->
            <div onclick="speak('怪不得！原来如此！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">No wonder! / I see!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">怪不得！ / 原来如此！</p>
              <p class="text-xs text-rose-600 font-medium">Guàibude! / Yuánlái rúcǐ!</p>
              <p class="text-xs text-neutral-600">「なるほど、道理で！」「そういうことだったのか！」と納得したときの相槌。「怪不得」は会話で非常によく使われる超便利ワードです。</p>
            </div>

            <!-- Card 5 -->
            <div onclick="speak('有道理。说得也是。')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Good point. / Fair enough.</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">有道理。 / 说得也是。</p>
              <p class="text-xs text-rose-600 font-medium">Yǒu dàolǐ. / Shuō de yě shì.</p>
              <p class="text-xs text-neutral-600">「一理あるね」「確かにそう言われればそうだね」と、相手の意見に落ち着いて同意するときにぴったりの大人の相槌です。</p>
            </div>

            <!-- Card 6 -->
            <div onclick="speak('行啊！没问题！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Sounds good! / Sure thing!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">行啊！ / 没问题！</p>
              <p class="text-xs text-rose-600 font-medium">Xíng a! / Méi wèntí!</p>
              <p class="text-xs text-neutral-600">「いいよ！」「了解、任せて！」と快諾するときの軽快な返事。「好呀！(Hǎo ya!)」と合わせて日常の返答に欠かせません。</p>
            </div>
          </div>
        </section>

        <!-- Section 2: Detailed Grammar Explanations -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 深掘り解説：事実の譲歩を表す「尽管…也…」</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 「尽管…也 / 还是…（尽管：jǐnguǎn / 〜ではあるが、それでも…）」</h4>
              <p class="text-neutral-600">
                前句で客観的な事実や困難を認めつつ、後句で「それにもかかわらず、やはり行動や状態が変わらない」ことを表します。<br>
                例：<code class="bg-neutral-100 px-1 rounded">尽管外面下着雨，大家还是按时赶到了。</code>（外で雨が降っていたにもかかわらず、皆時間通りに到着した）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② B2応用：「尽管」のもう一つの用法（どうぞ・遠慮なく）</h4>
              <p class="text-neutral-600">
                副詞として動詞の前に置くと、「遠慮せずに自由に〜してください」という意味になります。<br>
                例：<code class="bg-neutral-100 px-1 rounded">有什么问题，大家尽管问。</code>（何か質問があれば、どうぞ遠慮なく聞いてください）
              </p>
            </div>
          </div>
        </section>

        <!-- Section 3: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">3. 実践会話：相槌 × 譲歩構文（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('听说他尽管工作特别忙，每天也坚持学一个小时中文。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Tīngshuō tā jǐnguǎn gōngzuò tèbié máng, měitiān yě jiānchí xué yí ge xiǎoshí Zhōngwén.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">听说他尽管工作特别忙，每天也坚持学一个小时中文。</p>
                <p class="text-xs text-neutral-500">聞いたところによると、彼は仕事がすごく忙しいのに、毎日1時間中国語の勉強を続けているんだって。</p>
              </div>
            </div>

            <div onclick="speak('真的假的？太酷了！怪不得他最近说得这么流利！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-rose-100 text-rose-700 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-rose-600">Bさん（相槌3連発！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Zhēnde jiǎde? Tài kù le! Guàibude tā zuìjìn shuō de zhème liúlì!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">真的假的？太酷了！怪不得他最近说得这么流利！</p>
                <p class="text-xs text-neutral-500">マジで？めっちゃかっこいいじゃん！道理で最近あんなにペラペラなわけだ！</p>
              </div>
            </div>

            <div onclick="speak('就是说啊！所以大家有什么不懂的地方，也可以尽管问他。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Jiùshì shuō a! Suǒyǐ dàjiā yǒu shénme bù dǒng de dìfang, yě kěyǐ jǐnguǎn wèn tā.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">就是说啊！所以大家有什么不懂的地方，也可以尽管问他。</p>
                <p class="text-xs text-neutral-500">ほんとそれ！だからみんなも分からないところがあれば、遠慮なく彼に聞いていいよ。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 4: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">4. Day 29 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 相槌クイズ：Exactly!</span>
            <p class="font-medium text-neutral-900">相手の発言に「まさにその通り！ほんとそれ！」と強く共感するときの自然な相槌は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 就是说啊！(Jiùshì shuō a!) は「ほんとそれ！Exactly!」の定番です。', '不正解！ 不会吧 は「まさか・嘘でしょ」という驚きの表現です。', '就是说啊')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 就是说啊！ (Jiùshì shuō a!)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 就是说啊！(Jiùshì shuō a!) は「ほんとそれ！Exactly!」の定番です。', '不正解！ 不会吧 は「まさか・嘘でしょ」という驚きの表現です。', '就是说啊')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 不会吧！ (Búhuì ba!)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：No wonder!</span>
            <p class="font-medium text-neutral-900">「道理で〜なわけだ！（[ ]不得）」の空欄に入る漢字は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(2, 'guài (怪)', '怪不得')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>不得</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：That's cool!</span>
            <p class="font-medium text-neutral-900">「めっちゃかっこいい！（tài kù le）」の漢字3文字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(3, ['太酷了'], '太酷了')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 選択問題：事実の譲歩</span>
            <p class="font-medium text-neutral-900">「〜ではあるが、それでも… / どうぞ遠慮なく〜する」の2つの意味を持つ単語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 尽管 (jǐnguǎn) が正解です。', '不正解！ 因为 は「〜なので」という理由を表します。', '尽管')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 尽管 (jǐnguǎn)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 尽管 (jǐnguǎn) が正解です。', '不正解！ 因为 は「〜なので」という理由を表します。', '尽管')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 因为 (yīnwèi)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「マジで？めっちゃかっこいいじゃん！道理で最近あんなにペラペラなわけだ！」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '真的假的？太酷了！怪不得他最近说得这么流利！', '真的假的？太酷了！怪不得他最近说得这么流利！')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 5: C-POP Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 29 Special • Classic Mandopop Ballad
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              5. 五月天（Mayday）『知足』に学ぶ人生の哲学と情景描写
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              アジアを代表するロックバンドの国民的名曲から、切なさを包み込む美しい言葉を学ぼう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">知足 (Zhīzú / Contentment)</h4>
                <p class="text-xs text-neutral-500">原唱：五月天 (Mayday)</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【楽曲コラム：『知足』と足るを知る心】</strong><br>
              「もし僕の手を離すことが君の幸せなら、僕は惜しみながらも手放そう」という究極の愛と優しさを歌った五月天の代表作。人生の切なさを包み込むような美しいメロディが心に染み入ります。
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
                  <span class="font-bold text-lg text-rose-950">当我看见你在窗前微笑，所有痛苦都随风飘</span>
                  <button onclick="speak('当我看见你在窗前微笑，所有痛苦都随风飘')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Dāng wǒ kànjiàn nǐ zài chuāng qián wēixiào, suǒyǒu tòngkǔ dōu suí fēng piāo</p>
                <p class="text-neutral-700 font-medium">窓辺で君が微笑んでいるのを見ると、すべての苦痛が風に乗って飛んでいくんだ</p>
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
                  <span class="font-bold text-neutral-900">「〜のとき」を表す「当…时 (dāng... shí)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <code class="bg-neutral-200 px-1 rounded">当……（的时候）</code> は、特定のタイミングや情景をドラマチックに切り取る、C-POPの歌詞や書き言葉の定番構文です。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
