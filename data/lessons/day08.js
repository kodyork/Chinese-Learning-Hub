const day08Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 08 Focus: Hotel Check-in, Reservation & "要...了"</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 08: ホテルでのチェックイン ＆ 予約確認・「要...了」
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">
                Learn hotel check-in phrases like "我预订了房间" (I reserved a room) and showing passport "护照" (hùzhào). Master "要...了" for imminent actions.
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：ホテルのチェックイン・パスポート・「要...了」</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 予約を伝える：「我预订了房间（wǒ yùdìng le fángjiān）」</h4>
              <p class="text-neutral-600">
                フロントに着いたらまず「你好，我预订了房间（こんにちは、部屋を予約しています）」と言いましょう。「预订（yùdìng）」は「予約する」、「房间（fángjiān）」は「部屋」という意味です。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 身分証明提示：「护照（hùzhào / パスポート）」</h4>
              <p class="text-neutral-600">
                チェックイン時には必ずパスポートの提示を求められます。スタッフから「请给我看一下护照（Qǐng gěi wǒ kàn yíxià hùzhào / パスポートを見せてください）」と言われたらパスポートを渡します。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">③ 変化・間近を表す文法：「要...了（yào...le / もうすぐ〜する）」</h4>
              <p class="text-neutral-600">
                「要＋動詞＋了」で「もうすぐ〜する・〜しそうだ」という未来の直前行動を表します。<br>
                例：「要退房了（Yào tuìfáng le / もうすぐチェックアウトする時間だ）」。
              </p>
            </div>
          </div>

          <!-- Japanese Tips Column -->
          <div class="bg-rose-50/80 border border-rose-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-2 text-rose-800 font-bold text-base">
              <i data-lucide="lightbulb" class="w-5 h-5 text-rose-600"></i>
              <span>日本人向けTips：中国ホテルの押金（デポジット）とWi-Fiあるある</span>
            </div>
            <div class="text-xs text-neutral-700 leading-relaxed space-y-3">
              <p>
                <strong>【雑学：中国ホテルの「押金（yājīn / デポジット）」文化】</strong><br>
                中国のホテルでは、予約支払いが済んでいてもチェックイン時に保証金（押金）を電子決済（WeChat Pay/Alipay）かクレジットカードで一時預けるのが一般的です。チェックアウト時に破損・有料備品の利用がなければ即全額返金されます！
              </p>
              <p>
                <strong>【Wi-Fi接続：「密码（mìmǎ / パスワード）」】</strong><br>
                「Wi-Fi 密码是多少？（Wi-Fiのパスワードは何ですか？）」と聞けば、カードキーのケースに書いて教えてくれます。
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. ホテルでの実践会話（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('你好，我预订了房间。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Nǐ hǎo, wǒ yùdìng le fángjiān.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">你好，我预订了房间。</p>
                <p class="text-xs text-neutral-500">（あなた）こんにちは、部屋を予約しています。</p>
              </div>
            </div>

            <div onclick="speak('好的。请给我看一下护照。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Hǎo de. Qǐng gěi wǒ kàn yíxià hùzhào.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">好的。请给我看一下护照。</p>
                <p class="text-xs text-neutral-500">（スタッフ）かしこまりました。パスポートを見せていただけますか。</p>
              </div>
            </div>

            <div onclick="speak('这是我的护照。请问，Wi-Fi密码是多少？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Zhè shì wǒ de hùzhào. Qǐngwèn, Wi-Fi mìmǎ shì duōshao?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">这是我的护照。请问，Wi-Fi密码是多少？</p>
                <p class="text-xs text-neutral-500">（あなた）私のパスポートです。すみません、Wi-Fiのパスワードは何ですか？</p>
              </div>
            </div>

            <div onclick="speak('密码在房卡上面。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Mìmǎ zài fángkǎ shàngmiàn.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">密码在房卡上面。</p>
                <p class="text-xs text-neutral-500">（スタッフ）パスワードはルームカードの上に書かれています。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes (10 Questions) -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 08 実践クイズ（全10問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">10 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：予約する</span>
            <p class="font-medium text-neutral-900">「部屋を予約しました」の「予約する」にあたる単語はどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 预订 (yùdìng) で「予約する」となります。', '不正解！ 退房は「チェックアウト」の意味です。', '预订')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 预订 (yùdìng)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 预订 (yùdìng) で「予約する」となります。', '不正解！ 退房は「チェックアウト」の意味です。', '预订')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 退房 (tuìfáng)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 選択問題：パスポート</span>
            <p class="font-medium text-neutral-900">「パスポート」を意味する中国語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(2, 0, 0, '正解！ 护照 (hùzhào) はパスポートです。', '不正解！ 房卡は「ルームカード」です。', '护照')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 护照 (hùzhào)</button>
              <button onclick="checkQuiz(2, 1, 0, '正解！ 护照 (hùzhào) はパスポートです。', '不正解！ 房卡は「ルームカード」です。', '护照')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 房卡 (fángkǎ)</button>
            </div>
            <div id="q2-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. 選択問題：パスワード</span>
            <p class="font-medium text-neutral-900">「パスワード」を意味する中国語はどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(3, 0, 0, '正解！ 密码 (mìmǎ) はパスワードのことです。', '不正解！ 房间は「部屋」のことです。', '密码')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 密码 (mìmǎ)</button>
              <button onclick="checkQuiz(3, 1, 0, '正解！ 密码 (mìmǎ) はパスワードのことです。', '不正解！ 房间は「部屋」のことです。', '密码')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 房间 (fángjiān)</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 穴押し問題：部屋</span>
            <p class="font-medium text-neutral-900">「部屋（fángjiān）」にあたる漢字は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Wǒ yùdìng le</span>
              <span onclick="revealAnswer(4, 'fángjiān (房间)', '房间')" id="q4-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>.</span>
            </div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 穴押し問題：見せる</span>
            <p class="font-medium text-neutral-900">「ちょっと〜を見せる」の「見せる（kàn yíxià）」は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Qǐng gěi wǒ</span>
              <span onclick="revealAnswer(5, 'kàn yíxià (看一下)', '看一下')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>hùzhào.</span>
            </div>
          </div>

          <!-- Q6 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q6. 穴押し問題：〜の上</span>
            <p class="font-medium text-neutral-900">「ルームカードの上」の「〜の上（shàngmiàn）」は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Zài fángkǎ</span>
              <span onclick="revealAnswer(6, 'shàngmiàn (上面)', '上面')" id="q6-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>.</span>
            </div>
          </div>

          <!-- Q7 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q7. タイピングテスト：パスポート</span>
            <p class="font-medium text-neutral-900">「パスポート（hùzhào）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q7-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(7, ['护照', '護照'], '护照')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q7-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q8 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q8. タイピングテスト：予約する</span>
            <p class="font-medium text-neutral-900">「予約する（yùdìng）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q8-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(8, ['预订', '預訂'], '预订')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q8-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q9 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q9. 文化クイズ：デポジット</span>
            <p class="font-medium text-neutral-900">中国のホテルでチェックイン時に一時預ける保証金の名称は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(9, 0, 0, '正解！ 押金 (yājīn) と呼ばれる保証金制度です。', '不正解！ 押金が正解です。')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 押金 (yājīn)</button>
              <button onclick="checkQuiz(9, 1, 0, '正解！ 押金 (yājīn) と呼ばれる保証金制度です。', '不正解！ 押金が正解です。')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 礼金 (lǐjīn)</button>
            </div>
            <div id="q9-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q10 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q10. 総合復習：Wi-Fiパスワード</span>
            <p class="font-medium text-neutral-900">「すみません、Wi-Fiのパスワードは何ですか？」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(10, 'Qǐngwèn, Wi-Fi mìmǎ shì duōshao? (请问，Wi-Fi密码是多少？)', '请问WiFi密码是多少')" id="q10-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>

        </section>
      </main>
    `;
  }
};
