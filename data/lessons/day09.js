const day09Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 09 Focus: Feeling Sick, Pharmacy & "不舒服"</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 09: 体調不良の訴え ＆ 病院・薬局での症状説明
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">
                Express medical discomfort using "我身体不舒服" (I'm not feeling well). Describe symptoms like "头疼" (headache) and "发烧" (fever).
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：体調不良の表現・身体部位・「疼」の使い方</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 「不舒服（bù shūfu）」：体調が悪い・具合が悪い</h4>
              <p class="text-neutral-600">
                「舒服」は「心地よい・快適だ」の意味です。否定の「不」をつけて<strong>「我身体很不舒服（Wǒ shēntǐ hěn bù shūfu）」</strong>と言うと、「体調がとても悪いです」というSOSを表現できます。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 「部位 ＋ 疼（téng）」：〜が痛い</h4>
              <p class="text-neutral-600">
                どこかが痛い時は「痛む部位 ＋ 疼」で簡単に伝えられます。<br>
                例：「头疼（tóuténg / 頭痛）」「肚子疼（dùzi téng / お腹が痛い）」「喉咙疼（hóulóng téng / 喉が痛い）」。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">③ 発熱と薬：「发烧（fāshāo）」＆「感冒药（gǎnmàoyào）」</h4>
              <p class="text-neutral-600">
                「发烧」で「熱がある/熱を出す」になります。薬局（药店 / yàodiàn）で薬を買う時は「我想买感冒药（風邪薬を買いたいです）」と言えばOKです。
              </p>
            </div>
          </div>

          <!-- Japanese Tips Column -->
          <div class="bg-rose-50/80 border border-rose-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-2 text-rose-800 font-bold text-base">
              <i data-lucide="lightbulb" class="w-5 h-5 text-rose-600"></i>
              <span>日本人向けTips：中国の温かいお湯（热水）万能説 ＆ 薬局文化</span>
            </div>
            <div class="text-xs text-neutral-700 leading-relaxed space-y-3">
              <p>
                <strong>【文化雑学：体調不良の時はとにかく『多喝热水（白湯を飲みなさい）』】</strong><br>
                中国では風邪、頭痛、お腹の不調など、体調が悪いとあらゆる場面で「多喝热水（duō hē rèshuǐ / あたたかいお湯をたくさん飲みなさい）」とアドバイスされます。ホテルやレストランでも常にお湯が用意されています。
              </p>
              <p>
                <strong>【デリバリーで薬が届く！？】</strong><br>
                現代中国では美团（Meituan）などのアプリで、24時間いつでも30分以内にドラッグストアの薬をホテルまで配達してもらえます。
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 薬局・病院での実践会話（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('你好，我身体很不舒服。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Nǐ hǎo, wǒ shēntǐ hěn bù shūfu.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">你好，我身体很不舒服。</p>
                <p class="text-xs text-neutral-500">（あなた）こんにちは、体調がとても悪いです。</p>
              </div>
            </div>

            <div onclick="speak('你哪儿不舒服？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Nǐ nǎr bù shūfu?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">你哪儿不舒服？</p>
                <p class="text-xs text-neutral-500">（薬剤師/医師）どこが具合悪いですか？</p>
              </div>
            </div>

            <div onclick="speak('我头疼，有点儿发烧。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Wǒ tóuténg, yǒudiǎnr fāshāo.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">我头疼，有点儿发烧。</p>
                <p class="text-xs text-neutral-500">（あなた）頭が痛くて、少し熱があります。</p>
              </div>
            </div>

            <div onclick="speak('给你这个感冒药，一天吃三次。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Gěi nǐ zhè ge gǎnmàoyào, yì tiān chī sān cì.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">给你这个感冒药，一天吃三次。</p>
                <p class="text-xs text-neutral-500">（薬剤師）この風邪薬をどうぞ。1日3回飲んでください。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes (10 Questions) -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 09 実践クイズ（全10問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">10 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：体調不良</span>
            <p class="font-medium text-neutral-900">「体調が悪い/具合が悪い」を表すフレーズは？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 不舒服 (bù shūfu) で「具合が悪い」になります。', '不正解！ 很高兴は「とても嬉しい」です。', '不舒服')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 不舒服 (bù shūfu)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 不舒服 (bù shūfu) で「具合が悪い」になります。', '不正解！ 很高兴は「とても嬉しい」です。', '不舒服')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 很高兴 (hěn gāoxìng)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 選択問題：頭痛</span>
            <p class="font-medium text-neutral-900">「頭が痛い（頭痛）」を意味する中国語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(2, 0, 0, '正解！ 头疼 (tóuténg) は頭痛のことです。', '不正解！ 肚子疼は腹痛のことです。', '头疼')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 头疼 (tóuténg)</button>
              <button onclick="checkQuiz(2, 1, 0, '正解！ 头疼 (tóuténg) は頭痛のことです。', '不正解！ 肚子疼は腹痛のことです。', '头疼')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 肚子疼 (dùzi téng)</button>
            </div>
            <div id="q2-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. 選択問題：発熱</span>
            <p class="font-medium text-neutral-900">「熱がある/発熱する」を意味する単語はどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(3, 0, 0, '正解！ 发烧 (fāshāo) で「熱を出す/発熱」になります。', '不正解！ 感冒は「風邪をひく」です。', '发烧')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 发烧 (fāshāo)</button>
              <button onclick="checkQuiz(3, 1, 0, '正解！ 发烧 (fāshāo) で「熱を出す/発熱」になります。', '不正解！ 感冒は「風邪をひく」です。', '发烧')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 感冒 (gǎnmào)</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 穴押し問題：身体・体</span>
            <p class="font-medium text-neutral-900">「体が不調です」の「身体（shēntǐ）」は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Wǒ</span>
              <span onclick="revealAnswer(4, 'shēntǐ (身体)', '身体')" id="q4-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>hěn bù shūfu.</span>
            </div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 穴押し問題：風邪薬</span>
            <p class="font-medium text-neutral-900">「風邪薬」を意味する「感冒药（gǎnmàoyào）」は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Wǒ xiǎng mǎi</span>
              <span onclick="revealAnswer(5, 'gǎnmàoyào (感冒药)', '感冒药')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>.</span>
            </div>
          </div>

          <!-- Q6 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q6. 穴押し問題：薬を飲む（食べる）</span>
            <p class="font-medium text-neutral-900">中国語で「薬を飲む」という時の動詞（chī / 食べる）は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Yì tiān</span>
              <span onclick="revealAnswer(6, 'chī (吃)', '吃')" id="q6-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>sān cì.</span>
            </div>
          </div>

          <!-- Q7 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q7. タイピングテスト：痛い</span>
            <p class="font-medium text-neutral-900">「痛む/痛い（téng）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q7-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(7, ['疼'], '疼')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q7-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q8 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q8. タイピングテスト：薬局</span>
            <p class="font-medium text-neutral-900">「薬局/ドラッグストア（yàodiàn）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q8-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(8, ['药店', '藥店'], '药店')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q8-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q9 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q9. 文化クイズ：白湯文化</span>
            <p class="font-medium text-neutral-900">中国で体調を崩した際によくアドバイスされる万能な習慣「多喝热水」の意味は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(9, 0, 0, '正解！ 温かいお湯（白湯）をたくさん飲む習慣です。', '不正解！ 冷たい水ではなく温かいお湯です。')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 温かいお湯（白湯）をたくさん飲む</button>
              <button onclick="checkQuiz(9, 1, 0, '正解！ 温かいお湯（白湯）をたくさん飲む習慣です。', '不正解！ 冷たい水ではなく温かいお湯です。')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 氷水をたくさん飲む</button>
            </div>
            <div id="q9-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q10 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q10. 総合復習：症状の説明</span>
            <p class="font-medium text-neutral-900">「頭が痛くて、少し熱があります」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(10, 'Wǒ tóuténg, yǒudiǎnr fāshāo. (我头疼，有点儿发烧。)', '我头疼有点儿发烧')" id="q10-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>

        </section>
      </main>
    `;
  }
};
