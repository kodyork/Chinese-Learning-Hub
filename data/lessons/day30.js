const day30Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 30 Advanced Masterclass (Week 5)</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 30: 相槌・つなぎ言葉第2弾（You can say that again!） ＆ 程度補語（〜得不得了）
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">Week 5 Conversational & Expressive Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                話を切り出す・受け止める「ネイティブの相槌＆つなぎフレーズ」と、感情や状態の高ぶりを生き生きと描く高度な程度補語をマスターします。
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

        <!-- Section 1: Native Reaction & Conversational Fillers -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="zap" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">1. 会話が弾む！ネイティブの相槌・つなぎフレーズ集（第2弾）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">Tap to Listen</span>
          </div>

          <p class="text-xs sm:text-sm text-neutral-600">
            相手の話に共感したり、自分の本音を切り出したりするときに自然な間を作ってくれる超実用フレーズです。カードをタップして音で覚えましょう！
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Card 1 -->
            <div onclick="speak('谁说不是呢！可不是嘛！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">You can say that again!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">谁说不是呢！ / 可不是嘛！</p>
              <p class="text-xs text-rose-600 font-medium">Shéi shuō búshì ne! / Kě bùshì ma!</p>
              <p class="text-xs text-neutral-600">「まったくその通りだよ！」「誰がそうじゃないって言える？（＝その通り）」という、深い共感を表すネイティブならではの相槌です。</p>
            </div>

            <!-- Card 2 -->
            <div onclick="speak('我的天！天哪！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Oh my gosh! / Goodness!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">我的天！ / 天哪！</p>
              <p class="text-xs text-rose-600 font-medium">Wǒ de tiān! / Tiān na!</p>
              <p class="text-xs text-neutral-600">「うわっ、マジか！」「なんてこった！」と驚いたときや呆れたときに思わず口から出る感嘆フレーズ。</p>
            </div>

            <!-- Card 3 -->
            <div onclick="speak('没事儿！小意思！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">No worries! / Piece of cake!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">没事儿！ / 小意思！</p>
              <p class="text-xs text-rose-600 font-medium">Méishìr! / Xiǎoyìsi!</p>
              <p class="text-xs text-neutral-600">謝られたときの「全然大丈夫だよ！（没事儿）」と、お礼を言われたときの「お安い御用だよ！（小意思）」のセットです。</p>
            </div>

            <!-- Card 4 -->
            <div onclick="speak('那倒是。也对。')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">That's true. / Come to think of it...</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">那倒是。 / 也对。</p>
              <p class="text-xs text-rose-600 font-medium">Nà dàoshì. / Yě duì.</p>
              <p class="text-xs text-neutral-600">「確かにそれもそうだね」「言われてみれば確かに」と、相手の視点を認めて納得するこなれた相槌です。</p>
            </div>

            <!-- Card 5 -->
            <div onclick="speak('说白了，简单来说。')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Basically... / To put it simply...</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">说白了，… / 简单来说，…</p>
              <p class="text-xs text-rose-600 font-medium">Shuōbáile, ... / Jiǎndān lái shuō, ...</p>
              <p class="text-xs text-neutral-600">「はっきり言ってしまうと…」「要するに…」と、話の本質をズバッとまとめるときの前置きフレーズ。</p>
            </div>

            <!-- Card 6 -->
            <div onclick="speak('算了吧。没什么大不了的。')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Never mind. / It's no big deal.</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">算了吧。 / 没什么大不了的。</p>
              <p class="text-xs text-rose-600 font-medium">Suànle ba. / Méi shénme dàbùliǎo de.</p>
              <p class="text-xs text-neutral-600">「まあいいや、やめとこう（算了吧）」と、相手を励ます「大したことないよ！（没什么大不了的）」です。</p>
            </div>
          </div>
        </section>

        <!-- Section 2: Detailed Grammar Explanations -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 深掘り解説：感情と程度を極限まで高める補語表現</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 「形容詞 / 心理動詞 ＋ 得不得了（〜してたまらない）」</h4>
              <p class="text-neutral-600">
                プラスの感情にもマイナスの状態にも使える、口語で非常に生き生きとした強調表現です。<br>
                ・<code class="bg-neutral-100 px-1 rounded">开心得不得了</code>（嬉しくてたまらない）<br>
                ・<code class="bg-neutral-100 px-1 rounded">忙得要命</code>（死ぬほど忙しい ※「要命」は主に大変な状況に使います）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② B2応用：「動詞 ＋ 个不停（〜し続けて止まらない）」と描写の程度補語</h4>
              <p class="text-neutral-600">
                ・<strong>動作の連続：</strong><code class="bg-neutral-100 px-1 rounded">笑个不停</code>（笑い止まらない）、<code class="bg-neutral-100 px-1 rounded">雨下个不停</code>（雨が降り止まない）<br>
                ・<strong>結果・状態の具体的描写：</strong><code class="bg-neutral-100 px-1 rounded">激动得说不出话来</code>（感動・興奮して言葉が出てこない）のように、「得」の後ろに具体的なフレーズを置くことで情景を鮮やかに描けます。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-rose-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 豆知識：「的・地・得」の使い分け完全整理</h4>
              <p class="text-neutral-600">
                中国語学習者が中上級で必ず意識する3つの「de」：<br>
                ・<strong>的：</strong>名詞を修飾（例：<code class="bg-neutral-100 px-1 rounded">美丽的风景</code> ＝ 美しい風景）<br>
                ・<strong>地：</strong>動詞の前に置いて動作の様子を修飾（例：<code class="bg-neutral-100 px-1 rounded">高兴地说</code> ＝ 嬉しそうに話す）<br>
                ・<strong>得：</strong>動詞・形容詞の後ろに置いて程度や結果を説明（例：<code class="bg-neutral-100 px-1 rounded">说得很好</code> ＝ 話すのがとても上手だ）
              </p>
            </div>
          </div>
        </section>

        <!-- Section 3: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">3. 実践会話：相槌 × 程度補語（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('最近工作忙得要命，每天加班到深夜，累得不得了。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Zuìjìn gōngzuò máng de yàomìng, měitiān jiābān dào shēnyè, lèi de bùdéliǎo.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">最近工作忙得要命，每天加班到深夜，累得不得了。</p>
                <p class="text-xs text-neutral-500">最近仕事が死ぬほど忙しくて、毎日深夜まで残業で、疲れてたまらないよ。</p>
              </div>
            </div>

            <div onclick="speak('我的天！说白了，工作是做不完的，你可得注意身体啊。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-rose-100 text-rose-700 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-rose-600">Bさん（相槌＋つなぎ言葉！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Wǒ de tiān! Shuōbáile, gōngzuò shì zuò bù wán de, nǐ kě děi zhùyì shēntǐ a.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">我的天！说白了，工作是做不完的，你可得注意身体啊。</p>
                <p class="text-xs text-neutral-500">なんてこった！はっきり言って仕事なんて終わらないものなんだから、体には気をつけなきゃだめだよ。</p>
              </div>
            </div>

            <div onclick="speak('谁说不是呢！听到你这么说，我心里好受多了。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Shéi shuō búshì ne! Tīngdào nǐ zhème shuō, wǒ xīnlǐ hǎoshòu duō le.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">谁说不是呢！听到你这么说，我心里好受多了。</p>
                <p class="text-xs text-neutral-500">まったくその通りだよ！君にそう言ってもらえて、気持ちがすごく楽になったよ。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 4: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">4. Day 30 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 相槌クイズ：You can say that again!</span>
            <p class="font-medium text-neutral-900">相手の意見に「まったくその通りだよ！」と深く共感するネイティブの相槌は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 谁说不是呢！(Shéi shuō búshì ne!) は「まったくその通り！」の定番です。', '不正解！ 算了吧 は「まあいいや、やめとこう」の意味です。', '谁说不是呢')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 谁说不是呢！ (Shéi shuō búshì ne!)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 谁说不是呢！(Shéi shuō búshì ne!) は「まったくその通り！」の定番です。', '不正解！ 算了吧 は「まあいいや、やめとこう」の意味です。', '谁说不是呢')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 算了吧！ (Suànle ba!)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：〜し続けて止まらない</span>
            <p class="font-medium text-neutral-900">「笑い止まらない（笑[ ]不停）」の空欄に入る一文字は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>笑</span>
              <span onclick="revealAnswer(2, 'ge (个)', '个')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>不停</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：はっきり言うと…</span>
            <p class="font-medium text-neutral-900">会話の前置き「はっきり言って・要するに（shuōbáile）」の漢字3文字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(3, ['说白了', '說白了'], '说白了')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 選択問題：「的・地・得」の使い分け</span>
            <p class="font-medium text-neutral-900">「話がとても弾む（聊[ ]非常投机）」の空欄に入る正しい構造助詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 動詞の後ろに程度補語を導くときは 得 を使います。', '不正解！ 地 は動詞の前に置いて連用修飾語を作ります。', '聊得非常投机')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 得 (de)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 動詞の後ろに程度補語を導くときは 得 を使います。', '不正解！ 地 は動詞の前に置いて連用修飾語を作ります。', '聊得非常投机')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 地 (de)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「最近仕事が死ぬほど忙しくて、毎日深夜まで残業で、疲れてたまらないよ」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '最近工作忙得要命，每天加班到深夜，累得不得了。', '最近工作忙得要命，每天加班到深夜，累得不得了。')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 5: C-POP Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 30 Special • Queen of Love Songs
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              5. 梁静茹（Fish Leong）『勇气』に学ぶ真っ直ぐな情熱
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              中華圏のカラオケで20年以上歌い継がれる不朽の応援ラブソングから、強い決意のフレーズを学ぼう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">勇气 (Yǒngqì / Courage)</h4>
                <p class="text-xs text-neutral-500">原唱：梁静茹 (Fish Leong)</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【楽曲コラム：『勇气』と背中を押す力】</strong><br>
              マレーシア出身の実力派シンガー・梁静茹の代名詞ともいえる代表曲。周囲の目や困難に負けず、自分の気持ちに正直になるための「勇気」を優しくも力強く歌い上げ、恋だけでなく新しい挑戦をする人々の応援歌としても愛されています。
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
                  <span class="font-bold text-lg text-rose-950">爱真的需要勇气，来面对流言蜚语</span>
                  <button onclick="speak('爱真的需要勇气，来面对流言蜚语')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Ài zhēnde xūyào yǒngqì, lái miànduì liúyán fēiyǔ</p>
                <p class="text-neutral-700 font-medium">愛には本当に勇気が必要なんだ、根拠のない噂話に立ち向かうために</p>
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
                  <span class="font-bold text-neutral-900">四字熟語「流言蜚语 (liúyán fēiyǔ)」と「面对 (miànduì)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <code class="bg-neutral-200 px-1 rounded">流言蜚语</code> は「根拠のないデマや悪質な噂話」を表す頻出の四字熟語です。それに動詞 <code class="bg-neutral-200 px-1 rounded">面对</code>（直面する・立ち向かう）を組み合わせることで、周囲の雑音に負けない強い意志を表現しています。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
