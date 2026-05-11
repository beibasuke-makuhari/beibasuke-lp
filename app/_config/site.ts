// 外部アセット・URL集。差し替えはここだけで完結します。

// 本番ドメインが決まり次第 NEXT_PUBLIC_SITE_URL を設定。未設定時はvercelデフォルト想定
const FALLBACK_SITE_URL = "https://beibasuke.vercel.app";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL;

export const SITE = {
  url: SITE_URL,
  brandName: "ベイバスケ",
  brandNameAlt: "beibasuke",
  area: "千葉市美浜区幕張・真砂",
  lineChatUrl:
    "https://line.me/ti/g2/me7sHh72F5g8_6DMp2yewlQloQQ8LMSQcSmYfg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
  youtubeVideoId: "Mz8oBQ5edFQ",
  calendarSrc:
    "https://calendar.google.com/calendar/embed?src=76757156a09a1af093c33d267b1a2d41af98dce30cd14277e3ba7899b4c9c307%40group.calendar.google.com&ctz=Asia%2FTokyo",
} as const;

export type Venue = {
  key: string;
  name: string;
  /** Google Maps の公開URL（外部リンクとして開く先） */
  url: string;
  /** iframe埋め込み用の検索クエリ。基本は施設名でOK、ヒットが曖昧なら住所を足す */
  embedQuery: string;
};

export const VENUES: Venue[] = [
  {
    key: "makuhari-plaza",
    name: "幕張勤労市民プラザ",
    url: "https://www.google.com/maps?cid=14552463864376008936",
    embedQuery: "幕張勤労市民プラザ",
  },
  {
    key: "yohas-arena",
    name: "YohaSアリーナ",
    url: "https://www.google.com/maps?cid=5557747990367565803",
    embedQuery: "YohaSアリーナ 千葉",
  },
  {
    key: "masago-community",
    name: "真砂コミュニティセンター",
    url: "https://www.google.com/maps/place/%E7%9C%9F%E7%A0%82%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC/@35.6403716,140.0692353,17z/",
    embedQuery: "真砂コミュニティセンター 千葉市美浜区",
  },
];
