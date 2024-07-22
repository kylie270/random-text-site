document.addEventListener('DOMContentLoaded', () => {
    const texts = [
        "六年も貴方のことが好きなのに あの子は六日で両想い 死ね",
        "ふわふわの風 羽となる肩甲骨 生ぬるい春壊す、爆音",
        "ねえ先生、物理おしえてくれるとき、低くなる声、声に私は、",
        "ねえ先生、私優等生なのに、たくさんかまってくれたのはなぜ？",
        "ぼくたちの頬 ぼくたちのうなじ、指 いつかは終わる  ぼくたちの春",
        "走れ！そう、工場夜景のそばの海、きみとベロチューした砂浜を！",
        "電話越し 僕いつだって君想いシてるよ、ほんと大好きだよ",
        "水曜は放送委員 給食のあいだに流すアイネ・クライネ",
        "カップ麺すすって熱いアスファルト寝転び眺めるアスキーアート",
        "どうみても死ねないとこから飛び降りる君はエンジェル 超綺麗だよ",
        "家の前 大きな川のそば  君にプラスチックの指輪をあげた",
        "ファンモンが好きな私を笑う君 パンケーキの粉探すスーパー",
        "逆さまの天使 私は欲張りで 「生きてる」＋α求めて",
        "夢 夏のグアム旅行で見た川にコムデギャルソン柄のカバいて",
        "東京旅行 ビジネスホテルで見た金ロー 二十世紀少年の衝撃",
        "生きていくお金がぜんぶなくなった部屋のすみっこ 暑い 暑いね",
        "つつみたいきみをまるごとすっぽりとわたしがまもるおやすみなさい",
        "明日には笑えるやろか ぐしゃぐしゃのレシートの山 溶けたポッキー",
        "迷惑をかければかけるほど君は私に夢中になるの、しってる",
        "給食のフルーツサラダ食べるたび 私はだれ？と考える癖",
        "体操着盗むくらいがちょうどいい愛の強さだ 最高の愛だ",
        "君を君たらしめる神経や骨、細胞を感じ震える",
        "鮮明な光はこわい 見たくないものはぼんやりしていてほしい",
        "おおきくてあついきもちは 固まって形になって それが涙で",
        "イヤホンをつけっぱなしで寝た夜は 集団自殺の夢を見るんだ",
        "墓石を包んだ雪は暖かく柔らかかった 弾む鼻歌",
        "大丈夫？「大丈夫だよ」本当に？大丈夫じゃないって言ってほしい",
        "せわしなく行き交う大袈裟な靴音 癪に障ってホームで泣いた",
        "落ち着けよ カッパーレッドの熱帯魚 いいよねきみは死ぬまで綺麗で",
        "バスタオル顔を沈めて二十秒 君の水滴貪るように",
        "人んちの風呂の匂いに惑わされゆらゆらと漕ぐ自転車は銀",
        "「あんたさぁ、処女のまんまで死ぬつもり？そんなんだからいつになっても",
        "下駄箱のできるだけ奥そっと置く 気づきませんようにと祈る恋",
        "首都高速「心臓みたい」そうかなあ サーモンピンクのトラックミキサ",
        "不自然な揺れ方をするカーテンは僕らの夢の夢の具現化",
        "蒼かった君のうなじが消えていてそれだけで僕泣いてしまって",
        "温めた牛乳の膜 永遠に沈むことのないスティックシュガー",
        "汗を斬るドラムスティック 酒焼けの絶叫 二度と聴けないな、もう",

    ];

    const randomTextElement = document.getElementById('random-text');
    const generateBtn = document.getElementById('generate-btn');

    function getRandomText() {
        const randomIndex = Math.floor(Math.random() * texts.length);
        return texts[randomIndex];
    }

    generateBtn.addEventListener('click', () => {
        randomTextElement.textContent = getRandomText();
    });
});
