const day11Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 11 Focus: Asking Directions, Navigation & "怎么走"</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 11: 道に迷う・目的地を尋ねる ＆ 「怎么走」
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">
                Ask for directions using "请问，[地点]怎么走?" (Excuse me, how do I get to [location]?). Understand directions like "一直走" (Go straight) and "往左拐" (Turn left).
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：道の尋ね方・方向の指示・「离」の使い方</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 道の尋ね方：「请问，[場所] 怎么走？（〜へはどう行きますか？）」</h4>
              <p class="text-neutral-600">
                街中で道を聞く時の黄金フレーズです。「请问，地铁站怎么走？（qǐngwèn, dìtiězhàn zěnme zǒu? / すみません、地下鉄の駅へはどう行きますか？）」のように使います。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 方向の指示：「一直走（まっすぐ）」「往...拐（〜に曲がる）」</h4>
              <p class="text-neutral-600">
                ・<strong>一直走（yìzhí zǒu）:</strong> まっすぐ行く<br>
                ・<strong>往左拐（wǎng zuǒ guǎi）:</strong> 左に曲がる<br>
                ・<strong>往右拐（wǎng yòu guǎi）:</strong> 右に曲がる
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">③ 距離を表す表現：「离...很近/很远（〜から近い/遠い）」</h4>
              <p class="text-neutral-600">
                「离（lí / 〜から）」を使って、「离这里不远（lí zhèlǐ bù yuǎn / ここから遠くありません）」や「很近（hěn jìn / 近いです）」と距離感を伝えることができます。
              </p>
            </div>
          </div>

          <!-- Japanese Tips Column -->
          <div class="bg-rose-50/80 border border-rose-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-2 text-rose-800 font-bold text-base">
              <i data-lucide="lightbulb" class="w-5 h-5 text-rose-600"></i>
              <span>日本人向けTips：中国（北京・北方）の「東西南北」ナビゲーション雑学</span>
            </div>
            <div class="text-xs text-neutral-700 leading-relaxed space-y-3">
              <p>
                <strong>【雑学：中国では『左右』ではなく『東西南北』で道を教えてくる！？】</strong><br>
                北京などの都市では、地元の人に道を聞くと「往东走（東へ行きなさい）」「往南拐（南へ曲がりなさい）」と方角で説明されることが多々あります！街並みが碁盤の目になっている中国ならではの面白い道案内文化です。
              </p>
              <p>
                <strong>【地図アプリ：「高德地图」と「百度地图」】</strong><br>
                中国現地ではGoogle Mapよりも「高德地图 (Amap)」や「百度地图 (Baidu Maps)」が圧倒的に正確で便利です。
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 街頭での道案内やり取り（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('请问，洗手间在哪儿？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Qǐngwèn, xǐshǒujiān zài nǎr?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">请问，洗手间在哪儿？</p>
                <p class="text-xs text-neutral-500">（あなた）すみません、お手洗いはどこにありますか？</p>
              </div>
            </div>

            <div onclick="speak('一直走，在前面往左拐。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Yìzhí zǒu, zài qiánmiàn wǎng zuǒ guǎi.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">一直走，在前面往左拐。</p>
                <p class="text-xs text-neutral-500">（通行人）まっすぐ行って、前方で左に曲がってください。</p>
              </div>
            </div>

            <div onclick="speak('离这里远吗？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Lí zhèlǐ yuǎn ma?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">离这里远吗？</p>
                <p class="text-xs text-neutral-500">（あなた）ここから遠いですか？</p>
              </div>
            </div>

            <div onclick="speak('不远，很近！走路两分钟。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Bù yuǎn, hěn jìn! Zǒulù liǎng fēnzhōng.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">不远，很近！走路两分钟。</p>
                <p class="text-xs text-neutral-500">（通行人）遠くないですよ、とても近いです！歩いて2分です。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes (10 Questions) -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 11 実践クイズ（全10問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">10 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：まっすぐ行く</span>
            <p class="font-medium text-neutral-900">「まっすぐ行く」を意味する中国語はどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 一直走 (yìzhí zǒu) で「まっすぐ行く」となります。', '不正解！ 往左拐は「左に曲がる」です。', '一直走')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 一直走 (yìzhí zǒu)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 一直走 (yìzhí zǒu) で「まっすぐ行く」となります。', '不正解！ 往左拐は「左に曲がる」です。', '一直走')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 往左拐 (wǎng zuǒ guǎi)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 選択問題：曲がる</span>
            <p class="font-medium text-neutral-900">「曲がる/角を曲がる」を意味する動詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(2, 0, 0, '正解！ 拐 (guǎi) で「曲がる」となります。', '不正解！ 走は「歩く/行く」です。', '拐')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 拐 (guǎi)</button>
              <button onclick="checkQuiz(2, 1, 0, '正解！ 拐 (guǎi) で「曲がる」となります。', '不正解！ 走は「歩く/行く」です。', '拐')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 走 (zǒu)</button>
            </div>
            <div id="q2-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. 選択問題：お手洗い</span>
            <p class="font-medium text-neutral-900">「お手洗い/トイレ」の最も上品な中国語表現はどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(3, 0, 0, '正解！ 洗手间 (xǐshǒujiān) は「お手洗い」のフォーマルな言い方です。', '不正解！ 房间は「部屋」です。', '洗手间')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 洗手间 (xǐshǒujiān)</button>
              <button onclick="checkQuiz(3, 1, 0, '正解！ 洗手间 (xǐshǒujiān) は「お手洗い」のフォーマルな言い方です。', '不正解！ 房间は「部屋」です。', '洗手间')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 房间 (fángjiān)</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 穴押し問題：〜への行き方</span>
            <p class="font-medium text-neutral-900">「〜へはどう行きますか？」の「どうやって行く（zěnme zǒu）」は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Qǐngwèn, dìtiězhàn</span>
              <span onclick="revealAnswer(4, 'zěnme zǒu (怎么走)', '怎么走')" id="q4-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>?</span>
            </div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 穴押し問題：徒歩で</span>
            <p class="font-medium text-neutral-900">「歩いて/徒歩で（zǒulù）」にあたる表現は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'Zǒulù (走路)', '走路')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>liǎng fēnzhōng.</span>
            </div>
          </div>

          <!-- Q6 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q6. 穴押し問題：近い</span>
            <p class="font-medium text-neutral-900">「とても近いです」の「近い（jìn）」は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Bù yuǎn, hěn</span>
              <span onclick="revealAnswer(6, 'jìn (近)', '近')" id="q6-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>!</span>
            </div>
          </div>

          <!-- Q7 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q7. タイピングテスト：遠い</span>
            <p class="font-medium text-neutral-900">「遠い（yuǎn）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q7-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(7, ['远', '遠'], '远')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q7-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q8 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q8. タイピングテスト：お手洗い</span>
            <p class="font-medium text-neutral-900">「お手洗い（xǐshǒujiān）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q8-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(8, ['洗手间', '洗手間'], '洗手间')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q8-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q9 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q9. 文化クイズ：地図アプリ</span>
            <p class="font-medium text-neutral-900">中国現地で最も広く使われている代表的な地図ナビアプリは？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(9, 0, 0, '正解！ 高德地图 (Amap) や 百度地图 が中国での定番です。', '不正解！ 中国では高德地图などが主軸です。')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 高德地图 (Amap)</button>
              <button onclick="checkQuiz(9, 1, 0, '正解！ 高德地图 (Amap) や 百度地图 が中国での定番です。', '不正解！ 中国では高德地图などが主軸です。')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. Apple Maps</button>
            </div>
            <div id="q9-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q10 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q10. 総合復習：案内フレーズ</span>
            <p class="font-medium text-neutral-900">「まっすぐ行って、前方で左に曲がってください」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(10, 'Yìzhí zǒu, zài qiánmiàn wǎng zuǒ guǎi. (一直走，在前面往左拐。)', '一直走在前面往左拐')" id="q10-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>

        </section>
      </main>
    `;
  }
};
