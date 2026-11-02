const day20Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 20 Advanced Masterclass</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 20: 方向補語の派生・抽象的用法 ＆ 王力宏『唯一』に学ぶ感情の芽生え
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">B1-B2 Bridge & Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                物理的な方向（出来てくる/出していく）から「動作の開始（起来）」「継続（下去）」「記憶の喚起（想起来）」への抽象的派生パターンをマスターします。
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：方向補語の代表的な抽象的・派生用法</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 动作的开始与集中：起来 (qǐlái)</h4>
              <p class="text-neutral-600">
                ・<strong>動作・状態の開始：</strong><code class="bg-neutral-100 px-1 rounded">笑起来</code>（笑い始める）、<code class="bg-neutral-100 px-1 rounded">热起来</code>（暑くなり始める）<br>
                ・<strong>記憶・意識の回収：</strong><code class="bg-neutral-100 px-1 rounded">想起来</code>（思い出す）<br>
                例：<code class="bg-neutral-100 px-1 rounded">我想起来了他的名字。</code>（彼の名前を思い出しました）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② B2応用：动作的持续（下去）与 显露（出来）</h4>
              <p class="text-neutral-600">
                ・<strong>下去（〜し続ける）：</strong>現在から未来へと動作を継続する。<br>
                 例：<code class="bg-neutral-100 px-1 rounded">请继续说下去。</code>（どうぞそのまま話し続けてください）<br>
                ・<strong>出来（〜し出でる・判明する）：</strong>隠れていたものが表に現れる・認識できるようになる。<br>
                 例：<code class="bg-neutral-100 px-1 rounded">我听出来这是谁的声音了。</code>（聞き分けて誰の声か分かりました）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-rose-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 豆知識：C-POP歌詞での方向補語と情緒表現</h4>
              <p class="text-neutral-600">
                「愛し始める（爱起来）」「思い出してしまう（想起来）」「歌い続けていく（唱下去）」など、方向補語の派生用法は感情の動きや時間の流れをドラマチックに描写するためにC-POPのサビで極めて頻繁に使われます。
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
            
            <div onclick="speak('我想起来了，我们以前在上海见过面！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">我想起来了，我们以前在上海见过面！</span>
                <p class="text-xs text-neutral-500 mt-1">思い出しました、私たち以前上海でお会いしたことがありますね！（想起来 ＝ 思い出す）</p>
              </div>
            </div>

            <div onclick="speak('听到这个好消息，大家都高兴地笑了起来。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">听到这个好消息，大家都高兴地笑了起来。</span>
                <p class="text-xs text-neutral-500 mt-1">この良い知らせを聞いて、みんな嬉しそうに笑い始めました。（笑了起来 ＝ 笑い始める）</p>
              </div>
            </div>

            <div onclick="speak('不管遇到什么困难，我都会坚持学下去。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">不管遇到什么困难，我都会坚持学下去。</span>
                <p class="text-xs text-neutral-500 mt-1">どんな困難に遭おうとも、私は勉強し続けていきます。（学下去 ＝ 学び続ける）</p>
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
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：思い出す</span>
            <p class="font-medium text-neutral-900">「忘れていたことを思い出す」を表す正しい補語表現は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '太棒了！ 想起来 が「思い出す」です。', '不正解！ 想出来 は「新しいアイデアを思いつく」です。', '想起来')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 想起来</button>
              <button onclick="checkQuiz(1, 1, 0, '太棒了！ 想起来 が「思い出す」です。', '不正解！ 想出来 は「新しいアイデアを思いつく」です。', '想起来')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 想出来</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：継続の表現</span>
            <p class="font-medium text-neutral-900">「やり続けていく（做[ ]去）」の空欄に入る方向補語は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>做</span>
              <span onclick="revealAnswer(2, '下 (xià)', '下')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリ克して答えを表示 ]</span>
              <span>去</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：笑い始める</span>
            <p class="font-medium text-neutral-900">「笑い始める（笑起来）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-64 bg-white">
              <button onclick="checkInput(3, ['笑起来'], '笑起来')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 選択問題：聞き分ける</span>
            <p class="font-medium text-neutral-900">「聞いて（誰の声か・何かが）判明する・聞き分ける」を表す補語表現は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '太棒了！ 听出来 が聞き分けるを表します。', '不正解！ 听下去 は「聞き続ける」です。', '听出来')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 听出来</button>
              <button onclick="checkQuiz(4, 1, 0, '太棒了！ 听出来 が聞き分けるを表します。', '不正解！ 听下去 は「聞き続ける」です。', '听出来')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 听下去</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「どんな困難に遭おうとも、私は勉強し続けていきます」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '不管遇到什么困难，我都会坚持学下去。 (不管遇到什么困难，我都会坚持学下去。)', '不管遇到什么困难，我都会坚持学下去。')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: C-Pop & Chinese Culture Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 20 Special • Classic Mandopop & Directional Complement
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. 王力宏『唯一』で学ぶ感情の揺れ動きと方向補語
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              アジアを代表するシンガーソングライターの名バラードから、溢れ出す感情のフレーズを学ぼう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">唯一 (Only One - Leehom Wang / 王力宏)</h4>
                <p class="text-xs text-neutral-500">Legendary Chinese Classic Ballad</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【音楽文化コラム：『唯一』と普遍のラブソング】</strong><br>
              中華圏のカラオケで今なお愛され続ける不朽の名曲。「君は僕の唯一の人だ」という切切とした訴えとともに、ふとした瞬間に込み上げてくる感情や問いかけが、美しいピアノ旋律に乗せて歌われます。
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
                  <span class="font-bold text-lg text-rose-950">我确定，你就是我的唯一</span>
                  <button onclick="speak('我确定，你就是我的唯一')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">確信しているよ、君こそが僕の唯一無二の人なのだと（确定 ＝ 確信・確定する）</p>
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
                  <span class="font-bold text-neutral-900">確信を表す動詞「确定 (quèdìng)」と強調の「就是」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <code class="bg-neutral-200 px-1 rounded">确定</code>（確信している）に強調の指定詞 <code class="bg-neutral-200 px-1 rounded">就是</code>（まさに〜である）を組み合わせることで、「迷いはもうない」という強い確信を力強く表現することができます。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
