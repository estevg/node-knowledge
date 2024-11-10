describe("App", () => {
  test("should be true", () => {
    // 1. Arrange
    const num1 = 10;
    const num2 = 30;

    // 2. Act
    const result = num1 + num2;

    // 3. Assert

    expect(result).toBe(40);
  });
});
