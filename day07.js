const day07Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="trophy" class="w-3.5 h-3.5"></i>
            <span>Day 07 Focus: Week 1 Comprehensive Review & Graduation Test</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 07: Week 1 総合復習 ＆ 7日間の総仕上げテスト
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">Week 1 Milestone:</strong>
              <span class="ml-1 text-neutral-300">
                You've completed 7 days of real-world Chinese! Test your mastery of greetings, ordering coffee, taking taxis, bargaining, and dining out.
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

        <!-- Section 1: Week 1 Essence Summary -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. Week 1 必修重要フレーズプレイバック</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm space-y-2">
              <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Day 01 - 02</span>
              <h4 class="font-bold text-neutral-900">自己紹介と基本の注文</h4>
              <ul class="text-xs text-neutral-600 space-y-1 list-disc pl-4">
                <li><strong>我是日本人。</strong>（私は日本人です）</li>
                <li><strong>你呢？</strong>（あなたは？）</li>
                <li><strong>我要一杯拿铁。</strong>（ラテを1杯ください）</li>
              </ul>
            </div>

            <div class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm space-y-2">
              <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Day 03 - 04</span>
              <h4 class="font-bold text-neutral-900">カスタム・会計・タクシー</h4>
              <ul class="text-xs text-neutral-600 space-y-1 list-disc pl-4">
                <li><strong>大杯，不加糖。</strong>（Lサイズ、砂糖抜きで）</li>
                <li><strong>一共多少钱？</strong>（全部でいくらですか？）</li>
                <li><strong>师傅，我去... / 在这里下。</strong>（〜まで/ここで降ります）</li>
              </ul>
            </div>

            <div class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm space-y-2">
              <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Day 05 - 06</span>
              <h4 class="font-bold text-neutral-900">買い物交渉とレストラン</h4>
              <ul class="text-xs text-neutral-600 space-y-1 list-disc pl-4">
                <li><strong>太贵了！可以便宜一点儿吗？</strong>（高すぎます！安くして）</li>
                <li><strong>服务员，点菜！</strong>（すみません、注文します！）</li>
                <li><strong>请不要放香菜，不要太辣。</strong>（パクチー抜き、辛さ控えめ）</li>
              </ul>
            </div>

            <div class="bg-rose-50/80 border border-rose-200/80 rounded-xl p-5 shadow-sm space-y-2">
              <span class="text-xs font-bold text-neutral-900 bg-white px-2.5 py-0.5 rounded-full border border-rose-200">声調の復習</span>
              <h4 class="font-bold text-neutral-900">重要変調ルールのまとめ</h4>
              <p class="text-xs text-neutral-700 leading-relaxed">
                ・<strong>3声＋3声:</strong> 前が2声に上がる（你好 Ní hǎo）<br>
                ・<strong>不＋4声:</strong> 不が2声に上がる（不要 bú yào）<br>
                ・<strong>2は数える時:</strong> 「两（liǎng）」を使う（两杯）
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Real Life Dialogue Simulation -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 通しで挑戦！上海旅行1日体験会話</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('师傅，你好！我去人民广场。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Shīfu, nǐ hǎo! Wǒ qù Rénmín Guǎngchǎng.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">师傅，你好！我去人民广场。</p>
                <p class="text-xs text-neutral-500">（タクシー）運転手さんこんにちは！人民広場までお願いします。</p>
              </div>
            </div>

            <div onclick="speak('你好，我要一杯大杯冰拿铁，不加糖。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Nǐ hǎo, wǒ yào yì bēi dàbēi bīng nátiě, bù jiā táng.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">你好，我要一杯大杯冰拿铁，不加糖。</p>
                <p class="text-xs text-neutral-500">（カフェ）こんにちは、アイスラテのLサイズを1杯、無糖でください。</p>
              </div>
            </div>

            <div onclick="speak('服务员，点菜！请不要放香菜。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Fúwùyuán, diǎncài! Qǐng bù fàng xiāngcài.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">服务员，点菜！请不要放香菜。</p>
                <p class="text-xs text-neutral-500">（ディナー）すみません、注文します！パクチーは入れないでください。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Week 1 Graduation Quiz (10 Questions) -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Week 1 卒業確認テスト（全10問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">10 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 語順クイズ</span>
            <p class="font-medium text-neutral-900">「私は日本人です」の正しい語順構造（SVO）はどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ [我 + 是 + 日本人] の英語と同じSVO構造です。', '不正解！ 英語と同じ語順にします。', '我是日本人')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 我 是 日本人 (Wǒ shì Rìběnrén)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ [我 + 是 + 日本人] の英語と同じSVO構造です。', '不正解！ 英語と同じ語順にします。', '我是日本人')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 我 日本人 是 (Wǒ Rìběnrén shì)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 数量助詞クイズ</span>
            <p class="font-medium text-neutral-900">「コーヒーを2杯ください」の「2」の表現として正しいものは？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(2, 0, 0, '正解！ 物を数える時は「两 (liǎng)」を使います。', '不正解！ 数量には「二」ではなく「两」を使います。', '两杯咖啡')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 两杯 (Liǎng bēi)</button>
              <button onclick="checkQuiz(2, 1, 0, '正解！ 物を数える時は「两 (liǎng)」を使います。', '不正解！ 数量には「二」ではなく「两」を使います。', '两杯咖啡')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 二杯 (Èr bēi)</button>
            </div>
            <div id="q2-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タクシーの呼びかけ</span>
            <p class="font-medium text-neutral-900">タクシーの運転手さんへの呼びかけは？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(3, 0, 0, '正解！ 师傅 (shīfu) です。', '不正解！ 正解は师傅です。', '师傅')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 师傅 (shīfu)</button>
              <button onclick="checkQuiz(3, 1, 0, '正解！ 师傅 (shīfu) です。', '不正解！ 正解は师傅です。', '师傅')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 服务员 (fúwùyuán)</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 穴押し問題：いくらですか</span>
            <p class="font-medium text-neutral-900">「全部でいくらですか？」の「いくら（duōshao qián）」は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Yígòng</span>
              <span onclick="revealAnswer(4, 'duōshao qián (多少钱)', '多少钱')" id="q4-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>?</span>
            </div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 穴押し問題：試着</span>
            <p class="font-medium text-neutral-900">「試着してもいいですか？」の「試着する（shì yíxià）」は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Kěyǐ</span>
              <span onclick="revealAnswer(5, 'shì yíxià (试一下)', '试一下')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>ma?</span>
            </div>
          </div>

          <!-- Q6 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q6. 穴押し問題：ここで降ります</span>
            <p class="font-medium text-neutral-900">「ここで降ります」の「降りる（xià）」は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Wǒ zài zhèlǐ</span>
              <span onclick="revealAnswer(6, 'xià (下)', '下')" id="q6-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>.</span>
            </div>
          </div>

          <!-- Q7 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q7. タイピングテスト：パクチー</span>
            <p class="font-medium text-neutral-900">「パクチー（xiāngcài）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q7-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(7, ['香菜'], '香菜')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q7-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q8 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q8. タイピングテスト：高すぎる</span>
            <p class="font-medium text-neutral-900">「高すぎる！（tài guì le）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q8-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(8, ['太贵了', '太貴了'], '太贵了')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q8-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q9 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q9. 変調ルール総合</span>
            <p class="font-medium text-neutral-900">「不要 (bú yào / 要りません)」と言う時、「不」のトーンは何声に化ける？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(9, 0, 0, '正解！ 4声の前では2声（上がる音）になります。', '不正解！ 4声の前では2声に変化します。', '不要')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 第二声 (bú)</button>
              <button onclick="checkQuiz(9, 1, 0, '正解！ 4声の前では2声（上がる音）になります。', '不正解！ 4声の前では2声に変化します。', '不要')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 第一声 (bū)</button>
            </div>
            <div id="q9-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q10 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q10. 総合復習：挨拶</span>
            <p class="font-medium text-neutral-900">「お会いできて嬉しいです」の中国語表現は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(10, 'Hěn gāoxìng rènshi nǐ! (很高兴认识你！)', '很高兴认识你')" id="q10-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>

        </section>
      </main>
    `;
  }
};
