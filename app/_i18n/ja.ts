type Card = { title: string; frequency: string; body: string };
type Item = { label: string; body: string };
type Voice = { who: string; quote: string };

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  skipLink: string;
  nav: {
    activities: string;
    firstTime: string;
    voices: string;
    join: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
  };
  hero: {
    kicker: string;
    title: string;
    sub: string;
    cta: string;
    note: string;
    chips: string[];
    scrollHint: string;
  };
  stickyCta: {
    label: string;
    sub: string;
  };
  intro: {
    heading: string;
    body: string;
    audienceHeading: string;
    audienceList: string[];
  };
  activities: {
    heading: string;
    lead: string;
    cards: Card[];
  };
  video: {
    heading: string;
    lead: string;
    placeholderLabel: string;
    iframeTitle: string;
  };
  schedule: {
    heading: string;
    lead: string;
    iframeTitle: string;
  };
  venues: {
    heading: string;
    lead: string;
    openInMaps: string;
  };
  firstTimers: {
    heading: string;
    lead: string;
    items: Item[];
    reassurance: string;
    /** items の各 label をQ&A形式の質問に書き直したもの（順序一致） */
    faqQuestions: string[];
  };
  testimonials: {
    heading: string;
    lead: string;
    items: Voice[];
  };
  contact: {
    heading: string;
    lead: string;
    qrCaption: string;
    qrAlt: string;
    button: string;
    fallback: string;
  };
  footer: {
    copyright: string;
  };
  languages: {
    ja: string;
    en: string;
    zh: string;
    ko: string;
  };
};

const dict: Dictionary = {
  meta: {
    title: "ベイバスケ in 幕張",
    description:
      "千葉・幕張で月1回ペースで活動するバスケサークル。20〜40代の子育て世代が中心、家族参加・初心者も歓迎です。LINEから気軽に参加できます。",
    ogTitle: "ベイバスケ in 幕張",
    ogDescription: "幕張で月1回。初心者・知り合いゼロでも大丈夫。",
  },
  skipLink: "本文へスキップ",
  nav: {
    activities: "活動内容",
    firstTime: "はじめての方へ",
    voices: "参加者の声",
    join: "参加する",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    languageLabel: "言語を選択",
  },
  hero: {
    kicker: "幕張のご近所バスケサークル",
    title: "幕張で、ゆるくバスケ。",
    sub: "月に1回くらい、体育館に集まって走って笑って、たまにご飯。バスケ未経験の方も、引っ越してきたばかりの方も、お気軽に。",
    cta: "LINEで参加する（無料）",
    note: "登録だけでもOK。次回の予定だけ流れます。",
    chips: ["初心者歓迎", "ファミリー多数", "ご近所つながり", "月1ペース"],
    scrollHint: "活動を見る",
  },
  stickyCta: {
    label: "LINEで参加（無料）",
    sub: "登録だけでもOK",
  },
  intro: {
    heading: "バスケから広がる、ご近所のつながり。",
    body: "幕張は引っ越してきたばかりの方や、小さいお子さんがいるご家庭が多い街。バスケをきっかけに、地元の知り合いを増やしたり、生活情報を交換する場として使ってくださっている方がたくさんいます。試合中の真剣勝負と、コート外の何気ない会話、その両方が居場所になります。",
    audienceHeading: "こんな方も来ています",
    audienceList: [
      "引っ越してきたばかりで、ご近所さんを探している方",
      "保育園・学校・お店・病院など、生活情報を気軽に交換したい方",
      "久しぶりに体を動かしたい・運動不足を解消したい方",
    ],
  },
  activities: {
    heading: "私たちの活動",
    lead: "バスケだけじゃありません。長く続けやすいように、いくつかの集まり方を用意しています。",
    cards: [
      {
        title: "バスケットボール",
        frequency: "月1ペース",
        body: "幕張周辺の体育館で2〜3時間。ミニゲーム中心、ガチ勢もエンジョイ勢も同じコートで。",
      },
      {
        title: "交流会・情報交換",
        frequency: "不定期",
        body: "練習後やオフシーズンに、ご飯やお茶会。子育てやご近所のおすすめスポット、引っ越し直後の生活情報——バスケ以外の話もたくさんしています。",
      },
      {
        title: "プロバスケ観戦",
        frequency: "年数回",
        body: "千葉ジェッツやアルティーリ千葉の試合をみんなで観戦。チケットは各自で取ります。",
      },
    ],
  },
  video: {
    heading: "活動の様子",
    lead: "30秒で雰囲気が伝わる動画です。",
    placeholderLabel: "動画は近日公開",
    iframeTitle: "活動紹介動画",
  },
  schedule: {
    heading: "活動カレンダー",
    lead: "次回の活動日と直近の予定はこちら。LINEに登録すると、毎回の案内が届きます。",
    iframeTitle: "ベイバスケ活動カレンダー",
  },
  venues: {
    heading: "活動場所",
    lead: "幕張・真砂エリアの体育館を中心に活動しています。各会場の詳細はGoogle Mapsからご確認ください。",
    openInMaps: "Google Mapsで開く",
  },
  firstTimers: {
    heading: "はじめての方へ",
    lead: "初参加の前に気になることをまとめました。",
    items: [
      { label: "持ち物", body: "体育館シューズ・動ける服・飲み物・タオル。ボールは貸し出しあります。" },
      { label: "レベル感", body: "初心者〜部活経験者まで。試合は実力をならして組みます。" },
      { label: "当日の流れ", body: "集合 → 軽くアップ → ミニゲーム → 解散。だいたい2〜3時間。途中参加・途中帰宅もOKです。" },
      { label: "料金目安", body: "1回あたり 体育館代の割り勘で 500〜1,000円ほど。" },
    ],
    reassurance: "引っ越してきたばかりの方も、お子さん連れの方も大歓迎。ほとんどの方が「知り合いゼロ」から始めています。",
    faqQuestions: [
      "持ち物は何が必要ですか？",
      "初心者でも参加できますか？",
      "当日はどんな流れですか？",
      "参加費はいくらですか？",
    ],
  },
  testimonials: {
    heading: "参加者の声",
    lead: "実際に来てくれている方々のコメントです。",
    items: [
      {
        who: "30代男性",
        quote:
          "幕張に引っ越してきて、バスケができるところを探していて参加しました。皆さんいい人ばかりなので、いつの間にか毎月参加しています。",
      },
      {
        who: "30代女性",
        quote:
          "子どもを連れて参加しています。お子さんがいる方も多くて、みんなで代わる代わる見ていてくれるので、子ども本人も毎回楽しみにしているみたいです。",
      },
      {
        who: "40代男性",
        quote:
          "この年齢になると、運動を辞めるとあっという間に体力が落ちてしまうので…月1のペースは本当にちょうどいいです。仕事のためにも、家族のためにも、なんとか続けたいと思っています。",
      },
      {
        who: "20代女性",
        quote:
          "ご家族で参加されている方が多いので、女性ひとりで来ても全然浮かない雰囲気でした。初日に色々な方から声をかけてもらえて、緊張がすぐにほぐれたのを覚えています。",
      },
      {
        who: "20代男性",
        quote:
          "ほとんど英語しか話せないのですが、みなさんとても暖かく迎えてくれました。英語が話せるメンバーも多いので、コミュニケーションで困ったことは一度もありません。",
      },
    ],
  },
  contact: {
    heading: "参加する",
    lead: "LINE公式アカウントを友だち追加すると、次回の活動予定が届きます。返信不要。",
    qrCaption: "スマホで読み取って友だち追加",
    qrAlt: "LINE公式アカウントのQRコード",
    button: "LINEで友だち追加",
    fallback: "QRが読めない方はこちらのリンクから登録できます。",
  },
  footer: {
    copyright: "ベイバスケ / 幕張バスケサークル",
  },
  languages: {
    ja: "日本語",
    en: "English",
    zh: "中文",
    ko: "한국어",
  },
};

export default dict;
