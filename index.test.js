const {
  isFullWord,
  extractThreeWordSequences,
  processFile,
} = require("./index");

describe("isFullWord function", () => {
  it("should return true for valid words", () => {
    expect(isFullWord("hello")).toBe(true);
    expect(isFullWord("he's")).toBe(true);
    expect(isFullWord("won't")).toBe(true);
    expect(isFullWord("kirby-")).toBe(true);
  });

  it("should return false for invalid words", () => {
    expect(isFullWord("")).toBe(false);
    expect(isFullWord("!hello")).toBe(false);
    expect(isFullWord("relic!")).toBe(false);
    expect(isFullWord("123")).toBe(false);
  });
});

describe("extractThreeWordSequences", () => {
  it("should return an empty object for empty text", async () => {
    const text = "";
    const result = await extractThreeWordSequences(text);
    expect(result).toEqual({});
  });

  it("should not find sequences with non-words", async () => {
    const text = "This-is-a-text-with-hyphens.";
    const result = await extractThreeWordSequences(text);
    expect(result).toEqual({});
  });

  it("should handle apostrophes correctly", async () => {
    const text = "He didn't see the whale's blow.";
    const result = await extractThreeWordSequences(text);
    expect(result).toHaveProperty("the whales blow");
  });

  it("should correctly extract three-word sequences, and handle unicode characters", async () => {
    const text = `
      This is a test
      file with some words
      like Süße and Straße.
      like Süße and Straße.

      This is a test for words with
      apostrophes like don't
      and well-known.
      and well-known.
      
      I love sandwiches . should be treated the same as I LOVE SANDWICHES !!
      I love sandwiches . should be treated the same as I LOVE SANDWICHES !!

      I love
      sandwiches
      I LOVE SANDWICHES!!
      
      shouldn't -eat that
      shouldn't eat that
      
      the sperm whale-ship
      the sperm whale-ship
      the sperm whale's
    `;

    const result = await extractThreeWordSequences(text);
    expect(result).toHaveProperty("like süße and");
    expect(result).toHaveProperty("süße and straße");
    expect(result).toHaveProperty("and wellknown and");
    expect(result).toHaveProperty("love sandwiches should");
    expect(result).toHaveProperty("i love sandwiches");
    expect(result).toHaveProperty("shouldnt eat that");
    expect(result).toHaveProperty("the sperm whales");
  });
});

describe("processFile function", () => {
  it("should read file content correctly", async () => {
    const filePath = "./text/intro.txt";
    const text = await processFile(filePath);
    expect(text).toContain("this is is a test file");
  });
});
