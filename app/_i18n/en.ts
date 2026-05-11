import type { Dictionary } from "./ja";

const dict: Dictionary = {
  meta: {
    title: "beibasuke — Casual Basketball in Makuhari",
    description:
      "A friendly basketball circle in Makuhari, Chiba. We meet roughly once a month. Members are mostly in their 20s–40s; families and beginners welcome. Sign up via LINE.",
    ogTitle: "beibasuke — Casual Basketball in Makuhari",
    ogDescription: "Once a month in Makuhari. First-timers and complete strangers are welcome.",
  },
  skipLink: "Skip to main content",
  nav: {
    activities: "What we do",
    firstTime: "For first-timers",
    voices: "Member voices",
    join: "Join us",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Select language",
  },
  hero: {
    kicker: "A neighborhood basketball circle in Makuhari",
    title: "Casual basketball in Makuhari.",
    sub: "We meet roughly once a month to run, laugh, and sometimes grab a meal afterwards. Brand-new to basketball or to the neighborhood? Come anyway.",
    cta: "Join via LINE (free)",
    note: "Just registering is fine — we only send the next event.",
    chips: ["Beginners welcome", "Family-friendly", "Local community", "Once a month"],
    scrollHint: "See our activities",
  },
  stickyCta: {
    label: "Join via LINE (free)",
    sub: "Registering only is fine",
  },
  intro: {
    heading: "Basketball as a way into the neighborhood.",
    body: "Makuhari is full of people who recently moved in, and of families with young kids. Plenty of our members use the circle to find local friends and casually swap everyday tips — daycares, schools, doctors, the good places to eat. On-court games and off-court chatter; both ways to belong here.",
    audienceHeading: "People who tend to fit right in",
    audienceList: [
      "Just moved to Makuhari and looking for local connections",
      "Want a casual place to swap notes on daycares, schools, shops, doctors",
      "Wanting to move their body again after a long break",
    ],
  },
  activities: {
    heading: "What we do",
    lead: "It’s not just basketball. We mix a few formats so it’s easy to stay involved long-term.",
    cards: [
      {
        title: "Basketball sessions",
        frequency: "About once a month",
        body: "2–3 hours at a gym near Makuhari. Mostly mini-games; hardcore and chill players share the same court.",
      },
      {
        title: "Hangouts & local intel",
        frequency: "Occasional",
        body: "Meals or tea after practice and in the off-season. Kid-friendly tips, neighborhood recommendations, life-after-moving questions — plenty of non-basketball talk too.",
      },
      {
        title: "Pro game viewings",
        frequency: "A few times a year",
        body: "We catch Chiba Jets and Altiri Chiba games together. Each person grabs their own ticket.",
      },
    ],
  },
  video: {
    heading: "See us in action",
    lead: "A 30-second look at the vibe.",
    placeholderLabel: "Video coming soon",
    iframeTitle: "Activity introduction video",
  },
  schedule: {
    heading: "Activity calendar",
    lead: "Upcoming sessions and recent dates. Add us on LINE to get each invitation automatically.",
    iframeTitle: "beibasuke activity calendar",
  },
  venues: {
    heading: "Where we play",
    lead: "We rotate through a few gyms around Makuhari and Masago. Tap any venue to open it in Google Maps.",
    openInMaps: "Open in Google Maps",
  },
  firstTimers: {
    heading: "For first-timers",
    lead: "Common questions, answered up front.",
    items: [
      { label: "What to bring", body: "Indoor shoes, athletic clothes, water, a towel. We have spare balls." },
      { label: "Skill level", body: "Total beginners through ex-club players. We balance teams so games stay fun." },
      { label: "What a day looks like", body: "Arrive → warm up → mini-games → done. About 2–3 hours. Drop in late or leave early — both totally fine." },
      { label: "Cost", body: "Roughly ¥500–¥1,000 per session, splitting the gym fee." },
    ],
    reassurance: "Just moved in? Bringing the kids? Both very welcome — most of us started out knowing no one here.",
    faqQuestions: [
      "What should I bring?",
      "Can total beginners join?",
      "What does a typical session look like?",
      "How much does it cost to participate?",
    ],
  },
  testimonials: {
    heading: "Member voices",
    lead: "From people who actually show up.",
    items: [
      {
        who: "Man in his 30s",
        quote:
          "I moved to Makuhari and was looking for somewhere to play basketball. Everyone here turned out to be so welcoming that, before I knew it, I was showing up every month.",
      },
      {
        who: "Woman in her 30s",
        quote:
          "I come along with my kid. There are plenty of other parents here, so people take turns keeping an eye on the children — and my kid ends up looking forward to it every time.",
      },
      {
        who: "Man in his 40s",
        quote:
          "At my age, the moment you stop moving your fitness drops off a cliff. Once a month is a pace I can actually keep — for work, for my family, and honestly for myself.",
      },
      {
        who: "Woman in her 20s",
        quote:
          "With so many families here, showing up alone as a woman doesn't feel out of place at all. On day one, several people came over to say hi, and any nerves I had were gone almost instantly.",
      },
      {
        who: "Man in his 20s",
        quote:
          "I mostly only speak English, but the welcome here was incredibly warm. Plenty of members are comfortable in English too, so I've never run into a communication problem.",
      },
    ],
  },
  contact: {
    heading: "Join us",
    lead: "Add the LINE official account as a friend and you’ll get the next event details. No reply needed.",
    qrCaption: "Scan with your phone to add as a friend",
    qrAlt: "QR code for the LINE official account",
    button: "Add on LINE",
    fallback: "Can’t scan? Use this link to sign up instead.",
  },
  footer: {
    copyright: "beibasuke / Makuhari Basketball Circle",
  },
  languages: {
    ja: "日本語",
    en: "English",
    zh: "中文",
    ko: "한국어",
  },
};

export default dict;
