const day04Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 04 Focus: Taking Taxis, Directions & Location Verb "在"</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 04: タクシーでの行き方指示 ＆ 存在動詞「在」・位置表現
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">
                To specify destinations, use "去 + Location" (Go to...). Expressing location uses "在" (at/in), structured as "Subject + 在 + Location".
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：行き方指示・存在動詞「在」・配車アプリ事情</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 行き先を伝える：「师傅，我去...（運転手さん、〜まで）」</h4>
              <p class="text-neutral-600">
                タクシーや配車アプリの運転手さんには親しみを込めて<strong>「师傅（shīfu）」</strong>と呼びかけます。「我去＋目的地（〜へ行きます）」で「我去ホテル/我去駅」と目的地を伝え、「在这里下（zài zhèlǐ xià）」で「ここで降ります」となります。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 場所を表す言葉：「在 (zài)」と位置詞</h4>
              <p class="text-neutral-600">
                英語の in / at / on に相当するのが<strong>「在 (zài)」</strong>です。「主語 ＋ 在 ＋ 場所」で「〜は〜にあります/います」を表します。位置を表す「左边（zuǒbian / 左側）」「右边（yòubian / 右側）」や「前面（qiánmiàn / 前）」を組み合わせると指示がとてもスムーズになります。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">③ 文化的背景：中国の配車アプリ（滴滴 DiDi）とタクシー文化</h4>
              <p class="text-neutral-600">
                現代の中国では流しのタクシーよりも「滴滴出行 (DiDi)」などの配車アプリが主流です。アプリで目的地を入力していても、乗車時に運転手から「是去...吗？（〜に行きますか？）」と確認されるため、今日のフレーズを覚えておくと現地で非常に役立ちます。
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. タクシーでの実践会話フレーズ（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('师傅，你好！我去希尔顿酒店。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Shīfu, nǐ hǎo! Wǒ qù Xī'ěrdùn Jiǔdiàn.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">师傅，你好！我去希尔顿酒店。</p>
                <p class="text-xs text-neutral-500">（あなた）運転手さんこんにちは！ヒルトンホテルまでお願いします。</p>
              </div>
            </div>

            <div onclick="speak('好的。在左边还是右边？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Hǎo de. Zài zuǒbian háishi yòubian?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">好的。在左边还是右边？</p>
                <p class="text-xs text-neutral-500">（運転手）わかりました。左側ですか、それとも右側ですか？</p>
              </div>
            </div>

            <div onclick="speak('在前面，右边。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Zài qiánmiàn, yòubian.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">在前面，右边。</p>
                <p class="text-xs text-neutral-500">（あなた）前方の、右側です。</p>
              </div>
            </div>

            <div onclick="speak('师傅，我就在这里下。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Shīfu, wǒ jiù zài zhèlǐ xià.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">师傅，我就在这里下。</p>
                <p class="text-xs text-neutral-500">（あなた）運転手さん、ここで降ります。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes (10 Questions) -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 04 実践クイズ（全10問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">10 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：呼びかけ</span>
            <p class="font-medium text-neutral-900">タクシーの運転手さんに呼びかける際の最も丁寧で一般的な言葉は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 师傅 (shīfu) は職人や技術者、運転手さんへの敬称です。', '不正解！ 老师は先生に対する言葉です。', '师傅')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 师傅 (shīfu)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 师傅 (shīfu) は職人や技術者、運転手さんへの敬称です。', '不正解！ 老师は先生に対する言葉です。', '师傅')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 老师 (lǎoshī)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 選択問題：行く</span>
            <p class="font-medium text-neutral-900">「〜へ行く（Go to...）」を表す動詞はどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(2, 0, 0, '正解！ 去 (qù) は「行く」を意味します。', '不正解！ 来は「来る」の意味です。', '去')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 去 (qù)</button>
              <button onclick="checkQuiz(2, 1, 0, '正解！ 去 (qù) は「行く」を意味します。', '不正解！ 来は「来る」の意味です。', '去')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 来 (lái)</button>
            </div>
            <div id="q2-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. 選択問題：降車表現</span>
            <p class="font-medium text-neutral-900">「ここで降ります」と言う時の動詞「降りる」は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(3, 0, 0, '正解！ 下 (xià) で「（乗り物から）降りる」を表します。', '不正解！ 上は「乗る」の意味です。', '在这里下')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 下 (xià)</button>
              <button onclick="checkQuiz(3, 1, 0, '正解！ 下 (xià) で「（乗り物から）降りる」を表します。', '不正解！ 上は「乗る」の意味です。', '在这里下')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 上 (shàng)</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 穴押し問題：左側</span>
            <p class="font-medium text-neutral-900">「左側」を意味する中国語は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Zài</span>
              <span onclick="revealAnswer(4, 'zuǒbian (左边)', '左边')" id="q4-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>.</span>
            </div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 穴押し問題：右側</span>
            <p class="font-medium text-neutral-900">「右側」を意味する中国語は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Zài</span>
              <span onclick="revealAnswer(5, 'yòubian (右边)', '右边')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>.</span>
            </div>
          </div>

          <!-- Q6 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q6. 穴押し問題：ここ・この場所</span>
            <p class="font-medium text-neutral-900">「ここ（Here）」にあたる中国語は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Wǒ zài</span>
              <span onclick="revealAnswer(6, 'zhèlǐ (这里)', '这里')" id="q6-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>xià.</span>
            </div>
          </div>

          <!-- Q7 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q7. タイピングテスト：前方・前</span>
            <p class="font-medium text-neutral-900">「前方・前（qiánmiàn）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q7-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(7, ['前面'], '前面')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q7-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q8 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q8. タイピングテスト：後方・後ろ</span>
            <p class="font-medium text-neutral-900">「後方・後ろ（hòumiàn）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q8-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(8, ['后面'], '后面')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q8-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q9 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q9. 文化クイズ：配車サービス</span>
            <p class="font-medium text-neutral-900">中国で最も広く普及している配車アプリサービスの名称は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(9, 0, 0, '正解！ 滴滴出行 (DiDi) は中国全土で使われているインフラアプリです。', '不正解！ Uberは中国市場からは撤退しDiDiがシェアを占めています。')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 滴滴出行 (DiDi)</button>
              <button onclick="checkQuiz(9, 1, 0, '正解！ 滴滴出行 (DiDi) は中国全土で使われているインフラアプリです。', '不正解！ Uberは中国市場からは撤退しDiDiがシェアを占めています。')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. Uber</button>
            </div>
            <div id="q9-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q10 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q10. 総合復習：行き先指示</span>
            <p class="font-medium text-neutral-900">「運転手さん、北京駅まで行きます」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(10, 'Shīfu, wǒ qù Běijīng Zhàn. (师傅，我去北京站。)', '师傅，我去北京站')" id="q10-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>

        </section>
      </main>
    `;
  }
};
