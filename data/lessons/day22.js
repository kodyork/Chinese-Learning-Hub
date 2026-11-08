const day22Data = {
  render: function() {
    return `
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <span>Day 22 Advanced Masterclass (Week 4)</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 22: 極限の仮定と苦渋の決断（哪怕…也… / 宁可…也…） ＆ 周杰倫『搁浅』
          </h2>
        </div>
      </section>
      <main class="max-w-4xl mx-auto px-4 py-10 space-y-12">
        <section class="space-y-6">
          <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：極限仮定と選択決断</h3>
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4 text-sm text-neutral-800">
            <p><strong>① 哪怕…也…（たとえ〜であろうとも）：</strong>極限の困難を仮定します。<br>例：<code class="bg-neutral-100 px-1 rounded">哪怕只有一线希望，我也不会放弃。</code></p>
            <p><strong>② 宁可…也…（むしろ〜を選ぶ）：</strong>苦渋の決断を表します。<br>例：<code class="bg-neutral-100 px-1 rounded">我宁可失败，也要尝试一次。</code></p>
          </div>
        </section>
        <section class="space-y-4">
          <h3 class="text-xl font-bold text-neutral-900">2. 実践会話</h3>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            <div onclick="speak('哪怕前方路途再艰辛，我也要坚持走下去。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer">
              <span class="font-bold text-lg text-neutral-900 block">哪怕前方路途再艰辛，我也要坚持走下去。</span>
              <p class="text-xs text-neutral-500 mt-1">たとえ道のりがどんなに困難でも、歩み続けます。</p>
            </div>
          </div>
        </section>
        <section class="space-y-6">
          <h3 class="text-xl font-bold text-neutral-900">3. クイズ</h3>
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <p class="font-medium text-neutral-900">「たとえ〜であろうとも」を表す接続詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解です！ 哪怕 です。', '不正解です。', '哪怕')" class="border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 哪怕</button>
              <button onclick="checkQuiz(1, 1, 0, '正解です！ 哪怕 です。', '不正解です。', '哪怕')" class="border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 虽然</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>
        </section>
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <h3 class="text-2xl font-bold text-neutral-900">4. 周杰倫『搁浅』に学ぶ感情の葛藤</h3>
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <p class="text-xs text-neutral-700">【歌詞フレーズ】<br><strong class="text-rose-950 text-base">我拉着线，想撕裂伤口</strong>（糸を引っ張りながら、傷口を破り裂いてしまいたいと思う）</p>
          </div>
        </section>
      </main>
    `;
  }
};
