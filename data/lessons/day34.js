const day34Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 34 Advanced Masterclass (Week 5)</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 34: 相槌・リアクション第6弾（By the way... / It's a deal!） ＆ 仮定・条件の高度表現
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">Week 5 Conversational & B2 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                話題を切り替えたり約束を交わしたりする「ネイティブの会話フレーズ」と、「〜しない限り…（除非…否则…）」「〜である以上は…（既然…就…）」などの高度な条件構文を習得します。
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
              <h3 class="text-xl font-bold text-neutral-900">1. 会話が弾む！ネイティブの相槌・リアクション集（第6弾）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">Tap to Listen</span>
          </div>

          <p class="text-xs sm:text-sm text-neutral-600">
            話題の転換、話の要約、偶然への驚き、そして約束の締めくくりまで、リアルな会話の流れを自在にコントロールできる表現集です。タップして音で覚えましょう！
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Card 1 -->
            <div onclick="speak('对了，顺便说一下，')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">By the way... / Speaking of which...</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">对了，… / 顺便说一下，…</p>
              <p class="text-xs text-rose-600 font-medium">Duìle, ... / Shùnbiàn shuō yíxià, ...</p>
              <p class="text-xs text-neutral-600">「そういえば…」「ついでに言うと…」と、会話の中でふと思い出したことを切り出すときの超定番フレーズです。</p>
            </div>

            <!-- Card 2 -->
            <div onclick="speak('长话短说，总而言之，')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Long story short... / In short...</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">长话短说，… / 总而言之，…</p>
              <p class="text-xs text-rose-600 font-medium">Chánghuà duǎnshuō, ... / Zǒng ér yán zhī, ...</p>
              <p class="text-xs text-neutral-600">「手短に言うと…（長い話を短くすると…）」という四字熟語。前置きを省いて結論から話したいときに非常にスマートです。</p>
            </div>

            <!-- Card 3 -->
            <div onclick="speak('我就知道！果然不出所料！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">I knew it! / Just as expected!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">我就知道！ / 果然不出所料！</p>
              <p class="text-xs text-rose-600 font-medium">Wǒ jiù zhīdào! / Guǒrán bù chū suǒ liào!</p>
              <p class="text-xs text-neutral-600">「やっぱりそうだと思った！」「案の定、予想通りだ！」と、自分の予想が的中したときのリアクションです。</p>
            </div>

            <!-- Card 4 -->
            <div onclick="speak('太巧了！世界真小！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">What a coincidence! / Small world!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">太巧了！ / 世界真小！</p>
              <p class="text-xs text-rose-600 font-medium">Tài qiǎo le! / Shìjiè zhēn xiǎo!</p>
              <p class="text-xs text-neutral-600">「すごい偶然だね！」「世間は狭いね！」と、共通の知人や同じ経験が見つかって盛り上がったときにぴったりの相槌です。</p>
            </div>

            <!-- Card 5 -->
            <div onclick="speak('不至于吧？没那么夸张吧？')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">It is not that bad, is it? / Come on!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">不至于吧？ / 没那么夸张吧？</p>
              <p class="text-xs text-rose-600 font-medium">Bú zhìyú ba? / Méi nàme kuāzhāng ba?</p>
              <p class="text-xs text-neutral-600">「そこまで大げさじゃないでしょ？」「まさかそこまではいかないよね？」と、相手のオーバーな表現に軽くツッコミを入れる相槌です。</p>
            </div>

            <!-- Card 6 -->
            <div onclick="speak('说定了！一言为定！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">It is a deal! / Agreed!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">说定了！ / 一言为定！</p>
              <p class="text-xs text-rose-600 font-medium">Shuōdìng le! / Yì yán wéi dìng!</p>
              <p class="text-xs text-neutral-600">「決まりだね！」「約束だよ（男に二言はない／一言で決定）！」と、食事や旅行の約束を気持ちよく締めくくる決めゼリフです。</p>
            </div>
          </div>
        </section>

        <!-- Section 2: Detailed Grammar Explanations -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 深掘り解説：条件と前提の高度表現（「除非…否则/才…」「既然…就…」）</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 唯一条件を表す「除非 A，否则 B / 才 B（Aしない限りBだ / Aして初めてBだ）」</h4>
              <p class="text-neutral-600">
                「Aという唯一の条件を満たさない限り、望ましくない結果Bになる（否则）」、または「Aして初めてBできる（才）」を表すB2必須の論理表現です。<br>
                ・<code class="bg-neutral-100 px-1 rounded">除非你亲自去问，否则没人知道真相。</code>（君が直接聞きに行かない限り、誰も真相を知らない）<br>
                ・<code class="bg-neutral-100 px-1 rounded">除非天气特别恶劣，活动才会取消。</code>（天気がよほど悪化しない限り、イベントは中止にならない＝悪化して初めて中止になる）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 既成事実を前提にする「既然…就…（〜である以上は…）」vs 仮定の「如果」</h4>
              <p class="text-neutral-600">
                ・<strong>既然（jìrán）：</strong>すでに確定している事実や相手の言葉を前提として受け入れ、「〜である以上は、当然…すべきだ／…しよう」と結論を導きます。<br>
                例：<code class="bg-neutral-100 px-1 rounded">既然大家都同意了，那我们就一言为定吧！</code>（みんなが同意した以上は、それで決まりにしよう！）<br>
                ・<strong>哪怕（nǎpà）：</strong>極端な仮定を立てて「たとえ〜だとしても、やはり…（也/还）」と強い意志を示します。<br>
                例：<code class="bg-neutral-100 px-1 rounded">哪怕只有百分之一的希望，我们也要试一试。</code>（たとえ1%の希望しかなくても、私たちは試してみるべきだ）
              </p>
            </div>
          </div>
        </section>

        <!-- Section 3: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">3. 実践会話：相槌 × 条件・前提構文（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('对了，顺便说一下，下个月我打算去成都出差，顺便逛逛。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Duìle, shùnbiàn shuō yíxià, xià ge yuè wǒ dǎsuàn qù Chéngdū chūchāi, shùnbiàn guàngguang.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">对了，顺便说一下，下个月我打算去成都出差，顺便逛逛。</p>
                <p class="text-xs text-neutral-500">そういえばついでに言うと、来月成都へ出張に行く予定で、ついでにぶらぶら観光しようと思ってるんだ。</p>
              </div>
            </div>

            <div onclick="speak('太巧了！我下个月也在成都！既然你都来了，我一定请你吃最地道的火锅！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-rose-100 text-rose-700 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-rose-600">Bさん（相槌＋「既然」構文！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Tài qiǎo le! Wǒ xià ge yuè yě zài Chéngdū! Jìrán nǐ dōu lái le, wǒ yídìng qǐng nǐ chī zuì dìdào de huǒguō!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">太巧了！我下个月也在成都！既然你都来了，我一定请你吃最地道的火锅！</p>
                <p class="text-xs text-neutral-500">すごい偶然だね！私も来月成都にいるんだよ！せっかく来る以上は、一番本場の火鍋をご馳走するよ！</p>
              </div>
            </div>

            <div onclick="speak('那真是太好了！除非工作临时有变动，否则我一定准时赴约，一言为定！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Nà zhēn shì tài hǎo le! Chúfēi gōngzuò línshí yǒu biàndòng, fǒuzé wǒ yídìng zhǔnshí fùyuē, yì yán wéi dìng!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">那真是太好了！除非工作临时有变动，否则我一定准时赴约，一言为定！</p>
                <p class="text-xs text-neutral-500">それは本当に最高だね！仕事に急な変更がない限り、必ず時間通りに行くよ、約束だ！</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 4: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">4. Day 34 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 相槌クイズ：Long story short...</span>
            <p class="font-medium text-neutral-900">長い説明を省いて「手短に言うと…（要するに…）」と切り出すときの四字熟語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 长话短说 (Chánghuà duǎnshuō) は「手短に言うと」の定番フレーズです。', '不正解！ 废话少说 は「無駄口を叩くな」という強い表現になります。', '长话短说')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 长话短说 (Chánghuà duǎnshuō)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 长话短说 (Chánghuà duǎnshuō) は「手短に言うと」の定番フレーズです。', '不正解！ 废话少说 は「無駄口を叩くな」という強い表現になります。', '长话短说')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 废话少说 (Fèihuà shǎoshuō)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：It is a deal!</span>
            <p class="font-medium text-neutral-900">「約束だよ・それで決まりだね！（一言[ ]定！）」の空欄に入る一文字は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>一言</span>
              <span onclick="revealAnswer(2, 'wéi (为)', '一言为定')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>定！</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：What a coincidence!</span>
            <p class="font-medium text-neutral-900">「すごい偶然だね！（tài qiǎo le）」の漢字3文字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(3, ['太巧了'], '太巧了')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 選択問題：既成事実の前提「既然」</span>
            <p class="font-medium text-neutral-900">「（すでに）〜である以上は…」と既成事実を前提に結論を導く接続詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 既然 (jìrán) は既成事実を前提に「〜である以上は」を表します。', '不正解！ 即使 は「たとえ〜であっても」という未実現の仮定を表します。', '既然')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 既然 (jìrán)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 既然 (jìrán) は既成事実を前提に「〜である以上は」を表します。', '不正解！ 即使 は「たとえ〜であっても」という未実現の仮定を表します。', '既然')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 即使 (jíshǐ)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「すごい偶然だね！私も来月成都にいるんだよ！せっかく来る以上は、一番本場の火鍋をご馳走するよ！」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '太巧了！我下个月也在成都！既然你都来了，我一定请你吃最地道的火锅！', '太巧了！我下个月也在成都！既然你都来了，我一定请你吃最地道的火锅！')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 5: C-POP Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 34 Special • Youth Cinema Anthem
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              5. 田馥甄（Hebe Tien）『小幸运』に学ぶ青春の記憶と感謝の表現
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              大ヒット映画『私の少女時代』の主題歌として中華圏で社会現象を巻き起こした名曲から、運命の出会いを振り返る美しいフレーズを学ぼう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">小幸运 (Xiǎo Xìngyùn / A Little Happiness)</h4>
                <p class="text-xs text-neutral-500">原唱：田馥甄 (Hebe Tien)</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【楽曲コラム：『小幸运』と青春のすれ違い】</strong><br>
              S.H.Eのメンバーとしても知られる実力派ボーカリスト・田馥甄のソロ代表曲。YouTubeで華語圏初の1億回再生を突破した歴史的ヒット曲であり、「あの頃、当たり前の日常だと思っていた君との時間こそが、人生で一番の小さな幸運だった」という切なくも温かい感謝が込められています。
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
                  <span class="font-bold text-lg text-rose-950">原来你是我最想留住的幸运，原来我们和爱情曾经靠得那么近</span>
                  <button onclick="speak('原来你是我最想留住的幸运，原来我们和爱情曾经靠得那么近')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Yuánlái nǐ shì wǒ zuì xiǎng liúzhù de xìngyùn, yuánlái wǒmen hé àiqíng céngjīng kào de nàme jìn</p>
                <p class="text-neutral-700 font-medium">今になって気づいたんだ、君こそが私が一番引き留めたかった幸運で、私たちはかつて愛とあんなにも近くに寄り添っていたんだと</p>
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
                  <span class="font-bold text-neutral-900">発見・気づきを表す副詞「原来 (yuánlái)」と結果補語「留住 (liúzhù)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  文頭の <code class="bg-neutral-200 px-1 rounded">原来</code> は「もともと」という意味だけでなく、「今まで気づかなかった真実にハッと気づいた（〜だったのか！）」という深い感情を込める重要副詞です。また、<code class="bg-neutral-200 px-1 rounded">留住</code> の「住（zhù）」は「しっかりと固定する・引き留める」を表す結果補語（例：<code class="bg-neutral-200 px-1 rounded">记住</code>＝覚える、<code class="bg-neutral-200 px-1 rounded">抓住</code>＝掴む）です。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
