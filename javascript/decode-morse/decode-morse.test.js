import { decodeMorse } from "./decode-morse-v1";

describe("Should correct accord morse code", () => {
  it("Should be hey jude", () =>
    expect(decodeMorse(".... . -.--   .--- ..- -.. .")).toEqual("HEY JUDE"));
  it("Should be SOS", () => expect(decodeMorse("...---...")).toEqual("SOS"));
});
