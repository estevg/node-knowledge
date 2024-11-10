import { characters } from "../../src/js-foundation/02-destructuring";

describe("js-foundation/02-destructuring", () => {
  test("characters should contain Flash and Superman", () => {
    expect(characters).toContain("Flash");
    expect(characters).toContain("Superman");
  });
  test("characters should contain Flash and second Superman", () => {
    const [flash, superman] = characters;

    expect(flash).toContain("Flash");
    expect(superman).toContain("Superman");
  });
});
