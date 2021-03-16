import getHash from "./getHash";
import hashToHsl from "./hashToHsl.js";
import hslToRgb from "./hslToRgb";

export default function getRgb(str) {
  const hash = getHash(str);
  const hslRaw = hashToHsl(hash);
  const rgbRaw = hslToRgb(...hslRaw);
  return `rgb(${rgbRaw[0]}, ${rgbRaw[1]}, ${rgbRaw[2]})`;
}
