const day42Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="award" class="w-3.5 h-3.5"></i>
            <span>Day 42 Week 6 Finale & Comprehensive Review</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 42: Week 6 総復習スペシャル（Day 36〜41 相槌＆高度論理表現マスター）
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">Week 6 Complete Review • Native Reactions & B2-C1 Logic:</strong>
              <span class="ml-1 text-neutral-300">
                Week 6（Day 36〜41）で習得した「ネイティブの相槌・ツッコミ表現（第8弾〜第13弾）」と、説得力を極限まで高める6大論理構文（累加・逆接・因果・推量・条件・反語）を一気に総復習します！
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

        <!-- Section 1: Week 6 Best Reactions Review -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="zap" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">1. Week 6 厳選！ネイティブの相槌・リアクション総ざらい（Day 36〜41）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">Tap to Listen</span>
          </div>

          <p class="text-xs sm:text-sm text-neutral-600">
            今週学んだ36個の相槌・会話フレーズの中から、日常でもビジネスでも特に使用頻度が高い「各日のエース表現」をピックアップしました。タップしてリズムと抑揚を再確認しましょう！
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Card 1 (Day 36) -->
            <div onclick="speak('笑死我了！绝了！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Day 36 • That's hilarious! / Next level!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">笑死我了！ / 绝了！</p>
              <p class="text-xs text-rose-600 font-medium">Xiào sǐ wǒ le! / Jué le!</p>
              <p class="text-xs text-neutral-600">「爆笑した・ウケる！」「最高すぎる・神がかってる！」と、感情をストレートに弾けさせる鉄板リアクションです。</p>
            </div>

            <!-- Card 2 (Day 37) -->
            <div onclick="speak('可不是嘛！怪不得呢！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Day 37 • You're telling me! / No wonder!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">可不是嘛！ / 怪不得呢！</p>
              <p class="text-xs text-rose-600 font-medium">Kě búshì ma! / Guàibude ne!</p>
              <p class="text-xs text-neutral-600">「まったくその通りだよ！」「道理で〜なわけだ！」と、100%の共感と納得を一瞬で伝える相槌です。</p>
            </div>

            <!-- Card 3 (Day 38) -->
            <div onclick="speak('有一说一，翻篇了！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Day 38 • To be fair... / Water under the bridge!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">有一说一，… / 翻篇了！</p>
              <p class="text-xs text-rose-600 font-medium">Yǒu yī shuō yī, ... / Fān piān le!</p>
              <p class="text-xs text-neutral-600">「公平に言って…（正直なところ）」「もう終わったことだから水に流そう！」という現代中国語の超頻出表現です。</p>
            </div>

            <!-- Card 4 (Day 39) -->
            <div onclick="speak('说得轻巧！真有两下子！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Day 39 • Easier said than done! / You've got skills!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">说得轻巧！ / 真有两下子！</p>
              <p class="text-xs text-rose-600 font-medium">Shuō de qīngqiǎo! / Zhēn yǒu liǎng xiàzi!</p>
              <p class="text-xs text-neutral-600">「言うのは簡単だよ！」という軽快なツッコミと、「なかなかやるね（腕があるね）！」という粋な褒め言葉です。</p>
            </div>

            <!-- Card 5 (Day 40) -->
            <div onclick="speak('说曹操，曹操到！有备无患！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Day 40 • Speak of the devil! / Better safe than sorry!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">说曹操，曹操到！ / 有备无患！</p>
              <p class="text-xs text-rose-600 font-medium">Shuō Cáo Cāo, Cáo Cāo dào! / Yǒu bèi wú huàn!</p>
              <p class="text-xs text-neutral-600">「噂をすれば影！」「備えあれば憂いなし！」と、会話に知性とユーモアを添える慣用表現です。</p>
            </div>

            <!-- Card 6 (Day 41) -->
            <div onclick="speak('算我一个！求之不得！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Day 41 • Count me in! / Couldn't ask for more!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">算我一个！ / 求之不得！</p>
              <p class="text-xs text-rose-600 font-medium">Suàn wǒ yí ge! / Qiú zhī bù dé!</p>
              <p class="text-xs text-neutral-600">「私も混ぜて！」「願ってもないことだよ！」と、お誘いや提案に前向きに応じるポジティブな相槌です。</p>
            </div>
          </div>
        </section>

        <!-- Section 2: Week 6 Grammar Summary -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="layers" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. Week 6 重要構文・論理接続表現の総整理（Day 36〜41）</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-5 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-1.5 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900">【Day 36】累加・漸層構文：「尚且 A，何况 B」「既…又…」</h4>
              <p class="text-neutral-600 text-xs sm:text-sm">
                ・<strong>尚且…，何况…：</strong>「〜でさえ…なのだから、まして…はなおさらだ」（例：<code class="bg-neutral-100 px-1 rounded">成年人尚且觉得吃力，何况孩子呢？</code>）<br>
                ・<strong>既…又…：</strong>同方向の性質・動作の同時成立（例：<code class="bg-neutral-100 px-1 rounded">既安静又宽敞</code>）
              </p>
            </div>

            <div class="space-y-1.5 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900">【Day 37】逆接・転折表現：「然而 / 却 / 反而」</h4>
              <p class="text-neutral-600 text-xs sm:text-sm">
                ・<strong>然而 / 却：</strong>「しかし／〜なのに（却は主語の後ろ）」（例：<code class="bg-neutral-100 px-1 rounded">理想很丰满，然而现实却很骨感。</code>）<br>
                ・<strong>反而：</strong>予想と正反対の結果になる「かえって」（例：<code class="bg-neutral-100 px-1 rounded">不但没好，反而更严重了。</code>）
              </p>
            </div>

            <div class="space-y-1.5 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900">【Day 38】因果・進展表現：「从而 / 进而 / 导致 / 促使」</h4>
              <p class="text-neutral-600 text-xs sm:text-sm">
                ・<strong>从而 / 进而：</strong>論理的帰結「それによって」とさらなる発展「さらに進んで」<br>
                ・<strong>导致 vs 促使：</strong><code class="bg-neutral-100 px-1 rounded">导致</code> は悪い結果を招く、<code class="bg-neutral-100 px-1 rounded">促使</code> は前向きな変化を促す
              </p>
            </div>

            <div class="space-y-1.5 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900">【Day 39】推測・推量表現：「恐怕 / 未必 / 莫非 / 多半」</h4>
              <p class="text-neutral-600 text-xs sm:text-sm">
                ・<strong>恐怕（懸念）：</strong>おそらく〜だろう ／ <strong>未必（部分否定）：</strong>必ずしも〜とは限らない<br>
                ・<strong>莫非（強い疑問）：</strong>まさか〜なのか？ ／ <strong>多半（高確率）：</strong>たぶん・十中八九
              </p>
            </div>

            <div class="space-y-1.5 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900">【Day 40】仮定・条件表現：「倘若 / 一旦 / 除非…否则…」</h4>
              <p class="text-neutral-600 text-xs sm:text-sm">
                ・<strong>一旦：</strong>いったん〜すれば（発生した瞬間の重大条件）<br>
                ・<strong>除非 A，否则 B：</strong>Aでない限り、さもなければBだ（唯一条件）
              </p>
            </div>

            <div class="space-y-1.5 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900">【Day 41】強調・反語表現：「何尝不… / 岂不是… / 压根儿就…」</h4>
              <p class="text-neutral-600 text-xs sm:text-sm">
                ・<strong>何尝不…：</strong>どうして〜でないことがあろうか（本当は〜だ） ／ <strong>岂不是…：</strong>それではまるで〜ではないか<br>
                ・<strong>压根儿就 + 否定：</strong>そもそも最初から全く〜ない
              </p>
            </div>
          </div>
        </section>

        <!-- Section 3: Comprehensive Dialogue -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">3. 総仕上げ実践会話：Week 6 フルミックス（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('有一说一，最近公司推行的新系统既复杂又难用，不仅没提高效率，反而导致大家经常加班！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん（有一说一 ＋ 既…又… ＋ 反而 ＋ 导致！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Yǒu yī shuō yī, zuìjìn gōngsī tuīxíng de xīn xìtǒng jì fùzá yòu nányòng, bùjǐn méi tígāo xiàolǜ, fǎn'ér dǎozhì dàjiā jīngcháng jiābān!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">有一说一，最近公司推行的新系统既复杂又难用，不仅没提高效率，反而导致大家经常加班！</p>
                <p class="text-xs text-neutral-500">正直なところ、最近会社が導入した新システムは複雑だし使いづらいし、効率が上がらないどころか、かえってみんなが残業する事態を招いているよ！</p>
              </div>
            </div>

            <div onclick="speak('可不是嘛！连资深员工尚且觉得吃力，何况刚入职的新人呢？不过听说下周会出优化版本，到时候肯定就顺手多了！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-rose-100 text-rose-700 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-rose-600">Bさん（可不是嘛 ＋ 尚且…何况…！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Kě búshì ma! Lián zīshēn yuángōng shàngqiě juéde chībuxiāo, hékuàng gāng rùzhí de xīnrén ne? Búguò tīngshuō xià zhōu huì chū yōuhuà bǎnběn, dào shíhou kěndìng jiù shùnshǒu duō le!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">可不是嘛！连资深员工尚且觉得吃力，何况刚入职的新人呢？不过听说下周会出优化版本，到时候肯定就顺手多了！</p>
                <p class="text-xs text-neutral-500">まったくその通りだよ！ベテラン社員でさえ大変だと感じるのだから、まして入社したばかりの新人ならなおさらだよね。でも来週改善版が出るらしいから、その頃にはきっとずっと使いやすくなるよ！</p>
              </div>
            </div>

            <div onclick="speak('那可不！要是不赶紧优化，大家岂不是白白浪费时间？对了，今晚我们去吃火锅放松一下吧，算我一个！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん（那可不 ＋ 岂不是… ＋ 算我一个！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Nà kě bù! Yàoshi bù gǎnjǐn yōuhuà, dàjiā qǐ búshì báibái làngfèi shíjiān? Duìle, jīnwǎn wǒmen qù chī huǒguō fàngsōng yíxià ba, suàn wǒ yí ge!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">那可不！要是不赶紧优化，大家岂不是白白浪费时间？对了，今晚我们去吃火锅放松一下吧，算我一个！</p>
                <p class="text-xs text-neutral-500">そりゃそうだよ！急いで改善しなかったら、みんな無駄に時間を浪費することになるではないか？そうだ、今夜みんなで火鍋を食べに行ってリフレッシュしようよ、私も混ぜて！</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 4: Week 6 Final Exam (6 Questions) -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">4. Week 6 修了認定！総合実力テスト（全6問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">6 Questions</span>
          </div>

          <!-- Q1 (Day 36) -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. Day 36 復習：漸層・類推構文</span>
            <p class="font-medium text-neutral-900">「ネイティブでさえ推敲を重ねる必要があるのだから、まして私たち学習者は言うまでもない（母语者[ ]需要反复推敲，何况我们学习者？）」の空欄に入る語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 尚且 A，何况 B で「Aでさえ…なのだから、ましてBはなおさらだ」を表します。', '不正解！ 未必 は「必ずしも〜とは限らない」を表す副詞です。', '母语者尚且需要反复推敲，何况我们学习者')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 尚且 (shàngqiě)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 尚且 A，何况 B で「Aでさえ…なのだから、ましてBはなおさらだ」を表します。', '不正解！ 未必 は「必ずしも〜とは限らない」を表す副詞です。', '母语者尚且需要反复推敲，何况我们学习者')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 未必 (wèibì)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 (Day 37) -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. Day 37 復習：予想と逆の結果「反而」</span>
            <p class="font-medium text-neutral-900">「時には悪いことがかえって良いことに変わることもある（有时候坏事[ ]会变成好事）」の空欄に入る副詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(2, 0, 0, '正解！ 反而 (fǎn'ér) は予想と正反対の結果になるときに使う「かえって」です。', '不正解！ 从而 は「それによって」を表す順接の接続詞です。', '有时候坏事反而会变成好事')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 反而 (fǎn'ér)</button>
              <button onclick="checkQuiz(2, 1, 0, '正解！ 反而 (fǎn'ér) は予想と正反対の結果になるときに使う「かえって」です。', '不正解！ 从而 は「それによって」を表す順接の接続詞です。', '有时候坏事反而会变成好事')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 从而 (cóng'ér)</button>
            </div>
            <div id="q2-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q3 (Day 38) -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. Day 38 復習：タイピングテスト（To be fair...）</span>
            <p class="font-medium text-neutral-900">「公平に言って…・正直なところ…（yǒu yī shuō yī）」の漢字4文字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-44 bg-white">
              <button onclick="checkInput(3, ['有一说一', '有一說一'], '有一说一')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 (Day 39) -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. Day 39 復習：穴埋め問題（Easier said than done!）</span>
            <p class="font-medium text-neutral-900">「言うのは簡単だよ！（说得[ ]！）」の空欄に入る二文字は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>说得</span>
              <span onclick="revealAnswer(4, 'qīngqiǎo (轻巧)', '说得轻巧')" id="q4-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>！</span>
            </div>
          </div>

          <!-- Q5 (Day 40) -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. Day 40 復習：唯一条件「除非…，否则…」</span>
            <p class="font-medium text-neutral-900">「事前に緊急物資を準備しておかない限り、本当に厄介なことになる（[ ]提前备好应急物资，否则真的很麻烦）」の空欄に入る接続詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(5, 0, 0, '正解！ 除非 A，否则 B で「Aでない限り、さもなければBだ」を表します。', '不正解！ 莫非 は「まさか〜ではあるまいな」と疑問を投げかける副詞です。', '除非提前备好应急物资，否则真的很麻烦')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 除非 (chúfēi)</button>
              <button onclick="checkQuiz(5, 1, 0, '正解！ 除非 A，否则 B で「Aでない限り、さもなければBだ」を表します。', '不正解！ 莫非 は「まさか〜ではあるまいな」と疑問を投げかける副詞です。', '除非提前备好应急物资，否则真的很麻烦')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 莫非 (mòfēi)</button>
            </div>
            <div id="q5-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q6 (Day 41) -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q6. Day 41 復習：総合フレーズ</span>
            <p class="font-medium text-neutral-900">「願ってもないことだよ！私も混ぜて！（求之不得！[ ]！）」の後半フレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>求之不得！</span>
              <span onclick="revealAnswer(6, 'Suàn wǒ yí ge! (算我一个！)', '求之不得！算我一个！')" id="q6-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 5: C-POP Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 42 Special • Week 6 Finale Classic
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              5. 陈奕迅（Eason Chan）『十年』に学ぶ時の流れと転換の表現
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              Week 6 の締めくくりは、中華圏カラオケの絶対王者・陈奕迅の代表曲から、歳月の変化を繊細に描く名フレーズを味わおう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">十年 (Shí Nián / Ten Years)</h4>
                <p class="text-xs text-neutral-500">原唱：陈奕迅 (Eason Chan)</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【楽曲コラム：『十年』と世代を超えた共感】</strong><br>
              2003年に発表されて以来、20年以上にわたり中華圏で最も歌われ続けているバラードの金字塔。北京語版『十年』と広東語版『明年今日』の双方が大ヒットを記録し、時の移ろいとともに変化する人間関係の切なさを洗練された言葉で綴っています。
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
                  <span class="font-bold text-lg text-rose-950">直到和你做了多年朋友，才明白我的眼泪，不是为你而流</span>
                  <button onclick="speak('直到和你做了多年朋友，才明白我的眼泪，不是为你而流')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Zhídào hé nǐ zuò le duō nián péngyou, cái míngbai wǒ de yǎnlèi, bú shì wèi nǐ ér liú</p>
                <p class="text-neutral-700 font-medium">君と何年も友達になって初めて分かったんだ、僕の涙は君のためだけに流れたものではなかったと</p>
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
                  <span class="font-bold text-neutral-900">「直到…才…（〜して初めて…する）」と目的・理由の「为 A 而 B」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  前半の <code class="bg-neutral-200 px-1 rounded">直到……才……</code> で「長い年月を経てようやく悟った」という時間の経過と気づきを表し、後半の <code class="bg-neutral-200 px-1 rounded">为 A 而 B</code>（AのためにBする）で文章語的な格調高いリズムを生み出しています。Week 6 完了おめでとうございます！
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
