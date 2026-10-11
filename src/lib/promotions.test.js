import { expect, test } from "bun:test";
import { promotionContactUrl, promotions } from "./promotions";

test("promotion contact goes directly to Nitesh's Telegram", () => {
  expect(promotionContactUrl).toBe("https://t.me/Me_nitesh");
});

test("feedback banner is #1 and opens the Google Form embedded", () => {
  expect(promotions[0].id).toBe("feedback");
  expect(promotions[0].formUrl).toBe(
    "https://docs.google.com/forms/d/e/1FAIpQLSdlnTg3i-XS3Ho3ixbA2XFO7j_Iyrd5zwbqi7Bt1mJGjN7PGg/viewform?embedded=true"
  );
});

test("both supplied banners use the requested Telegram destination", () => {
  expect(promotions).toHaveLength(3);
  expect(promotions[1].href).toBe("https://t.me/+Mi3AU81_kZowNjI1");
  expect(promotions[2].href).toBe("https://t.me/+Mi3AU81_kZowNjI1");
});
