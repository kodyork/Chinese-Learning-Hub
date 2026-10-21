const day12Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 12 Focus: Hobbies, Weekend Activities & "爱好"</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 12: 趣味と休日の過ごし方 ＆ 「爱好・喜欢」
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">
                Share your interests with "我的爱好是..." (My hobby is...) or "我喜欢..." (I like...). Learn vocabulary for music, movies, travel, and sports.
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：趣味の尋ね方・「喜欢」・動詞＋名詞の表現</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 趣味を尋ねる：「你有什么爱好？（趣味は何ですか？）」</h4>
              <p class="text-neutral-600">
                「爱好（àihào）」は「趣味」の意味です。「你有什么爱好？（Nǐ yǒu shénme àihào?）」で相手の趣味を聞くことができます。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 好きなことを伝える：「我喜欢...（〜が好きです）」</h4>
              <p class="text-neutral-600">
                「喜欢（xǐhuan）」の後に動詞や名詞を置くだけで、好きな活動を簡単に表現できます。<br>
                ・<strong>看电影（kàn diànyǐng）:</strong> 映画を見る<br>
                ・<strong>听音乐（tīng yīnyuè）:</strong> 音楽を聴く<br>
                ・<strong>去旅游（qù lǚyóu）:</strong> 旅行に行く
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">③ 週末・休日の言い方：「周末（zhōumò / 週末）」</h4>
              <p class="text-neutral-600">
                「周末你喜欢做什么？（Zhōumò nǐ xǐhuan zuò shénme? / 週末は何をするのが好きですか？）」と尋ねると会話が弾みます！
              </p>
            </div>
          </div>

          <!-- Japanese Tips Column -->
          <div class="bg-rose-50/80 border border-rose-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-2 text-rose-800 font-bold text-base">
              <i data-lucide="lightbulb" class="w-5 h-5 text-rose-600"></i>
              <span>日本人向けTips：「看」の多様な意味 ＆ 中国若者のトレンド趣味</span>
            </div>
            <div class="text-xs text-neutral-700 leading-relaxed space-y-3">
              <p>
                <strong>【語彙Tips：「看（kàn）」万能説】</strong><br>
                中国語の「看」は「見る（看电影）」だけでなく、「読む（看书 / 本を読む）」や「（テレビ・動画を）視聴する（看电视）」など、目を使う活動全般に使えるとても便利な動詞です！
              </p>
              <p>
                <strong>【雑学：中国若者の最新トレンディ趣味『剧本杀』と『户外』】</strong><br>
                近年の中国若者の間では、マーダーミステリー（剧本杀 / jùběnshā）や、キャンプ・登山などのアウトドア（户外 / hùwài）が大流行しています。
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 趣味と休日会話（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('你有什么爱好？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Nǐ yǒu shénme àihào?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">你有什么爱好？</p>
                <p class="text-xs text-neutral-500">（友人）何か趣味はありますか？</p>
              </div>
            </div>

            <div onclick="speak('我的爱好是看电影和听音乐。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Wǒ de àihào shì kàn diànyǐng hé tīng yīnyuè.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">我的爱好是看电影和听音乐。</p>
                <p class="text-xs text-neutral-500">（あなた）私の趣味は映画鑑賞と音楽を聴くことです。</p>
              </div>
            </div>

            <div onclick="speak('周末你喜欢做什么？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Zhōumò nǐ xǐhuan zuò shénme?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">周末你喜欢做什么？</p>
                <p class="text-xs text-neutral-500">（友人）週末は何をするのが好きですか？</p>
              </div>
            </div>

            <div onclick="speak('我喜欢和朋友一起去旅游。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Wǒ xǐhuan hé péngyou yìqǐ qù lǚyóu.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">我喜欢和朋友一起去旅游。</p>
                <p class="text-xs text-neutral-500">（あなた）友達と一緒に旅行に行くのが好きです。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes (10 Questions) -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 12 実践クイズ（全10問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">10 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：趣味</span>
            <p class="font-medium text-neutral-900">「趣味」を意味する中国語はどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 爱好 (àihào) で「趣味」になります。', '不正解！ 工作は「仕事」です。', '爱好')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 爱好 (àihào)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 爱好 (àihào) で「趣味」になります。', '不正解！ 工作は「仕事」です。', '爱好')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 工作 (gōngzuò)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 選択問題：映画を見る</span>
            <p class="font-medium text-neutral-900">「映画を見る」を意味するフレーズは？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(2, 0, 0, '正解！ 看电影 (kàn diànyǐng) で「映画を見る」となります。', '不正解！ 听音乐は「音楽を聴く」です。', '看电影')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 看电影 (kàn diànyǐng)</button>
              <button onclick="checkQuiz(2, 1, 0, '正解！ 看电影 (kàn diànyǐng) で「映画を見る」となります。', '不正解！ 听音乐は「音楽を聴く」です。', '看电影')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 听音乐 (tīng yīnyuè)</button>
            </div>
            <div id="q2-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. 選択問題：旅行</span>
            <p class="font-medium text-neutral-900">「旅行に行く」を意味する中国語はどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(3, 0, 0, '正解！ 去旅游 (qù lǚyóu) で「旅行に行く」になります。', '不正解！ 学习は「勉強する」です。', '去旅游')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 去旅游 (qù lǚyóu)</button>
              <button onclick="checkQuiz(3, 1, 0, '正解！ 去旅游 (qù lǚyóu) で「旅行に行く」になります。', '不正解！ 学习は「勉強する」です。', '去旅游')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 学习 (xuéxí)</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 穴押し問題：好き</span>
            <p class="font-medium text-neutral-900">「〜するのが好き」の「好き（xǐhuan）」は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Wǒ</span>
              <span onclick="revealAnswer(4, 'xǐhuan (喜欢)', '喜欢')" id="q4-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>kàn diànyǐng.</span>
            </div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 穴押し問題：音楽を聴く</span>
            <p class="font-medium text-neutral-900">「音楽を聴く」の「聴く（tīng）」は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'tīng (听)', '听')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>yīnyuè.</span>
            </div>
          </div>

          <!-- Q6 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q6. 穴押し問題：週末</span>
            <p class="font-medium text-neutral-900">「週末」を意味する言葉「周末（zhōumò）」は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(6, 'Zhōumò (周末)', '周末')" id="q6-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>nǐ xǐhuan zuò shénme?</span>
            </div>
          </div>

          <!-- Q7 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q7. タイピングテスト：好き</span>
            <p class="font-medium text-neutral-900">「好き（xǐhuan）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q7-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(7, ['喜欢', '喜歡'], '喜欢')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q7-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q8 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q8. タイピングテスト：映画</span>
            <p class="font-medium text-neutral-900">「映画（diànyǐng）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q8-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(8, ['电影', '電影'], '电影')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q8-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q9 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q9. 語彙応用：「看」の使われ方</span>
            <p class="font-medium text-neutral-900">「本を読む」という時の中国語「看书（kàn shū）」に使われる動詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(9, 0, 0, '正解！ 中国語では「本を読む」時も「看 (kàn)」を使います。', '不正解！ 读も使えますが「看」が最も一般的です。', '看')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 看 (kàn)</button>
              <button onclick="checkQuiz(9, 1, 0, '正解！ 中国語では「本を読む」時も「看 (kàn)」を使います。', '不正解！ 读も使えますが「看」が最も一般的です。', '看')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 听 (tīng)</button>
            </div>
            <div id="q9-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q10 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q10. 総合復習：自己紹介表現</span>
            <p class="font-medium text-neutral-900">「私の趣味は映画鑑賞と音楽を聴くことです」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(10, 'Wǒ de àihào shì kàn diànyǐng hé tīng yīnyuè. (我的爱好是看电影和听音乐。)', '我的爱好是看电影和听音乐')" id="q10-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>

        </section>
      </main>
    `;
  }
};
