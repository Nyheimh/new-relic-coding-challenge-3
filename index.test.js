const { isFullWord } = require("./index");

describe("isFullWord function", () => {
  it("should return true for valid words", () => {
    expect(isFullWord("hello")).toBe(true);
    expect(isFullWord("he's")).toBe(true);
    expect(isFullWord("won't")).toBe(true);
  });

  it("should return false for invalid words", () => {
    expect(isFullWord("")).toBe(false);
    expect(isFullWord("!hello")).toBe(false);
    expect(isFullWord("-hello")).toBe(false);
    expect(isFullWord("123")).toBe(false);
  });
});
