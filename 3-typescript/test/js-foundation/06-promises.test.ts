import { getPokemonById } from "../../src/js-foundation/06-promises";

describe("js-foundation/06-promises", () => {
  test("getPokemonById should return a pokemon", async () => {
    const id = 1;

    const pokemonName = await getPokemonById(id);

    expect(pokemonName).toBe("bulbasaur");
  });

  test("should return an error if pokemon does not exist ", async () => {
    const id = 1000000;
    try {
      const pokemonName = await getPokemonById(id);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(`Pokemon not found with id ${id}`);
    }
  });
});
