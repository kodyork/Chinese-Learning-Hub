const day31Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 31 Advanced Masterclass (Week 5)</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 31: 相槌・リアクション第3弾（It depends. / Count on me!） ＆「把」構文の高度応用
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">Week 5 Conversational & B2 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                予定の調整や依頼への返答で即座に使える「ネイティブの相槌＆決めゼリフ」と、抽象的な事柄や比喩を扱うB2レベルの「把」構文を習得します。
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
              <h3 class="text-xl font-bold text-neutral-900">1. 会話が弾む！ネイティブの相槌・リアクション集（第3弾）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">Tap to Listen</span>
          </div>

          <p class="text-xs sm:text-sm text-neutral-600">
            相手からの相談や誘いに対して、白黒はっきりさせずに柔らかく受け止めたり、頼もしく引き受けたりするときの定番フレーズです。タップして発音を確認しましょう！
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Card 1 -->
            <div onclick="speak('看情况吧。到时候再说。')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">It depends. / We will see.</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">看情况吧。 / 到时候再说。</p>
              <p class="text-xs text-rose-600 font-medium">Kàn qíngkuàng ba. / Dào shíhou zài shuō.</p>
              <p class="text-xs text-neutral-600">「状況次第かな」「その時になってから考えよう」という、日常のスケジュール調整で毎日使う超頻出フレーズです。</p>
            </div>

            <!-- Card 2 -->
            <div onclick="speak('放心吧！包在我身上！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Leave it to me! / Count on me!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">放心吧！ / 包在我身上！</p>
              <p class="text-xs text-rose-600 font-medium">Fàngxīn ba! / Bāo zài wǒ shēnshang!</p>
              <p class="text-xs text-neutral-600">「安心して！」「私に任せておいて！」と頼もしく引き受けるときの慣用表現。「包在我身上」はネイティブ感が抜群です。</p>
            </div>

            <!-- Card 3 -->
            <div onclick="speak('说得通。这倒也是。')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Makes sense. / Logical.</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">说得通。 / 这倒也是。</p>
              <p class="text-xs text-rose-600 font-medium">Shuōdetōng. / Zhè dào yě shì.</p>
              <p class="text-xs text-neutral-600">「筋が通っているね」「なるほど納得いくよ」と、相手の説明に論理的に納得したときのスマートな相槌です。</p>
            </div>

            <!-- Card 4 -->
            <div onclick="speak('彼此彼此！过奖了！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Same here! / You flatter me!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">彼此彼此！ / 过奖了！</p>
              <p class="text-xs text-rose-600 font-medium">Bǐcǐ bǐcǐ! / Guòjiǎng le!</p>
              <p class="text-xs text-neutral-600">褒められたときの「お互い様ですよ！（彼此彼此）」や「褒めすぎですよ（过奖了）」。大人の余裕を感じさせる返しです。</p>
            </div>

            <!-- Card 5 -->
            <div onclick="speak('太可惜了！真遗憾！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">What a pity! / That is a shame!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">太可惜了！ / 真遗憾！</p>
              <p class="text-xs text-rose-600 font-medium">Tài kěxī le! / Zhēn yíhàn!</p>
              <p class="text-xs text-neutral-600">「それはもったいない！」「残念だったね！」と相手の残念なニュースに寄り添うときの定番リアクション。</p>
            </div>

            <!-- Card 6 -->
            <div onclick="speak('先这样吧！回头联系！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Let us call it a day! / Talk soon!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">先这样吧！ / 回头联系！</p>
              <p class="text-xs text-rose-600 font-medium">Xiān zhèyàng ba! / Huítóu liánxì!</p>
              <p class="text-xs text-neutral-600">電話やWeChatのやり取りを自然に切り上げるときの「とりあえず今日はこの辺で！」「また後で連絡するね！」です。</p>
            </div>
          </div>
        </section>

        <!-- Section 2: Detailed Grammar Explanations -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 深掘り解説：B2必携の「把（bǎ）」構文・高度応用</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 抽象的な対象の処置・変化（把 ＋ 抽象名詞 ＋ 動詞 ＋ 結果/方向補語）</h4>
              <p class="text-neutral-600">
                初級では「把苹果吃了（リンゴを食べた）」のような具体物を扱いますが、中上級では「問題・考え・プレッシャー」などの抽象概念を処置・変化させる表現が多用されます。<br>
                ・<code class="bg-neutral-100 px-1 rounded">把想法清晰地表达出来</code>（考えをはっきりと表現し出す）<br>
                ・<code class="bg-neutral-100 px-1 rounded">把压力转化为动力</code>（プレッシャーを原動力へと変える）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② B2応用：「把 A 当作 / 看作 B（AをBとみなす・扱う）」</h4>
              <p class="text-neutral-600">
                ある対象に対して特定の評価や位置づけを与える、ビジネスでも日常でも非常に洗練された表現です。<br>
                ・<code class="bg-neutral-100 px-1 rounded">我一直把你当作最好的朋友。</code>（私はずっと君のことを一番の親友だと思っている）<br>
                ・<code class="bg-neutral-100 px-1 rounded">别把别人的好意当作理所当然。</code>（他人の好意を当たり前だと思ってはいけない）
              </p>
            </div>
          </div>
        </section>

        <!-- Section 3: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">3. 実践会話：相槌 ×「把」構文（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('明天的会议，你能帮我把这份方案的细节再修改一下吗？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Míngtiān de huìyì, nǐ néng bāng wǒ bǎ zhè fèn fāngàn de xìjié zài xiūgǎi yíxià ma?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">明天的会议，你能帮我把这份方案的细节再修改一下吗？</p>
                <p class="text-xs text-neutral-500">明日の会議なんだけど、この企画案の細部をもう一度修正するのを手伝ってくれる？</p>
              </div>
            </div>

            <div onclick="speak('放心吧！包在我身上！我一定在下班前把重点整理出来。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-rose-100 text-rose-700 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-rose-600">Bさん（相槌＋「把」構文！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Fàngxīn ba! Bāo zài wǒ shēnshang! Wǒ yídìng zài xiàbān qián bǎ zhòngdiǎn zhěnglǐ chūlái.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">放心吧！包在我身上！我一定在下班前把重点整理出来。</p>
                <p class="text-xs text-neutral-500">安心して！私に任せておいて！退勤前までに必ずポイントを整理し終えるから。</p>
              </div>
            </div>

            <div onclick="speak('太感谢了！那我们先这样吧，回头联系！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Tài gǎnxiè le! Nà wǒmen xiān zhèyàng ba, huítóu liánxì!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">太感谢了！那我们先这样吧，回头联系！</p>
                <p class="text-xs text-neutral-500">本当にありがとう！じゃあとりあえず今日はこの辺で、また後で連絡するね！</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 4: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">4. Day 31 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 相槌クイズ：It depends.</span>
            <p class="font-medium text-neutral-900">「状況次第かな（It depends.）」と柔らかく答えるときの最も自然な表現は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 看情况吧。(Kàn qíngkuàng ba.) は「状況次第だね」の定番です。', '不正解！ 没办法 は「仕方がない・打つ手がない」の意味です。', '看情况吧')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 看情况吧。 (Kàn qíngkuàng ba.)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 看情况吧。(Kàn qíngkuàng ba.) は「状況次第だね」の定番です。', '不正解！ 没办法 は「仕方がない・打つ手がない」の意味です。', '看情况吧')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 没办法。 (Méi bànfǎ.)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：Leave it to me!</span>
            <p class="font-medium text-neutral-900">「私に任せておいて！（[ ]在我身上！）」の空欄に入る一文字は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(2, 'bāo (包)', '包在我身上')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>在我身上！</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：What a pity!</span>
            <p class="font-medium text-neutral-900">「それは残念・もったいない！（tài kěxī le）」の漢字4文字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(3, ['太可惜了'], '太可惜了')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 選択問題：「把 A 当作 B」</span>
            <p class="font-medium text-neutral-900">「私はずっと君を一番の親友だと思っている（我一直把你[ ]最好的朋友）」の空欄に入る表現は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 把 A 当作 B で「AをBとみなす・扱う」を表します。', '不正解！ 以为 は「〜だと思い込む（事実に反する）」という意味になります。', '我一直把你当作最好的朋友')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 当作 (dàngzuò)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 把 A 当作 B で「AをBとみなす・扱う」を表します。', '不正解！ 以为 は「〜だと思い込む（事実に反する）」という意味になります。', '我一直把你当作最好的朋友')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 以为 (yǐwéi)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「安心して！私に任せておいて！退勤前までに必ずポイントを整理し終えるから」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '放心吧！包在我身上！我一定在下班前把重点整理出来。', '放心吧！包在我身上！我一定在下班前把重点整理出来。')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 5: C-POP Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 31 Special • Timeless Mandopop Classic
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              5. 孙燕姿（Stefanie Sun）『遇见』に学ぶ運命と詩的表現
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              透明感あふれる歌声で中華圏の青春を彩った名曲から、疑問詞を使った叙情的なフレーズを味わおう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">遇见 (Yùjiàn / Encounter)</h4>
                <p class="text-xs text-neutral-500">原唱：孙燕姿 (Stefanie Sun)</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【楽曲コラム：『遇见』と偶然の出会い】</strong><br>
              シンガポール出身の歌姫・孙燕姿の代表作であり、映画『ターンレフト・ターンライト（向左走·向右走）』の主題歌。大都会の雑踏の中で「まだ見ぬ運命の人とどんな出会いを果たすのか」を繊細なピアノの旋律に乗せて歌い上げています。
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
                  <span class="font-bold text-lg text-rose-950">我遇见谁 会有怎样的对白，我等的人 他在多远的未来</span>
                  <button onclick="speak('我遇见谁 会有怎样的对白，我等的人 他在多远的未来')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Wǒ yùjiàn shéi huì yǒu zěnyàng de duìbái, wǒ děng de rén tā zài duō yuǎn de wèilái</p>
                <p class="text-neutral-700 font-medium">私は誰と出会い、どんな会話を交わすのだろう。私が待っている人は、どれほど遠い未来にいるのだろう</p>
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
                  <span class="font-bold text-neutral-900">疑問代詞の不特定用法「谁 / 怎样的 / 多远」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  ここでの <code class="bg-neutral-200 px-1 rounded">谁</code>（誰か）や <code class="bg-neutral-200 px-1 rounded">怎样的</code>（どのような）は、相手に質問するだけでなく、「まだ特定されていない未知の相手や未来」を思い描く文学的・叙情的な響きを生み出しています。<code class="bg-neutral-200 px-1 rounded">对白</code> は「（映画や舞台の）セリフ・会話」を表す美しい名詞です。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
