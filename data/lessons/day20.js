const day20Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="help-circle" class="w-3.5 h-3.5"></i>
            <span>Day 20 Focus: Conditionals, Suggestions & Permissibility</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 20: 仮定・相談 ＆ 如果…就… / 最好 / 可不可以
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">
                Learn conditional statements with "如果...就..." (if... then...), giving advice with "最好" (had better), and polite requests with "可不可以" (can/may).
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：仮定文・アドバイス・丁寧な尋ね方</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 「もし〜なら、…だ」：如果…就… (rúguǒ... jiù...)</h4>
              <p class="text-neutral-600">
                仮定の条件を表す最も重要な構文です。<br>
                例：<code class="bg-neutral-100 px-1 rounded">如果有不懂的地方，你就问我。</code>（もし分からない所があれば、私に聞いてください。）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 「〜するのが一番良い（提案）」：最好 (zuìhǎo)</h4>
              <p class="text-neutral-600">
                相手にアドバイスや助言をするときに使います。<br>
                例：<code class="bg-neutral-100 px-1 rounded">你最好早点儿休息。</code>（あなたは早く休むのが一番いいですよ。）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">③ 丁寧な確認：「可不可以 (kě bù kěyǐ)」</h4>
              <p class="text-neutral-600">
                <code class="bg-neutral-100 px-1 rounded">可以...吗？</code> より柔らかく「〜してもいいですか？」と相手の意向を伺います。<br>
                例：<code class="bg-neutral-100 px-1 rounded">我可不可以坐这里？</code>（ここに座ってもよろしいですか？）
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
            
            <div onclick="speak('如果明天下雨，我们就不去了。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Rúguǒ míngtiān xiàyǔ, wǒmen jiù bú qù le.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">如果明天下雨，我们就不去了。</p>
                <p class="text-xs text-neutral-500">もし明日雨が降ったら、私たちは行かないことにします。</p>
              </div>
            </div>

            <div onclick="speak('如果不舒服，你最好去医院。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Rúguǒ bù shūfu, nǐ zuìhǎo qù yīyuàn.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">如果不舒服，你最好去医院。</p>
                <p class="text-xs text-neutral-500">もし体調が良くなければ、病院へ行くのが一番ですよ。</p>
              </div>
            </div>

            <div onclick="speak('请问，我可不可以拍照？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Qǐngwèn, wǒ kě bù kěyǐ pāizhào?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">请问，我可不可以拍照？</p>
                <p class="text-xs text-neutral-500">すみません、写真を撮ってもよろしいですか？</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 20 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：仮定表現</span>
            <p class="font-medium text-neutral-900">「もし〜ならば」を表す接続詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 如果 (rúguǒ) です。', '不正解！ 虽然は「〜だけれども」という逆接を表します。', '如果')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 如果 (rúguǒ)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 如果 (rúguǒ) です。', '不正解！ 虽然は「〜だけれども」という逆接を表します。', '如果')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 虽然 (suīrán)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴押し問題：如果…就…</span>
            <p class="font-medium text-neutral-900">「もし雨なら行かない（如果下雨，我们 [ ] 不去了）」の空欄に入る副詞は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Rúguǒ xiàyǔ, wǒmen</span>
              <span onclick="revealAnswer(2, 'jiù (就)', '就')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>bú qù le.</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：一番良い</span>
            <p class="font-medium text-neutral-900">「〜するのが一番良い（zuìhǎo）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(3, ['最好'], '最好')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 写真を撮る</span>
            <p class="font-medium text-neutral-900">「写真を撮る（pāizhào）」の漢字表現は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 拍照 (pāizhào) です。', '不正解！ 画画は絵を描くことです。', '拍照')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 拍照 (pāizhào)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 拍照 (pāizhào) です。', '不正解！ 画画は絵を描くことです。', '拍照')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 画画 (huàhuà)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「写真を撮ってもよろしいですか？」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'Qǐngwèn, wǒ kě bù kěyǐ pāizhào? (请问，我可不可以拍照？)', '请问，我可不可以拍照？')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
