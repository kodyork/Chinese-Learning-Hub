const day03Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 03 Focus: Customizing Drinks, Asking Prices & Neutral Tone</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 03: カフェでカスタマイズ注文 ＆ 価格の尋ね方・軽声
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">
                Learn size specifications ("大杯" = Large), adjustments ("不加糖" = No sugar), and asking "How much?" ("多少钱?"). Master the light "neutral tone" used in conversational Chinese.
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：サイズ・カスタマイズ・軽声・「不」の変調</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① サイズとカスタム表現：「大杯」「不加糖」</h4>
              <p class="text-neutral-600">
                中国のカフェではサイズを「大杯（dàbēi / Lサイズ）」「中杯（zhōngbēi / Mサイズ）」で指定します。また、「加（jiā / 入れる）」や「不加（bù jiā / 入れない）」を使って、「不加糖（bù jiā táng / 砂糖抜き）」のように細かくカスタマイズできます。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 発音の知識：「不 (bù)」の変調ルール</h4>
              <p class="text-neutral-600">
                「不（bù）」は本来第四声（高いところから落とす音）ですが、<strong>後ろに第四声の言葉が続く時だけ「第二声（bú / 上がる音）」に変化</strong>します！<br>
                例：「不要（bú yào / いらない）」、「不是（bú shì / 〜ではない）」。言葉の繋がりをなめらかにする中国語ならではの知恵です。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">③ 文化的背景：中国ドリンク文化の「微糖・無糖・去冰」細分化</h4>
              <p class="text-neutral-600">
                現代の中国のティースタンドやカフェでは、アプリ注文や店頭問わず「甘さ（糖度）」と「氷の量」を自分で選ぶのが当たり前です。「微糖（wēitáng / 控えめ）」「去冰（qùbīng / 氷抜き）」などの単語を知っておくと、一気にネイティブらしい頼み方ができます。
              </p>
            </div>
          </div>

          <!-- Tone Cards (Neutral Tone & "Bu" Sandhi) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm hover-lift cursor-pointer">
              <div class="flex justify-between items-start mb-3">
                <span class="text-xs font-semibold px-2.5 py-1 bg-rose-50 text-rose-700 rounded-full border border-rose-100">軽声 (Neutral Tone)</span>
                <span class="text-3xl font-black text-neutral-900">•</span>
              </div>
              <h4 class="font-bold text-neutral-900 text-lg mb-1">トーンをかけず、軽ーく添える音</h4>
              <p class="text-xs text-neutral-500 mb-5">語尾の「吗 (ma)」や「谢谢 (xièxie)」の2文字目のように軽く添えます。</p>
              <button onclick="speak('谢谢')" class="w-full bg-neutral-900 hover:bg-rose-600 text-white font-medium py-2.5 px-4 rounded-lg text-xs flex items-center justify-center space-x-2 transition shadow-sm cursor-pointer">
                <i data-lucide="play-circle" class="w-4 h-4"></i><span>音声を聞く: <strong>xièxie</strong> (謝謝/ありがとう)</span>
              </button>
            </div>

            <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm hover-lift cursor-pointer">
              <div class="flex justify-between items-start mb-3">
                <span class="text-xs font-semibold px-2.5 py-1 bg-neutral-100 text-neutral-800 rounded-full border border-neutral-200">「不」の変調 (bù → bú)</span>
                <span class="text-3xl font-black text-neutral-900">bú</span>
              </div>
              <h4 class="font-bold text-neutral-900 text-lg mb-1">4声の前では2声（上がる音）に変化</h4>
              <p class="text-xs text-neutral-500 mb-5">「不要 (bú yào)」のように「ブー」と語調を上げて発音します。</p>
              <button onclick="speak('不要')" class="w-full bg-neutral-900 hover:bg-rose-600 text-white font-medium py-2.5 px-4 rounded-lg text-xs flex items-center justify-center space-x-2 transition shadow-sm cursor-pointer">
                <i data-lucide="play-circle" class="w-4 h-4"></i><span>音声を聞く: <strong>bú yào</strong> (不要/要りません)</span>
              </button>
            </div>
          </div>
        </section>

        <!-- Section 2: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. カフェでの応用注文やり取り（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('我要一杯大杯美式，不加糖。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Wǒ yào yì bēi dàbēi Měishì, bù jiā táng.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">我要一杯大杯美式，不加糖。</p>
                <p class="text-xs text-neutral-500">（あなた）アメリカンコーヒーのLサイズを1杯、砂糖抜きでください。</p>
              </div>
            </div>

            <div onclick="speak('好的。请问，一共多少钱？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Hǎo de. Qǐngwèn, yígòng duōshao qián?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">好的。请问，一共多少钱？</p>
                <p class="text-xs text-neutral-500">（あなた）分かりました。すみません、全部でいくらですか？</p>
              </div>
            </div>

            <div onclick="speak('一共二十五块。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Yígòng èrshíwǔ kuài.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">一共二十五块。</p>
                <p class="text-xs text-neutral-500">（店員）全部で25元（kuài）になります。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes (10 Questions) -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 03 実践クイズ（全10問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">10 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：値段を尋ねる</span>
            <p class="font-medium text-neutral-900">「いくらですか？」と尋ねる正しい中国語表現はどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 多少钱 (duōshao qián) で「いくらですか？」となります。', '不正解！ 什么是は「何ですか？」の意味です。', '多少钱')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 多少钱？ (Duōshao qián?)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 多少钱 (duōshao qián) で「いくらですか？」となります。', '不正解！ 什么是は「何ですか？」の意味です。', '多少钱')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 什么是？ (Shénme shì?)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 選択問題：サイズの言い方</span>
            <p class="font-medium text-neutral-900">「Lサイズ（大サイズ）」のカップを表す中国語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(2, 0, 0, '正解！ 大杯 (dàbēi) はLサイズです。', '不正解！ 中杯はMサイズです。', '大杯')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 大杯 (dàbēi)</button>
              <button onclick="checkQuiz(2, 1, 0, '正解！ 大杯 (dàbēi) はLサイズです。', '不正解！ 中杯はMサイズです。', '大杯')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 中杯 (zhōngbēi)</button>
            </div>
            <div id="q2-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. 選択問題：「不」の変調</span>
            <p class="font-medium text-neutral-900">「要りません（不要）」と言う時、「不 (bù)」のトーンはどう変化する？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(3, 0, 0, '正解！ 後ろが4声（要）なので「不」は2声（bú）に上がります。', '不正解！ 4声の前では2声（上がる音）に化けます。', '不要')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 第二声（bú）と上がる音になる</button>
              <button onclick="checkQuiz(3, 1, 0, '正解！ 後ろが4声（要）なので「不」は2声（bú）に上がります。', '不正解！ 4声の前では2声（上がる音）に化けます。', '不要')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 第一声（bū）と平らな音になる</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 穴押し問題：砂糖抜き</span>
            <p class="font-medium text-neutral-900">「砂糖を入れない（砂糖抜き）」を意味する中国語は？（タップで答え表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Wǒ yào Měishì,</span>
              <span onclick="revealAnswer(4, 'bù jiā táng (不加糖)', '不加糖')" id="q4-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>.</span>
            </div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 穴押し問題：合計・全部で</span>
            <p class="font-medium text-neutral-900">会計時の「全部で〜」にあたる「一共」は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'yígòng (一共)', '一共')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>duōshao qián?</span>
            </div>
          </div>

          <!-- Q6 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q6. 穴押し問題：お金の単位</span>
            <p class="font-medium text-neutral-900">中国の会話でよく使われるお金の単位「〜元（元＝塊）」は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Yígòng èrshíwǔ</span>
              <span onclick="revealAnswer(6, 'kuài (块)', '块')" id="q6-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>.</span>
            </div>
          </div>

          <!-- Q7 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q7. タイピングテスト：アメリカンコーヒー</span>
            <p class="font-medium text-neutral-900">「アメリカンコーヒー（Měishì）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q7-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(7, ['美式'], '美式')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q7-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q8 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q8. タイピングテスト：お尋ねします</span>
            <p class="font-medium text-neutral-900">丁寧にいざ質問する時の「すみません/お尋ねします（qǐngwèn）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q8-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(8, ['请问', '請問'], '请问')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q8-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q9 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q9. 文化クイズ：甘さカスタマイズ</span>
            <p class="font-medium text-neutral-900">「甘さひかえめ（微糖）」を希望する時の中国語表現はどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(9, 0, 0, '正解！ 微糖 (wēitáng) で「甘さ控えめ」になります。', '不正解！ 無糖は「まったく砂糖を入れない」です。', '微糖')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 微糖 (wēitáng)</button>
              <button onclick="checkQuiz(9, 1, 0, '正解！ 微糖 (wēitáng) で「甘さ控えめ」になります。', '不正解！ 無糖は「まったく砂糖を入れない」です。', '微糖')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 无糖 (wútáng)</button>
            </div>
            <div id="q9-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q10 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q10. 総合復習：注文フレーズ</span>
            <p class="font-medium text-neutral-900">「Lサイズのアメリカンを1杯ください」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(10, 'Wǒ yào yì bēi dàbēi Měishì. (我要一杯大杯美式。)', '我要一杯大杯美式')" id="q10-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>

        </section>
      </main>
    `;
  }
};
