const day40Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 40 Advanced Masterclass (Week 6)</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 40: 相槌・リアクション第12弾（Speak of the devil! / Better safe than sorry!） ＆ 仮定・条件の高度表現
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">Week 6 Native Reactions & B2-C1 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                「噂をすれば影！」「備えあれば憂いなし！」といったネイティブらしい慣用的な相槌と、状況の転換点や唯一条件を示す仮定構文（倘若・一旦・除非…否则…）をマスターします。
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
              <h3 class="text-xl font-bold text-neutral-900">1. 会話が弾む！ネイティブの相槌・リアクション集（第12弾）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">Tap to Listen</span>
          </div>

          <p class="text-xs sm:text-sm text-neutral-600">
            ちょっと言いにくい本音を切り出すときのクッション言葉から、呆れたときの若者言葉、肩の力を抜かせてくれることわざ系リアクションまで、会話が一気にこなれる6選です！
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Card 1 -->
            <div onclick="speak('有句话不知当讲不当讲……先说好，……')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">No offense, but... / Just to be clear...</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">有句话不知当讲不当讲…… / 先说好，……</p>
              <p class="text-xs text-rose-600 font-medium">Yǒu jù huà bù zhī dāng jiǎng bù dāng jiǎng... / Xiān shuō hǎo, ...</p>
              <p class="text-xs text-neutral-600">「言っていいものかどうか分からないんだけど……（ちょっと言いにくいんだけど）」「先に言っておくけど……」と、本音や条件を切り出す前の絶妙な前置きフレーズです。</p>
            </div>

            <!-- Card 2 -->
            <div onclick="speak('有备无患！以防万一！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Better safe than sorry! / Just in case!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">有备无患！ / 以防万一！</p>
              <p class="text-xs text-rose-600 font-medium">Yǒu bèi wú huàn! / Yǐ fáng wànyī!</p>
              <p class="text-xs text-neutral-600">「備えあれば憂いなし！」「万が一に備えてね！」と、念入りに準備をするときや安全策をとるときの定番四字熟語リアクションです。</p>
            </div>

            <!-- Card 3 -->
            <div onclick="speak('我也是醉了！无语了！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">I'm speechless! / Seriously?!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">我也是醉了！ / 无语了！</p>
              <p class="text-xs text-rose-600 font-medium">Wǒ yě shì zuì le! / Wúyǔ le!</p>
              <p class="text-xs text-neutral-600">「もう呆れて酔っ払いそうだよ（理解不能だよ）！」「言葉が出ないよ！」と、理不尽な出来事や信じられないミスに呆れ返ったときの口語リアクションです。</p>
            </div>

            <!-- Card 4 -->
            <div onclick="speak('大不了…… 最坏也就是……')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Worst-case scenario... / At worst...</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">大不了…… / 最坏也就是……</p>
              <p class="text-xs text-rose-600 font-medium">Dàbuliǎo... / Zuì huài yě jiùshì...</p>
              <p class="text-xs text-neutral-600">「最悪の場合でも〜すればいいだけさ！」「せいぜい〜になるくらいだよ！」と、リスクを割り切って大胆に背中を押すときの頼もしい表現です。</p>
            </div>

            <!-- Card 5 -->
            <div onclick="speak('说曹操，曹操到！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Speak of the devil!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">说曹操，曹操到！</p>
              <p class="text-xs text-rose-600 font-medium">Shuō Cáo Cāo, Cáo Cāo dào!</p>
              <p class="text-xs text-neutral-600">「曹操の話をしていたら、曹操がやって来た（噂をすれば影）！」という三国志由来の超有名な決めゼリフ。話題にしていた本人が現れたり連絡が来たりした瞬間に使います。</p>
            </div>

            <!-- Card 6 -->
            <div onclick="speak('顺其自然吧！船到桥头自然直！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Let nature take its course! / It'll work out!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">顺其自然吧！ / 船到桥头自然直！</p>
              <p class="text-xs text-rose-600 font-medium">Shùnqízìrán ba! / Chuán dào qiáotóu zìrán zhí!</p>
              <p class="text-xs text-neutral-600">「成り行きに任せようよ！」「船が橋のたもとに着けば自然と真っ直ぐになる（案ずるより産むが易し、なんとかなるさ）！」という大らかな励まし表現です。</p>
            </div>
          </div>
        </section>

        <!-- Section 2: Detailed Grammar Explanations -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 深掘り解説：仮定・条件の高度表現（「倘若 / 一旦 / 除非…否则…」）</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 書き言葉の仮定「倘若 (tǎngruò)」と、発生した瞬間の重大条件「一旦 (yídàn)」</h4>
              <p class="text-neutral-600">
                ・<strong>倘若（もしも〜ならば）：</strong>「如果」よりも文章語的・格調高い響きを持つ仮定の接続詞で、スピーチや論理的な議論で映えます。<br>
                例：<code class="bg-neutral-100 px-1 rounded">倘若每个人都能换位思考，很多矛盾就不会发生了。</code>（もし誰もが相手の立場になって考えることができれば、多くの対立は起こらないはずだ）<br>
                ・<strong>一旦（いったん〜すれば・ひとたび〜となると）：</strong>不確定な出来事が<strong>「現実に発生したその瞬間」</strong>を条件とし、後ろには重大な結果や即座の行動が続きます。<br>
                例：<code class="bg-neutral-100 px-1 rounded">信任一旦失去，就很难再重新建立起来。</code>（信頼はいったん失われてしまうと、再び築き直すのは非常に難しい）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 唯一条件を表す「除非 A，否则/不然 B（chúfēi A, fǒuzé/bùrán B / Aでない限り、さもなければBだ）」</h4>
              <p class="text-neutral-600">
                「Bという望ましくない結果を避けるための<strong>唯一の条件はAだけだ</strong>」と強く限定するB2重要構文です。後半に <code class="bg-neutral-100 px-1 rounded">才</code> を伴う形（<code class="bg-neutral-100 px-1 rounded">除非 A，才 B</code>＝Aして初めてBする）もよく使われます。<br>
                ・<code class="bg-neutral-100 px-1 rounded">除非提前备好应急物资，否则真的很麻烦。</code>（事前に緊急物資を準備しておかない限り、本当に厄介なことになる）<br>
                ・<code class="bg-neutral-100 px-1 rounded">除非亲自去体验，否则很难真正理解当地的文化。</code>（実際に足を運んで体験しない限り、現地の文化を本当に理解するのは難しい）
              </p>
            </div>
          </div>
        </section>

        <!-- Section 3: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">3. 実践会話：相槌 × 仮定・条件構文（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('我们这次去高原旅行，得把抗高反的药和冲锋衣都带上，有备无患嘛！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Wǒmen zhè cì qù gāoyuán lǚxíng, děi bǎ kàng gāofǎn de yào hé chōngfēngyī dōu dài shàng, yǒu bèi wú huàn ma!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">我们这次去高原旅行，得把抗高反的药和冲锋衣都带上，有备无患嘛！</p>
                <p class="text-xs text-neutral-500">今度の高原旅行、高山病対策の薬とマウンテンパーカーを両方持っていかないとね、備えあれば憂いなしだからね！</p>
              </div>
            </div>

            <div onclick="speak('说曹操，曹操到！正想给你发消息呢。不过高原天气多变，一旦遇到暴风雪，除非提前备好应急物资，否则真的很麻烦。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-rose-100 text-rose-700 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-rose-600">Bさん（相槌＋「一旦」＋「除非…否则…」！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Shuō Cáo Cāo, Cáo Cāo dào! Zhèng xiǎng gěi nǐ fā xiāoxi ne. Búguò gāoyuán tiānqì duōbiàn, yídàn yùdào bàofēngxuě, chúfēi tíqián bèi hǎo yìngjí wùzī, fǒuzé zhēn de hěn máfan.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">说曹操，曹操到！正想给你发消息呢。不过高原天气多变，一旦遇到暴风雪，除非提前备好应急物资，否则真的很麻烦。</p>
                <p class="text-xs text-neutral-500">噂をすれば影だね！ちょうど君にメッセージを送ろうと思っていたところだよ。でも高原は天気が変わりやすいから、いったん吹雪に遭ったら、事前に緊急物資を用意しておかない限り本当に大変になるよ。</p>
              </div>
            </div>

            <div onclick="speak('有句话不知当讲不当讲，你行李箱都快塞爆了！大不了到了当地再买点补给，咱们还是顺其自然吧！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん（相槌3連発！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Yǒu jù huà bù zhī dāng jiǎng bù dāng jiǎng, nǐ xínglixiāng dōu kuài sāibào le! Dàbuliǎo dào le dāngdì zài mǎi diǎn bǔjǐ, zánmen háishi shùnqízìrán ba!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">有句话不知当讲不当讲，你行李箱都快塞爆了！大不了到了当地再买点补给，咱们还是顺其自然吧！</p>
                <p class="text-xs text-neutral-500">ちょっと言いにくいんだけど、君のスーツケースもうパンパンで爆発しそうだよ！最悪現地に着いてから補給品を買えばいいんだから、ここは成り行きに任せようよ！</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 4: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">4. Day 40 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 相槌クイズ：Speak of the devil!</span>
            <p class="font-medium text-neutral-900">話題にしていた本人がちょうど現れたり連絡が来たりしたときに言う「噂をすれば影！」の決まり文句は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 说曹操，曹操到！ は三国志の曹操に由来する超有名な慣用フレーズです。', '不正解！ 我也是醉了 は「呆れて物も言えない」の意味です。', '说曹操，曹操到')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 说曹操，曹操到！ (Shuō Cáo Cāo, Cáo Cāo dào!)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 说曹操，曹操到！ は三国志の曹操に由来する超有名な慣用フレーズです。', '不正解！ 我也是醉了 は「呆れて物も言えない」の意味です。', '说曹操，曹操到')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 我也是醉了！ (Wǒ yě shì zuì le!)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：Better safe than sorry!</span>
            <p class="font-medium text-neutral-900">「備えあれば憂いなし！（有[ ]无患！）」の空欄に入る一文字は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>有</span>
              <span onclick="revealAnswer(2, 'bèi (备)', '有备无患')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>无患！</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：Let nature take its course!</span>
            <p class="font-medium text-neutral-900">「成り行きに任せようよ（shùnqízìrán ba）」の漢字5文字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-44 bg-white">
              <button onclick="checkInput(3, ['顺其自然吧', '順其自然吧'], '顺其自然吧')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 選択問題：唯一条件を表す「除非…，否则…」</span>
            <p class="font-medium text-neutral-900">「実際に体験しない限り、現地の文化を本当に理解するのは難しい（[ ]亲自去体验，否则很难真正理解当地的文化）」の空欄に入る接続詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 除非 A，否则 B で「Aでない限り、さもなければBだ」という唯一条件を表します。', '不正解！ 倘若 は一般的な仮定「もしも〜ならば」を表す接続詞です。', '除非亲自去体验，否则很难真正理解当地的文化')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 除非 (chúfēi)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 除非 A，否则 B で「Aでない限り、さもなければBだ」という唯一条件を表します。', '不正解！ 倘若 は一般的な仮定「もしも〜ならば」を表す接続詞です。', '除非亲自去体验，否则很难真正理解当地的文化')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 倘若 (tǎngruò)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「信頼はいったん失われてしまうと、再び築き直すのは非常に難しい。」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '信任一旦失去，就很难再重新建立起来。', '信任一旦失去，就很难再重新建立起来。')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 5: C-POP Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 40 Special • Mandopop Healing Masterpiece
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              5. 周杰伦（Jay Chou）『稻香』に学ぶ原点の温もりと前置詞「随着」
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              台湾金曲奨で最優秀楽曲賞を受賞した心温まる名曲から、自然の中で心を解き放つ美しい中国語表現を学ぼう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">稻香 (Dàoxiāng / Rice Field)</h4>
                <p class="text-xs text-neutral-500">原唱：周杰伦 (Jay Chou)</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【楽曲コラム：『稻香』と「回家吧（帰っておいで）」のメッセージ】</strong><br>
              2008年のアルバム『魔杰座』に収録された周杰伦作詞・作曲の代表作。都会の競争やプレッシャーに疲れた人々に向けて、幼少期の田園風景や家族の温もりを思い出し、「つまずいたら原点（家）へ帰っておいで」と優しく語りかける中華圏屈指の応援ソングです。
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
                  <span class="font-bold text-lg text-rose-950">还记得你说家是唯一的城堡，随着稻香河流继续奔跑</span>
                  <button onclick="speak('还记得你说家是唯一的城堡，随着稻香河流继续奔跑')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Hái jìde nǐ shuō jiā shì wéiyī de chéngbǎo, suízhe dàoxiāng héliú jìxù bēnpǎo</p>
                <p class="text-neutral-700 font-medium">まだ覚えているかい、君が「家は唯一の城だ」と言ったことを。稲の香りと川の流れに沿って走り続けよう</p>
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
                  <span class="font-bold text-neutral-900">伴走・推移を表す前置詞「随着 (suízhe / 〜に沿って・〜につれて)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  前置詞 <code class="bg-neutral-200 px-1 rounded">随着</code> は、歌詞のように「風や川の流れ・香りに寄り添って（〜に沿って）」という情景描写にも、ビジネスや日常会話で「〜の変化につれて（例：<code class="bg-neutral-200 px-1 rounded">随着时间的推移</code>＝時の経過につれて）」という推移を表す際にも大活躍する重要語です。また、<code class="bg-neutral-200 px-1 rounded">继续 + 動詞</code> で「（中断せず・再び）〜し続ける」を表します。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
