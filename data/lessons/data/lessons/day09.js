window.day09Data = {
  render: function() {
    return `
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 09 Focus: Feeling Sick, Pharmacy & "不舒服"</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 09: 体調不良の訴え ＆ 病院・薬局での症状説明
          </h2>
        </div>
      </section>

      <main class="max-w-4xl mx-auto px-4 py-10 space-y-12">
        <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
          <h3 class="text-xl font-bold text-neutral-900 border-b pb-3">1. 深掘り解説：「不舒服（気分が悪い）」</h3>
          <p class="text-sm text-neutral-700">旅先で体調を崩した時の必須表現<strong>「我身体很不舒服（Wǒ shēntǐ hěn bù shūfu / 体調がとても悪いです）」</strong>。頭痛（头疼）や発熱（发烧）と一緒に覚えましょう。</p>
        </div>
        <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y">
          <div onclick="speak('我头疼，发烧了。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer">
            <p class="text-xl font-semibold text-rose-700">我头疼，发烧了。</p>
            <p class="text-xs text-neutral-500">（あなた）頭が痛くて、熱があります。</p>
          </div>
        </div>
      </main>
    `;
  }
};
