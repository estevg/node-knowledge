import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("js-foundation/05-factory", () => {
  const getUUID = () => "10022";
  const getAge = () => 25;

  test("buildMakePerson should return a function", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });

    expect(typeof makePerson).toBe("function");
  });

  test("buildMakePerson should return a person", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });

    const person = makePerson({ name: "John Doe", birthdate: "1998-10-05" });

    expect(person).toEqual({
      id: "10022",
      name: "John Doe",
      birthdate: "1998-10-05",
      age: 25,
    });
  });
});
