const day41Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 41 Advanced Masterclass (Week 6)</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 41: 相槌・リアクション第13弾（Count me in! / Beats me!） ＆ 強調・反語の高度表現
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">Week 6 Native Reactions & B2-C1 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                「私も混ぜて！」「参ったな、それは分からないや！」とテンポよく返すネイティブの相槌と、反語で本音を強調する「何尝不…・岂不是…」および完全否定「压根儿就…」をマスターします。
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

        <!-- Section 1: Native Reaction & Conversational Phrases -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="zap" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">1. 会話が弾む！ネイティブの相槌・リアクション集（第13弾）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">Tap to Listen</span>
          </div>

          <p class="text-xs sm:text-sm text-neutral-600">
            楽しいお誘いに即答するとき、難問にお手上げになったとき、あるいは角を立てずに「いや、そうとも言い切れないよ」と意見を交わすときに使えるネイティブ表現6選です！
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Card 1 -->
            <div onclick="speak('算我一个！带我一个！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Count me in! / Include me!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">算我一个！ / 带我一个！</p>
              <p class="text-xs text-rose-600 font-medium">Suàn wǒ yí ge! / Dài wǒ yí ge!</p>
              <p class="text-xs text-neutral-600">「私もカウントに入れて（混ぜて）！」「私も連れてって！」と、食事やイベントのお誘いにノリノリで参加表明するときの超定番フレーズです。</p>
            </div>

            <!-- Card 2 -->
            <div onclick="speak('问倒我了！这可难住我了！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Beats me! / You got me there!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">问倒我了！ / 这可难住我了！</p>
              <p class="text-xs text-rose-600 font-medium">Wèndǎo wǒ le! / Zhè kě nánzhù wǒ le!</p>
              <p class="text-xs text-neutral-600">「その質問には参ったな（さっぱり分からないよ）！」「これは困ったな、お手上げだよ！」と、難しい質問をされて笑顔で白旗を上げるときの相槌です。</p>
            </div>

            <!-- Card 3 -->
            <div onclick="speak('求之不得！巴不得呢！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Couldn't ask for more! / I'd love nothing more!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">求之不得！ / 巴不得呢！</p>
              <p class="text-xs text-rose-600 font-medium">Qiú zhī bù dé! / Bābude ne!</p>
              <p class="text-xs text-neutral-600">「願ってもないことだよ！」「むしろ大歓迎だよ！」と、相手からの提案やお願いが自分にとっても嬉しいものだったときに弾んで答える表現です。</p>
            </div>

            <!-- Card 4 -->
            <div onclick="speak('好家伙！乖乖！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Whoa! / Holy cow!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">好家伙！ / 乖乖！</p>
              <p class="text-xs text-rose-600 font-medium">Hǎojiāhuo! / Guāiguāi!</p>
              <p class="text-xs text-neutral-600">「うわっ、すごいな！」「おいおい、マジかよ！」と、予想外のスケールや驚きの展開を目にしたときに思わず口から出る感嘆の相槌です。</p>
            </div>

            <!-- Card 5 -->
            <div onclick="speak('话可不能这么说！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">I wouldn't say that! / Not necessarily!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">话可不能这么说！</p>
              <p class="text-xs text-rose-600 font-medium">Huà kě bù néng zhème shuō!</p>
              <p class="text-xs text-neutral-600">「いや、そうとも言い切れないよ！」「それはちょっと言い過ぎじゃないかな！」と、相手の極端な意見に対して角を立てずに別の視点を提示する大人の切り返しです。</p>
            </div>

            <!-- Card 6 -->
            <div onclick="speak('谁知道呢！天晓得！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Who knows! / Heaven knows!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">谁知道呢！ / 天晓得！</p>
              <p class="text-xs text-rose-600 font-medium">Shuí zhīdào ne! / Tiān xiǎode!</p>
              <p class="text-xs text-neutral-600">「さあ、誰にも分からないよ！」「神のみぞ知るだね！」と、予測がつかない未来や他人の心境について肩をすくめて答える表現です。</p>
            </div>
          </div>
        </section>

        <!-- Section 2: Detailed Grammar Explanations -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 深掘り解説：強調・反語の高度表現（「何尝不… / 岂不是… / 压根儿就…」）</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 反語で本音や当然の帰結を強調する「何尝不… (hécháng bù...)」と「岂不是… (qǐ búshì...)」</h4>
              <p class="text-neutral-600">
                ・<strong>何尝不…（どうして〜でないことがあろうか＝本当は〜だ）：</strong>誤解されたときや気持ちを分かち合うときに「私だって本当はそう思っているに決まっている」と婉曲かつ力強く伝えるC1レベルの表現です。<br>
                例：<code class="bg-neutral-100 px-1 rounded">我何尝不想早点下班回家呢？</code>（私だって早く退勤して家に帰りたくないはずがないだろう＝本当は早く帰りたいよ）<br>
                ・<strong>岂不是…（それではまるで〜ではないか）：</strong>「もしAしたら、当然Bという結果になるではないか」と相手の論理にツッコミを入れたり説得したりする反語です。<br>
                例：<code class="bg-neutral-100 px-1 rounded">如果现在放弃，之前的努力岂不是白费了？</code>（もし今諦めたら、これまでの努力が水の泡になってしまうではないか？）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 最初から全く〜ないことを強調する「压根儿就… (yāgēnr jiù... / そもそも最初から全く〜ない)」</h4>
              <p class="text-neutral-600">
                「根本」よりもさらに感情がこもったネイティブらしい強調の副詞で、後ろには必ず否定語（<code class="bg-neutral-100 px-1 rounded">没 / 不</code>）を伴います。<br>
                ・<code class="bg-neutral-100 px-1 rounded">他压根儿就没把这件事放在心上。</code>（彼はそもそも最初からこの件を全く気にかけていなかった）<br>
                ・<code class="bg-neutral-100 px-1 rounded">我压根儿就不知道今天要开会。</code>（今日会議があるなんて、そもそも全く知らなかったよ）
              </p>
            </div>
          </div>
        </section>

        <!-- Section 3: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">3. 実践会話：相槌 × 強調・反語構文（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('周末大家打算去郊外露营，你要不要一起去？不过听说那家营地特别难订，我压根儿就没抱太大希望。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん（「压根儿就…」！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Zhōumò dàjiā dǎsuàn qù jiāowài lùyíng, nǐ yào bú yào yìqǐ qù? Búguò tīngshuō nà jiā yíngdì tèbié nán dìng, wǒ yāgēnr jiù méi bào tài dà xīwàng.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">周末大家打算去郊外露营，你要不要一起去？不过听说那家营地特别难订，我压根儿就没抱太大希望。</p>
                <p class="text-xs text-neutral-500">週末みんなで郊外にキャンプに行こうと思ってるんだけど、一緒に行かない？ただ、あのキャンプ場はすごく予約が取りづらいらしくて、最初からあまり大きな期待はしていないんだ。</p>
              </div>
            </div>

            <div onclick="speak('求之不得！算我一个！其实我何尝不想去大自然里放松一下呢？而且要是不提前试试看，岂不是连一点机会都没有了？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-rose-100 text-rose-700 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-rose-600">Bさん（相槌2連発＋「何尝不…」＋「岂不是…」！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Qiú zhī bù dé! Suàn wǒ yí ge! Qíshí wǒ hécháng bù xiǎng qù dàzìrán lǐ fàngsōng yíxià ne? Érqiě yàoshi bù tíqián shìshi kàn, qǐ búshì lián yìdiǎn jīhuì dōu méiyǒu le?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">求之不得！算我一个！其实我何尝不想去大自然里放松一下呢？而且要是不提前试试看，岂不是连一点机会都没有了？</p>
                <p class="text-xs text-neutral-500">願ってもないことだよ！私も混ぜて！実は私だって大自然の中でリラックスしたくないはずがないじゃない？それに前もって試してみなかったら、それこそ少しのチャンスすらなくなってしまうではないか！</p>
              </div>
            </div>

            <div onclick="speak('好家伙，你比我还积极！行，我这就打电话去问问看！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん（相槌「好家伙」！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Hǎojiāhuo, nǐ bǐ wǒ hái jījí! Xíng, wǒ zhè jiù dǎ diànhuà qù wènwen kàn!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">好家伙，你比我还积极！行，我这就打电话去问问看！</p>
                <p class="text-xs text-neutral-500">うわっ、私より積極的だね！よし、今すぐ電話して聞いてみるよ！</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 4: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">4. Day 41 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 相槌クイズ：Count me in!</span>
            <p class="font-medium text-neutral-900">友人たちのイベントや食事のお誘いに「私も混ぜて！カウントに入れて！」と参加表明するときの定番フレーズは？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 算我一个！(Suàn wǒ yí ge!) は「私も混ぜて！」の超定番リアクションです。', '不正解！ 问倒我了 は「参ったな、それは分からないや」の意味です。', '算我一个')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 算我一个！ (Suàn wǒ yí ge!)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 算我一个！(Suàn wǒ yí ge!) は「私も混ぜて！」の超定番リアクションです。', '不正解！ 问倒我了 は「参ったな、それは分からないや」の意味です。', '算我一个')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 问倒我了！ (Wèndǎo wǒ le!)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：Couldn't ask for more!</span>
            <p class="font-medium text-neutral-900">「願ってもないことだよ！（求之不[ ]！）」の空欄に入る一文字は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>求之不</span>
              <span onclick="revealAnswer(2, 'dé (得)', '求之不得')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>！</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：Beats me!</span>
            <p class="font-medium text-neutral-900">「その質問には参ったな・さっぱり分からないよ（wèndǎo wǒ le）」の漢字4文字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-44 bg-white">
              <button onclick="checkInput(3, ['问倒我了', '問倒我了'], '问倒我了')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 選択問題：反語表現「岂不是」</span>
            <p class="font-medium text-neutral-900">「もし今諦めたら、これまでの努力が水の泡になってしまうではないか？（如果现在放弃，之前的努力[ ]白费了？）」の空欄に入る表現は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 岂不是 (qǐ búshì) は「それではまるで〜ではないか」と強い反語を表す高度表現です。', '不正解！ 压根儿 は「そもそも最初から全く〜ない」と完全否定に使います。', '如果现在放弃，之前的努力岂不是白费了')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 岂不是 (qǐ búshì)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 岂不是 (qǐ búshì) は「それではまるで〜ではないか」と強い反語を表す高度表現です。', '不正解！ 压根儿 は「そもそも最初から全く〜ない」と完全否定に使います。', '如果现在放弃，之前的努力岂不是白费了')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 压根儿 (yāgēnr)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「願ってもないことだよ！私も混ぜて！実は私だってリラックスしたくないはずがないじゃない？」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '求之不得！算我一个！其实我何尝不想去放松一下呢？', '求之不得！算我一个！其实我何尝不想去放松一下呢？')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 5: C-POP Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 41 Special • Legendary Rock Anthem
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              5. 五月天（Mayday）『倔强』に学ぶ不屈の意志と結果補語「握紧」
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              中華圏のスタジアムを熱狂させるロックバンドの代表曲から、自分の信念を貫く力強い中国語フレーズを味わおう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">倔强 (Juéjiàng / Stubborn)</h4>
                <p class="text-xs text-neutral-500">原唱：五月天 (Mayday)</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【楽曲コラム：『倔强』とポジティブな「意地」】</strong><br>
              ボーカルの阿信（Ashin）が作詞・作曲を手がけた2004年の不朽の名曲。本来「倔强」は「頑固・強情」という意味を持ちますが、この歌では「周囲に流されず自分の夢を貫く誇り高い意志」として描かれ、受験や仕事に挑む人々の背中を押し続けています。
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
                  <span class="font-bold text-lg text-rose-950">我和我最后的倔强，握紧双手绝对不放</span>
                  <button onclick="speak('我和我最后的倔强，握紧双手绝对不放')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Wǒ hé wǒ zuìhòu de juéjiàng, wòjǐn shuāngshǒu juéduì bú fàng</p>
                <p class="text-neutral-700 font-medium">僕と僕の最後の意地、両手を固く握りしめて絶対に離さない</p>
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
                  <span class="font-bold text-neutral-900">結果補語「握紧 (wòjǐn / 固く握る)」と強い決意の否定「绝对不 (juéduì bù / 絶対に〜ない)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  動詞 <code class="bg-neutral-200 px-1 rounded">握</code>（握る）に結果補語 <code class="bg-neutral-200 px-1 rounded">紧</code>（きつく・しっかりと）を付けることで、「緩まないようにギュッと握りしめる」動作の結果を鮮明に描写しています（同様に <code class="bg-neutral-200 px-1 rounded">抱紧</code>＝強く抱きしめる、<code class="bg-neutral-200 px-1 rounded">抓紧</code>＝しっかり掴む・急いで取り組む）。また、<code class="bg-neutral-200 px-1 rounded">绝对不 + 動詞</code> は断固たる決意を表す力強い否定です。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
