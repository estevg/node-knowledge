import { getUUID } from "../../src/plugins/get-id.plugin";

describe("plugins/get-id.plugin.ts", () => {
  test("getUUID() should return a UUID", () => {
    const id = getUUID();

    expect(typeof id).toBe("string");
    expect(id.length).toBe(36);
  });
});
