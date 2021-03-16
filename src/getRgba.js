import getHash from "./getHash";
import hashToHsl from "./hashToHsl.js";
import hslToRgb from "./hslToRgb";

export default function getRgba(str, options = {}) {
  let { alpha, a } = options;
  if (alpha || a) alpha = alpha || a;
  else alpha = 0.9;
  if (alpha > 1) alpha = 1;
  if (alpha < 0) alpha = 0;

  const hash = getHash(str);
  const hslRaw = hashToHsl(hash);
  const rgbRaw = hslToRgb(...hslRaw);
  return `rgba(${rgbRaw[0]}, ${rgbRaw[1]}, ${rgbRaw[2]}, ${alpha})`;
}
