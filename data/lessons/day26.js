const day26Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 26 Advanced Masterclass (Week 4)</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 26: 比較・比例の発展表現（越…越… / 越来越…） ＆ 陳奕迅『十年』
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">B1-B2 Bridge & Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                「〜すればするほど…（越…越…）」や「日増しに〜になる（越来越…）」といった、時間や条件に伴うグラデーション豊かな変化の表現をマスターします。
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
            <button onclick="setSpeed(0.85)" id="speed-085" class="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-900 bg-neutral-900 text-white font-medium transition cursor-pointer">0.85x (Slow)</button>
            <button onclick="setSpeed(1.0)" id="speed-100" class="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-900 font-medium transition cursor-pointer">1.0x (Normal)</button>
          </div>
        </div>

        <!-- Section 1: Detailed Explanations & Culture -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：比較と比例・変化の構文パターン</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 「越…越…（〜すればするほど…だ）」</h4>
              <p class="text-neutral-600">
                一方の条件の度合いが増すにつれて、もう一方の程度も比例して増すことを表します。<br>
                ・<code class="bg-neutral-100 px-1 rounded">中文越学越有意思。</code>（中国語は学べば学ぶほど面白くなる）<br>
                ・<code class="bg-neutral-100 px-1 rounded">雨越下越大。</code>（雨は降れば降るほど強くなる）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② B2応用：「越来越…（益々〜になる）」と否定比較「没有…那么…」</h4>
              <p class="text-neutral-600">
                ・<code class="bg-neutral-100 px-1 rounded">越来越…</code>：時間の経過とともに程度が増す表現（例：<code class="bg-neutral-100 px-1 rounded">天气越来越冷了。</code> ＝ 天気がだんだん寒くなってきた）。<br>
                ・<code class="bg-neutral-100 px-1 rounded">没有…那么…</code>：控えめな比較否定（例：<code class="bg-neutral-100 px-1 rounded">事情没有你想的那么复杂。</code> ＝ 事態はあなたが思うほど複雑ではない）。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-rose-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 豆知識：月日の変化と感情の蓄積</h4>
              <p class="text-neutral-600">
                「越…越…」や「越来越…」は、時の経過に伴う感情の変化や関係性の深まりを描写するのに欠かせません。C-POPでも、愛や友情、成熟のプロセスを歌うサビで愛される構文です。
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
            
            <div onclick="speak('练习得越多，说得就越流利。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">练习得越多，说得就越流利。</span>
                <p class="text-xs text-neutral-500 mt-1">練習すればするほど、話すのが流暢になります。（越…越… ＝ 〜すればするほど…）</p>
              </div>
            </div>

            <div onclick="speak('离开家乡以后，我越来越想念父母了。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">离开家乡以后，我越来越想念父母了。</span>
                <p class="text-xs text-neutral-500 mt-1">故郷を離れてから、私は益々ご両親が恋しくなりました。（越来越… ＝ 益々〜になる）</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 26 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：〜すればするほど…</span>
            <p class="font-medium text-neutral-900">「〜すればするほど、益々…だ」を表す正しい構文ペアは？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '太棒了！ 越…越… が正解です。', '不正解！ 越来越… は単独で「益々〜になる」を表します。', '越…越…')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 越…越…</button>
              <button onclick="checkQuiz(1, 1, 0, '太棒了！ 越…越… が正解です。', '不正解！ 越来越… は単独で「益々〜になる」を表します。', '越…越…')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 越来越…</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：時間的経過</span>
            <p class="font-medium text-neutral-900">「だんだん寒くなってきた（天气越[ ]越冷了）」の空欄に入る漢字は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>天气越</span>
              <span onclick="revealAnswer(2, '来 (lái)', '来')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>越冷了</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：恋しく思う</span>
            <p class="font-medium text-neutral-900">「恋しく思う・思い焦がれる（想念）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-64 bg-white">
              <button onclick="checkInput(3, ['想念'], '想念')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 選択問題：流暢である</span>
            <p class="font-medium text-neutral-900">中国語で「（言葉が）ペラペラだ・流暢だ」を意味する形容詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '太棒了！ 流利 が正解です。', '不正解！ 复杂 は「複雑だ」です。', '流利')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 流利</button>
              <button onclick="checkQuiz(4, 1, 0, '太棒了！ 流利 が正解です。', '不正解！ 复杂 は「複雑だ」です。', '流利')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 复杂</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「故郷を離れてから、私は益々ご両親が恋しくなりました」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '离开家乡以后，我越来越想念父母了。', '离开家乡以后，我越来越想念父母了。')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: C-Pop & Chinese Culture Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 26 Special • Masterpiece of Time & Love
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. 陳奕迅（Eason Chan）『十年』にみる歳月の重み
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              中華圏の歌神（God of Songs）が歌う不朽の名曲から、時間の経過と感情の深まりを学ぼう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">十年 (Ten Years - Eason Chan / 陳奕迅)</h4>
                <p class="text-xs text-neutral-500">Legendary Mandopop Classic</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【音楽文化コラム：『十年』と人生の叙事詩】</strong><br>
              「10年前は知り合いですらなかった僕らが、10年後にはまたただの友人へ戻っていく」という人生の切なさを淡々と、しかし深く歌い上げた珠玉のバラード。歳月の変化を描く比較表現や時間のフレーズが心を揺さぶります。
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
              <div class="p-4 rounded-xl border-2 border-rose-200 bg-rose-50/30 hover-lift transition space-y-1">
                <div class="flex justify-between items-start">
                  <span class="font-bold text-lg text-rose-950">十年之前，我不认识你，你不属于我</span>
                  <button onclick="speak('十年之前，我不认识你，你不属于我')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">10年前、僕は君を知らなかったし、君も僕のものではなかった</p>
              </div>
            </div>
          </div>

          <!-- 文法解説 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-5">
            <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
              <i data-lucide="sparkles" class="w-5 h-5 text-rose-600"></i>
              <h4 class="text-lg font-bold text-neutral-900">歌から学べる！重要表現解説</h4>
            </div>

            <div class="grid gap-4 text-xs sm:text-sm">
              <div class="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1.5">
                <div class="flex items-center space-x-2">
                  <span class="bg-rose-600 text-white font-bold px-2 py-0.5 rounded text-xs">ポイント 1</span>
                  <span class="font-bold text-neutral-900">所属・帰属を表す動詞「属于 (shǔyú / 〜に属する)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <code class="bg-neutral-200 px-1 rounded">属于</code> は、「〜のものである / 〜のグループに属する」という意味で、人間関係や情愛の結びつきを表す際によく用いられます。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
