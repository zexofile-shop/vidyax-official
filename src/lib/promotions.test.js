import { expect, test } from "bun:test";
import { promotionContacts } from "./promotions";

test("instant promotion contact uses Nitesh's Telegram with a two-hour response time", () => {
  const contact = promotionContacts.find((entry) => entry.channel === "Telegram");
  expect(contact?.href).toBe("https://t.me/Me_nitesh");
  expect(contact?.responseTime).toBe("Within 2 hours");
});

test("email promotion contact uses the site email with a 24-hour response time", () => {
  const contact = promotionContacts.find((entry) => entry.channel === "Email");
  expect(contact?.href).toBe("mailto:vidyaxsite@gmail.com");
  expect(contact?.responseTime).toBe("Within 24 hours");
});