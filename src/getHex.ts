import getHash from "./getHash";
import hashToHsl from "./hashToHsl";
import hslToRgb from "./hslToRgb";
import rgbToHex from "./rgbToHex";

export default function getHex(str: string) {
  const hash = getHash(str);
  const hslRaw = hashToHsl(hash);
  const rgbRaw = hslToRgb(hslRaw[0], hslRaw[1], hslRaw[2]);

  return rgbToHex(...rgbRaw);
}
