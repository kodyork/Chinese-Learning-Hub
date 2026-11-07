const day25Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 25 Advanced Masterclass (Week 4)</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 25: 語気を彩る副詞の精微な比較（就 / 才 / 竟 / 却） ＆ 周杰倫『晴天』
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">B1-B2 Bridge & Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                「すんなり（就）」「やっと（才）」「意外にも（竟）」「かえって（却）」など、文章や会話のニュアンスを一変させる4大副詞の真意をマスターします。
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
            <button onclick="setSpeed(0.85)" id="speed-085" class="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-900 bg-neutral-900 text-white font-medium transition cursor-pointer">0.85x (Slow)</button>
            <button onclick="setSpeed(1.0)" id="speed-100" class="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-900 font-medium transition cursor-pointer">1.0x (Normal)</button>
          </div>
        </div>

        <!-- Section 1: Detailed Explanations & Culture -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：語気を深める副詞（就・才・竟・却）の使い分け</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 「就」vs「才」：時間の早慢と容易さ</h4>
              <p class="text-neutral-600">
                ・<code class="bg-neutral-100 px-1 rounded">就</code>：動作の進行が早い、容易である（例：<code class="bg-neutral-100 px-1 rounded">他八点就到了。</code> ＝ 彼は8時にはもう着いた）<br>
                ・<code class="bg-neutral-100 px-1 rounded">才</code>：動作の進行が遅い、困難を経てやっと達成する（例：<code class="bg-neutral-100 px-1 rounded">他十点才到。</code> ＝ 彼は10時になってやっと着いた）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② B2応用：「竟（竟然）」vs「却」：驚きと逆接</h4>
              <p class="text-neutral-600">
                ・<code class="bg-neutral-100 px-1 rounded">竟（竟然）</code>：予想外の出来事に対する「まさか・意外にも」という驚きを表す。<br>
                 例：<code class="bg-neutral-100 px-1 rounded">没想到他竟做到了。</code>（彼がまさかやり遂げるとは思いもしなかった）<br>
                ・<code class="bg-neutral-100 px-1 rounded">却</code>：予想や前述の事態と反対の結果になる「しかし・かえって」という転折を表す。<br>
                 例：<code class="bg-neutral-100 px-1 rounded">虽然想去，身体却不听使唤。</code>（行きたいけれど、体がかえって言うことを聞かない）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-rose-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 豆知識：副詞がもたらすストーリー性</h4>
              <p class="text-neutral-600">
                中国語は動詞の時制変化が少ない分、副詞の位置や選択が話し手の感情（焦り、安心、驚き、哀愁など）をダイレクトに表現します。C-POPの歌詞でも、この副詞1つでドラマティックな叙事詩へと昇華されます。
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
            
            <div onclick="speak('经过多方努力，我们才解决了这个问题。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">经过多方努力，我们才解决了这个问题。</span>
                <p class="text-xs text-neutral-500 mt-1">多大な努力を経て、私たちはようやくこの問題を解決できました。（才 ＝ やっと）</p>
              </div>
            </div>

            <div onclick="speak('我以为他会拒绝，没想到他竟然答应了。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">我以为他会拒绝，没想到他竟然答应了。</span>
                <p class="text-xs text-neutral-500 mt-1">彼は断るだろうと思っていたのに、まさか承諾してくれるとは思いもしませんでした。（竟然 ＝ まさか・意外にも）</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 25 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：まさか・意外にも</span>
            <p class="font-medium text-neutral-900">「思いのほか・まさか〜だとは」という強い驚きを表す副詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '太棒了！ 竟然 が正解です。', '不正解！ 也就 は「高々〜に過ぎない」です。', '竟然')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 竟然</button>
              <button onclick="checkQuiz(1, 1, 0, '太棒了！ 竟然 が正解です。', '不正解！ 也就 は「高々〜に過ぎない」です。', '竟然')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 也就</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：かえって・しかし</span>
            <p class="font-medium text-neutral-900">「行きたいけれど、体がかえって言うことを聞かない（虽然想去，身体[ ]不听使唤）」の空欄に入る副詞は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>虽然想去，身体</span>
              <span onclick="revealAnswer(2, '却 (què)', '却')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>不听使唤</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：承諾する</span>
            <p class="font-medium text-neutral-900">「引き受ける・承諾する（答应）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-64 bg-white">
              <button onclick="checkInput(3, ['答应'], '答应')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 選択問題：時間や手間の遅さ</span>
            <p class="font-medium text-neutral-900">「苦労してようやく・〜になってはじめて」を表す副詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '太棒了！ 才 が正解です。', '不正解！ 就 は「すでに・すぐに」を表します。', '才')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 才</button>
              <button onclick="checkQuiz(4, 1, 0, '太棒了！ 才 が正解です。', '不正解！ 就 は「すでに・すぐに」を表します。', '才')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 就</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「多大な努力を経て、私たちはようやくこの問題を解決できました」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '经过多方努力，我们才解决了这个问题。', '经过多方努力，我们才解决了这个问题。')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: C-Pop & Chinese Culture Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 25 Special • Nostalgic Youth Anthem
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. 周杰倫（Jay Chou）『晴天』で味わう青春と副詞の情緒
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              20年以上愛され続ける国民的ノスタルジーソングから、副詞「就」や「但」の切ない響きを学ぼう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">晴天 (Sunny Day - Jay Chou / 周杰倫)</h4>
                <p class="text-xs text-neutral-500">Legendary Nostalgic Mandopop Anthem</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【音楽文化コラム：『晴天』と甘酸っぱい雨の記憶】</strong><br>
              中華圏の誰もが口ずさめる青春ポップスの決定版。アコースティックギターのイントロに乗せて歌われる、雨の日の思い出やすれ違いの恋心が、口語の自然な副詞や接続詞によって鮮やかに描写されています。
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
                  <span class="font-bold text-lg text-rose-950">刮风这天，我试着握紧双手，但偏偏雨渐渐大到我看你们不见</span>
                  <button onclick="speak('刮风这天，我试着握紧双手，但偏偏雨渐渐大到我看你们不见')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">風が吹くこの日、僕は両手を強く握りしめようとしたけれど、あいにく雨が次第に大きくなって君たちの姿が見えなくなってしまった</p>
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
                  <span class="font-bold text-neutral-900">あいにく・よりによってを表す副詞「偏偏 (piānpiān)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <code class="bg-neutral-200 px-1 rounded">偏偏</code> は「よりによって・あいにく」という、自分の思いとは裏腹な意地悪な状況の巡り合わせを嘆く情趣豊かな副詞です。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
