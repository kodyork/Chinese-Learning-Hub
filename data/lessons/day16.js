const day16Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
            <span>Day 16 Focus: Shopping, Bargaining & Comparisons</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 16: 買い物・値段交渉 ＆ 太…了 / 比較詞「比」の基礎
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">
                Learn how to ask prices, negotiate discounts, use "太...了" (too...), and form basic comparison sentences with "比" (bǐ).
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：買い物表現 ＆ 「太…了」「比」</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 「〜すぎる」：太 + 形容詞 + 了（tài... le）</h4>
              <p class="text-neutral-600">
                程度が極端であることを表します。<br>
                ・例：<code>太贵了！(Tài guì le!)</code>＝高すぎます！<br>
                ・例：<code>太好了！(Tài hǎo le!)</code>＝最高です！/ よかった！
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 値段の聞き方とまけさせ方</h4>
              <p class="text-neutral-600">
                ・<strong>这个多少钱？(Zhège duōshao qián?)</strong>＝これはいくらですか？<br>
                ・<strong>便宜一点儿吧！(Piányi yìdiǎnr ba!)</strong>＝安くしてください！/ まけてください！
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">③ 比較構文：「A 比 B + 形容詞」（A bǐ B ...）</h4>
              <p class="text-neutral-600">
                <strong>「AはBより〜だ」</strong>という比較の基本構文です。<br>
                ・例：<code>这个比那个便宜。(Zhège bǐ nàge piányi.)</code>＝これはあれより安い。
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
            
            <div onclick="speak('老板，这个多少钱？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Lǎobǎn, zhège duōshao qián?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">老板，这个多少钱？</p>
                <p class="text-xs text-neutral-500">店主さん、これいくらですか？</p>
              </div>
            </div>

            <div onclick="speak('太贵了！能不能便宜一点儿？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Tài guì le! Néng bu néng piányi yìdiǎnr?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">太贵了！能不能便宜一点儿？</p>
                <p class="text-xs text-neutral-500">高すぎます！少し安くしてもらえますか？</p>
              </div>
            </div>

            <div onclick="speak('这个比那个更适合你。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Zhège bǐ nàge gèng shìhé nǐ.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">这个比那个更适合你。</p>
                <p class="text-xs text-neutral-500">（店員）こちらのほうがあちらよりお客様にお似合いですよ。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 16 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：高すぎる！</span>
            <p class="font-medium text-neutral-900">「高すぎます！（太贵了）」の正しい表現は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 太贵了 (tài guì le) です。', '不正解！ 很贵了とは組み合わせません。', '太贵了')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 太贵了 (tài guì le)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 太贵了 (tài guì le) です。', '不正解！ 很贵了とは組み合わせません。', '太贵了')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 很贵了 (hěn guì le)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴押し問題：いくらですか</span>
            <p class="font-medium text-neutral-900">「いくらですか（多少钱）」の「多少（duōshao）」は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Zhège</span>
              <span onclick="revealAnswer(2, 'duōshao (多少)', '多少')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>qián?</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：安い</span>
            <p class="font-medium text-neutral-900">「安い（piányi）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(3, ['便宜'], '便宜')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 比較構文クイズ</span>
            <p class="font-medium text-neutral-900">「これはあれより安い」の正しい語順は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 「A 比 B + 形容詞」の順になります。', '不正解！ 比較詞の比はBの前に置きます。', '这个比那个便宜')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 这个比那个便宜 (Zhège bǐ nàge piányi)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 「A 比 B + 形容詞」の順になります。', '不正解！ 比較詞の比はBの前に置きます。', '这个比那个便宜')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 这个那个比便宜 (Zhège nàge bǐ piányi)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「安くしてください！」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'Piányi yìdiǎnr ba! (便宜一点儿吧！)', '便宜一点儿吧')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: C-POP Special 『告白气球』＆表現収集 -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 16 Special • C-POP & リアル表現収集
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. 大ヒットメガ曲『告白气球』(Love Confession) で学ぶ胸キュンフレーズ
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              世界中で再生されたジェイ・チョウの甘いロマンチックソングから、感情表現と動詞句をコレクションしましょう！
            </p>
          </div>

          <!-- C-POP 紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">告白气球 (Gàobái Qìqiú)</h4>
                <p class="text-xs text-neutral-500">原唱：周杰伦 (Jay Chou)</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【楽曲コラム】</strong><br>
              パリのカフェやセーヌ川の風景をバックに恋のロマンを歌った超人気曲。「告白（プロポーズ）」の場面で中華圏では定番のBGMです。
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
                  <span class="font-bold text-lg text-neutral-900">亲爱的 爱上你 从那天起 甜蜜的很轻易</span>
                  <button onclick="speak('亲爱的 爱上你 从那天起 甜蜜的很轻易')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Qīn'ài de, àishàng nǐ, cóng nà tiān qǐ, tiánmì de hěn qīngyì</p>
                <p class="text-neutral-600">愛しい人よ、あなたを好きになったあの日から、とても簡単に甘い気持ちになれるんだ</p>
              </div>

              <div class="p-4 rounded-xl border-2 border-rose-200 bg-rose-50/30 hover-lift transition space-y-1">
                <div class="flex justify-between items-start">
                  <span class="font-bold text-lg text-rose-950">你说你想要个礼物 预告气球吹向对街</span>
                  <button onclick="speak('你说你想要个礼物 预告气球吹向对街')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Nǐ shuō nǐ xiǎng yào gè lǐwù, yùgào qìqiú chuī xiàng duìjiē</p>
                <p class="text-neutral-700 font-medium">プレゼントが欲しいって君が言うから、バルーンが向かいの通りへ飛んでいくよ</p>
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
                  <span class="font-bold text-neutral-900">起点・開始「从……起 (cóng... qǐ)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <strong>「〜から、〜以来」</strong>という意味を表します。日常でも <code>从现在起 (cóng xiànzài qǐ = 今から)</code> などの形でよく使います。
                </p>
              </div>

              <div class="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1.5">
                <div class="flex items-center space-x-2">
                  <span class="bg-rose-600 text-white font-bold px-2 py-0.5 rounded text-xs">ポイント 2</span>
                  <span class="font-bold text-neutral-900">結果補語「爱上 (àishàng)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  動詞 `爱` に結果補語 `上` がつくことで、<strong>「〜を好きになる、恋に落ちる」</strong>という状態の変化・到達を表します。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
