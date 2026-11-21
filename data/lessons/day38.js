const day38Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 38 Advanced Masterclass (Week 6)</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 38: 相槌・リアクション第10弾（To be fair... / Let it go!） ＆ 因果・進展の高度表現
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">Week 6 Native Reactions & B2-C1 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                客観的な意見を述べる「有一说一」や気持ちを切り替えさせる「翻篇了」などの生きた相槌と、論理的な帰結やステップアップを表す「从而・进而・导致」をマスターします。
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
              <h3 class="text-xl font-bold text-neutral-900">1. 会話が弾む！ネイティブの相槌・リアクション集（第10弾）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">Tap to Listen</span>
          </div>

          <p class="text-xs sm:text-sm text-neutral-600">
            今の中国語会話やSNSでも圧倒的によく使われるトレンド表現から、相手を前向きに励ます大人の相槌まで厳選しました。タップして発音を聴いてみましょう！
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Card 1 -->
            <div onclick="speak('有一说一，实话实说，')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">To be fair... / Honestly speaking...</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">有一说一，… / 实话实说，…</p>
              <p class="text-xs text-rose-600 font-medium">Yǒu yī shuō yī, ... / Shíhuà shíshuō, ...</p>
              <p class="text-xs text-neutral-600">「公平に言って…」「ありのまま事実を言うと…」と、贔屓目なしで客観的な本音を切り出すときの超頻出フレーズです。</p>
            </div>

            <!-- Card 2 -->
            <div onclick="speak('看开点！想开点！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Look on the bright side! / Cheer up!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">看开点！ / 想开点！</p>
              <p class="text-xs text-rose-600 font-medium">Kàn kāi diǎn! / Xiǎng kāi diǎn!</p>
              <p class="text-xs text-neutral-600">「もっと気楽に考えなよ！」「くよくよしないで前を向こう！」と、落ち込んでいる友人や同僚の心を軽くしてあげる温かい言葉です。</p>
            </div>

            <!-- Card 3 -->
            <div onclick="speak('翻篇了！过去了就过去了！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Water under the bridge! / Move on!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">翻篇了！ / 过去了就过去了！</p>
              <p class="text-xs text-rose-600 font-medium">Fān piān le! / Guòqù le jiù guòqù le!</p>
              <p class="text-xs text-neutral-600">「もう次のページをめくったよ（終わったことだから水に流そう）！」「過ぎたことはもう過ぎたこと！」というサバサバした決めゼリフです。</p>
            </div>

            <!-- Card 4 -->
            <div onclick="speak('厉害了！佩服佩服！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Impressive! / Hats off to you!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">厉害了！ / 佩服佩服！</p>
              <p class="text-xs text-rose-600 font-medium">Lìhai le! / Pèifu pèifu!</p>
              <p class="text-xs text-neutral-600">「すごいじゃん！」「いや〜感服しました！」と、相手の知識や努力の成果に素直に敬意を表す気持ちの良いリアクションです。</p>
            </div>

            <!-- Card 5 -->
            <div onclick="speak('我说呢！难怪！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">I thought so! / That makes total sense!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">我说呢！ / 难怪！</p>
              <p class="text-xs text-rose-600 font-medium">Wǒ shuō ne! / Nánguài!</p>
              <p class="text-xs text-neutral-600">「やっぱりね、おかしいと思ったんだよ！」「道理で！」と、最初の違和感が説明されてスッキリ納得したときの超ネイティブな相槌です。</p>
            </div>

            <!-- Card 6 -->
            <div onclick="speak('那可不！绝对的！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">You bet! / Absolutely!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">那可不！ / 绝对的！</p>
              <p class="text-xs text-rose-600 font-medium">Nà kě bù! / Juéduì de!</p>
              <p class="text-xs text-neutral-600">「そりゃそうだよ！」「間違いなくそう！」と、相手の言葉を力強く肯定するテンポの良い相槌です。</p>
            </div>
          </div>
        </section>

        <!-- Section 2: Detailed Grammar Explanations -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 深掘り解説：因果・論理的進展の高度表現（「从而 / 进而 / 导致」）</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 論理的帰結を表す「从而 (cóng'ér / それによって)」と、さらなる発展「进而 (jìn'ér / さらに進んで)」</h4>
              <p class="text-neutral-600">
                どちらも前の行動・方法を土台にして次の結果・段階へ進むことを示す、プレゼンやエッセイで重宝する接続詞です。<br>
                ・<strong>从而（それによって〜する）：</strong>前の手段や変化が直接のきっかけとなって結果が生まれる流れを表します。<br>
                例：<code class="bg-neutral-100 px-1 rounded">通过调整作息，他改善了睡眠质量，从而提高了工作效率。</code>（生活リズムを整えることで睡眠の質を改善し、それによって仕事の効率を高めた）<br>
                ・<strong>进而（さらに一歩進んで〜する）：</strong>第一段階を達成した上で、より高い次の段階へ進むニュアンスです。<br>
                例：<code class="bg-neutral-100 px-1 rounded">先掌握基础词汇，进而学习地道表达。</code>（まず基礎語彙を身につけ、さらに進んでネイティブらしい表現を学ぶ）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 望ましくない結果を引き起こす「导致 (dǎozhì)」vs 良い結果にも使える「促使 (cùshǐ)」</h4>
              <p class="text-neutral-600">
                ・<strong>导致（〜を引き起こす・招く）：</strong>後ろには主に<strong>トラブル・損失・悪化</strong>など望ましくない結果が来ます。<br>
                例：<code class="bg-neutral-100 px-1 rounded">由于沟通不及时，导致项目进度延误了两天。</code>（連絡が遅れたことが原因で、プロジェクトの進行が2日遅れる事態を招いた）<br>
                ・<strong>促使（〜を促す・駆り立てる）：</strong>ある要因が人を動かしてポジティブな行動や変化を生み出すときに使います。<br>
                例：<code class="bg-neutral-100 px-1 rounded">这次经历促使他重新思考未来的方向。</code>（今回の経験がきっかけとなり、彼は将来の方向性を考え直すようになった）
              </p>
            </div>
          </div>
        </section>

        <!-- Section 3: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">3. 実践会話：相槌 × 因果・進展構文（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('有一说一，上次因为系统故障导致数据丢失，我当时真的特别自责。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Yǒu yī shuō yī, shàng cì yīnwèi xìtǒng gùzhàng dǎozhì shùjù diūshī, wǒ dāngshí zhēn de tèbié zìzé.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">有一说一，上次因为系统故障导致数据丢失，我当时真的特别自责。</p>
                <p class="text-xs text-neutral-500">正直なところ、前回システム障害が原因でデータが消えてしまったとき、当時は本当に自分を責めたよ。</p>
              </div>
            </div>

            <div onclick="speak('看开点！那件事早就翻篇了！而且你后来优化了备份流程，从而彻底避免了类似的问题，佩服佩服！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-rose-100 text-rose-700 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-rose-600">Bさん（相槌3連発＋「从而」！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Kàn kāi diǎn! Nà jiàn shì zǎo jiù fān piān le! Érqiě nǐ hòulái yōuhuà le bèifèn liúchéng, cóng'ér chèdǐ bìmiǎn le lèisì de wèntí, pèifu pèifu!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">看开点！那件事早就翻篇了！而且你后来优化了备份流程，从而彻底避免了类似的问题，佩服佩服！</p>
                <p class="text-xs text-neutral-500">気楽に考えなよ！あの件はとっくに終わったことだよ！それに君はその後バックアップの手順を改善して、それによって同じ問題を完全に防いだんだから、本当に感服するよ！</p>
              </div>
            </div>

            <div onclick="speak('听你这么一说，我心里踏实多了，谢谢你的鼓励！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Tīng nǐ zhème yì shuō, wǒ xīnlǐ tāshi duō le, xièxie nǐ de gǔlì!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">听你这么一说，我心里踏实多了，谢谢你的鼓励！</p>
                <p class="text-xs text-neutral-500">君にそう言ってもらえて気持ちがすごく落ち着いたよ、励ましてくれてありがとう！</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 4: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">4. Day 38 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 相槌クイズ：To be fair...</span>
            <p class="font-medium text-neutral-900">贔屓目なしで「公平に言って…・ありのまま言うと…」と本音を切り出すときのトレンド表現は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 有一说一 (Yǒu yī shuō yī) は「公平に言って・正直なところ」の超定番フレーズです。', '不正解！ 翻篇了 は「終わったこと・水に流そう」の意味です。', '有一说一')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 有一说一 (Yǒu yī shuō yī)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 有一说一 (Yǒu yī shuō yī) は「公平に言って・正直なところ」の超定番フレーズです。', '不正解！ 翻篇了 は「終わったこと・水に流そう」の意味です。', '有一说一')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 翻篇了 (Fān piān le)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：Look on the bright side!</span>
            <p class="font-medium text-neutral-900">「もっと気楽に考えなよ！（看[ ]点！）」の空欄に入る一文字は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>看</span>
              <span onclick="revealAnswer(2, 'kāi (开)', '看开点')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>点！</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：Water under the bridge!</span>
            <p class="font-medium text-neutral-900">「もう終わったこと・次のページへ進もう（fān piān le）」の漢字3文字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(3, ['翻篇了'], '翻篇了')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 選択問題：ネガティブな結果を招く「导致」</span>
            <p class="font-medium text-neutral-900">「システム障害が原因でデータ消失を招いた（系统故障[ ]数据丢失）」の空欄に入る動詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 导致 はトラブルや損失などの望ましくない結果を引き起こすときに使います。', '不正解！ 促使 は主に前向きな行動や変化を促すときに使います。', '系统故障导致数据丢失')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 导致 (dǎozhì)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 导致 はトラブルや損失などの望ましくない結果を引き起こすときに使います。', '不正解！ 促使 は主に前向きな行動や変化を促すときに使います。', '系统故障导致数据丢失')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 促使 (cùshǐ)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「気楽に考えなよ！あの件はとっくに終わったことだよ！」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '看开点！那件事早就翻篇了！', '看开点！那件事早就翻篇了！')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 5: C-POP Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 38 Special • Iconic Folk-Rock Anthem
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              5. 朴树（Pu Shu）『平凡之路』に学ぶ人生の旅路と時間表現
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              中国本土の音楽シーンを象徴するシンガーソングライターの名曲から、挫折を超えて歩き続ける力強いフレーズを学ぼう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">平凡之路 (Píngfán zhī Lù / The Ordinary Road)</h4>
                <p class="text-xs text-neutral-500">原唱：朴树 (Pu Shu)</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【楽曲コラム：『平凡之路』と等身大の哲学】</strong><br>
              映画『后会无期（いつか、また会う日まで）』の主題歌として2014年に発表され、台湾金馬奨で最優秀オリジナル映画歌曲賞を受賞した国民的アンセム。「山を越え海を渡り、すべてを失い、そして平凡さこそが唯一の答えだと気づいた」という歌詞は、働く世代や学生の心を深く揺さぶり続けています。
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
                  <span class="font-bold text-lg text-rose-950">我曾经失落失望失掉所有方向，直到看见平凡才是唯一的答案</span>
                  <button onclick="speak('我曾经失落失望失掉所有方向，直到看见平凡才是唯一的答案')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Wǒ céngjīng shīluò shīwàng shīdiào suǒyǒu fāngxiàng, zhídào kànjiàn píngfán cái shì wéiyī de dá'àn</p>
                <p class="text-neutral-700 font-medium">僕はかつて落ち込み、失望し、すべての方向を見失った。平凡であることこそが唯一の答えだと気づくその時までは</p>
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
                  <span class="font-bold text-neutral-900">転換点を示す「直到…才…（zhídào... cái... / 〜して初めて…した）」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  過去の経験を表す <code class="bg-neutral-200 px-1 rounded">曾经 (céngjīng)</code> とセットで <code class="bg-neutral-200 px-1 rounded">直到……才……</code> を使うことで、「ずっと迷い続けていたが、ある瞬間を迎えてようやく悟った」という劇的な転換点を表現できます。また、<code class="bg-neutral-200 px-1 rounded">失落・失望・失掉</code> と同じ「失」を重ねる韻律の美しさも魅力です。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
