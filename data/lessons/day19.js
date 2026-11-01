const day19Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="history" class="w-3.5 h-3.5"></i>
            <span>Day 19 Focus: Experiences, Changes & Past Events</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 19: 過去の経験と変化 ＆ アスペクト助詞「过」「了」
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">
                Learn how to talk about past experiences using "过" (guò), state changes with "了" (le), and negative experience with "没...过".
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

        <!-- Section 1: Detailed Explanations & Culture -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：経験と変化「过」「了」「没...过」</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 過去の経験：「動詞 + 过」（guò）</h4>
              <p class="text-neutral-600">
                <strong>「〜したことがある」</strong>という過去の経験を表します。<br>
                ・例：<code>你去过中国吗？(Nǐ qùguo Zhōngguó ma?)</code>＝中国に行ったことがありますか？
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 経験の否定：「没 + 動詞 + 过」（méi... guò）</h4>
              <p class="text-neutral-600">
                <strong>「〜したことがない」</strong>という経験の否定を表します。不は使わず `没` を使います。<br>
                ・例：<code>我没吃过北京烤鸭。(Wǒ méi chīguo Běijīng kǎoyā.)</code>＝北京ダックを食べたことがありません。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">③ 状態の変化・実現：「文末の 了」（le）</h4>
              <p class="text-neutral-600">
                単なる過去形ではなく、<strong>「〜になった（変化）」「〜した（動作の実現）」</strong>を表します。<br>
                ・例：<code>我学会了。(Wǒ xuéhuì le.)</code>＝身につきました / わかりました。
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 実践会話（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('你去过北京吗？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Nǐ qùguo Běijīng ma?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">你去过北京吗？</p>
                <p class="text-xs text-neutral-500">北京に行ったことがありますか？</p>
              </div>
            </div>

            <div onclick="speak('去过，我去年在上海留学过一年。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Qùguo, wǒ qùnián zài Shànghǎi liúxuéguo yì nián.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">去过，我去年在上海留学过一年。</p>
                <p class="text-xs text-neutral-500">行ったことがあります。去年上海に1年間留学していました。</p>
              </div>
            </div>

            <div onclick="speak('我终于学会游泳了！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Wǒ zhōngyú xuéhuì yóuyǒng le!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">我终于学会游泳了！</p>
                <p class="text-xs text-neutral-500">ついに泳げるようになりました！</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 19 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：行ったことがある</span>
            <p class="font-medium text-neutral-900">「〜に行ったことがある」を表す語順は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 「動詞 + 过 + 場所」の順になります（去过中国）。', '不正解！ 过は動詞の直後に置きます。', '去过')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 去过中国 (qùguo Zhōngguó)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 「動詞 + 过 + 場所」の順になります（去过中国）。', '不正解！ 过は動詞の直後に置きます。', '去过')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 中国去过 (Zhōngguó qùguo)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴押し問題：食べたことがない</span>
            <p class="font-medium text-neutral-900">「〜食べたことがない（没吃过）」の否定詞は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Wǒ</span>
              <span onclick="revealAnswer(2, 'méi (没)', '没')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>chīguo.</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：留学する</span>
            <p class="font-medium text-neutral-900">「留学する（liúxué）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(3, ['留学'], '留学')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. アスペクト助詞クイズ</span>
            <p class="font-medium text-neutral-900">「ついにマスターできた/わかるようになった（変化）」を表す文末の助詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 変化・実現には 文末の 了 (le) を用います。', '不正解！ 吧は提案や推測を表します。', '了')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 了 (le)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 変化・実現には 文末の 了 (le) を用います。', '不正解！ 吧は提案や推測を表します。', '了')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 吧 (ba)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「北京に行ったことがありますか？」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'Nǐ qùguo Běijīng ma? (你去过北京吗？)', '你去过北京吗')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: C-POP Special 『后来』＆表現収集 -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 19 Special • C-POP & リアル表現収集
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. 伝説のミリオンヒット曲『后来』(Later) で学ぶ「学会了」
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              Kiroroの『未来へ』をカバーし、中華圏全体で誰もが口ずさめる国民的バラードから過去の振り返りと成長の表現を学びます。
            </p>
          </div>

          <!-- C-POP 紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">后来 (Hòulái)</h4>
                <p class="text-xs text-neutral-500">原唱：刘若英 (Rene Liu)</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【楽曲コラム】</strong><br>
              「あの時は愛することがどういうことか分からなかったけれど、後になってようやく分かった……」という深い郷愁と成長を歌った名曲中の名曲です。
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
              <div class="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 hover-lift transition space-y-1">
                <div class="flex justify-between items-start">
                  <span class="font-bold text-lg text-neutral-900">后来 我总算学会了如何去爱</span>
                  <button onclick="speak('后来 我总算学会了如何去爱')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Hòulái, wǒ zǒngsuàn xuéhuì le rúhé qù ài</p>
                <p class="text-neutral-600">後になって、私はようやく愛し方を身につけられた</p>
              </div>

              <div class="p-4 rounded-xl border-2 border-rose-200 bg-rose-50/30 hover-lift transition space-y-1">
                <div class="flex justify-between items-start">
                  <span class="font-bold text-lg text-rose-950">可惜你 早已远去 消失在人海</span>
                  <button onclick="speak('可惜你 早已远去 消失在人海')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Kěxī nǐ, zǎoyǐ yuǎnqù, xiāoshī zài rénhǎi</p>
                <p class="text-neutral-700 font-medium">残念なことにあなたは疾っくに遠くへ去り、人混みの中に消えてしまっていた</p>
              </div>
            </div>
          </div>

          <!-- 文法解説 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-5">
            <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
              <i data-lucide="sparkles" class="w-5 h-5 text-rose-600"></i>
              <h4 class="text-lg font-bold text-neutral-900">歌詞から学べる！重要ワンフレーズ解説</h4>
            </div>

            <div class="grid gap-4 text-xs sm:text-sm">
              <div class="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1.5">
                <div class="flex items-center space-x-2">
                  <span class="bg-rose-600 text-white font-bold px-2 py-0.5 rounded text-xs">ポイント 1</span>
                  <span class="font-bold text-neutral-900">結果補語＋変化「学会了 (xuéhuì le)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  `学`（学ぶ）＋`会`（マスターする）＋`了`（変化）で<strong>「マスターした/身についた」</strong>という成長の結果を表します。
                </p>
              </div>

              <div class="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1.5">
                <div class="flex items-center space-x-2">
                  <span class="bg-rose-600 text-white font-bold px-2 py-0.5 rounded text-xs">ポイント 2</span>
                  <span class="font-bold text-neutral-900">副詞「总算 (zǒngsuàn)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <strong>「ついに、ようやく、どうにかこうにか」</strong>という安堵や苦労の末の達成感を表します。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
