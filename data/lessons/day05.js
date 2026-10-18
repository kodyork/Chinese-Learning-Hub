const day05Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 05 Focus: Shopping, Bargaining, Large Numbers & "太...了"</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 05: ショッピング・試着・交渉 ＆ 桁の大きい数字・「太...了」
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">
                To ask if you can try something on, use "可以...吗?". Express "too expensive" with "太贵了!". Master large numbers (百/千/万) and cashless payment phrases.
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：買い物表現・「太...了」・キャッシュレス文化</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 試着・許可を尋ねる：「可以...吗？（〜しても良いですか？）」</h4>
              <p class="text-neutral-600">
                英語の "Can I...?" にあたるのが<strong>「可以 (kěyǐ) ... 吗？」</strong>です。「可以试一下吗？（kěyǐ shì yíxià ma? / 試着してもいいですか？）」のように使います。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 感情を強調する構文：「太...了！（〜すぎる！）」</h4>
              <p class="text-neutral-600">
                「太（tài）＋形容詞＋了（le）」で「〜すぎる！」という強調表現になります。「太贵了！（tài guì le! / 高すぎる！）」や「太好了！（tài hǎo le! / 最高！）」は日常会話の超頻出フレーズです。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">③ 文化的背景：完全キャッシュレス社会と支払い時のフレーズ</h4>
              <p class="text-neutral-600">
                中国では露店から高級店までほぼ100%「微信支付 (WeChat Pay)」または「支付宝 (Alipay)」のQRコード決済です。店員に「扫码（sǎomǎ / コードをスキャンする）」と言われたり、自分から「我扫你（私がスキャンします）」と伝える文化が定着しています。
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. ショッピングでの実践会話（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('你好，这件衣服可以试一下吗？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Nǐ hǎo, zhè jiàn yīfu kěyǐ shì yíxià ma?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">你好，这件衣服可以试一下吗？</p>
                <p class="text-xs text-neutral-500">（あなた）こんにちは、この服を試着してもいいですか？</p>
              </div>
            </div>

            <div onclick="speak('可以！这件三百块。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Kěyǐ! Zhè jiàn sānbǎi kuài.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">可以！这件三百块。</p>
                <p class="text-xs text-neutral-500">（店員）どうぞ！これは300元です。</p>
              </div>
            </div>

            <div onclick="speak('太贵了！可以便宜一点儿吗？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Tài guì le! Kěyǐ piányi yìdiǎnr ma?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">太贵了！可以便宜一点儿吗？</p>
                <p class="text-xs text-neutral-500">（あなた）高すぎます！少し安くしてもらえますか？</p>
              </div>
            </div>

            <div onclick="speak('好吧，两百五十块。微信支付吗？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Hǎo ba, liǎngbǎi wǔshí kuài. Wēixìn zhīfù ma?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">好吧，两百五十块。微信支付吗？</p>
                <p class="text-xs text-neutral-500">（店員）わかりました、250元でいいですよ。WeChat Payでお支払いですか？</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes (10 Questions) -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 05 実践クイズ（全10問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">10 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：許可の表現</span>
            <p class="font-medium text-neutral-900">「〜しても良いですか？」と許可を尋ねる言葉はどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 可以 (kěyǐ) は「〜してもよい（Can）」という意味です。', '不正解！ 要は「〜が欲しい」の意味です。', '可以试一下吗')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 可以 (kěyǐ)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 可以 (kěyǐ) は「〜してもよい（Can）」という意味です。', '不正解！ 要は「〜が欲しい」の意味です。', '可以试一下吗')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 要 (yào)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 選択問題：値段の評価</span>
            <p class="font-medium text-neutral-900">「高すぎる！」と言う時の表現はどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(2, 0, 0, '正解！ 太贵了 (tài guì le) で「高すぎる！」となります。', '不正解！ 太便宜了は「安すぎる！」です。', '太贵了')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 太贵了！ (Tài guì le!)</button>
              <button onclick="checkQuiz(2, 1, 0, '正解！ 太贵了 (tài guì le) で「高すぎる！」となります。', '不正解！ 太便宜了は「安すぎる！」です。', '太贵了')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 太便宜了！ (Tài piányi le!)</button>
            </div>
            <div id="q2-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. 選択問題：安くしてもらう</span>
            <p class="font-medium text-neutral-900">「安くする」を意味する動詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(3, 0, 0, '正解！ 便宜 (piányi) で「安い/安くする」となります。', '不正解！ 贵は「高い」の意味です。', '便宜一点儿')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 便宜 (piányi)</button>
              <button onclick="checkQuiz(3, 1, 0, '正解！ 便宜 (piányi) で「安い/安くする」となります。', '不正解！ 贵は「高い」の意味です。', '便宜一点儿')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 贵 (guì)</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 穴押し問題：百の単位</span>
            <p class="font-medium text-neutral-900">「300（三〜）」の「百（Hundred）」にあたる単語は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Sān</span>
              <span onclick="revealAnswer(4, 'bǎi (百)', '百')" id="q4-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>kuài.</span>
            </div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 穴押し問題：試着</span>
            <p class="font-medium text-neutral-900">「試す/試着する」を表す動詞「试」を使った「ちょっと試す」は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Kěyǐ</span>
              <span onclick="revealAnswer(5, 'shì yíxià (试一下)', '试一下')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>ma?</span>
            </div>
          </div>

          <!-- Q6 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q6. 穴押し問題：少し・ちょっと</span>
            <p class="font-medium text-neutral-900">「少し安くする」の「少し・ちょっと」にあたる表現は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Piányi</span>
              <span onclick="revealAnswer(6, 'yìdiǎnr (一点儿)', '一点儿')" id="q6-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>ma?</span>
            </div>
          </div>

          <!-- Q7 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q7. タイピングテスト：服</span>
            <p class="font-medium text-neutral-900">「服・衣類（yīfu）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q7-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(7, ['衣服'], '衣服')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q7-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q8 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q8. タイピングテスト：WeChat Pay</span>
            <p class="font-medium text-neutral-900">「WeChat Pay（Wēixìn zhīfù）」の漢字「微信」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q8-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(8, ['微信'], '微信')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q8-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q9 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q9. 文化クイズ：二大決済アプリ</span>
            <p class="font-medium text-neutral-900">中国でWeChat Pay（微信）と並ぶもう一つの二大モバイル決済サービスは？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(9, 0, 0, '正解！ 支付宝 (Alipay) は中国の二大決済インフラです。', '不正解！ PayPayは日本のサービスです。')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 支付宝 (Alipay)</button>
              <button onclick="checkQuiz(9, 1, 0, '正解！ 支付宝 (Alipay) は中国の二大決済インフラです。', '不正解！ PayPayは日本のサービスです。')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. PayPay</button>
            </div>
            <div id="q9-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q10 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q10. 総合復習：値引き交渉</span>
            <p class="font-medium text-neutral-900">「高すぎます！もう少し安くできますか？」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(10, 'Tài guì le! Kěyǐ piányi yìdiǎnr ma? (太贵了！可以便宜一点儿吗？)', '太贵了可以便宜一点儿吗')" id="q10-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>

        </section>
      </main>
    `;
  }
};
