// Day 13 のレッスンデータ（C-POP紹介コーナー追加版）
const day13Data = {
  render: function() {
    return `
      <div class="max-w-4xl mx-auto px-4 py-8 space-y-10">
        
        <!-- ヘッダー・レッスンタイトル -->
        <div class="border-b border-neutral-200 pb-4">
          <div class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
            Day 13 • C-POP & リアル表現収集
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-neutral-900">
            名曲『老鼠爱大米』で学ぶ、気持ちを伝える中国語表現
          </h2>
          <p class="text-xs sm:text-sm text-neutral-600 mt-1">
            2000年代に中華圏で大ヒットした懐かしの名曲から、日常会話でもよく使う重要構文や気持ちの表現を拾い集めましょう！
          </p>
        </div>

        <!-- C-POP 紹介カード -->
        <div class="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-sm space-y-4">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold">
              <i data-lucide="music" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="text-lg font-bold text-neutral-900">老鼠爱大米 (Lǎoshǔ ài dàmǐ)</h3>
              <p class="text-xs text-neutral-500">原唱：杨臣刚 (Yang Chengang)</p>
            </div>
          </div>
          <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
            <strong>【楽曲コラム】</strong><br>
            「ネズミがお米を好きなのと同じくらい、君のことが好きだ！」という直球でストレートな表現がキャッチーなラヴソング。サビのフレーズがとにかく頭から離れない、C-POP入門にもピッタリな一曲です。
          </p>
        </div>

        <!-- 歌詞 & 発音 & 翻訳 セクション -->
        <div class="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-sm space-y-6">
          <div class="flex justify-between items-center border-b border-neutral-200 pb-3">
            <h3 class="text-md font-bold text-neutral-900 flex items-center space-x-2">
              <i data-lucide="mic" class="w-4 h-4 text-rose-600"></i>
              <span>歌詞フレーズを聴いてみよう</span>
            </h3>
            <!-- 速度切替ボタン -->
            <div class="flex items-center space-x-1.5 bg-neutral-100 p-1 rounded-lg">
              <button id="speed-075" onclick="setSpeed(0.75)" class="px-2.5 py-1 text-xs rounded-md bg-neutral-900 text-white font-medium">0.75x</button>
              <button id="speed-100" onclick="setSpeed(1.0)" class="px-2.5 py-1 text-xs rounded-md bg-neutral-50 text-neutral-700 font-medium">1.0x</button>
            </div>
          </div>

          <!-- 歌詞カード一覧 -->
          <div class="space-y-4 text-xs sm:text-sm">
            
            <!-- Phrase 1 -->
            <div class="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 hover-lift transition space-y-1">
              <div class="flex justify-between items-start">
                <span class="font-bold text-lg text-neutral-900">我听见你的声音</span>
                <button onclick="speak('我听见你的声音')" class="text-rose-600 hover:text-rose-700 p-1">
                  <i data-lucide="volume-2" class="w-4 h-4"></i>
                </button>
              </div>
              <p class="text-rose-600 pinyin-text font-medium">Wǒ tīngjiàn nǐ de shēngyīn</p>
              <p class="text-neutral-600">あなたの声が聞こえて</p>
            </div>

            <!-- Phrase 2 -->
            <div class="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 hover-lift transition space-y-1">
              <div class="flex justify-between items-start">
                <span class="font-bold text-lg text-neutral-900">有种特别的感觉</span>
                <button onclick="speak('有种特别的感觉')" class="text-rose-600 hover:text-rose-700 p-1">
                  <i data-lucide="volume-2" class="w-4 h-4"></i>
                </button>
              </div>
              <p class="text-rose-600 pinyin-text font-medium">Yǒu zhǒng tèbié de gǎnjué</p>
              <p class="text-neutral-600">なんだか特別な感じがするんだ</p>
            </div>

            <!-- Phrase 3 (Sab) -->
            <div class="p-4 rounded-xl border-2 border-rose-200 bg-rose-50/30 hover-lift transition space-y-1">
              <div class="flex justify-between items-start">
                <span class="font-bold text-lg text-rose-950">我爱你 爱着你 就像老鼠爱大米</span>
                <button onclick="speak('我爱你 爱着你 就像老鼠爱大米')" class="text-rose-600 hover:text-rose-700 p-1">
                  <i data-lucide="volume-2" class="w-4 h-4"></i>
                </button>
              </div>
              <p class="text-rose-600 pinyin-text font-medium">Wǒ ài nǐ, àizhe nǐ, jiù xiàng lǎoshǔ ài dàmǐ</p>
              <p class="text-neutral-700 font-medium">愛してる、君を愛してる。ネズミが大好きな米を愛するように。</p>
            </div>

            <!-- Phrase 4 -->
            <div class="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 hover-lift transition space-y-1">
              <div class="flex justify-between items-start">
                <span class="font-bold text-lg text-neutral-900">不管有多少风雨 我都会依然陪着你</span>
                <button onclick="speak('不管有多少风雨 我都会依然陪着你')" class="text-rose-600 hover:text-rose-700 p-1">
                  <i data-lucide="volume-2" class="w-4 h-4"></i>
                </button>
              </div>
              <p class="text-rose-600 pinyin-text font-medium">Bùguǎn yǒu duōshao fēngyǔ, wǒ dōu huì yīrán péizhe nǐ</p>
              <p class="text-neutral-600">どんなに風雨があろうと、僕は相変わらず君のそばに寄り添い続けるよ</p>
            </div>

            <!-- Phrase 5 -->
            <div class="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 hover-lift transition space-y-1">
              <div class="flex justify-between items-start">
                <span class="font-bold text-lg text-neutral-900">只要能让你开心 我什么都愿意</span>
                <button onclick="speak('只要能让你开心 我什么都愿意')" class="text-rose-600 hover:text-rose-700 p-1">
                  <i data-lucide="volume-2" class="w-4 h-4"></i>
                </button>
              </div>
              <p class="text-rose-600 pinyin-text font-medium">Zhǐyào néng ràng nǐ kāixīn, wǒ shénme dōu yuànyì</p>
              <p class="text-neutral-600">君を笑顔にできるなら、僕はなんだって喜んでするよ</p>
            </div>

          </div>
        </div>

        <!-- 💡 歌詞からピックアップ！実践で使える文法・表現収集 -->
        <div class="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-sm space-y-5">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="sparkles" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-lg font-bold text-neutral-900">歌詞から学べる！重要ワンフレーズ解説</h3>
          </div>

          <div class="grid gap-4 text-xs sm:text-sm">
            
            <div class="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1.5">
              <div class="flex items-center space-x-2">
                <span class="bg-rose-600 text-white font-bold px-2 py-0.5 rounded text-xs">ポイント 1</span>
                <span class="font-bold text-neutral-900">结果补语「听见 (tīngjiàn)」</span>
              </div>
              <p class="text-neutral-700 leading-relaxed">
                「听（聞く）」＋結果補語「见（感知する・捉える）」で、<strong>「（音が耳に）聞こえる」</strong>という意味になります。
                視覚の場合は「看见 (kànjiàn) = 見える」になります。
              </p>
            </div>

            <div class="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1.5">
              <div class="flex items-center space-x-2">
                <span class="bg-rose-600 text-white font-bold px-2 py-0.5 rounded text-xs">ポイント 2</span>
                <span class="font-bold text-neutral-900">比喩表現「就像〜 (jiù xiàng...)」</span>
              </div>
              <p class="text-neutral-700 leading-relaxed">
                <strong>「まるで〜のようだ」</strong>と例え話をする定番のセットです。<br>
                例：<code>就像老鼠爱大米</code>（まるでネズミがお米を好きなように）
              </p>
            </div>

            <div class="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1.5">
              <div class="flex items-center space-x-2">
                <span class="bg-rose-600 text-white font-bold px-2 py-0.5 rounded text-xs">ポイント 3</span>
                <span class="font-bold text-neutral-900">譲歩構文「不管〜都… (bùguǎn... dōu...)」</span>
              </div>
              <p class="text-neutral-700 leading-relaxed">
                <strong>「たとえ〜であろうとも、すべて…だ」</strong>という意味の日常会話でも超超超重要な構文です！<br>
                例：<code>不管有多么的苦，我都会…</code>（どんなに辛くても、僕は…）
              </p>
            </div>

            <div class="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1.5">
              <div class="flex items-center space-x-2">
                <span class="bg-rose-600 text-white font-bold px-2 py-0.5 rounded text-xs">ポイント 4</span>
                <span class="font-bold text-neutral-900">条件構文「只要〜就/都… (zhǐyào... dōu...)」</span>
              </div>
              <p class="text-neutral-700 leading-relaxed">
                <strong>「〜しさえすれば、…だ」</strong>という必要最低限の条件を表す重要フレーズです。<br>
                例：<code>只要能让你开心，我什么都愿意</code>（君を喜ばせることができるのなら、僕はなんだって喜んでする）
              </p>
            </div>

          </div>
        </div>

      </div>
    `;
  }
};
