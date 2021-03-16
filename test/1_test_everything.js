import { expect } from "chai";
import {
  getPastelColor,
  getHsl,
  getHsla,
  getRgb,
  getRgba,
  getHex,
} from "../dist";
const pastelColor = require("../dist");

describe("pastel-color", function () {
  const SOME_STRING = "some string";
  const hslRegex = /^hsl\(((360)|(3[0-5][0-9]{1})|[1-2][0-9]{2}|([1-9]?[0-9])), (100|[1-9]?[0-9])%, (100|[1-9]?[0-9])%\)$/;
  const hslaRegex = /^hsla\(((360)|(3[0-5][0-9]{1})|[1-2][0-9]{2}|([1-9]?[0-9])), (100|[1-9]?[0-9])%, (100|[1-9]?[0-9])%, (1|(0\.\d{1,}))\)$/;
  const rgbRegex = /^rgb\((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9]), (25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9]), (25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\)$/;
  const rgbaRegex = /^rgba\((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9]), (25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9]), (25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9]), (1|(0\.\d{1,}))\)$/;
  const hexRegex = /^#[a-fA-F0-9]{6}$/;

  describe("getPastelColor()", function () {
    let pastelColorOfSomeString;

    it("should return an object contains every color representaion", function () {
      const colors = getPastelColor(SOME_STRING);

      console.log(colors);

      expect(colors).to.be.an("object");
      expect(colors).to.have.all.keys([
        "hsl",
        "hsla",
        "hslRaw",
        "rgb",
        "rgba",
        "rgbRaw",
        "hex",
      ]);
      pastelColorOfSomeString = colors;
    });

    it("should produce the same result if input is the same", function () {
      const colors = getPastelColor(SOME_STRING);
      expect(colors).to.eql(pastelColorOfSomeString);
    });

    it("should generate a random color if a falsy value is provided", function () {
      expect(getPastelColor()).to.be.an("object");
      expect(getPastelColor("")).to.be.an("object");
      expect(getPastelColor(null)).to.be.an("object");
    });

    it("should give correct format for all fields", function () {
      const { hsl, hsla, rgb, rgba, hex } = getPastelColor(SOME_STRING);
      expect(hsl).to.match(hslRegex);
      expect(hsla).to.match(hslaRegex);
      expect(rgb).to.match(rgbRegex);
      expect(rgba).to.match(rgbaRegex);
      expect(hex).to.match(hexRegex);
    });

    it("should work with commonJS require", function () {
      expect(pastelColor.getPastelColor()).to.be.an("object");
    });
  });

  describe("getHsl() and getHsla()", function () {
    it("should return a string of hsl value and hsla value respectively", function () {
      expect(getHsl(SOME_STRING)).to.match(hslRegex);
      expect(getHsla(SOME_STRING)).to.match(hslaRegex);
    });
  });

  describe("getRgb() and getRgba()", function () {
    it("should return a string of rgb value and rgba value respectively", function () {
      expect(getRgb(SOME_STRING)).to.match(rgbRegex);
      expect(getRgba(SOME_STRING)).to.match(rgbaRegex);
    });
  });
  describe("getHex()", function () {
    it("should return a string of hex color value", function () {
      expect(getHex(SOME_STRING)).to.match(hexRegex);
    });
  });
});
