const day06Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 06 Focus: Restaurant Ordering, Tastes & Adjustments</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 06: レストランでの注文 ＆ 味の好み・辛さ・パクチーの調整
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">
                Call the server with "服务员 (fúwùyuán)". Customize your meal with "不要太辣" (Not too spicy) or "不放香菜" (No cilantro/coriander).
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

        <!-- Section 1: Detailed Explanations & Cultural Column -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：店員の呼び方・辛さ調整・パクチー対策</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 店員さんを呼ぶ：「服务员，点菜！（すみません、注文します！）」</h4>
              <p class="text-neutral-600">
                レストランで店員さんを呼ぶ時は<strong>「服务员 (fúwùyuán)」</strong>と声をかけます。注文したい時は「点菜（diǎncài / 注文する）」を続けて「服务员，点菜！」と言えばOKです。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 辛さの指定：「不要太辣（bú yào tài là / 辛すぎないで）」</h4>
              <p class="text-neutral-600">
                本場の中国料理（特に四川・湖南料理など）は非常に辛いため、自衛表現が必須です。「微辣（wēilà / ピリ辛）」や「不要太辣（辛すぎないようにしてください）」と伝えて調整しましょう。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">③ パクチー（香菜）抜き：「不放香菜（bù fàng xiāngcài）」</h4>
              <p class="text-neutral-600">
                「放 (fàng)」は「入れる」という意味の動詞です。「不放...」で「〜を入れないで」となります。パクチーが苦手な人は「不放香菜！」を丸暗記しておきましょう。
              </p>
            </div>
          </div>

          <!-- Japanese Tips Column -->
          <div class="bg-rose-50/80 border border-rose-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-2 text-rose-800 font-bold text-base">
              <i data-lucide="lightbulb" class="w-5 h-5 text-rose-600"></i>
              <span>日本人向けTips ＆ 中華レストランカルチャー雑学</span>
            </div>
            <div class="text-xs text-neutral-700 leading-relaxed space-y-3">
              <p>
                <strong>【発音Tips：「服务员（fúwùyuán）」のなめらかな言い方】</strong><br>
                「fú（上がる）」「wù（下がる）」「yuán（上がる）」とトーンの上下が激しい単語です。日本語の「サービス員」のニュアンスに引きずられず、語尾の「yuán」を「ゆあーん↑」と高めにひっぱり上げるのがコツです！
              </p>
              <p>
                <strong>【雑学：食器を熱湯で洗う「洗碗（xǐwǎn）」文化】</strong><br>
                広東省や香港などのレストランでは、席につくとビニールで密封された食器セットと熱湯の入ったボウルが出てきます。お茶や熱湯で自分で使う器や箸を洗う「餐具消毒」というユニークな文化があります！
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. レストランでの実践会話（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('服务员，点菜！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Fúwùyuán, diǎncài!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">服务员，点菜！</p>
                <p class="text-xs text-neutral-500">（あなた）すみません、注文をお願いします！</p>
              </div>
            </div>

            <div onclick="speak('我要一份麻婆豆腐。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Wǒ yào yí fèn mápó dòufu.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">我要一份麻婆豆腐。</p>
                <p class="text-xs text-neutral-500">（あなた）麻婆豆腐を1人前ください。</p>
              </div>
            </div>

            <div onclick="speak('请不要放香菜，不要太辣。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Qǐng bù fàng xiāngcài, bú yào tài là.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">请不要放香菜，不要太辣。</p>
                <p class="text-xs text-neutral-500">（あなた）パクチーは入れないで、あまり辛くしないでください。</p>
              </div>
            </div>

            <div onclick="speak('好的，没问题！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Hǎo de, méi wèntí!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">好的，没问题！</p>
                <p class="text-xs text-neutral-500">（店員）かしこまりました、問題ありません！</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes (10 Questions) -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 06 実践クイズ（全10問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">10 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：店員の呼び方</span>
            <p class="font-medium text-neutral-900">レストランで店員さんを呼ぶ時の言葉はどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 服务员 (fúwùyuán) で「店員さん」になります。', '不正解！ 师傅は運転手さんや職人さんへの呼びかけです。', '服务员')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 服务员 (fúwùyuán)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 服务员 (fúwùyuán) で「店員さん」になります。', '不正解！ 师傅は運転手さんや職人さんへの呼びかけです。', '服务员')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 师傅 (shīfu)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 選択問題：パクチー</span>
            <p class="font-medium text-neutral-900">「パクチー（コリアンダー）」を意味する中国語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(2, 0, 0, '正解！ 香菜 (xiāngcài) はパクチーのことです。', '不正解！ 蔬菜は「野菜全般」の意味です。', '香菜')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 香菜 (xiāngcài)</button>
              <button onclick="checkQuiz(2, 1, 0, '正解！ 香菜 (xiāngcài) はパクチーのことです。', '不正解！ 蔬菜は「野菜全般」の意味です。', '香菜')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 蔬菜 (shūcài)</button>
            </div>
            <div id="q2-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. 選択問題：ピリ辛</span>
            <p class="font-medium text-neutral-900">「少しだけ辛く（ピリ辛）」を希望する時の表現は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(3, 0, 0, '正解！ 微辣 (wēilà) で「ピリ辛/控えめの辛さ」になります。', '不正解！ 麻辣はシビれる辛さです。', '微辣')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 微辣 (wēilà)</button>
              <button onclick="checkQuiz(3, 1, 0, '正解！ 微辣 (wēilà) で「ピリ辛/控えめの辛さ」になります。', '不正解！ 麻辣はシビれる辛さです。', '微辣')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 麻辣 (málà)</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 穴押し問題：注文する</span>
            <p class="font-medium text-neutral-900">「注文します」の「注文（diǎncài）」にあたる単語は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Fúwùyuán,</span>
              <span onclick="revealAnswer(4, 'diǎncài (点菜)', '点菜')" id="q4-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>!</span>
            </div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 穴押し問題：入れないで</span>
            <p class="font-medium text-neutral-900">「〜を入れないで」の動詞「放（入れる）」の否定形は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Qǐng</span>
              <span onclick="revealAnswer(5, 'bù fàng (不放)', '不放')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>xiāngcài.</span>
            </div>
          </div>

          <!-- Q6 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q6. 穴押し問題：問題ありません</span>
            <p class="font-medium text-neutral-900">「大丈夫です / 問題ありません」を意味するフレーズは？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(6, 'méi wèntí (没问题)', '没问题')" id="q6-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>

          <!-- Q7 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q7. タイピングテスト：辛い</span>
            <p class="font-medium text-neutral-900">「辛い（là）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q7-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(7, ['辣'], '辣')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q7-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q8 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q8. タイピングテスト：麻婆豆腐</span>
            <p class="font-medium text-neutral-900">「麻婆豆腐（mápó dòufu）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q8-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(8, ['麻婆豆腐'], '麻婆豆腐')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q8-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q9 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q9. 文化クイズ：洗碗文化</span>
            <p class="font-medium text-neutral-900">広東省や香港などで席に着いた時、お茶や熱湯で食器を洗う伝統文化の名称は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(9, 0, 0, '正解！ 洗碗（餐具消毒）と呼ばれる伝統的な生活習慣です。', '不正解！ 正解は洗碗です。')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 洗碗 (xǐwǎn)</button>
              <button onclick="checkQuiz(9, 1, 0, '正解！ 洗碗（餐具消毒）と呼ばれる伝統的な生活習慣です。', '不正解！ 正解は洗碗です。')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 泡茶 (pàochá)</button>
            </div>
            <div id="q9-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q10 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q10. 総合復習：カスタマイズ注文</span>
            <p class="font-medium text-neutral-900">「パクチーは入れないで、あまり辛くしないでください」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(10, 'Qǐng bù fàng xiāngcài, bú yào tài là. (请不要放香菜，不要太辣。)', '请不要放香菜不要太辣')" id="q10-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>

        </section>
      </main>
    `;
  }
};
