import studentsBanner from "../assets/promotion-top-students.jpg";

// Replace `image` with any public HTTPS JPG/PNG URL to change a banner.
// Add another entry to show another banner with its own navigation dot.
export const promotions = [
  {
    id: "top-students",
    image: studentsBanner,
    alt: "EduSpark × VidyaX special announcement: top 3 eligible students receive a trophy and certificate",
  },
];

export const promotionContacts = [
  { title: "Instant replies", responseTime: "Within 2 hours", href: "https://t.me/Me_nitesh", channel: "Telegram" },
  { title: "Email support", responseTime: "Within 24 hours", href: "mailto:vidyaxsite@gmail.com", channel: "Email" },
] as const;