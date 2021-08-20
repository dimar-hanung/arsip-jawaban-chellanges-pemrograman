import { rgb } from "./rgb-to-hex";
describe("Convert rgb to hexadecimal", () => {
  it("should behave as expected", () => {
    expect(rgb(173, 255, 47)).toEqual("ADFF2F");
    expect(rgb(255, 255, 255)).toEqual("FFFFFF");
    expect(rgb(84, 0, 9)).toEqual("540009");
  });
});
