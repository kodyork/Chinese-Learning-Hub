const day14Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="trophy" class="w-3.5 h-3.5"></i>
            <span>Day 14 Focus: Week 2 Comprehensive Review & Graduation Test</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 14: Week 2 総合復習 ＆ 2週間達成確認テスト
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">Week 2 Milestone:</strong>
              <span class="ml-1 text-neutral-300">
                Congratulations on completing Week 2! Review hotel check-ins, medical emergencies, making plans, asking directions, discussing hobbies, and polite expressions.
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

        <!-- Section 1: Week 2 Essence Summary -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. Week 2 必修重要フレーズプレイバック</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm space-y-2">
              <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Day 08 - 09</span>
              <h4 class="font-bold text-neutral-900">ホテルとトラブル・体調不良</h4>
              <ul class="text-xs text-neutral-600 space-y-1 list-disc pl-4">
                <li><strong>我预订了房间。 / 请看护照。</strong>（部屋を予約しました/パスポート）</li>
                <li><strong>我身体很不舒服。</strong>（体調がとても悪いです）</li>
                <li><strong>我头疼，发烧了。</strong>（頭が痛くて、熱があります）</li>
              </ul>
            </div>

            <div class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm space-y-2">
              <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Day 10 - 11</span>
              <h4 class="font-bold text-neutral-900">約束・時間・道案内</h4>
              <ul class="text-xs text-neutral-600 space-y-1 list-disc pl-4">
                <li><strong>明天下午你打算做什么？</strong>（明日の午後何する予定？）</li>
                <li><strong>两点半在地铁站见！</strong>（2時半に地下鉄の駅で会いましょう）</li>
                <li><strong>一直走，往左拐。</strong>（まっすぐ行って左に曲がる）</li>
              </ul>
            </div>

            <div class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm space-y-2">
              <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Day 12 - 13</span>
              <h4 class="font-bold text-neutral-900">趣味交流とマナー言語</h4>
              <ul class="text-xs text-neutral-600 space-y-1 list-disc pl-4">
                <li><strong>我的爱好是看电影。</strong>（趣味は映画鑑賞です）</li>
                <li><strong>不好意思，让一下。</strong>（すみません、ちょっと通してください）</li>
                <li><strong>太谢谢你了，麻烦你了！</strong>（本当にお世話になりました）</li>
              </ul>
            </div>

            <div class="bg-rose-50/80 border border-rose-200/80 rounded-xl p-5 shadow-sm space-y-2">
              <span class="text-xs font-bold text-neutral-900 bg-white px-2.5 py-0.5 rounded-full border border-rose-200">重要文法ルール</span>
              <h4 class="font-bold text-neutral-900">Week 2 構文の要点</h4>
              <p class="text-xs text-neutral-700 leading-relaxed">
                ・<strong>時間詞の置く位置:</strong> 「主語＋時間＋動詞」（我明天去）<br>
                ・<strong>「2」の使い分け:</strong> 数量・時刻は「两（两点 / 两张）」<br>
                ・<strong>要...了:</strong> 間近の未来・変化（要退房了）
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Real Life Dialogue Simulation -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 実践シミュレーション会話（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('你好，我预订了房间，这是我的护照。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Nǐ hǎo, wǒ yùdìng le fángjiān, zhè shì wǒ de hùzhào.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">你好，我预订了房间，这是我的护照。</p>
                <p class="text-xs text-neutral-500">（チェックイン）こんにちは、部屋を予約しました。私のパスポートです。</p>
              </div>
            </div>

            <div onclick="speak('请问，洗手间怎么走？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Qǐngwèn, xǐshǒujiān zěnme zǒu?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">请问，洗手间怎么走？</p>
                <p class="text-xs text-neutral-500">（道案内）すみません、お手洗いはどう行けばいいですか？</p>
              </div>
            </div>

            <div onclick="speak('明天下午两点半，我们在地铁站见！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Míngtiān xiàwǔ liǎng diǎn bàn, wǒmen zài dìtiězhàn jiàn!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">明天下午两点半，我们在地铁站见！</p>
                <p class="text-xs text-neutral-500">（約束）明日の午後2時半、地下鉄の駅で会いましょう！</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Week 2 Graduation Quiz (10 Questions) -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Week 2 卒業確認テスト（全10問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">10 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. ホテル単語</span>
            <p class="font-medium text-neutral-900">ホテルのチェックインで渡す「パスポート」の中国語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 护照 (hùzhào) です。', '不正解！ 房卡はルームキーです。', '护照')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 护照 (hùzhào)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 护照 (hùzhào) です。', '不正解！ 房卡はルームキーです。', '护照')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 房卡 (fángkǎ)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 体調不良</span>
            <p class="font-medium text-neutral-900">「頭が痛い（頭痛）」を表す中国語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(2, 0, 0, '正解！ 头疼 (tóuténg) は頭痛のことです。', '不正解！ 发烧は発熱です。', '头疼')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 头疼 (tóuténg)</button>
              <button onclick="checkQuiz(2, 1, 0, '正解！ 头疼 (tóuténg) は頭痛のことです。', '不正解！ 发烧は発熱です。', '头疼')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 发烧 (fāshāo)</button>
            </div>
            <div id="q2-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. 時間表現</span>
            <p class="font-medium text-neutral-900">「2時半」の正しい中国語表現は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(3, 0, 0, '正解！ 时刻の2時は「两点半 (liǎng diǎn bàn)」です。', '不正解！ 二点半とは言いません。', '两点半')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 两点半 (liǎng diǎn bàn)</button>
              <button onclick="checkQuiz(3, 1, 0, '正解！ 时刻の2時は「两点半 (liǎng diǎn bàn)」です。', '不正解！ 二点半とは言いません。', '两点半')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 二点半 (èr diǎn bàn)</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 穴押し問題：行き方</span>
            <p class="font-medium text-neutral-900">「〜へはどう行きますか？」の「行き方（zěnme zǒu）」は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Qǐngwèn, xǐshǒujiān</span>
              <span onclick="revealAnswer(4, 'zěnme zǒu (怎么走)', '怎么走')" id="q4-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>?</span>
            </div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 穴押し問題：曲がる</span>
            <p class="font-medium text-neutral-900">「左に曲がる」の「〜へ曲がる（wǎng zuǒ guǎi）」は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Zài qiánmiàn</span>
              <span onclick="revealAnswer(5, 'wǎng zuǒ guǎi (往左拐)', '往左拐')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>.</span>
            </div>
          </div>

          <!-- Q6 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q6. 穴押し問題：すみません</span>
            <p class="font-medium text-neutral-900">「すみません、ちょっと通してください」の「すみません（bù hǎoyìsi）」は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(6, 'Bù hǎoyìsi (不好意思)', '不好意思')" id="q6-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>, ràng yíxià.</span>
            </div>
          </div>

          <!-- Q7 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q7. タイピングテスト：映画を見る</span>
            <p class="font-medium text-neutral-900">「映画を見る（kàn diànyǐng）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q7-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(7, ['看电影', '看電影'], '看电影')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q7-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q8 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q8. タイピングテスト：大丈夫</span>
            <p class="font-medium text-neutral-900">「大丈夫です/気にしないで（méi guānxi）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q8-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(8, ['没关系', '沒關係'], '没关系')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q8-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q9 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q9. 語順構文クイズ</span>
            <p class="font-medium text-neutral-900">「明日の午後、何をする予定ですか？」の正しい中国語の語順は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(9, 0, 0, '正解！ 時間の「明天下午」は動詞の前に配置します。', '不正解！ 時間は文末に置くことはできません。', '明天下午你打算做什么')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 明天下午你打算做什么？</button>
              <button onclick="checkQuiz(9, 1, 0, '正解！ 時間の「明天下午」は動詞の前に配置します。', '不正解！ 時間は文末に置くことはできません。', '明天下午你打算做什么')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 你打算做什么明天下午？</button>
            </div>
            <div id="q9-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q10 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q10. 総合復習：感謝と労い</span>
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
