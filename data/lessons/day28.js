const day28Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="trophy" class="w-3.5 h-3.5"></i>
            <span>Day 28 Grand Finale (Week 4 Review & Masterclass)</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 28: Week 4 総まとめ ＆ B2アドバンスド・中国語マスタークラス
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">Week 4 Complete Integration:</strong>
              <span class="ml-1 text-neutral-300">
                Week 4で網羅した高度な仮定、二重否定、連動・兼語句、そして書面語の接続詞までを完全統合し、B2レベルの実践力を完成させます。
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

        <!-- Section 1: Detailed Explanations & Verb Matrix -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：Week 4 高度文法マトリックス</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <p class="text-neutral-700">
              Week 4（Day 22〜27）で学んだ、中上級コミュニケーションを支える重要構文を総ざらいしましょう！
            </p>

            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse border border-neutral-200 text-xs sm:text-sm">
                <thead>
                  <tr class="bg-neutral-900 text-rose-400">
                    <th class="p-3 border border-neutral-700">構文・テーマ</th>
                    <th class="p-3 border border-neutral-700">コア概念・ニュアンス</th>
                    <th class="p-3 border border-neutral-700">代表的な用例</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-neutral-200">
                  <tr>
                    <td class="p-3 font-bold border border-neutral-200">哪怕…也…</td>
                    <td class="p-3 border border-neutral-200">極限の仮定（たとえ〜であろうとも）</td>
                    <td class="p-3 border border-neutral-200"><code class="bg-neutral-100 px-1 rounded">哪怕只有一线希望，也不放弃。</code></td>
                  </tr>
                  <tr class="bg-neutral-50/50">
                    <td class="p-3 font-bold border border-neutral-200">不得不…</td>
                    <td class="p-3 border border-neutral-200">二重否定による強い肯定（〜せざるを得ない）</td>
                    <td class="p-3 border border-neutral-200"><code class="bg-neutral-100 px-1 rounded">我们不得不放弃原定计划。</code></td>
                  </tr>
                  <tr>
                    <td class="p-3 font-bold border border-neutral-200">兼語句 (派/请)</td>
                    <td class="p-3 border border-neutral-200">人に〜を頼んで/派遣して〜させる</td>
                    <td class="p-3 border border-neutral-200"><code class="bg-neutral-100 px-1 rounded">经理派他去上海开会。</code></td>
                  </tr>
                  <tr class="bg-neutral-50/50">
                    <td class="p-3 font-bold border border-neutral-200">基于 / 从而</td>
                    <td class="p-3 border border-neutral-200">論理的根拠と結果の書面語接続</td>
                    <td class="p-3 border border-neutral-200"><code class="bg-neutral-100 px-1 rounded">基于共识，从而提高效率。</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="space-y-2 border-l-2 border-rose-600 pl-4 mt-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 B2達成の証明</h4>
              <p class="text-neutral-600">
                これらの複雑な複文や書面語、そしてC-POPにみられる情緒的表現を自在に理解・活用できるようになったあなたは、すでに確固たるB2レベルの実力を手にしています！
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Comprehensive Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 実践統合会話（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('哪怕前方路途再艰辛，基于共同的理想，我们也不得不坚持走下去。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">哪怕前方路途再艰辛，基于共同的理想，我们也不得不坚持走下去。</span>
                <p class="text-xs text-neutral-500 mt-1">たとえ前方の道のりがどんなに困難であっても、共通の理想に基づき、私たちは歩み続けざるを得ない。</p>
              </div>
            </div>

            <div onclick="speak('经过不懈努力，我们终于取得了成功，从而迎来了崭新的未来。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">经过不懈努力，我们终于取得了成功，从而迎来了崭新的未来。</span>
                <p class="text-xs text-neutral-500 mt-1">たゆまぬ努力を経て、私たちはついに成功を収め、それによって真新しい未来を迎えた。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Week 4 総まとめクイズ（全5問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 極限の仮定</span>
            <p class="font-medium text-neutral-900">「たとえ〜であろうとも」を表す最もドラマチックな接続詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '太棒了！ 哪怕 が正解です。', '不正解！ 因为 は「なぜなら」です。', '哪怕')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 哪怕</button>
              <button onclick="checkQuiz(1, 1, 0, '太棒了！ 哪怕 が正解です。', '不正解！ 因为 は「なぜなら」です。', '哪怕')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 因为</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 二重否定</span>
            <p class="font-medium text-neutral-900">「〜せざるを得ない（不[ ]不…）」の空欄に入る漢字は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>不</span>
              <span onclick="revealAnswer(2, '得 (dé)', '得')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>不…</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：たゆまぬ努力</span>
            <p class="font-medium "たゆまぬ努力（不懈努力 / 不懈の努力）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-64 bg-white">
              <button onclick="checkInput(3, ['不懈努力'], '不懈努力')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 選択問題：書面語の接続詞</span>
            <p class="font-medium text-neutral-900">「〜に基づいて」を表すフォーマルな介詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '太棒了！ 基于 が正解です。', '不正解！ 从而 は結果を表します。', '基于')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 基于</button>
              <button onclick="checkQuiz(4, 1, 0, '太棒了！ 基于 が正解です。', '不正解！ 从而 は結果を表します。', '基于')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 从而</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「たゆまぬ努力を経て、私たちはついに成功を収めました」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '经过不懈努力，我们终于取得了成功。', '经过不懈努力，我们终于取得了成功。')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: C-Pop & Chinese Culture Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 28 Special • Grand Finale Anthem
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. 張信哲（Jeff Chang）『愛如潮水』で締めくくる中国語の旅
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              中華圏の「情歌王子（ラブソングの王子）」による不朽の名曲から、感動のフィナーレを迎えよう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">愛如潮水 (Love Like Tides - Jeff Chang / 張信哲)</h4>
                <p class="text-xs text-neutral-500">Legendary Mandopop Grand Finale Anthem</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【音楽文化コラム：『愛如潮水』と情念の美学】</strong><br>
              「愛は潮のように押し寄せ、僕を溺れさせる」という圧倒的な情熱と切なさを歌い上げた、中華圏バラードの金字塔。これまで学んだすべての文法、副詞、複文のニュアンスがこの一曲のなかに凝縮されています。
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
                  <span class="font-bold text-lg text-rose-950">既然爱了就不怕它白白受煎熬</span>
                  <button onclick="speak('既然爱了就不怕它白白受煎熬')" class="text-rose-600 hover:text-rose-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">愛してしまったからには、それが無駄に苦しみに変わることも恐れない（既然 ＝ 〜である以上は）</p>
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
                  <span class="font-bold text-neutral-900">前提・事実の提示「既然 (jìrán / 〜である以上は)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <code class="bg-neutral-200 px-1 rounded">既然</code> は既成の事実を前提として受け入れ、そこから強い決意や結論を導き出す際の超重要接続詞です。この表現をマスターしたあなたは、もう立派な中上級中国語スピーカーです！
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
