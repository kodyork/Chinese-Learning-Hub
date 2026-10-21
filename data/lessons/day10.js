const day10Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 10 Focus: Making Appointments, Telling Time & "打算"</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 10: 友達との約束・時間の指定 ＆ 計画「打算」
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">
                Learn to specify time ("几点?" = What time?) and express future plans using "打算" (dǎsuan / plan to). Note that time words always precede verbs in Chinese!
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：時間の言い方・「打算」・語順ルール</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 時刻の表現：「〜点（diǎn）〜分（fēn）」</h4>
              <p class="text-neutral-600">
                時間は数字に「点（〜時）」と「分（〜分）」をつけます。「7点（qī diǎn / 7時）」「半（bàn / 30分）」を使って「7点半（7時半）」と表現できます。何時か尋ねる時は<strong>「几点？（jǐ diǎn?）」</strong>です。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 予定や計画：「打算（dǎsuan / 〜の予定だ）」</h4>
              <p class="text-neutral-600">
                「主語 ＋ 打算 ＋ 動詞」で「〜するつもり/〜する予定です」を表します。<br>
                例：「明天你打算做什么？（Míngtiān nǐ dǎsuan zuò shénme? / 明日は何をする予定ですか？）」。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">③ 中国語の最重要文法ルール：時間詞の置く位置！</h4>
              <p class="text-neutral-600">
                英語では時間（at 7 o'clock）を文末に置くことが多いですが、<strong>中国語では時間は必ず「動詞の前（主語の前または直後）」に置きます</strong>！<br>
                〇「我【明天7点】去。（私は明日7時に行きます）」<br>
                ✕「我 去 明天7点。」
              </p>
            </div>
          </div>

          <!-- Japanese Tips Column -->
          <div class="bg-rose-50/80 border border-rose-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-2 text-rose-800 font-bold text-base">
              <i data-lucide="lightbulb" class="w-5 h-5 text-rose-600"></i>
              <span>日本人向けTips：「2時」の罠 ＆ 中国の待ち合わせ文化</span>
            </div>
            <div class="text-xs text-neutral-700 leading-relaxed space-y-3">
              <p>
                <strong>【要注意！「2時」は「二点」ではなく「两点（liǎng diǎn）」！】</strong><br>
                Day 02の「2杯（两杯）」と同じく、時刻の「2時」も「二点（èr diǎn）」とは言わず必ず<strong>「两点（liǎng diǎn）」</strong>と言います。中国語学習者が最も間違えやすいポイントの一つです！
              </p>
              <p>
                <strong>【中国の待ち合わせ文化】</strong><br>
                中国で「明天（明日）」「下午（午後）」などの大まかな時間を決めておき、当日にWeChat（微信）の位置情報共有（共享位置）機能を使いながら現地集合・合流するのが一般的です。
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 友達との約束の実践会話（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('明天下午你打算做什么？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Míngtiān xiàwǔ nǐ dǎsuan zuò shénme?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">明天下午你打算做什么？</p>
                <p class="text-xs text-neutral-500">（友人）明日の午後、何をする予定ですか？</p>
              </div>
            </div>

            <div onclick="speak('我打算去喝咖啡。你几点有空？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Wǒ dǎsuan qù hē kāfēi. Nǐ jǐ diǎn yǒu kòng?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">我打算去喝咖啡。你几点有空？</p>
                <p class="text-xs text-neutral-500">（あなた）コーヒーを飲みに行く予定です。あなたは何時に時間がありますか？</p>
              </div>
            </div>

            <div onclick="speak('我两点半有空。我们在哪儿见？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Wǒ liǎng diǎn bàn yǒu kòng. Wǒmen zài nǎr jiàn?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">我两点半有空。我们在哪儿见？</p>
                <p class="text-xs text-neutral-500">（友人）2時半に時間があります。どこで会いましょうか？</p>
              </div>
            </div>

            <div onclick="speak('两点半在地铁站见！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Liǎng diǎn bàn zài dìtiězhàn jiàn!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">两点半在地铁站见！</p>
                <p class="text-xs text-neutral-500">（あなた）2時半に地下鉄の駅で会いましょう！</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes (10 Questions) -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 10 実践クイズ（全10问）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">10 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：2時の言い方</span>
            <p class="font-medium text-neutral-900">「2時」を意味する正しい中国語はどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 時刻の2時は「两点 (liǎng diǎn)」と言います。', '不正解！ 2時は二点ではなく两点です。', '两点')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 两点 (liǎng diǎn)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 時刻の2時は「两点 (liǎng diǎn)」と言います。', '不正解！ 2時は二点ではなく两点です。', '两点')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 二点 (èr diǎn)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 選択問題：予定・計画</span>
            <p class="font-medium text-neutral-900">「〜するつもり/〜の予定です」を表す言葉は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(2, 0, 0, '正解！ 打算 (dǎsuan) で「予定です/〜のつもり」になります。', '不正解！ 喜欢は「好き」です。', '打算')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 打算 (dǎsuan)</button>
              <button onclick="checkQuiz(2, 1, 0, '正解！ 打算 (dǎsuan) で「予定です/〜のつもり」になります。', '不正解！ 喜欢は「好き」です。', '打算')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 喜欢 (xǐhuan)</button>
            </div>
            <div id="q2-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. 選択問題：時間がある</span>
            <p class="font-medium text-neutral-900">「（暇な）時間がある」を表すフレーズはどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(3, 0, 0, '正解！ 有空 (yǒu kòng) で「時間がある/暇がある」の意味になります。', '不正解！ 没问题は「問題ない」です。', '有空')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 有空 (yǒu kòng)</button>
              <button onclick="checkQuiz(3, 1, 0, '正解！ 有空 (yǒu kòng) で「時間がある/暇がある」の意味になります。', '不正解！ 没问题は「問題ない」です。', '有空')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 没问题 (méi wèntí)</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 穴押し問題：何時</span>
            <p class="font-medium text-neutral-900">「何時に時間がありますか？」の「何時（jǐ diǎn）」は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Nǐ</span>
              <span onclick="revealAnswer(4, 'jǐ diǎn (几点)', '几点')" id="q4-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>yǒu kòng?</span>
            </div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 穴押し問題：明日</span>
            <p class="font-medium text-neutral-900">「明日」を意味する中国語「明天（míngtiān）」は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'Míngtiān (明天)', '明天')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>xiàwǔ nǐ dǎsuan zuò shénme?</span>
            </div>
          </div>

          <!-- Q6 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q6. 穴押し問題：会う</span>
            <p class="font-medium text-neutral-900">「どこで会いましょうか？」の「会う（jiàn）」は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Wǒmen zài nǎr</span>
              <span onclick="revealAnswer(6, 'jiàn (见)', '见')" id="q6-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>?</span>
            </div>
          </div>

          <!-- Q7 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q7. タイピングテスト：午後</span>
            <p class="font-medium text-neutral-900">「午後（xiàwǔ）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q7-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(7, ['下午'], '下午')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q7-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q8 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q8. タイピングテスト：地下鉄の駅</span>
            <p class="font-medium text-neutral-900">「地下鉄の駅（dìtiězhàn）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q8-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(8, ['地铁站', '地鐵站'], '地铁站')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q8-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q9 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q9. 語順クイズ：時間詞の置く位置</span>
            <p class="font-medium text-neutral-900">「私は明日行くつもりです」の正しい中国語の語順は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(9, 0, 0, '正解！ 時間の「明天」は動詞の前に置きます。', '不正解！ 中国語では時間を文末に置くことはできません。', '我明天打算去')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 我明天打算去。 (Wǒ míngtiān dǎsuan qù.)</button>
              <button onclick="checkQuiz(9, 1, 0, '正解！ 時間の「明天」は動詞の前に置きます。', '不正解！ 中国語では時間を文末に置くことはできません。', '我明天打算去')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 我打算去明天。 (Wǒ dǎsuan qù míngtiān.)</button>
            </div>
            <div id="q9-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q10 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q10. 総合復習：待ち合わせ約束</span>
            <p class="font-medium text-neutral-900">「2時半に地下鉄の駅で会いましょう！」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(10, 'Liǎng diǎn bàn zài dìtiězhàn jiàn! (两点半在地铁站见！)', '两点半在地铁站见')" id="q10-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>

        </section>
      </main>
    `;
  }
};
