const day17Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="navigation" class="w-3.5 h-3.5"></i>
            <span>Day 17 Focus: Directions, Taxi & Action in Progress</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 17: 道案内・タクシー移動 ＆ 進行中の動作「在」
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">
                Learn how to ask for directions, take a taxi, and describe actions in progress with "在" (zài).
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

        <!-- Section 1: Detailed Explanations -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：移動・位置指定と動作進行</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 「〜している最中だ」：在 (zài) / 正在 (zhèngzài)</h4>
              <p class="text-neutral-600">
                動詞の前に <code class="bg-neutral-100 px-1 rounded">在</code> や <code class="bg-neutral-100 px-1 rounded">正在</code> を置くことで、動作が現在進行中であることを表します。<br>
                例：<code class="bg-neutral-100 px-1 rounded">我在去车站的路上。</code>（私は駅に向かう途中です。）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② タクシーで使える重要フレーズ</h4>
              <p class="text-neutral-600">
                運転手さんへの呼びかけは <code class="bg-neutral-100 px-1 rounded">师傅 (shīfu)</code> を使います。<br>
                ・<code class="bg-neutral-100 px-1 rounded">到[目的地]要多久？</code>（〜までどのくらいかかりますか？）<br>
                ・<code class="bg-neutral-100 px-1 rounded">请在这里停。</code>（ここで止めてください。）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">③ 方向と移動の表現</h4>
              <p class="text-neutral-600">
                ・<code class="bg-neutral-100 px-1 rounded">往左拐 / 往右拐</code>（左へ曲がる / 右へ曲がる）<br>
                ・<code class="bg-neutral-100 px-1 rounded">一直走</code>（まっすぐ行く）
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
            
            <div onclick="speak('师傅，我去北京站。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Shīfu, wǒ qù Běijīng zhàn.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">师傅，我去北京站。</p>
                <p class="text-xs text-neutral-500">運転手さん、北京駅までお願いします。</p>
              </div>
            </div>

            <div onclick="speak('到那里要多久？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Dào nàli yào duōjiǔ?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">到那里要多久？</p>
                <p class="text-xs text-neutral-500">あそこまでどのくらいかかりますか？</p>
              </div>
            </div>

            <div onclick="speak('前面的路口往右拐。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Qiánmiàn de lùkǒu wǎng yòu guǎi.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">前面的路口往右拐。</p>
                <p class="text-xs text-neutral-500">手前の交差点を右に曲がってください。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 17 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：タクシー運転手さん</span>
            <p class="font-medium text-neutral-900">「タクシーの運転手さん」への親しみを込めた呼びかけは？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 师傅 (shīfu) と呼びかけるのが定番です。', '不正解！ 服务员はレストランやホテルの店員さんです。', '师傅')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 师傅 (shīfu)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 师傅 (shīfu) と呼びかけるのが定番です。', '不正解！ 服务员はレストランやホテルの店員さんです。', '师傅')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 服务员 (fúwùyuán)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴押し問題：まっすぐ行く</span>
            <p class="font-medium text-neutral-900">「まっすぐ行く（一直走）」の「一直（yìzhí）」は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(2, 'yìzhí (一直)', '一直')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>zǒu.</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：どのくらい長く？</span>
            <p class="font-medium text-neutral-900">「どのくらい長く（duōjiǔ）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(3, ['多久'], '多久')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 進行形クイズ</span>
            <p class="font-medium text-neutral-900">「〜に向かっている最中だ」という進行を表す漢字は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 動作の進行を表すのは 在 (zài) です。', '不正解！ 过は過去の経験を表します。', '在')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 在 (zài)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 動作の進行を表すのは 在 (zài) です。', '不正解！ 过は過去の経験を表します。', '在')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 过 (guò)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「ここで止めてください」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'Qǐng zài zhèlǐ tíng (请在这里停)', '请在这里停')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
