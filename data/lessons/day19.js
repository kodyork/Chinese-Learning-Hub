const day19Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 19 Advanced Masterclass</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 19: 条件複文の極意（只要…就… / 只有…才…） ＆ C-POPに学ぶ運命のフレーズ
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">B1-B2 Bridge & Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                十分条件（〜しさえすれば）と必要条件（〜してこそ初めて）のニュアンスの違いを整理し、C-POP歌詞に頻出する強い決意と運命の表現をマスターします。
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
            <button onclick="setSpeed(0.85)" id="speed-085" class="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-900 bg-neutral-900 text-white font-medium transition cursor-pointer">0.85x (Slow)</button>
            <button onclick="setSpeed(1.0)" id="speed-100" class="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-900 font-medium transition cursor-pointer">1.0x (Normal)</button>
          </div>
        </div>

        <!-- Section 1: Detailed Explanations & Culture -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：十分条件と必要条件の接続詞構文</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 「只要…就…（〜しさえすれば、…だ）」による十分条件</h4>
              <p class="text-neutral-600">
                最低限の条件を満たせば簡単に結果が得られることを示します。<br>
                ・<code class="bg-neutral-100 px-1 rounded">只要坚持，就一定能成功。</code>（続けさえすれば、必ず成功できる）<br>
                ※後句では副詞 <code class="bg-neutral-100 px-1 rounded">就</code> とセットで呼応します。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② B2応用：「只有…才…（〜してこそ初めて、…できる）」による唯一の必要条件</h4>
              <p class="text-neutral-600">
                唯一不可欠な条件を提示し、それ以外の方法では不可能であることを強調します。<br>
                ・<code class="bg-neutral-100 px-1 rounded">只有多听多说，才能学好中文。</code>（たくさん聞き、たくさん話してこそ初めて、中国語をマスターできる）<br>
                ※後句では副詞 <code class="bg-neutral-100 px-1 rounded">才</code> とセットで呼応します。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-rose-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 豆知識：C-POP歌詞における条件文のドラマ性</h4>
              <p class="text-neutral-600">
                「君さえいれば（只要有你）…」「すれ違って初めて気づいた（只有…才…）」といった条件構文は、ラブソングや壮大な叙事詩的楽曲において、運命の重みやかけがえのなさを表現するために多用されるキー表現です。
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 実践会話（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('只要有信心，什么困难都能克服。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">只要有信心，什么困难都能克服。</span>
                <p class="text-xs text-neutral-500 mt-1">自信さえあれば、どんな困難も乗り越えられる。（只要…就/都… ＝ 〜しさえすれば）</p>
              </div>
            </div>

            <div onclick="speak('只有互相理解，才能成为真正的朋友。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">只有互相理解，才能成为真正的朋友。</span>
                <p class="text-xs text-neutral-500 mt-1">互いに理解し合ってこそ初めて、本当の友達になれる。（只有…才… ＝ 〜してこそ初めて）</p>
              </div>
            </div>

            <div onclick="speak('只要你愿意，我们随时都可以出发。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">只要你愿意，我们随时都可以出发。</span>
                <p class="text-xs text-neutral-500 mt-1">君さえよければ、僕たちはいつでも出発できるよ。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 19 実践クイズ（全5问）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：〜しさえすれば</span>
            <p class="font-medium text-neutral-900">「〜しさえすれば、…だ」を表す十分条件の接続詞ペアは？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '太棒了！ 只要…就… が十分条件を表します。', '不正解！ 只有…才… は唯一の必要条件です。', '只要…就…')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 只要…就…</button>
              <button onclick="checkQuiz(1, 1, 0, '太棒了！ 只要…就… が十分条件を表します。', '不正解！ 只有…才… は唯一の必要条件です。', '只要…就…')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 只有…才…</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：必要条件</span>
            <p class="font-medium text-neutral-900">「〜して初めて、…できる（只有…[ ]能…）」の空欄に入る副詞は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>只有…</span>
              <span onclick="revealAnswer(2, '才 (cái)', '才')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>能…</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：乗り越える・克服する</span>
            <p class="font-medium text-neutral-900">「克服する（克服）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-64 bg-white">
              <button onclick="checkInput(3, ['克服'], '克服')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 選択問題：互いに</span>
            <p class="font-medium text-neutral-900">中国語で「お互いに・相互に」を意味する副詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '太棒了！ 互相 が正解です。', '不正解！ 克服 は「乗り越える」です。', '互相')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 互相</button>
              <button onclick="checkQuiz(4, 1, 0, '太棒了！ 互相 が正解です。', '不正解！ 克服 は「乗り越える」です。', '互相')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 克服</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「互いに理解し合ってこそ初めて、本当の友達になれる」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '只有互相理解，才能成为真正的朋友。 (只有互相理解，才能成为真正的朋友。)', '只有互相理解，才能成为真正的朋友。')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: C-Pop & Chinese Culture Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 19 Special • Destiny & Condition in C-Pop
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. C-POPの名曲にみる条件表現「只要」と運命のフレーズ
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              世代を超えて愛されるメガヒットナンバーから、純粋な愛と条件のニュアンスを感じ取ろう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">小幸运 (A Little Happiness - Hebe Tien / 田馥甄)</h4>
                <p class="text-xs text-neutral-500">Global Mandopop Phenomenon</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【音楽文化コラム：『小幸運』と青春の記憶】</strong><br>
              映画『我的少女时代（私の少女時代）』の主題歌として中華圏全域で社会現象となった名曲。「あなたに出会えたことが私の最大の幸せ」という青春の甘酸っぱさと感謝が、条件や因果の表現を通じて心に深く響きます。
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
                  <span class="font-bold text-lg text-rose-950">原来你是我最想留住的幸运</span>
                  <button onclick="speak('原来你是我最想留住的幸运')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">本当は、君こそが私が一番引き止めたかった幸運だったんだ（原来 ＝ なんだ、実は）</p>
              </div>
            </div>
          </div>

          <!-- 文法解説 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-5">
            <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
              <i data-lucide="sparkles" class="w-5 h-5 text-rose-600"></i>
              <h4 class="text-lg font-bold text-rose-900">歌から学べる！重要表現解説</h4>
            </div>

            <div class="grid gap-4 text-xs sm:text-sm">
              <div class="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1.5">
                <div class="flex items-center space-x-2">
                  <span class="bg-rose-600 text-white font-bold px-2 py-0.5 rounded text-xs">ポイント 1</span>
                  <span class="font-bold text-neutral-900">気づきを表す副詞「原来 (yuánlái / 実は〜だった)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <code class="bg-neutral-200 px-1 rounded">原来</code> は、後から事実や真実に気づいたときの「あぁ、そうだったのか！」という驚きや感慨を表す副詞です。条件文や心理描写と組み合わせることでストーリー性が一気に増します。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
