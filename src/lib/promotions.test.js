import { expect, test } from "bun:test";
import { promotionContactUrl, promotions } from "./promotions";

test("promotion contact goes directly to Nitesh's Telegram", () => {
  expect(promotionContactUrl).toBe("https://t.me/Me_nitesh");
});

test("feedback banner is #1 and redirects directly to the supplied form", () => {
  expect(promotions[0].id).toBe("feedback");
  expect(promotions[0].href).toBe("https://forms.gle/QwNUJr2xp6brhpybA");
  expect(promotions[0]).not.toHaveProperty("formUrl");
});

test("both supplied banners use the requested Telegram destination", () => {
  expect(promotions).toHaveLength(3);
  expect(promotions[1].href).toBe("https://t.me/+Mi3AU81_kZowNjI1");
  expect(promotions[2].href).toBe("https://t.me/+Mi3AU81_kZowNjI1");
});
