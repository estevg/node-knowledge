import { getAge } from "../../src/plugins/get-age.plugin";

describe("plugins/get-age.plugin", () => {
  test("getAge() should return the age of a person", () => {
    const birthday = "1998-05-10";
    const age = getAge(birthday);

    expect(typeof age).toBe("number");
  });
  test("getAge() should return current age", () => {
    const birthday = "1998-05-10";
    const age = getAge(birthday);

    const currentAge =
      new Date().getFullYear() - new Date(birthday).getFullYear();

    expect(age).toBe(currentAge);
  });

  test("getAge should return 0 years", () => {
    // Sobreecribir metodos con spyOn y mockReturnValue
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1998);
    const birthday = "1998-05-10";
    const age = getAge(birthday);

    expect(age).toBe(0);
    expect(spy).toHaveBeenCalledWith();
  });
});
