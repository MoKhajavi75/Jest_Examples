const rand = require("./rand");

it("Promise test with resolves", () => {
  expect.assertions(1);
  expect(rand.rand()).resolves.toBeGreaterThanOrEqual(0);
});

it("Promise test with rejects", () => {
  expect(rand.rand()).rejects.toBeUndefined();
});

it("Async promise test", async () => {
  expect.assertions(1);
  const r = await rand.rand();
  expect(r).toBeGreaterThanOrEqual(0);
});
