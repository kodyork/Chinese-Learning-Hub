const day20Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="help-circle" class="w-3.5 h-3.5"></i>
            <span>Day 20 Focus: Hypotheses, Advice & Preferences</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 20: 仮定・相談 ＆ 如果…就… / 最好 / 可不可以
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">
                Learn how to form conditional sentences with "如果...就..." (if... then...), give recommendations using "最好" (had better), and ask permission gently.
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：相談・アドバイス「如果…就…」「最好」</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 仮定を表す構文：「如果 + 条件 + 就 + 帰結」（rúguǒ... jiù...）</h4>
              <p class="text-neutral-600">
                <strong>「もし〜ならば、…する」</strong>という最も基本的かつ便利な仮定文の組み合わせです。<br>
                ・例：<code>如果明天下雨，我就不出门。(Rúguǒ míngtiān xiàyǔ, wǒ jiù bù chūmén.)</code>＝明日雨が降ったら、僕は出かけません。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② アドバイスを送る：「最好 + 動詞」（zuìhǎo）</h4>
              <p class="text-neutral-600">
                相手に助言や提案をするときに使い、<strong>「〜した方がいい / 〜するのが一番だ」</strong>という意味になります。<br>
                ・例：<code>你最好多喝水。(Nǐ zuìhǎo duō hē shuǐ.)</code>＝お水をたくさん飲んだ方がいいですよ。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">③ やんわりと許可・打診を聞く：「可不可以……」（kě bu kěyǐ...）</h4>
              <p class="text-neutral-600">
                肯定と否定を並べた反復疑問の形で、<strong>「〜してもいいですか？/ 〜できますか？」</strong>と優しく伺いを立てます。
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
            
            <div onclick="speak('如果有不懂的地方，你可以问我。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Rúguǒ yǒu bù dǒng de dìfang, nǐ kěyǐ wèn wǒ.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">如果有不懂的地方，你可以问我。</p>
                <p class="text-xs text-neutral-500">もし分からないところがあったら、私に聞いてもいいですよ。</p>
              </div>
            </div>

            <div onclick="speak('外面有点儿冷，你最好带上一件外套。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Wàimian yǒudiǎnr lěng, nǐ zuìhǎo dài shàng yí jiàn wàitào.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">外面有点儿冷，你最好带上一件外套。</p>
                <p class="text-xs text-neutral-500">外は少し寒いから、上着を一枚持っていった方がいいよ。</p>
              </div>
            </div>

            <div onclick="speak('请问，我可不可以坐在这里？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Qǐngwèn, wǒ kě bu kěyǐ zuò zài zhèlǐ?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">请问，我可不可以坐在这里？</p>
                <p class="text-xs text-neutral-500">すみません、ここに座ってもよろしいですか？</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 20 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：もし〜なら</span>
            <p class="font-medium text-neutral-900">「もし〜ならば」を表す仮定接続詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 如果 (rúguǒ) は仮定を表す代表的接続詞です。', '不正解！ 虽然は「〜だけれども」という逆接を表します。', '如果')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 如果 (rúguǒ)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 如果 (rúguǒ) は仮定を表す代表的接続詞です。', '不正解！ 虽然は「〜だけれども」という逆接を表します。', '如果')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 虽然 (suīrán)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴押し問題：アドバイス</span>
            <p class="font-medium text-neutral-900">「〜した方がいい（最好）」の単語は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Nǐ</span>
              <span onclick="revealAnswer(2, 'zuìhǎo (最好)', '最好')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>duō xiūxi.</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：外・屋外</span>
            <p class="font-medium text-neutral-900">「外（wàimian）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(3, ['外面'], '外面')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 仮定のセットクイズ</span>
            <p class="font-medium text-neutral-900">「如果〜」とペアでよく使われる副詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 「如果〜就…」のペアで用いられます。', '不正解！ 也は「〜も」という意味です。', '就')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 就 (jiù)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 「如果〜就…」のペアで用いられます。', '不正解！ 也は「〜も」という意味です。', '就')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 也 (yě)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「ここに座ってもよろしいですか？」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'Wǒ kě bu kěyǐ zuò zài zhèlǐ? (我可不可以坐在这里？)', '我可不可以坐在这里')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: C-POP Special 『可不可以』＆表現収集 -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 20 Special • C-POP & リアル表現収集
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. TikTok超人気曲『可不可以』(Can We Be Together) で学ぶ反復疑問文
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              若者の間で大ブームとなった切ない恋愛ソングから、気持ちを素直に伝える反復疑問フレーズを学びます！
            </p>
          </div>

          <!-- C-POP 紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">可不可以 (Kě Bù Kěyǐ)</h4>
                <p class="text-xs text-neutral-500">原唱：张紫豪 (Zhang Zihao)</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【楽曲コラム】</strong><br>
              「もう一度僕と一緒にいてくれないか」とまっすぐに問いかけるサビが印象的な一曲。ストレートな感情表現がそのまま日常のフレーズ学習に繋がります。
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
                  <span class="font-bold text-lg text-neutral-900">可不可以和你在一起 陪你走过漫长岁月</span>
                  <button onclick="speak('可不可以和你在一起 陪你走过漫长岁月')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Kě bu kěyǐ hé nǐ zài yìqǐ, péi nǐ zǒuguò màncháng suìyuè</p>
                <p class="text-neutral-600">君と一緒にいられないかな、長い歳月を寄り添って歩みたいんだ</p>
              </div>

              <div class="p-4 rounded-xl border-2 border-rose-200 bg-rose-50/30 hover-lift transition space-y-1">
                <div class="flex justify-between items-start">
                  <span class="font-bold text-lg text-rose-950">可不可以和你在一起 把余生都交给你</span>
                  <button onclick="speak('可不可以和你在一起 把余生都交给你')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Kě bu kěyǐ hé nǐ zài yìqǐ, bǎ yúshēng dōu jiāo gěi nǐ</p>
                <p class="text-neutral-700 font-medium">君と一緒にいられないかな、残りの人生をすべて君に預けたいんだ</p>
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
                  <span class="font-bold text-neutral-900">反復疑問文「可不可以 (kě bu kěyǐ)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  「`可以 + 不 + 可以`」のように肯定と否定を繋げた疑問形式で、<strong>「〜してもよいですか？」</strong>と柔らかくアプローチします。
                </p>
              </div>

              <div class="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1.5">
                <div class="flex items-center space-x-2">
                  <span class="bg-rose-600 text-white font-bold px-2 py-0.5 rounded text-xs">ポイント 2</span>
                  <span class="font-bold text-neutral-900">処置文「把……交给…… (bǎ... jiāogěi...)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  `把` 構文で目的語（余生）を前に出し、<strong>「〜を…に手渡す・預ける」</strong>という処置の結果を表します。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
