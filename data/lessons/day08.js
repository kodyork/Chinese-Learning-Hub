window.day08Data = {
  render: function() {
    return `
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 08 Focus: Hotel Check-in, Reservation & "要...了"</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 08: ホテルでのチェックイン ＆ 予約確認・「要...了」
          </h2>
        </div>
      </section>

      <main class="max-w-4xl mx-auto px-4 py-10 space-y-12">
        <div class="bg-white border border-neutral-200/80 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          <div class="flex items-center space-x-2 text-neutral-800">
            <i data-lucide="volume-2" class="w-5 h-5 shrink-0 text-rose-600"></i>
            <span class="text-sm font-semibold">発音スピード調整:</span>
          </div>
          <div class="flex items-center space-x-2">
            <button onclick="setSpeed(0.75)" id="speed-075" class="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-900 bg-neutral-900 text-white font-medium cursor-pointer">0.75x</button>
            <button onclick="setSpeed(1.0)" id="speed-100" class="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 font-medium cursor-pointer">1.0x</button>
          </div>
        </div>

        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：チェックインの基本フレーズ</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4 text-sm text-neutral-800">
            <p><strong>「我预订了房间（Wǒ yùdìng le fángjiān / 部屋を予約しました）」</strong>と言い、パスポート（护照 / hùzhào）を渡すのがホテルのチェックインの鉄則です。</p>
          </div>
        </section>

        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 実践会話</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y">
            <div onclick="speak('您好，我预订了房间。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer">
              <p class="text-xl font-semibold text-rose-700">您好，我预订了房间。</p>
              <p class="text-xs text-neutral-500">（あなた）こんにちは、部屋を予約しています。</p>
            </div>
            <div onclick="speak('请给我看一下护照。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer">
              <p class="text-xl font-semibold text-rose-700">请给我看一下护照。</p>
              <p class="text-xs text-neutral-500">（フロント）パスポートを見せていただけますか。</p>
            </div>
          </div>
        </section>
      </main>
    `;
  }
};
