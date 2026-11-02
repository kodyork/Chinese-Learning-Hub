const day15Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="utensils" class="w-3.5 h-3.5"></i>
            <span>Day 15 Focus: Restaurant Ordering & Tastes</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 15: レストランでの注文・味の好み ＆ 能・可以の使い分け
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">
                Learn how to order food, express dietary preferences, and master modal verbs "能" (néng) and "可以" (kěyǐ).
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：注文・味覚フレーズ ＆ 能/可以のニュアンス</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 「〜できますか？」：能（néng） vs 可以（kěyǐ）</h4>
              <p class="text-neutral-600">
                ・<strong>能 (néng):</strong> 条件・能力的に可能か（例：能不能少放辣？＝辛さを控えめにできる？）<br>
                ・<strong>可以 (kěyǐ):</strong> 許可・OKかどうか（例：可以用微信支付吗？＝WeChat Payは使えますか？）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 料理の注文と量詞</h4>
              <p class="text-neutral-600">
                ・<strong>份 (fèn):</strong> 〜人前、〜セット（例：一份宫保鸡丁＝クンポーチキンの1人前）<br>
                ・<strong>杯 (bēi):</strong> コップ・グラス（例：一杯冰水＝氷水1杯）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">③ 味の好みとカスタマイズ表現</h4>
              <p class="text-neutral-600">
                ・<strong>不要香菜 (bú yào xiāngcài):</strong> パクチー抜きで<br>
                ・<strong>少放盐/糖 (shǎo fàng yán/táng):</strong> 塩/砂糖は控えめで
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 実践会話（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('服务员，我们要点菜。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Fúwùyuán, wǒmen yào diǎncài.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">服务员，我们要点菜。</p>
                <p class="text-xs text-neutral-500">すみません（店員さん）、注文をお願いします。</p>
              </div>
            </div>

            <div onclick="speak('这个请少放辣，不要香菜。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Zhège qǐng shǎo fàng là, bú yào xiāngcài.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">这个请少放辣，不要香菜。</p>
                <p class="text-xs text-neutral-500">これは辛さ控えめで、パクチーは入れないでください。</p>
              </div>
            </div>

            <div onclick="speak('请问，这里可以用微信支付吗？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Qǐngwèn, zhèlǐ kěyǐ yòng Wēixìn zhīfù ma?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">请问，这里可以用微信支付吗？</p>
                <p class="text-xs text-neutral-500">すみません、ここはWeChat Payを使えますか？</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 15 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：パクチー抜き</span>
            <p class="font-medium text-neutral-900">「パクチーはいりません（不要香菜）」の正しい中国語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 不要香菜 (bú yào xiāngcài) です。', '不正解！ 不用香菜とはあまり言いません。', '不要香菜')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 不要香菜 (bú yào xiāngcài)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 不要香菜 (bú yào xiāngcài) です。', '不正解！ 不用香菜とはあまり言いません。', '不要香菜')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 不用香菜 (bú yòng xiāngcài)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴押し問題：注文する</span>
            <p class="font-medium text-neutral-900">「注文する（点菜）」の「点（diǎn）」は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Wǒmen yào</span>
              <span onclick="revealAnswer(2, 'diǎn (点)', '点')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>cài.</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：店員さん</span>
            <p class="font-medium text-neutral-900">「店員さん（fúwùyuán）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(3, ['服务员', '服務員'], '服务员')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 助動詞クイズ</span>
            <p class="font-medium text-neutral-900">「ここはWeChat Payを使えますか？（許可）」に最もふさわしいのは？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 許可を聞くときは 可以 (kěyǐ) がぴったりです。', '不正解！ 会は訓練で習得した能力を表します。', '可以')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 可以 (kěyǐ)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 許可を聞くときは 可以 (kěyǐ) がぴったりです。', '不正解！ 会は訓練で習得した能力を表します。', '可以')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 会 (huì)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「これは辛さ控えめで」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'Zhège qǐng shǎo fàng là (这个请少放辣)', '这个请少放辣')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: C-POP Special 『简单爱』＆表現収集 -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 15 Special • C-POP & リアル表現収集
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. 名曲『简单爱』(Simple Love) で学ぶ日常会話表現
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              ジェイ・チョウ（周杰伦）の超超定番ソングから、素直な気持ちを伝える表現と形容詞の重複文法を学びましょう！
            </p>
          </div>

          <!-- C-POP 紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">简单爱 (Jiǎndān Ài)</h4>
                <p class="text-xs text-neutral-500">原唱：周杰伦 (Jay Chou)</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【楽曲コラム】</strong><br>
              中華圏の誰もが歌えるポップスの金字塔。「手を繋いで自転車に乗りたい」というピュアでシンプルな愛を歌った曲で、日常会話でそのまま使えるフレーズが満載です。
            </p>
          </div>

          <!-- 歌詞フレーズセクション -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-6">
            <div class="flex justify-between items-center border-b border-neutral-200 pb-3">
              <h4 class="text-md font-bold text-neutral-900 flex items-center space-x-2">
                <i data-lucide="mic" class="w-4 h-4 text-rose-600"></i>
                <span>名フレーズを聴いてみよう</span>
              </h4>
            </div>

            <div class="space-y-4 text-xs sm:text-sm">
              <div class="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 hover-lift transition space-y-1">
                <div class="flex justify-between items-start">
                  <span class="font-bold text-lg text-neutral-900">我想大声宣布 对你的爱依恋</span>
                  <button onclick="speak('我想大声宣布 对你的爱依恋')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Wǒ xiǎng dàshēng xuānbù, duì nǐ de ài yīliàn</p>
                <p class="text-neutral-600">大声で宣言したい、あなたへの愛と愛着を</p>
              </div>

              <div class="p-4 rounded-xl border-2 border-rose-200 bg-rose-50/30 hover-lift transition space-y-1">
                <div class="flex justify-between items-start">
                  <span class="font-bold text-lg text-rose-950">我想就这样牵着你的手不放开</span>
                  <button onclick="speak('我想就这样牵着你的手不放开')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Wǒ xiǎng jiù zhèyàng qiānzhe nǐ de shǒu bù fàngkāi</p>
                <p class="text-neutral-700 font-medium">このままあなたの手を繋いで放したくないんだ</p>
              </div>
            </div>
          </div>

          <!-- 文法解説 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-5">
            <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
              <i data-lucide="sparkles" class="w-5 h-5 text-rose-600"></i>
              <h4 class="text-lg font-bold text-neutral-900">歌詞から学べる！重要ワンフレーズ解説</h4>
            </div>

            <div class="grid gap-4 text-xs sm:text-sm">
              <div class="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1.5">
                <div class="flex items-center space-x-2">
                  <span class="bg-rose-600 text-white font-bold px-2 py-0.5 rounded text-xs">ポイント 1</span>
                  <span class="font-bold text-neutral-900">形容詞の重複「简简单单 (jiǎn jiǎn dān dān)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  「简单（シンプル）」を <code class="bg-neutral-200 px-1 rounded">AABB</code> 型に重ねることで、<strong>「気取らず、ごくごくシンプルに」</strong>というニュアンスや親しみが強調されます。
                </p>
              </div>

              <div class="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1.5">
                <div class="flex items-center space-x-2">
                  <span class="bg-rose-600 text-white font-bold px-2 py-0.5 rounded text-xs">ポイント 2</span>
                  <span class="font-bold text-neutral-900">動作の持続「着 (zhe)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <code class="bg-neutral-200 px-1 rounded">牵着你的手</code>＝「手を繋いだままでいる」。動詞＋<code class="bg-neutral-200 px-1 rounded">着</code> で動作や状態が継続していることを表します。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
