import { expect } from "@jest/globals";
import { find } from "./answers/index-of-array";

describe("Your refactored find() function", () => {
  const array = [2, 3, 5, 7, 11];
  it("should behave as expected", () => {
    expect(find(array, 3)).toEqual(1);
    expect(find(array, 11)).toEqual(4);
  });
  it("should be Not found", () => expect(find(array, 12)).toEqual("Not found"));
});
