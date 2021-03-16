import getHash from "./getHash";
import hashToHsl from "./hashToHsl.js";
import hslToRgb from "./hslToRgb";
import rgbToHex from "./rgbToHex";

export default function getHex(str) {
  const hash = getHash(str);
  const hslRaw = hashToHsl(hash);
  const rgbRaw = hslToRgb(...hslRaw);

  return rgbToHex(...rgbRaw);
}
