const day18Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="smile" class="w-3.5 h-3.5"></i>
            <span>Day 18 Focus: Expressing Feelings, Opinions & Degree</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 18: 感情・気持ちの表現 ＆ 觉得 / 有点儿 / 状態補語「得」
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">
                Learn to express your feelings and opinions using "觉得" (feel/think), "有点儿" (a bit), and state complements with "得".
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：気持ちの伝え方 ＆ 「觉得」「有点儿」「得」</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 自分の意見・感想を言う：「觉得 + 主語 + 形容詞/動詞」</h4>
              <p class="text-neutral-600">
                <strong>「〜だと思う、〜と感じる」</strong>という意味で、自分の気持ちや意見をやわらかく伝える万能動詞です。<br>
                ・例：<code>我觉得今天有点儿累。(Wǒ juéde jīntiān yǒudiǎnr lèi.)</code>＝今日は少し疲れていると感じます。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 少し不満・ネガティブな「少し」：「有点儿 + 形容詞」</h4>
              <p class="text-neutral-600">
                「（主に好ましくない状態が）ちょっと〜だ」を表します。<br>
                ・例：<code>有点儿贵 (yǒudiǎnr guì)</code>＝ちょっと高い / <code>有点儿难 (yǒudiǎnr nán)</code>＝ちょっと難しい
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">③ 状態・レベルを表す状態補語：「動詞 + 得 + 形容詞」</h4>
              <p class="text-neutral-600">
                動作の結果や状態のレベルを評価・描写します。<br>
                ・例：<code>他说得很好。(Tā shuō de hěn hǎo.)</code>＝彼は話すのがとても上手だ。
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
            
            <div onclick="speak('你觉得这首歌怎么样？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Nǐ juéde zhè shǒu gē zěnmeyàng?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">你觉得这首歌怎么样？</p>
                <p class="text-xs text-neutral-500">この曲、どう思う？</p>
              </div>
            </div>

            <div onclick="speak('我觉得非常好听，但是有点儿难唱。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Wǒ juéde fēicháng hǎotīng, dànshì yǒudiǎnr nán chàng.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">我觉得非常好听，但是有点儿难唱。</p>
                <p class="text-xs text-neutral-500">すごくいい曲だと思うけど、歌うのがちょっと難しいな。</p>
              </div>
            </div>

            <div onclick="speak('你汉语说得真好！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Nǐ Hànyǔ shuō de zhēn hǎo!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">你汉语说得真好！</p>
                <p class="text-xs text-neutral-500">中国語話すの本当にお上手ですね！</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 18 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：〜と思う</span>
            <p class="font-medium text-neutral-900">自分の気持ちや感想を述べる「〜と思う/感じる」の単語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 觉得 (juéde) で意見・感想を表します。', '不正解！ 知道は知っているという意味です。', '觉得')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 觉得 (juéde)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 觉得 (juéde) で意見・感想を表します。', '不正解！ 知道は知っているという意味です。', '觉得')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 知道 (zhīdào)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴押し問題：ちょっと疲れた</span>
            <p class="font-medium text-neutral-900">「ちょっと疲れた（有点儿累）」の「有点儿（yǒudiǎnr）」は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Wǒ juéde</span>
              <span onclick="revealAnswer(2, 'yǒudiǎnr (有点儿)', '有点儿')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>lèi.</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：状態補語の構造</span>
            <p class="font-medium text-neutral-900">「彼はとても上手に話す（他说得很好）」の状態補語をつなぐ構造詞（de）の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(3, ['得'], '得')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 有点儿 vs 一点儿 クイズ</span>
            <p class="font-medium text-neutral-900">「形容詞の前に置くネガティブな“少し”」はどちら？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 形容詞の前には 有点儿 を置きます（例：有点儿难）。', '不正解！ 一点儿は形容詞の後ろに置きます（例：便宜一点儿）。', '有点儿')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 有点儿 (yǒudiǎnr)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 形容詞の前には 有点儿 を置きます（例：有点儿难）。', '不正解！ 一点儿は形容詞の後ろに置きます（例：便宜一点儿）。', '有点儿')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 一点儿 (yìdiǎnr)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「中国語話すの本当にお上手ですね！」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'Nǐ Hànyǔ shuō de zhēn hǎo! (你汉语说得真好！)', '你汉语说得真好')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: C-POP Special 『体面』＆表現収集 -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 18 Special • C-POP & リアル表現収集
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. 大ヒット映画主題歌『体面』(Decency) で学ぶ禁止表現「别」
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              大ヒット映画『前任3』の挿入歌として空前のブームを起こした失恋名曲から、成熟した大人の気持ち表現を学びます。
            </p>
          </div>

          <!-- C-POP 紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">体面 (Tǐmiàn)</h4>
                <p class="text-xs text-neutral-500">原唱：于文文 (Kelly Yu)</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【楽曲コラム】</strong><br>
              「お互いに傷つけ合うことなく、気高く誇り高く別れよう」という切なくも前向きな旅立ちを歌った大ヒット曲。カラオケランキングでも常に上位をキープしているC-POP定番曲です。
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
                  <span class="font-bold text-lg text-neutral-900">分手应该体面 谁都不用说抱歉</span>
                  <button onclick="speak('分手应该体面 谁都不用说抱歉')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Fēnshǒu yīnggāi tǐmiàn, shéi dōu búyòng shuō bàoqiàn</p>
                <p class="text-neutral-600">別れは誇り高くあるべき、誰もごめんねなんて言う必要はない</p>
              </div>

              <div class="p-4 rounded-xl border-2 border-rose-200 bg-rose-50/30 hover-lift transition space-y-1">
                <div class="flex justify-between items-start">
                  <span class="font-bold text-lg text-rose-950">别堆砌怀念让剧情 变得纠缠</span>
                  <button onclick="speak('别堆砌怀念让剧情 变得纠缠')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Bié duīqì huáiniàn ràng jùqíng biàn de jiūchán</p>
                <p class="text-neutral-700 font-medium">思い出を重ねて物語をもつれさせないでほしい</p>
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
                  <span class="font-bold text-neutral-900">禁止表現「别…… (bié...)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  `不要` と同じく<strong>「〜するな、〜しないで」</strong>という禁止を表す会話の必須単語です（例：<code>别担心 = 心配しないで</code>）。
                </p>
              </div>

              <div class="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1.5">
                <div class="flex items-center space-x-2">
                  <span class="bg-rose-600 text-white font-bold px-2 py-0.5 rounded text-xs">ポイント 2</span>
                  <span class="font-bold text-neutral-900">変化の動詞「变得…… (biàn de...)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <strong>「〜に変わる、〜という状態になる」</strong>という意味で、様子や状況の変化を生き生きと描きます。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
