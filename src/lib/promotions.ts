import feedbackBanner from "../assets/promotion-feedback.jpg";
import studentsBanner from "../assets/promotion-top-students.jpg";
import updatesBanner from "../assets/promotion-regular-updates.jpg";

export interface Promotion {
  id: string;
  image: string;
  alt: string;
  /** Where the banner click navigates (opens in a new tab). */
  href?: string;
  /** When set, clicking opens this form URL inside an in-page dialog instead of navigating. */
  formUrl?: string;
}

// Replace `image` with any public HTTPS JPG/PNG URL to change a banner.
// Give a banner `href` to send clicks to a link, or `formUrl` to open an
// embedded form (e.g. Google Form) in a dialog on click.
// Add another entry to show another banner with its own navigation dot.
export const promotions: Promotion[] = [
  {
    id: "feedback",
    image: feedbackBanner,
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdlnTg3i-XS3Ho3ixbA2XFO7j_Iyrd5zwbqi7Bt1mJGjN7PGg/viewform?embedded=true",
    alt: "Help us make VidyaX better! Your feedback matters — click this poster to give feedback",
  },
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
