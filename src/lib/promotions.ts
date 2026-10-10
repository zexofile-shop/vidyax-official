import studentsBanner from "../assets/promotion-top-students.jpg";
import updatesBanner from "../assets/promotion-regular-updates.jpg";

// Replace `image` with any public HTTPS JPG/PNG URL to change a banner.
// Replace each banner's `href` independently to change its click destination.
// Add another entry to show another banner with its own navigation dot.
export const promotions = [
  {
    id: "top-students",
    image: studentsBanner,
    href: "https://t.me/+Mi3AU81_kZowNjI1",
    alt: "EduSpark × VidyaX special announcement: top 3 eligible students receive a trophy and certificate",
  },
  {
    id: "regular-updates",
    image: updatesBanner,
    href: "https://t.me/+Mi3AU81_kZowNjI1",
    alt: "VidyaX regular app updates announcement: developers and support active, with improvements planned for October and November",
  },
];

// Change this destination to replace the Contact button's Telegram link.
export const promotionContactUrl = "https://t.me/Me_nitesh";