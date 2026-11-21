const day37Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 37 Advanced Masterclass (Week 6)</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 37: 相槌・リアクション第9弾（You're telling me! / No wonder!） ＆ 逆接・転折の高度表現
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">Week 6 Native Reactions & B2-C1 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                「まったくその通り！」「道理で〜なわけだ！」と深く共感するネイティブ定番の相槌と、予想外の展開や対比を鮮やかに描く逆接表現（然而・却・反而）をマスターします。
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
              <h3 class="text-xl font-bold text-neutral-900">1. 会話が弾む！ネイティブの相槌・リアクション集（第9弾）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">Tap to Listen</span>
          </div>

          <p class="text-xs sm:text-sm text-neutral-600">
            相手の話に強く同意するとき、合点がいったとき、あるいは柔軟に「状況次第かな」と答えるときにネイティブが毎日使うリアルな相槌です。タップして音で覚えましょう！
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Card 1 -->
            <div onclick="speak('可不是嘛！谁说不是呢！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">You're telling me! / Tell me about it!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">可不是嘛！ / 谁说不是呢！</p>
              <p class="text-xs text-rose-600 font-medium">Kě búshì ma! / Shuí shuō búshì ne!</p>
              <p class="text-xs text-neutral-600">「まったくその通りだよ！」「誰がそうじゃないって言えるの（全く同感）！」と、反語の形を使って100%の共感を示すネイティブならではの相槌です。</p>
            </div>

            <!-- Card 2 -->
            <div onclick="speak('怪不得呢！原来如此！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">No wonder! / That's why!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">怪不得呢！ / 原来如此！</p>
              <p class="text-xs text-rose-600 font-medium">Guàibude ne! / Yuánlái rúcǐ!</p>
              <p class="text-xs text-neutral-600">「道理で〜なわけだ！」「なるほど、そういうことか！」と、疑問の理由がわかって膝を打つときの定番リアクションです。</p>
            </div>

            <!-- Card 3 -->
            <div onclick="speak('看情况吧。视情况而定。')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">It depends. / We'll see.</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">看情况吧。 / 视情况而定。</p>
              <p class="text-xs text-rose-600 font-medium">Kàn qíngkuàng ba. / Shì qíngkuàng ér dìng.</p>
              <p class="text-xs text-neutral-600">「状況次第だね」「場合によるかな」と、即答を避けて柔軟に返したいときの便利なフレーズ。後半はビジネスでも使えるスマートな表現です。</p>
            </div>

            <!-- Card 4 -->
            <div onclick="speak('太够意思了！真仗义！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">You're a lifesaver! / So loyal!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">太够意思了！ / 真仗义！</p>
              <p class="text-xs text-rose-600 font-medium">Tài gòu yìsi le! / Zhēn zhàngyì!</p>
              <p class="text-xs text-neutral-600">「本当に義理堅いね！」「頼りになるなぁ、最高！」と、友人が助けてくれたり気前よく奢ってくれたりしたときに大喜びで伝える表現です。</p>
            </div>

            <!-- Card 5 -->
            <div onclick="speak('差不多得了！见好就收吧！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Quit while you're ahead! / That's enough!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">差不多得了！ / 见好就收吧！</p>
              <p class="text-xs text-rose-600 font-medium">Chàbuduō dé le! / Jiàn hǎo jiù shōu ba!</p>
              <p class="text-xs text-neutral-600">「もうその辺にしておきなよ」「良いところで切り上げようよ」と、深追いしすぎる相手を軽くたしなめたりアドバイスしたりするときに使います。</p>
            </div>

            <!-- Card 6 -->
            <div onclick="speak('白忙活一场！功亏一篑！')" class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm hover:border-rose-300 hover:bg-rose-50/20 transition cursor-pointer space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">All for nothing! / So close yet so far!</span>
                <i data-lucide="volume-2" class="w-4 h-4 text-neutral-400"></i>
              </div>
              <p class="text-lg font-bold text-neutral-900 pt-1">白忙活一场！ / 功亏一篑！</p>
              <p class="text-xs text-rose-600 font-medium">Bái mánghuo yì chǎng! / Gōng kuī yí kuì!</p>
              <p class="text-xs text-neutral-600">「完全に骨折り損だった！」「あと一歩のところで台無しになった！」と、努力が報われなかったときの悔しさを表す表現です。</p>
            </div>
          </div>
        </section>

        <!-- Section 2: Detailed Grammar Explanations -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 深掘り解説：逆接・転折の高度表現（「然而 / 却 / 反而」）</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 改まった転折「然而 (rán'ér)」と、主語の後ろに置く副詞「却 (què)」</h4>
              <p class="text-neutral-600">
                ・<strong>然而（接続詞）：</strong>「しかし・しかしながら」を表す書き言葉・スピーチ向けの逆接で、文頭に置きます。<br>
                ・<strong>却（副詞）：</strong>「〜なのに、かえって…」と予想外の転折を表します。<strong>必ず主語の後ろ・動詞の前</strong>に置く語順ルールが重要です。<br>
                ・<code class="bg-neutral-100 px-1 rounded">理想很丰满，然而现实却很骨感。</code>（理想は豊かだが、現実はとても厳しい）<br>
                ・<code class="bg-neutral-100 px-1 rounded">大家都劝他休息，他却坚持要把工作做完。</code>（みんな彼に休むよう勧めたが、彼はそれでも仕事をやり遂げると言い張った）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 予想と真逆の結果になる「反而 (fǎn'ér / かえって・むしろ逆に)」</h4>
              <p class="text-neutral-600">
                通常の予測や期待とは<strong>正反対の結果</strong>が生じたことを強調するB2必須の副詞です。「不但没…，反而…（〜しないどころか、かえって…）」の形でも頻繁に使われます。<br>
                ・<code class="bg-neutral-100 px-1 rounded">吃了药以后，病不但没好，反而更严重了。</code>（薬を飲んだ後、病気は良くならないどころか、かえってひどくなった）<br>
                ・<code class="bg-neutral-100 px-1 rounded">遇到挫折不要灰心，有时候坏事反而会变成好事。</code>（挫折に遭っても落胆しないで、時には悪いことがかえって良いことに変わることもある）
              </p>
            </div>
          </div>
        </section>

        <!-- Section 3: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">3. 実践会話：相槌 × 逆接・転折構文（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('听说小李为了准备这次提案熬了好几个通宵，结果客户却临时改变了主意，真是白忙活一场！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Tīngshuō Xiǎo Lǐ wèile zhǔnbèi zhè cì tí'àn áo le hǎo jǐ ge tōngxiāo, jiéguǒ kèhù què línshí gǎibiàn le zhǔyi, zhēn shì bái mánghuo yì chǎng!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">听说小李为了准备这次提案熬了好几个通宵，结果客户却临时改变了主意，真是白忙活一场！</p>
                <p class="text-xs text-neutral-500">李くんは今回の企画案を準備するために何日も徹夜したのに、結局クライアントが土壇場で考えを変えたんだって、本当に骨折り損だったね！</p>
              </div>
            </div>

            <div onclick="speak('可不是嘛！怪不得他今天看起来那么沮丧。不过塞翁失马，说不定这次经验反而能帮他拿下下一个大项目呢！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-rose-100 text-rose-700 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-rose-600">Bさん（相槌2連発＋「反而」！）</span>
                <span class="font-bold text-lg text-neutral-900 block">Kě búshì ma! Guàibude tā jīntiān kàn qǐlái nàme jǔsàng. Búguò sàiwēng shīmǎ, shuōbudìng zhè cì jīngyàn fǎn'ér néng bāng tā náxià xià yí ge dà xiàngmù ne!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">可不是嘛！怪不得他今天看起来那么沮丧。不过塞翁失马，说不定这次经验反而能帮他拿下下一个大项目呢！</p>
                <p class="text-xs text-neutral-500">まったくその通りだよ！道理で彼、今日あんなに落ち込んでいるように見えたわけだ。でも人間万事塞翁が馬、もしかしたら今回の経験がかえって次の大型案件を勝ち取る助けになるかもしれないよ！</p>
              </div>
            </div>

            <div onclick="speak('你真会安慰人，太够意思了！下班后我请他喝一杯，好好开导开导他。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="text-xs font-bold text-neutral-400">Aさん</span>
                <span class="font-bold text-lg text-neutral-900 block">Nǐ zhēn huì ānwèi rén, tài gòu yìsi le! Xiàbān hòu wǒ qǐng tā hē yì bēi, hǎohāo kāidǎo kāidǎo tā.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">你真会安慰人，太够意思了！下班后我请他喝一杯，好好开导开导他。</p>
                <p class="text-xs text-neutral-500">君は本当に励まし上手だね、最高に義理堅いよ！仕事終わりに私が一杯奢って、じっくり元気づけてあげるよ。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 4: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">4. Day 37 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 相槌クイズ：You're telling me!</span>
            <p class="font-medium text-neutral-900">相手の意見に「まったくその通りだよ！」と強く共感するときのネイティブ定番の相槌は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 可不是嘛！(Kě búshì ma!) は「まったくその通りだよ！」の超定番リアクションです。', '不正解！ 看情况吧 は「状況次第だね」の意味です。', '可不是嘛')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 可不是嘛！ (Kě búshì ma!)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 可不是嘛！(Kě búshì ma!) は「まったくその通りだよ！」の超定番リアクションです。', '不正解！ 看情况吧 は「状況次第だね」の意味です。', '可不是嘛')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 看情况吧。 (Kàn qíngkuàng ba.)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：No wonder!</span>
            <p class="font-medium text-neutral-900">「道理で〜なわけだ！（怪不[ ]呢！）」の空欄に入る一文字は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>怪不</span>
              <span onclick="revealAnswer(2, 'de (得)', '怪不得呢')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>呢！</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：It depends.</span>
            <p class="font-medium text-neutral-900">「状況次第だね・場合によるかな（kàn qíngkuàng ba）」の漢字4文字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-44 bg-white">
              <button onclick="checkInput(3, ['看情况吧', '看情況吧'], '看情况吧')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 選択問題：予想と逆の結果「反而」</span>
            <p class="font-medium text-neutral-900">「薬を飲んだ後、病気は良くならないどころか、かえってひどくなった（病不但没好，[ ]更严重了）」の空欄に入る副詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 反而 (fǎn'ér) は予想と正反対の結果が生じたときに使う「かえって」です。', '不正解！ 从而 は「それによって（結果・目的）」を表す順接表現です。', '病不但没好，反而更严重了')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 反而 (fǎn'ér)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 反而 (fǎn'ér) は予想と正反対の結果が生じたときに使う「かえって」です。', '不正解！ 从而 は「それによって（結果・目的）」を表す順接表現です。', '病不但没好，反而更严重了')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 从而 (cóng'ér)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「まったくその通りだよ！道理で彼、今日あんなに落ち込んでいるように見えたわけだ。」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '可不是嘛！怪不得他今天看起来那么沮丧。', '可不是嘛！怪不得他今天看起来那么沮丧。')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 5: C-POP Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 37 Special • Queen of Love Songs
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              5. 梁静茹（Fish Leong）『勇气』に学ぶ一歩踏み出す決意の表現
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              中華圏カラオケで世代を超えて歌い継がれる応援バラードの金字塔から、心の強さを語るフレーズを学ぼう！
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
              <strong>【楽曲コラム：『勇气』と日常の決めゼリフ】</strong><br>
              「ラブソングの女王」梁静茹の名を一躍不動のものにした2000年の代表作。サビの「爱真的需要勇气（愛には本当に勇気が必要だ）」はあまりにも有名で、現在でも中華圏の日常会話やSNSで「何か大きな決断をするとき」にユーモアや決意を込めて引用される国民的フレーズになっています。
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
                <p class="text-rose-600 pinyin-text font-medium">Ài zhēn de xūyào yǒngqì, lái miànduì liúyán fēiyǔ</p>
                <p class="text-neutral-700 font-medium">愛には本当に勇気が必要なんだ、根拠のない噂話に立ち向かうための勇気が</p>
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
                  <span class="font-bold text-neutral-900">目的を示す「需要 A，来 B（BするためにAが必要だ）」と四字熟語「流言蜚语」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  後半の <code class="bg-neutral-200 px-1 rounded">来</code> は「来る」ではなく、前段の手段・資源（<code class="bg-neutral-200 px-1 rounded">需要勇气</code>）を受けて「〜するために・もって〜する」と目的をつなぐ重要な連動構文の接続詞です（例：<code class="bg-neutral-200 px-1 rounded">用行动来证明</code>＝行動で証明する）。また、<code class="bg-neutral-200 px-1 rounded">流言蜚语 (liúyán fēiyǔ)</code> は「根拠のない噂話・中傷」を表す洗練された四字熟語です。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
