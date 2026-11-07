const day23Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 23 Advanced Masterclass (Week 4)</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 23: 二重否定による強い肯定 ＆ 林俊傑（JJ Lin）『江南』で学ぶ叙意の美
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">B1-B2 Bridge & Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                「〜せざるを得ない（不得不）」や「〜ないものはない（没有……不……）」という、否定を二重に重ねて強い感情や肯定を表すB2必須の表現技法をマスターします。
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：二重否定（双重否定）による強い語気の表現</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 「不得不…（〜せざるを得ない・〜するしかない）」</h4>
              <p class="text-neutral-600">
                外部の状況や条件によって、選択の余地なくそうせざるを得ないことを表します。単に「〜しなければならない（必须）」と言うよりも、やむを得ない気持ちが強く込められます。<br>
                例：<code class="bg-neutral-100 px-1 rounded">为了未来，我不得不做出这个决定。</code>（未来のために、私はこの決定を下さざるを得なかった）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② B2応用：「没有……不……（〜ない……はない ＝ 全て〜だ）」</h4>
              <p class="text-neutral-600">
                全体を否定することで、例外なく100%そうであることを強く主張する修辞技法です。<br>
                例：<code class="bg-neutral-100 px-1 rounded">听到这个好消息，没有一个人不高兴的。</code>（この良い知らせを聞いて、喜ばない人は一人もいなかった）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-rose-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 豆知識：中国語の語気の強さと修辞学</h4>
              <p class="text-neutral-600">
                中国語では、感情を強く伝えたいときに単純に「非常（とても）」をつけるだけでなく、二重否定（双重否定）や反語（反问）を使う文化があります。C-POPの歌詞でも、愛や決意の強さを歌い上げるときに不可欠な表現です。
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
            
            <div onclick="speak('时间太紧了，我们不得不放弃原定的计划。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">时间太紧了，我们不得不放弃原定的计划。</span>
                <p class="text-xs text-neutral-500 mt-1">時間がなさすぎるため、私たちは当初の計画を諦めざるを得ません。</p>
              </div>
            </div>

            <div onclick="speak('在这家餐厅里，没有一道菜是不美味的。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">在这家餐厅里，没有一道菜是不美味的。</span>
                <p class="text-xs text-neutral-500 mt-1">このレストランには、美味しくない料理は一品もない（＝全て美味しい）。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 23 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：〜せざるを得ない</span>
            <p class="font-medium text-neutral-900">「〜せざるを得ない・やむを得ず〜する」を意味する語句は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '太棒了！ 不得不 が正解です。', '不正解！ 不一定 は「必ずしも〜とは限らない」です。', '不得不')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 不得不</button>
              <button onclick="checkQuiz(1, 1, 0, '太棒了！ 不得不 が正解です。', '不正解！ 不一定 は「必ずしも〜とは限らない」です。', '不得不')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 不一定</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：二重否定</span>
            <p class="font-medium text-neutral-900">「〜ない…はない（没有…[ ]…）」の空欄に入る否定詞は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>没有…</span>
              <span onclick="revealAnswer(2, '不 (bù)', '不')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>…</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：当初の計画</span>
            <p class="font-medium text-neutral-900">「当初の計画（原定计划）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-64 bg-white">
              <button onclick="checkInput(3, ['原定计划'], '原定计划')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 選択問題：決定を下す</span>
            <p class="font-medium text-neutral-900">「決定を下す・決断する」を表す正しい中国語動詞表現は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '太棒了！ 做出决定 が正解です。', '不正解！ 做完决定 とは言いません。', '做出决定')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 做出决定</button>
              <button onclick="checkQuiz(4, 1, 0, '太棒了！ 做出决定 が正解です。', '不正解！ 做完决定 とは言いません。', '做出决定')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 做完决定</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「時間がなさすぎるため、私たちは当初の計画を諦めざるを得ません」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '时间太紧了，我们不得不放弃原定的计划。', '时间太紧了，我们不得不放弃原定的计划。')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: C-Pop & Chinese Culture Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 23 Special • Chinese Style R&B Classic
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. 林俊傑（JJ Lin）『江南』で味わう情緒的中国語
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              アジア最高峰のボーカリストによる中華風名曲から、情愛の濃密な表現を学ぼう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">江南 (River South - JJ Lin / 林俊傑)</h4>
                <p class="text-xs text-neutral-500">Legendary Chinese Style Pop Masterpiece</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【音楽文化コラム：江南の水郷と切ない恋】</strong><br>
              中国伝統楽器の洞簫や二胡の音色と現代R&Bを融合させた歴史的名曲。江南のしとしと降る雨と、離れがたい二人の愛の絆が詩的な言葉で描かれています。
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
                  <span class="font-bold text-lg text-rose-950">不懂爱恨情仇煎熬的我们，都以为相爱就像风云的决绝</span>
                  <button onclick="speak('不懂爱恨情仇煎熬的我们，都以为相爱就像风云的决绝')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">愛憎の苦しみをまだ知らなかった僕らは、愛し合うことを風と雲の決別のようだとばかり思っていた</p>
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
                  <span class="font-bold text-neutral-900">「以为 (yǐwéi / 〜と思い込んでいた)」の過去の誤解表現</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <code class="bg-neutral-200 px-1 rounded">以为</code> は、「実際は違ったが、当時は〜だと思い込んでいた」という過去の誤認を表す重要単語です。C-POPの叙情的な回想シーンに欠かせません。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
