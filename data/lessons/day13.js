const day13Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 13 Focus: Gratitude, Apology & "不好意思"</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 13: 感謝と丁寧なお詫び ＆ 万能フレーズ「不好意思」
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">
                Master politeness with "不好意思" (bù hǎoyìsi = Excuse me / Sorry). Learn "麻烦你了" (Thanks for your assistance) and responses like "不客气" and "没关系".
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：万能フレーズ「不好意思」・感謝・返し方</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 万能クッション言葉：「不好意思（bù hǎoyìsi）」</h4>
              <p class="text-neutral-600">
                日本語の「すみません」に最も近い万能表現です。<br>
                ・人に声をかける時（Excuse me）<br>
                ・ちょっとしたお詫び（Sorry）<br>
                ・恐縮しながら感謝を伝える時（Thank you for trouble）など、日常で最もよく使われます。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 丁寧な感謝：「麻烦你了（máfan nǐ le / 手数をかけました）」</h4>
              <p class="text-neutral-600">
                単に「谢谢」と言うだけでなく、何かをお願いした後に<strong>「麻烦你了（お手数をおかけしました/よろしくお願いします）」</strong>を添えると、一気にネイティブらしく丁寧になります。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">③ 感謝と謝罪への返し方：「不客气」＆「没关系」</h4>
              <p class="text-neutral-600">
                ・<strong>不客气（bú kèqi）:</strong> 「谢谢」に対する返答（どういたしまして）<br>
                ・<strong>没关系（méi guānxi）:</strong> 「对不起 / 不好意思」に対する返答（気にしないで/大丈夫です）
              </p>
            </div>
          </div>

          <!-- Japanese Tips Column -->
          <div class="bg-rose-50/80 border border-rose-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-2 text-rose-800 font-bold text-base">
              <i data-lucide="lightbulb" class="w-5 h-5 text-rose-600"></i>
              <span>日本人向けTips：「对不起」と「不好意思」のニュアンスの違い</span>
            </div>
            <div class="text-xs text-neutral-700 leading-relaxed space-y-3">
              <p>
                <strong>【使い分けTips：「对不起」は重い！？】</strong><br>
                「对不起（duìbuqǐ）」は明確な過失や大きな失敗に対して謝罪する時の重い言葉（Sorry）です。肩がぶつかった程度や店員さんを呼ぶ時は、軽やかで柔らかい「不好意思」を使うのが自然です！
              </p>
              <p>
                <strong>【親しい間柄での「不用谢」】</strong><br>
                友達同士では「不客气」よりも「不用谢（bú yòng xiè / お礼には及ばないよ）」と言うとフランクで距離が縮まります。
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 感謝とお詫びの実践会話（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('不好意思，让一下。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Bù hǎoyìsi, ràng yíxià.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">不好意思，让一下。</p>
                <p class="text-xs text-neutral-500">（あなた）すみません、ちょっと通してください。</p>
              </div>
            </div>

            <div onclick="speak('啊，对不起！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">A, duìbuqǐ!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">啊，对不起！</p>
                <p class="text-xs text-neutral-500">（相手）あ、すみません！</p>
              </div>
            </div>

            <div onclick="speak('没关系！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Méi guānxi!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">没关系！</p>
                <p class="text-xs text-neutral-500">（あなた）大丈夫です / 気にしないでください！</p>
              </div>
            </div>

            <div onclick="speak('太谢谢你了，麻烦你了！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Tài xièxie nǐ le, máfan nǐ le!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">太谢谢你了，麻烦你了！</p>
                <p class="text-xs text-neutral-500">（あなた）本当にお世話になりました、お手数をおかけしました！</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes (10 Questions) -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 13 実践クイズ（全10問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">10 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：すみません</span>
            <p class="font-medium text-neutral-900">人に声をかける時や軽いお詫びで使う最も一般的な「すみません」は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 不好意思 (bù hǎoyìsi) は万能なすみませんです。', '不正解！ 没关系は「大丈夫」という意味の返答です。', '不好意思')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 不好意思 (bù hǎoyìsi)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 不好意思 (bù hǎoyìsi) は万能なすみませんです。', '不正解！ 没关系は「大丈夫」という意味の返答です。', '不好意思')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 没关系 (méi guānxi)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 選択問題：謝罪への返し</span>
            <p class="font-medium text-neutral-900">「不好意思」や「对不起」と言われた時の「大丈夫ですよ/気にしないで」は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(2, 0, 0, '正解！ 没关系 (méi guānxi) で「気にしないで/大丈夫」となります。', '不正解！ 不客气は感謝（谢谢）への返答です。', '没关系')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 没关系 (méi guānxi)</button>
              <button onclick="checkQuiz(2, 1, 0, '正解！ 没关系 (méi guānxi) で「気にしないで/大丈夫」となります。', '不正解！ 不客气は感謝（谢谢）への返答です。', '没关系')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 不客气 (bú kèqi)</button>
            </div>
            <div id="q2-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. 選択問題：感謝への返し</span>
            <p class="font-medium text-neutral-900">「谢谢」と言われた時の「どういたしまして」は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(3, 0, 0, '正解！ 不客气 (bú kèqi) で「どういたしまして」になります。', '不正解！ 没关系は謝罪への返答です。', '不客气')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 不客气 (bú kèqi)</button>
              <button onclick="checkQuiz(3, 1, 0, '正解！ 不客气 (bú kèqi) で「どういたしまして」になります。', '不正解！ 没关系は謝罪への返答です。', '不客气')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 没关系 (méi guānxi)</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 穴押し問題：お手数をおかけしました</span>
            <p class="font-medium text-neutral-900">「お手数をおかけしました（máfan nǐ le）」の「手数をかける（máfan）」は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(4, 'máfan (麻烦)', '麻烦')" id="q4-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>nǐ le!</span>
            </div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 穴押し問題：ちょっと譲る（通す）</span>
            <p class="font-medium text-neutral-900">「ちょっと譲ってください/通してください」の「譲る（ràng）」は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Bù hǎoyìsi,</span>
              <span onclick="revealAnswer(5, 'ràng (让)', '让')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>yíxià.</span>
            </div>
          </div>

          <!-- Q6 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q6. 穴押し問題：礼儀正しい</span>
            <p class="font-medium text-neutral-900">「不客气」の「客気（遠慮する/礼儀正しい）」は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Bú</span>
              <span onclick="revealAnswer(6, 'kèqi (客气)', '客气')" id="q6-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>.</span>
            </div>
          </div>

          <!-- Q7 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q7. タイピングテスト：ありがとう</span>
            <p class="font-medium text-neutral-900">「ありがとう（xièxie）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q7-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(7, ['谢谢', '謝謝'], '谢谢')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q7-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q8 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q8. タイピングテスト：ごめんなさい</span>
            <p class="font-medium text-neutral-900">「申し訳ありません（duìbuqǐ）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q8-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(8, ['对不起', '對不起'], '对不起')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q8-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q9 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q9. ニュアンスクイズ</span>
            <p class="font-medium text-neutral-900">「对不起」と「不好意思」のうち、より軽やかで日常のクッション言葉として最適なのは？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(9, 0, 0, '正解！ 不好意思 は「すみません」のニュアンスで最も日常的に使われます。', '不正解！ 对不起は重めの謝罪です。', '不好意思')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 不好意思 (bù hǎoyìsi)</button>
              <button onclick="checkQuiz(9, 1, 0, '正解！ 不好意思 は「すみません」のニュアンスで最も日常的に使われます。', '不正解！ 对不起は重めの謝罪です。', '不好意思')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 对不起 (duìbuqǐ)</button>
            </div>
            <div id="q9-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q10 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q10. 総合復習：感謝と気遣い</span>
            <p class="font-medium text-neutral-900">「本当にお世話になりました、お手数をおかけしました！」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(10, 'Tài xièxie nǐ le, máfan nǐ le! (太谢谢你了，麻烦你了！)', '太谢谢你了麻烦你了')" id="q10-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>

        </section>
      </main>
    `;
  }
};
