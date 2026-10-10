import { expect, test } from "bun:test";
import { promotionContactUrl, promotions } from "./promotions";

test("promotion contact goes directly to Nitesh's Telegram", () => {
  expect(promotionContactUrl).toBe("https://t.me/Me_nitesh");
});

test("both supplied banners use the requested Telegram destination", () => {
  expect(promotions).toHaveLength(2);
  expect(promotions[0].href).toBe("https://t.me/+Mi3AU81_kZowNjI1");
  expect(promotions[1].href).toBe("https://t.me/+Mi3AU81_kZowNjI1");
});