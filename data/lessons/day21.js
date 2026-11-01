const day21Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="crown" class="w-3.5 h-3.5"></i>
            <span>Day 21 Focus: Final Review & 21-Day Completion Challenge</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 21: Week 3 総合復習 ＆ 21日完走記念テスト
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">Grand Milestone:</strong>
              <span class="ml-1 text-neutral-300">
                Congratulations on reaching Day 21! You have completed the 3-week course covering foundational to intermediate (A1-B2) practical Chinese.
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

        <!-- Section 1: Week 3 Essence Summary -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. Week 3 必修重要表現総まとめ</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm space-y-2">
              <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Day 15 - 16</span>
              <h4 class="font-bold text-neutral-900">注文・買い物・比較</h4>
              <ul class="text-xs text-neutral-600 space-y-1 list-disc pl-4">
                <li><strong>这个请少放辣，不要香菜。</strong>（辛さ控えめ、パクチー抜きで）</li>
                <li><strong>太贵了！能不能便宜一点儿？</strong>（高すぎます！安くできますか？）</li>
                <li><strong>这个比那个更适合你。</strong>（これはあれより似合います）</li>
              </ul>
            </div>

            <div class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm space-y-2">
              <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Day 17 - 18</span>
              <h4 class="font-bold text-neutral-900">移動・感情・状態補語</h4>
              <ul class="text-xs text-neutral-600 space-y-1 list-disc pl-4">
                <li><strong>师傅，到北京站要多久？</strong>（運転手さん、北京駅までどのくらい？）</li>
                <li><strong>我觉得有点儿难。</strong>（少し難しいと感じます）</li>
                <li><strong>你汉语说得真好！</strong>（中国語話すの本当にお上手です）</li>
              </ul>
            </div>

            <div class="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-sm space-y-2">
              <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">Day 19 - 20</span>
              <h4 class="font-bold text-neutral-900">経験・変化・仮定アドバイス</h4>
              <ul class="text-xs text-neutral-600 space-y-1 list-disc pl-4">
                <li><strong>你去过中国吗？ / 我学会了。</strong>（中国に行ったことある？/マスターした）</li>
                <li><strong>如果有不懂的地方，你可以问我。</strong>（わからない点があれば聞いてもいいですよ）</li>
                <li><strong>外面有点儿冷，你最好带上一件外套。</strong>（外は寒いから上着を持っていった方がいい）</li>
              </ul>
            </div>

            <div class="bg-rose-50/80 border border-rose-200/80 rounded-xl p-5 shadow-sm space-y-2">
              <span class="text-xs font-bold text-neutral-900 bg-white px-2.5 py-0.5 rounded-full border border-rose-200">重要構文マスター</span>
              <h4 class="font-bold text-neutral-900">実践文法のポイント</h4>
              <p class="text-xs text-neutral-700 leading-relaxed">
                ・<strong>是…的 (強調):</strong> 過去の「いつ・どこで・どのように」を行ったかを明確に強調する構文。<br>
                ・<strong>一…就…:</strong> 「〜するとすぐに…だ」というスムーズな時間的連続を表す。
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Real Life Simulation -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 実践総合シミュレーション会話</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('我是去年在学中文网站上开始学习的。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Wǒ shì qùnián zài xué Zhōngwén wǎngzhàn shàng kāishǐ xuéxí de.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">我是去年在学中文网站上开始学习的。</p>
                <p class="text-xs text-neutral-500">（強調文）私が勉強を始めたのは、去年「Chinese Hub」のサイト上でのことです。</p>
              </div>
            </div>

            <div onclick="speak('虽然学习过程有点儿辛苦，但是我觉得很有意思！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Suīrán xuéxí guòchéng yǒudiǎnr xīnkǔ, dànshì wǒ juéde hěn yǒu yìsi!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">虽然学习过程有点儿辛苦，但是我觉得很有意思！</p>
                <p class="text-xs text-neutral-500">学習過程は少し大変でしたが、とても面白いと感じています！</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Graduation Quiz -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. 21日完走達成テスト（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Final Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 比較構文</span>
            <p class="font-medium text-neutral-900">「これはあれより高い」の正しい表現は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 「A 比 B + 形容詞」の順になります。', '不正解！ 比較詞の比の位置に注意しましょう。', '这个比那个贵')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 这个比那个贵 (Zhège bǐ nàge guì)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 「A 比 B + 形容詞」の順になります。', '不正解！ 比較詞の比の位置に注意しましょう。', '这个比那个贵')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 这个那个比贵 (Zhège nàge bǐ guì)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 経験表現</span>
            <p class="font-medium text-neutral-900">「中国へ行ったことがある（去过中国）」の助詞は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Qù</span>
              <span onclick="revealAnswer(2, 'guo (过)', '过')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>Zhōngguó.</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：経験・学習</span>
            <p class="font-medium text-neutral-900">「身についた / 分かった（xuéhuì le）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(3, ['学会了', '學會了'], '学会了')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 仮定の表現</span>
            <p class="font-medium text-neutral-900">「もし分からないところがあったら〜（如果）」の正しい文頭単語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '正解！ 如果 (rúguǒ) です。', '不正解！ 虽然は「〜だけれども」の意味です。', '如果')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 如果 (rúguǒ)</button>
              <button onclick="checkQuiz(4, 1, 0, '正解！ 如果 (rúguǒ) です。', '不正解！ 虽然は「〜だけれども」の意味です。', '如果')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 虽然 (suīrán)</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 完走記念フレーズ</span>
            <p class="font-medium text-neutral-900">「中国語話すの本当にお上手ですね！」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'Nǐ Hànyǔ shuō de zhēn hǎo! (你汉语说得真好！)', '你汉语说得真好')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: Graduating C-POP Special 『少年』＆初心表現 -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 21 Special • Graduating C-POP
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. 完走記念ソング『少年』(The Youth) で学ぶ初心と強調「是…的」
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              中華圏のSNSやテレビで空前の大ヒットとなり、人々を励まし続けた名曲から「初心を忘れない情熱」を叫びましょう！
            </p>
          </div>

          <!-- C-POP 紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">少年 (Shàonián)</h4>
                <p class="text-xs text-neutral-500">原唱：梦然 (Meng Ran)</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【楽曲コラム】</strong><br>
              「どれほど時が経ち、どんな困難があろうとも、自分は昔のあの少年のままで何も変わっていない」という、夢に向かって突き進む情熱と初心を力強く歌ったミリオンヒット曲です。
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
              <div class="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 hover-lift transition space-y-1">
                <div class="flex justify-between items-start">
                  <span class="font-bold text-lg text-neutral-900">我还是从前那个少年 没有一丝丝改变</span>
                  <button onclick="speak('我还是从前那个少年 没有一丝丝改变')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Wǒ háishì cóngqián nàge shàonián, méiyǒu yì sī sī gǎibiàn</p>
                <p class="text-neutral-600">私は今でも昔のあの少年のままで、ほんの少しの変化すらないんだ</p>
              </div>

              <div class="p-4 rounded-xl border-2 border-rose-200 bg-rose-50/30 hover-lift transition space-y-1">
                <div class="flex justify-between items-start">
                  <span class="font-bold text-lg text-rose-950">时间只不过是考验 种在心中信念丝毫未减</span>
                  <button onclick="speak('时间只不过是考验 种在心中信念丝毫未减')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-rose-600 pinyin-text font-medium">Shíjiān zhǐbúguò shì kǎoyàn, zhòng zài xīnzhōng xìnniàn sīháo wèi jiǎn</p>
                <p class="text-neutral-700 font-medium">時間なんて単なる試練に過ぎない、心に植えた信念は少しも衰えていない</p>
              </div>
            </div>
          </div>

          <!-- 文法解説 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-5">
            <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
              <i data-lucide="sparkles" class="w-5 h-5 text-rose-600"></i>
              <h4 class="text-lg font-bold text-neutral-900">歌詞から学べる！重要ワンフレーズ解説</h4>
            </div>

            <div class="grid gap-4 text-xs sm:text-sm">
              <div class="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1.5">
                <div class="flex items-center space-x-2">
                  <span class="bg-rose-600 text-white font-bold px-2 py-0.5 rounded text-xs">ポイント 1</span>
                  <span class="font-bold text-neutral-900">相変わらず「还是 (háishì)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <strong>「相変わらず〜だ、やはり〜だ」</strong>という状態の不変・継続を表す重要な副詞です。
                </p>
              </div>

              <div class="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1.5">
                <div class="flex items-center space-x-2">
                  <span class="bg-rose-600 text-white font-bold px-2 py-0.5 rounded text-xs">ポイント 2</span>
                  <span class="font-bold text-neutral-900">制限の副詞「只不过是…… (zhǐbúguò shì...)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <strong>「〜に過ぎない、〜でしかない」</strong>と軽視・限定を表す表現です。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
