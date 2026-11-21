const day39Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 39 Advanced Masterclass (Week 6)</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 39: 相槌・リアクション第11弾（Easier said than done! / No way!） ＆ 推測・推量の高度表現
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">Week 6 Native Reactions & B2-C1 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                「言うのは簡単だよ！」「とんでもない、絶対無理！」とテンポよく切り返すネイティブの相槌と、微妙な確信度や懸念を伝える推量表現（恐怕・未必・莫非）をマスターします。
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
              <h3 class="text-xl font-bold text-neutral-900">1. 会話が弾む！ネイティブの相槌・リアクション集（第11弾）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">Tap to Listen</span>
          </div>

          <p class="text-xs sm:text-sm text-neutral-600">
            気心の知れた友人との会話でよく飛び出すユーモラスなツッコミから、相手の隠れた才能を褒める一言まで、ネイティブの感情が乗ったリアクション集です。タップして発音を聴いてみましょう！
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Card 1 -->
            <div onclick="speak('说得轻巧！站着说话不腰疼！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Easier said than done!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">说得轻巧！ / 站着说话不腰疼！</p>
              <p class="text-xs text-rose-600 font-medium">Shuō de qīngqiǎo! / Zhànzhe shuōhuà bù yāoténg!</p>
              <p class="text-xs text-neutral-600">「言うのは簡単だよ（気楽に言ってくれるね）！」「立って喋ってるだけなら腰は痛くならない（当事者じゃないから気楽なことが言えるんだよ）！」という超ネイティブなツッコミ表現です。</p>
            </div>

            <!-- Card 2 -->
            <div onclick="speak('想都别想！门儿都没有！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">No way! / Forget about it!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">想都别想！ / 门儿都没有！</p>
              <p class="text-xs text-rose-600 font-medium">Xiǎng dōu bié xiǎng! / Ménr dōu méiyǒu!</p>
              <p class="text-xs text-neutral-600">「考えることすらやめな（絶対ムリ）！」「入り口のドアすらない（可能性ゼロだよ）！」と、虫のいいお願いや無茶な提案をきっぱり断るときの定番フレーズです。</p>
            </div>

            <!-- Card 3 -->
            <div onclick="speak('不至于吧？没那么夸张吧？')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">It cannot be that bad! / Not that extreme!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">不至于吧？ / 没那么夸张吧？</p>
              <p class="text-xs text-rose-600 font-medium">Bú zhìyú ba? / Méi nàme kuāzhāng ba?</p>
              <p class="text-xs text-neutral-600">「そこまではないでしょ？」「そこまで大げさじゃないんじゃない？」と、悲観しすぎたり大げさに騒いだりする相手を落ち着かせる相槌です。</p>
            </div>

            <!-- Card 4 -->
            <div onclick="speak('随你的便！都听你的！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Suit yourself! / Up to you!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">随你的便！ / 都听你的！</p>
              <p class="text-xs text-rose-600 font-medium">Suí nǐ de biàn! / Dōu tīng nǐ de!</p>
              <p class="text-xs text-neutral-600">「好きにしなよ（お好きにどうぞ）！」「全部君に任せるよ！」という表現。前者はやや突き放すニュアンスにも使え、後者は優しく相手に委ねるニュアンスになります。</p>
            </div>

            <!-- Card 5 -->
            <div onclick="speak('真有两下子！深藏不露啊！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">You have got skills! / Still waters run deep!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">真有两下子！ / 深藏不露啊！</p>
              <p class="text-xs text-rose-600 font-medium">Zhēn yǒu liǎng xiàzi! / Shēn cáng bú lù a!</p>
              <p class="text-xs text-neutral-600">「なかなかやるね（腕があるね）！」「能ある鷹は爪を隠すだね！」と、普段は控えめな人がすごい特技を見せたときに感心して使う褒め言葉です。</p>
            </div>

            <!-- Card 6 -->
            <div onclick="speak('这下完了！完蛋了！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">We are doomed! / Oh no, I messed up!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">这下完了！ / 完蛋了！</p>
              <p class="text-xs text-rose-600 font-medium">Zhèxià wán le! / Wándàn le!</p>
              <p class="text-xs text-neutral-600">「うわ、これで終わった！」「やばい、万事休すだ！」と、うっかりミスや大ピンチに気づいた瞬間に口から出るリアクションです。</p>
            </div>
          </div>
        </section>

        <!-- Section 2: Detailed Grammar Explanations -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 深掘り解説：推測・推量の高度表現（「恐怕 / 未必 / 莫非」）</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 懸念を含む推量「恐怕 (kǒngpà)」と、慎重な部分否定「未必 (wèibì)」</h4>
              <p class="text-neutral-600">
                ・<strong>恐怕（おそらく〜だろう・〜かもしれない）：</strong>単なる推測ではなく、話し手の<strong>「心配・懸念・遠慮」</strong>の気持ちが含まれるB2重要副詞です。断りを柔らかく伝えるときにも重宝します。<br>
                例：<code class="bg-neutral-100 px-1 rounded">照这个速度下去，今天恐怕完不成任务了。</code>（このペースだと、今日はおそらくタスクを終えられないだろう）<br>
                ・<strong>未必（必ずしも〜とは限らない）：</strong>「不一定」の書き言葉寄りの洗練された表現で、断定を避けて冷静な見方を示します。<br>
                例：<code class="bg-neutral-100 px-1 rounded">价格贵的东西，质量未必就一定好。</code>（値段が高いものだからといって、品質が必ずしも良いとは限らない）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 強い推測・疑問を投げかける「莫非 (mòfēi / まさか〜ではあるまいな)」と「多半 (duōbàn / たぶん・十中八九)」</h4>
              <p class="text-neutral-600">
                ・<strong>莫非（まさか〜なのか？）：</strong>相手の様子や状況からハッと気づいて問いかけるときに使い、文末に「吧 / 吗 / 不成」を伴うことが多いです。<br>
                例：<code class="bg-neutral-100 px-1 rounded">他今天这么开心，莫非是升职加薪了？</code>（彼、今日あんなに嬉しそうだけど、まさか昇進して給料が上がったのかな？）<br>
                ・<strong>多半（たぶん・大部分は）：</strong>確率がかなり高い（7〜8割方）と推測するときの口語・書き言葉両用の副詞です。<br>
                例：<code class="bg-neutral-100 px-1 rounded">这么晚还没回消息，他多半已经睡着了。</code>（こんなに遅くまで返信がないということは、彼はたぶんもう寝てしまったのだろう）
              </p>
            </div>
          </div>
        </section>

        <!-- Section 3: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">3. 実践会話：相槌 × 推測・推量構文（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('这下完了！我把明天早会要用的演示文稿忘在家里了，今天恐怕得加班重做了。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Zhèxià wán le! Wǒ bǎ míngtiān zǎohuì yào yòng de yǎnshì wéngǎo wàng zài jiālǐ le, jīntiān kǒngpà děi jiābān chóngzuò le.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">这下完了！我把明天早会要用的演示文稿忘在家里了，今天恐怕得加班重做了。</p>
                <p class="text-xs text-neutral-500">うわ、これで終わった！明日の朝礼で使うプレゼン資料を家に忘れてきちゃったよ、今日はおそらく残業して作り直さないといけないな。</p>
              </div>
            </div>

            <div onclick="speak('不至于吧？重做也太费时间了。你家里现在没人吗？莫非不能让家人帮你拍张照片发过来？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-rose-100 text-rose-700 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-rose-600">Bさん（相槌＋「莫非」！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Bú zhìyú ba? Chóngzuò yě tài fèi shíjiān le. Nǐ jiālǐ xiànzài méi rén ma? Mòfēi bù néng ràng jiārén bāng nǐ pāi zhāng zhàopiàn fā guòlái?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">不至于吧？重做也太费时间了。你家里现在没人吗？莫非不能让家人帮你拍张照片发过来？</p>
                <p class="text-xs text-neutral-500">そこまではないでしょ？作り直すなんて時間がかかりすぎるよ。今家には誰もいないの？まさか家族に写真を撮って送ってもらうこともできないの？</p>
              </div>
            </div>

            <div onclick="speak('说得轻巧！我电脑设了复杂密码，他们多半打不开。算了，我还是中午抽空回家拿一趟吧！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん（相槌＋「多半」！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Shuō de qīngqiǎo! Wǒ diànnǎo shè le fùzá mìmǎ, tāmen duōbàn dǎbukāi. Suàn le, wǒ háishi zhōngwǔ chōukòng huíjiā ná yí tàng ba!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">说得轻巧！我电脑设了复杂密码，他们多半打不开。算了，我还是中午抽空回家拿一趟吧！</p>
                <p class="text-xs text-neutral-500">言うのは簡単だよ！パソコンに複雑なパスワードをかけているから、たぶん開けられないよ。もういいや、やっぱり昼休みに時間を作って一度家に取りに帰るよ！</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 4: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">4. Day 39 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 相槌クイズ：Easier said than done!</span>
            <p class="font-medium text-neutral-900">当事者でもないのに気楽なアドバイスをしてくる相手に「言うのは簡単だよ！」とツッコむときの自然な相槌は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 说得轻巧！(Shuō de qīngqiǎo!) は「言うのは簡単だよ！」の定番リアクションです。', '不正解！ 真有两下子 は「なかなかやるね・腕があるね」という褒め言葉です。', '说得轻巧')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 说得轻巧！ (Shuō de qīngqiǎo!)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 说得轻巧！(Shuō de qīngqiǎo!) は「言うのは簡単だよ！」の定番リアクションです。', '不正解！ 真有两下子 は「なかなかやるね・腕があるね」という褒め言葉です。', '说得轻巧')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 真有两下子！ (Zhēn yǒu liǎng xiàzi!)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：No way!</span>
            <p class="font-medium text-neutral-900">「考えることすらやめな・絶対ムリ！（想[ ]别想！）」の空欄に入る一文字は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>想</span>
              <span onclick="revealAnswer(2, 'dōu (都)', '想都别想')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>别想！</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：It cannot be that bad!</span>
            <p class="font-medium text-neutral-900">「そこまではないでしょ？（bú zhìyú ba）」の漢字4文字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-44 bg-white">
              <button onclick="checkInput(3, ['不至于吧', '不至於吧'], '不至于吧')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 選択問題：部分否定の推量「未必」</span>
            <p class="font-medium text-neutral-900">「値段が高いものだからといって、品質が必ずしも良いとは限らない（价格贵的东西，质量[ ]就一定好）」の空欄に入る副詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 未必 (wèibì) は「必ずしも〜とは限らない」を表す洗練された部分否定表現です。', '不正解！ 莫非 は「まさか〜ではあるまいな」と疑問を投げかける副詞です。', '价格贵的东西，质量未必就一定好')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 未必 (wèibì)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 未必 (wèibì) は「必ずしも〜とは限らない」を表す洗練された部分否定表現です。', '不正解！ 莫非 は「まさか〜ではあるまいな」と疑問を投げかける副詞です。', '价格贵的东西，质量未必就一定好')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 莫非 (mòfēi)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「うわ、これで終わった！今日はおそらく残業して作り直さないといけないな。」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '这下完了！今天恐怕得加班重做了。', '这下完了！今天恐怕得加班重做了。')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 5: C-POP Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 39 Special • Iconic Youth Movie Theme
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              5. 田馥甄（Hebe Tien）『小幸运』に学ぶ気づきの「原来」と願望表現
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              中華圏で大ブームを巻き起こした青春映画の主題歌から、かけがえのない日常の幸福に気づく名フレーズを味わおう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">小幸运 (Xiǎo Xìngyùn / A Little Happiness)</h4>
                <p class="text-xs text-neutral-500">原唱：田馥甄 (Hebe Tien)</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【楽曲コラム：『小幸运』と流行語になったタイトル】</strong><br>
              映画『我的少女时代（私の少女時代）』の主題歌として2015年に公開され、YouTubeで中華圏アーティスト史上初の1億回再生を突破した国民的名曲。曲名の「小幸运（ささやかな幸運）」は、日常の中の小さな幸せを表す言葉として中国語圏で広く定着しました。
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
                  <span class="font-bold text-lg text-rose-950">原来你是我最想留住的幸运，原来我们和爱情曾经靠得那么近</span>
                  <button onclick="speak('原来你是我最想留住的幸运，原来我们和爱情曾经靠得那么近')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Yuánlái nǐ shì wǒ zuì xiǎng liúzhù de xìngyùn, yuánlái wǒmen hé àiqíng céngjīng kào de nàme jìn</p>
                <p class="text-neutral-700 font-medium">君こそが僕が一番引き留めたかった幸運だったんだね、僕たちはかつて愛とあんなにも近くに寄り添っていたんだね</p>
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
                  <span class="font-bold text-neutral-900">ハッと悟る発見の副詞「原来 (yuánlái)」と結果補語「留住 (liúzhù / 引き留める)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  ここでの <code class="bg-neutral-200 px-1 rounded">原来</code> は「もともとは」という意味ではなく、今まで気づかなかった真実にハッと気づいたときの<strong>「なんだ、〜だったのか／〜だったんだね」</strong>という発見のニュアンスです。また、<code class="bg-neutral-200 px-1 rounded">留住</code> の <code class="bg-neutral-200 px-1 rounded">住</code> は動作の結果がしっかり固定・維持されることを表す結果補語（例：<code class="bg-neutral-200 px-1 rounded">记住</code>＝しっかり覚える、<code class="bg-neutral-200 px-1 rounded">抓住</code>＝しっかり掴む）です。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
