const day35Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 35 Advanced Masterclass (Week 5 Finale)</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 35: 相槌・リアクション第7弾（To be honest... / Great minds think alike!） ＆ 選択構文（与其…不如…）
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">Week 5 Finale • Conversational & B2 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                Week 5 の総仕上げとして、本音を切り出したり相手を褒めたりする「ネイティブの相槌集」と、より良い選択肢を提案するB2必須構文「与其…不如…」をマスターします。
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
              <h3 class="text-xl font-bold text-neutral-900">1. 会話が弾む！ネイティブの相槌・リアクション集（第7弾・完結編）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">Tap to Listen</span>
          </div>

          <p class="text-xs sm:text-sm text-neutral-600">
            本音を打ち明ける前置きから、相手への称賛、そして気楽な励ましまで、ネイティブの日常会話で頻繁に使われる生きたリアクションです。タップして発音を確認しましょう！
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Card 1 -->
            <div onclick="speak('说实话，老实说，')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">To be honest... / Frankly speaking...</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">说实话，… / 老实说，…</p>
              <p class="text-xs text-rose-600 font-medium">Shuō shíhuà, ... / Lǎoshí shuō, ...</p>
              <p class="text-xs text-neutral-600">「正直に言うと…」「ぶっちゃけ…」と自分の率直な意見を切り出すときの超定番フレーズです。</p>
            </div>

            <!-- Card 2 -->
            <div onclick="speak('我也这么觉得！英雄所见略同！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">I feel the same way! / Great minds think alike!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">我也这么觉得！ / 英雄所见略同！</p>
              <p class="text-xs text-rose-600 font-medium">Wǒ yě zhème juéde! / Yīngxióng suǒ jiàn lüè tóng!</p>
              <p class="text-xs text-neutral-600">「私もそう思う！」に加え、意見がピタリと一致したときにユーモアを交えて使う「英雄の見る目はだいたい同じ（考えることは同じだね）！」です。</p>
            </div>

            <!-- Card 3 -->
            <div onclick="speak('真有你的！有一套啊！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Good for you! / You really know your stuff!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">真有你的！ / 有一套啊！</p>
              <p class="text-xs text-rose-600 font-medium">Zhēn yǒu nǐ de! / Yǒu yí tào a!</p>
              <p class="text-xs text-neutral-600">「さすがだね！」「やるじゃん、なかなか腕があるね！」と、相手のセンスや手腕に感心したときのこなれた褒め言葉です。</p>
            </div>

            <!-- Card 4 -->
            <div onclick="speak('太接地气了！很真实！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">So down-to-earth! / So relatable!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">太接地气了！ / 很真实！</p>
              <p class="text-xs text-rose-600 font-medium">Tài jiē dìqì le! / Hěn zhēnshí!</p>
              <p class="text-xs text-neutral-600">「すごく親しみやすいね！」「飾らなくてリアルだね！」という現代中国語の超頻出トレンド表現。気取らない人やお店への最高の褒め言葉です。</p>
            </div>

            <!-- Card 5 -->
            <div onclick="speak('别放在心上！别往心里去！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Do not take it to heart! / Let it go!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">别放在心上！ / 别往心里去！</p>
              <p class="text-xs text-rose-600 font-medium">Bié fàng zài xīnshang! / Bié wǎng xīnli qù!</p>
              <p class="text-xs text-neutral-600">「気にしないで！」「心に溜め込まないでね」と、ミスをして落ち込んでいる友人や同僚を温かく慰める表現です。</p>
            </div>

            <!-- Card 6 -->
            <div onclick="speak('顺其自然吧！船到桥头自然直！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Let nature take its course! / Things will work out!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">顺其自然吧！ / 船到桥头自然直！</p>
              <p class="text-xs text-rose-600 font-medium">Shùnqí zìrán ba! / Chuán dào qiáotóu zìrán zhí!</p>
              <p class="text-xs text-neutral-600">「成り行きに任せよう！」「船が橋のたもとに着けば自然と真っ直ぐになる（＝案ずるより産むが易し、なんとかなるさ）！」という前向きな言葉です。</p>
            </div>
          </div>
        </section>

        <!-- Section 2: Detailed Grammar Explanations -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 深掘り解説：比較と決意の複文（「与其…不如…」「宁可…也不…」）</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① より良い選択を提案する「与其 A，不如 B（yǔqí A, bùrú B / Aするくらいなら、むしろBした方がよい）」</h4>
              <p class="text-neutral-600">
                2つの選択肢を比べ、前の選択肢（A）を退けて後ろの選択肢（B）を勧めるB2頻出の論理表現です。「不如」の後ろには「还不如」「倒不如」もよく使われます。<br>
                ・<code class="bg-neutral-100 px-1 rounded">与其在家干着急，不如出去散散步放松一下。</code>（家でやきもきしているくらいなら、外へ散歩に出てリラックスした方がましだ）<br>
                ・<code class="bg-neutral-100 px-1 rounded">与其抱怨，不如行动。</code>（文句を言うくらいなら、行動した方がいい）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 強い決意・覚悟を表す「宁可 A，也不 B（nìngkě A, yě bù B / たとえAしてでも、決してBしない）」</h4>
              <p class="text-neutral-600">
                どちらも望ましくない（あるいは大変な）2つの状況のうち、あえてAを選び、Bだけは絶対に避けるという強い意志を示します。<br>
                ・<code class="bg-neutral-100 px-1 rounded">我宁可自己辛苦一点，也不想麻烦别人。</code>（私は自分が少し苦労してでも、他人に迷惑はかけたくない）<br>
                ・<code class="bg-neutral-100 px-1 rounded">他宁可走路回家，也不愿意挤高峰期的地铁。</code>（彼は歩いて帰ってでも、ラッシュアワーの地下鉄に押し込まれるのは嫌だと思っている）
              </p>
            </div>
          </div>
        </section>

        <!-- Section 3: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">3. 実践会話：相槌 × 選択構文（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('说实话，周末与其去网红餐厅排两个小时的队，不如找一家接地气的小馆子慢慢聊。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Shuō shíhuà, zhōumò yǔqí qù wǎnghóng cāntīng pái liǎng ge xiǎoshí de duì, bùrú zhǎo yì jiā jiē dìqì de xiǎo guǎnzi mànmàn liáo.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">说实话，周末与其去网红餐厅排两个小时的队，不如找一家接地气的小馆子慢慢聊。</p>
                <p class="text-xs text-neutral-500">正直に言うと、週末はSNSで話題のレストランに2時間並ぶくらいなら、親しみやすい地元の小さな食堂を見つけてゆっくりおしゃべりした方がいいよ。</p>
              </div>
            </div>

            <div onclick="speak('我也这么觉得！英雄所见略同！我宁可多走几步路，也不想把时间浪费在排队上。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-rose-100 text-rose-700 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-rose-600">Bさん（相槌＋「宁可…也不…」！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Wǒ yě zhème juéde! Yīngxióng suǒ jiàn lüè tóng! Wǒ nìngkě duō zǒu jǐ bù lù, yě bù xiǎng bǎ shíjiān làngfèi zài páiduì shàng.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">我也这么觉得！英雄所见略同！我宁可多走几步路，也不想把时间浪费在排队上。</p>
                <p class="text-xs text-neutral-500">私もそう思う！考えることは同じだね！私も少し余計に歩いてでも、行列に時間を無駄にしたくないよ。</p>
              </div>
            </div>

            <div onclick="speak('真有你的！那我们就顺其自然，走到哪儿吃到哪儿吧！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Zhēn yǒu nǐ de! Nà wǒmen jiù shùnqí zìrán, zǒu dào nǎr chī dào nǎr ba!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">真有你的！那我们就顺其自然，走到哪儿吃到哪儿吧！</p>
                <p class="text-xs text-neutral-500">さすがだね！じゃあ成り行きに任せて、気の向くままに歩いて美味しいものを食べよう！</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 4: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">4. Day 35 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 相槌クイズ：Great minds think alike!</span>
            <p class="font-medium text-neutral-900">相手と意見がピタリと一致したときに「考えることは同じだね！（英雄の見る目は同じだ）」と返す四字熟語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 英雄所见略同 は「考えることは同じだね！」と楽しく同意する名フレーズです。', '不正解！ 自言自语 は「独り言を言う」の意味です。', '英雄所见略同')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 英雄所见略同 (Yīngxióng suǒ jiàn lüè tóng)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 英雄所见略同 は「考えることは同じだね！」と楽しく同意する名フレーズです。', '不正解！ 自言自语 は「独り言を言う」の意味です。', '英雄所见略同')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 自言自语 (Zì yán zì yǔ)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：So down-to-earth!</span>
            <p class="font-medium text-neutral-900">「親しみやすい・気取らずリアルだ（接[ ]气）」の空欄に入る一文字は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>接</span>
              <span onclick="revealAnswer(2, 'dì (地)', '接地气')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>气</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：To be honest...</span>
            <p class="font-medium text-neutral-900">「正直に言うと…（shuō shíhuà）」の漢字3文字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(3, ['说实话', '說實話'], '说实话')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 選択問題：「与其 A，不如 B」の呼応</span>
            <p class="font-medium text-neutral-900">「文句を言うくらいなら、行動した方がいい（与其抱怨，[ ]行动）」の空欄に入る接続詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 与其 A，不如 B で「AするくらいならBした方がよい」を表します。', '不正解！ 不但 は「〜だけでなく（而且）」という累加構文に使います。', '与其抱怨，不如行动')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 不如 (bùrú)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 与其 A，不如 B で「AするくらいならBした方がよい」を表します。', '不正解！ 不但 は「〜だけでなく（而且）」という累加構文に使います。', '与其抱怨，不如行动')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 不但 (búdàn)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「私もそう思う！考えることは同じだね！私も少し余計に歩いてでも、行列に時間を無駄にしたくないよ」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '我也这么觉得！英雄所见略同！我宁可多走几步路，也不想把时间浪费在排队上。', '我也这么觉得！英雄所见略同！我宁可多走几步路，也不想把时间浪费在排队上。')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 5: C-POP Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 35 Special • Week 5 Finale Anthem
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              5. 周杰伦（Jay Chou）『稻香』に学ぶ原点回帰と前向きな人生哲学
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              Week 5 のフィナーレを飾るのは、疲れた心を優しく癒やし「最初の一歩の喜び」を思い出させてくれる国民的応援ソング！
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
              <strong>【楽曲コラム：『稻香』と「知足（足るを知る）」の温もり】</strong><br>
              金曲奨（台湾グラミー賞）で最優秀楽曲賞を受賞した周杰伦の代表作の一つ。都会の競争やプレッシャーに疲れ果てた人々に向けて、「功名や数字に追われるくらいなら、故郷の稲の香りと虫の声に囲まれた無邪気な笑顔を思い出そう」と語りかける、温かく力強い名曲です。
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
                <p class="text-neutral-700 font-medium">君が「家は唯一の城だ」と言っていたのをまだ覚えているよ、稲の香りと川の流れに沿って走り続けよう</p>
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
                  <span class="font-bold text-neutral-900">前置詞「随着 (suízhe / 〜に沿って・〜につれて)」と「继续 (jìxù / 続けて〜する)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <code class="bg-neutral-200 px-1 rounded">随着</code> は「（川や流れ・音楽などに）沿って・合わせて」という空間的な動きから、「（時間や状況の変化）につれて」（例：<code class="bg-neutral-200 px-1 rounded">随着时间的推移</code>＝時が経つにつれて）という抽象的な変化まで表すB2必須の前置詞です。さらに <code class="bg-neutral-200 px-1 rounded">继续 ＋ 動詞</code>（続けて〜する）と組み合わせることで、前へ進み続ける爽やかな余韻を生み出しています。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
