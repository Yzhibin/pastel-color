import getHash from "./getHash";
import hashToHsl from "./hashToHsl";
import hslToRgb from "./hslToRgb";

export type RgbRaw = [h: string, s: string, l: string]

export default function getRgb(str: string) {
  const hash = getHash(str);
  const hslRaw = hashToHsl(hash);
  const rgbRaw = hslToRgb(...hslRaw);
  return `rgb(${rgbRaw[0]}, ${rgbRaw[1]}, ${rgbRaw[2]})`;
}
