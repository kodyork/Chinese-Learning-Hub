window.day10Data = {
  render: function() {
    return `
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 10 Focus: Making Appointments, Time & "打算"</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 10: 友達との約束・時間の指定 ＆ 計画「打算」
          </h2>
        </div>
      </section>

      <main class="max-w-4xl mx-auto px-4 py-10 space-y-12">
        <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
          <h3 class="text-xl font-bold text-neutral-900 border-b pb-3">1. 深掘り解説：「打算（〜するつもり）」</h3>
          <p class="text-sm text-neutral-700">「明天你打算做什么？（明日は何をする予定ですか？）」など、今後の予定を聞いたり答えたりする時に「打算 (dǎsuan)」を使います。</p>
        </div>
        <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y">
          <div onclick="speak('明天下午你打算去哪儿？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer">
            <p class="text-xl font-semibold text-rose-700">明天下午你打算去哪儿？</p>
            <p class="text-xs text-neutral-500">（あなた）明日の午後、どこに行く予定ですか？</p>
          </div>
        </div>
      </main>
    `;
  }
};
