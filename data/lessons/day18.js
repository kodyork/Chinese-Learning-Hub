const day18Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 18 Advanced Masterclass</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 18: 受動構文（被）と使役構文（让/叫） ＆ 光良『童话』に学ぶ感動の表現
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">B1-B2 Bridge & Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                「〜される（被）」と「〜させる（让/叫）」の文構造の違い、さらに心理的変化を起こさせる使役表現と名曲『童話』の世界観をマスターします。
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：受動句（被）と使役句（让/叫）の文法構造</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 被構文（〜によって…される）</h4>
              <p class="text-neutral-600">
                基本語順：<code class="bg-neutral-100 px-1 rounded">主語（被害者・影響を受けた側） + 被 + 動作主 + 動詞 + その他</code><br>
                ・<code class="bg-neutral-100 px-1 rounded">我的手机被他拿走了。</code>（私のスマホは彼に持って行かれた）<br>
                ※口語では「被」の後の動作主（他）を省略して、<code class="bg-neutral-100 px-1 rounded">我的手机被拿走了。</code> と言うことも可能です。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② B2応用：让 / 叫 構文（〜に…させる・〜に…してもらう）</h4>
              <p class="text-neutral-600">
                基本語順：<code class="bg-neutral-100 px-1 rounded">主語 + 让/叫 + 対象 + 動詞</code><br>
                ・<code class="bg-neutral-100 px-1 rounded">让</code>：許可や誘導（〜させる、〜してもらう、〜させておく）<br>
                ・<code class="bg-neutral-100 px-1 rounded">叫</code>：指示や要求（〜するように命じる／言う）<br>
                ・心理的使役：<code class="bg-neutral-100 px-1 rounded">这首歌让我非常感动。</code>（この歌は私をとても感動させる）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-rose-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 豆知識：C-POPにおける「让」の感情描写</h4>
              <p class="text-neutral-600">
                ラブソングやバラードの歌詞では、自分の感情を「君が僕を〜な気持ちにさせる（你让我…）」という使役表現を使って表現するのが定番の技法です。能動的に「私は嬉しい/悲しい」と言うよりも、相手の影響力を引き立たせるロマンチックな表現になります。
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
            
            <div onclick="speak('你的词典被谁借走了？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">你的词典被谁借走了？</span>
                <p class="text-xs text-neutral-500 mt-1">あなたの辞書は誰に借りて行かれましたか？（被 ＝ 〜によって…される）</p>
              </div>
            </div>

            <div onclick="speak('老师让我写一篇关于中文学习的文章。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">老师让我写一篇关于中文学习的文章。</span>
                <p class="text-xs text-neutral-500 mt-1">先生は私に中国語学習に関する文章を書かせました。（让 ＝ 〜させる）</p>
              </div>
            </div>

            <div onclick="speak('这部电影真的太让人感动了。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">这部电影真的太让人感动了。</span>
                <p class="text-xs text-neutral-500 mt-1">この映画は本当に人を感動させます。（让人感动 ＝ 人を感動させる）</p>
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
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：受動構文</span>
            <p class="font-medium text-neutral-900">「〜によって…される」を表す受動の介詞（前置詞）は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '太棒了！ 被 が受動を表します。', '不正解！ 把 は処置構文で使います。', '被')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 被</button>
              <button onclick="checkQuiz(1, 1, 0, '太棒了！ 被 が受動を表します。', '不正解！ 把 は処置構文で使います。', '被')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 把</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：使役表現</span>
            <p class="font-medium text-neutral-900">「私に感動させる（[ ] 我感动）」の空欄に入る使役動詞は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(2, '让 (ràng)', '让')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>我感动</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：感動する</span>
            <p class="font-medium text-neutral-900">「感動する（感动）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-64 bg-white">
              <button onclick="checkInput(3, ['感动', '感動'], '感动')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 選択問題：命じる／言いつける</span>
            <p class="font-medium text-neutral-900">口語で「〜するように指示する・呼ぶ」の意味を持つ使役単語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '太棒了！ 叫 が指示の使役を表します。', '不正解！ 给 は「与える」です。', '叫')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 叫</button>
              <button onclick="checkQuiz(4, 1, 0, '太棒了！ 叫 が指示の使役を表します。', '不正解！ 给 は「与える」です。', '叫')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 给</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「この映画は本当に人を感動させます」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '这部电影真的太让人感动了。 (这部电影真的太让人感动了。)', '这部电影真的太让人感动了。')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: C-Pop & Chinese Culture Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 18 Special • Romantic Ballad & Emotion
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. 光良『童话』で学ぶ感動の使役表現「让」
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              アジア全域で大ヒットした不朽のバラードから、胸を打つ使役構文とロマンチックな世界観を味わおう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">童话 (Fairytale - Guang Liang / 光良)</h4>
                <p class="text-xs text-neutral-500">Legendary Asian Hit Ballad</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【音楽文化コラム：『童話』と愛のメッセージ】</strong><br>
              「童話に出てくるようなハッピーエンドは嘘だと君は言うけれど、僕は君だけの天使になりたい」という切なく直球なメッセージを歌った名曲。サビの「我愿变成童话里…（僕は童話の中の〜になりたい）」や使役表現「让（〜させる）」が強い感情とともに響きます。
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
                  <span class="font-bold text-lg text-rose-950">我会变成童话里，你爱的那个天使，让奇迹出现</span>
                  <button onclick="speak('我会变成童话里，你爱的那个天使，让奇迹出现')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">僕は童話の中の君が大好きな天使になって、奇跡を起こしてみせる（让奇迹出现 ＝ 奇跡を出現させる）</p>
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
                  <span class="font-bold text-neutral-900">「让 + 目的語 + 動詞」による願いの実現</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <code class="bg-neutral-200 px-1 rounded">让奇迹出现</code>（奇跡を出現させる）のように、「自分が行動を起こすことで、ある状況を実現させる」というポジティブでロマンチックな使役表現として機能しています。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
