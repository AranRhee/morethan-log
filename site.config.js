const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Aran",
    image: "/profileImage.jpeg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "초짜 개발자",
    bio: "A journey of a thousand miles begins with a single step.",
    email: "aranrhee@icloud.com",
    linkedin: "",
    github: "AranRhee",
    instagram: "",
  },
  projects: [
    {
      name: `Comming Soon...`,
      href: "",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Dev Log",
    description: "Welcome to Aran's Dev log",
  },

  // CONFIG configration (required)
  link: "https://rheerhee.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
