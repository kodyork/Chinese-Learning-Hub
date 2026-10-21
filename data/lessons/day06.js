window.day06Data = {
  render: function() {
    return `
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 06 Focus: Restaurant Ordering, Tastes & Preposition "不要太辣"</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 06: レストランでの注文 ＆ 味の好み・辛さの調整
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">Order food with "我们要..." (We want...). Adjust spiciness using "不要太辣" (Not too spicy) or "不放香菜" (No cilantro).</span>
            </div>
          </div>
        </div>
      </section>

      <main class="max-w-4xl mx-auto px-4 py-10 space-y-12">
        <div class="bg-white border border-neutral-200/80 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          <div class="flex items-center space-x-2 text-neutral-800">
            <i data-lucide="volume-2" class="w-5 h-5 text-rose-600"></i>
            <span class="text-sm font-semibold">発音スピード調整（Audio Speed Controller）:</span>
          </div>
          <div class="flex items-center space-x-2">
            <button onclick="setSpeed(0.75)" id="speed-075" class="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-900 bg-neutral-900 text-white font-medium transition cursor-pointer">0.75x (Slow)</button>
            <button onclick="setSpeed(1.0)" id="speed-100" class="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 font-medium transition cursor-pointer">1.0x (Normal)</button>
          </div>
        </div>

        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：中華料理の注文・パクチー＆辛さ調整</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 「不要太辣（bú yào tài là）」：辛さの調整</h4>
              <p class="text-neutral-600">中国の本場の料理は非常に辛いことがあります。「微辣（wēilà / ピリ辛）」「微辣，不要太辣（控えめの辛さで）」と伝えるのが自衛の基本です。</p>
            </div>
            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 「不放香菜（bù fàng xiāngcài）」：パクチー抜き</h4>
              <p class="text-neutral-600">パクチー（香菜）が苦手な人は必修フレーズ！「放（fàng / 入れる）」否定の「不放（入れないで）」をセットで覚えましょう。</p>
            </div>
          </div>
        </section>

        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 実践会話（クリックで音声再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            <div onclick="speak('服务员，点菜！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer">
              <p class="text-xl font-semibold text-rose-700 my-0.5">服务员，点菜！</p>
              <p class="text-xs text-neutral-500">（あなた）すみません、注文します！(Fúwùyuán, diǎncài!)</p>
            </div>
            <div onclick="speak('请不要放香菜，不要太辣。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer">
              <p class="text-xl font-semibold text-rose-700 my-0.5">请不要放香菜，不要太辣。</p>
              <p class="text-xs text-neutral-500">（あなた）パクチーは入れないで、辛すぎないようにしてください。</p>
            </div>
          </div>
        </section>

        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <h3 class="text-xl font-bold text-neutral-900">3. 実践クイズ（全5問抜粋）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <p class="font-medium text-neutral-900">Q1. パクチー抜きをお願いする表現は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 不放香菜です。', '不正解です。', '不放香菜')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left font-medium text-sm">A. 不放香菜</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 不放香菜です。', '不正解です。', '不放香菜')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left font-medium text-sm">B. 不要香菜</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>
        </section>
      </main>
    `;
  }
};
