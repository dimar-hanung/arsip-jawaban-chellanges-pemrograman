import { expect } from "@jest/globals";
import { find } from "./answers/index-of-array";

describe("Your refactored find() function", () => {
  it("should behave as expected", () => {
    const array = [2, 3, 5, 7, 11];
    expect(find(array, 3)).toEqual(1);
    expect(find(array, 11)).toEqual(4);
    expect(find(array, 12)).toEqual("Not found");
  });
});
