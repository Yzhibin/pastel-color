import getHash from "./getHash";
import hashToHsl from "./hashToHsl.js";
import hslToRgb from "./hslToRgb";
import rgbToHex from "./rgbToHex";
import { decToPercent } from "./utils";

export default function getPastelColor(str, options = {}) {
  let { alpha, a } = options;
  if (alpha || a) alpha = alpha || a;
  else alpha = 0.9;
  if (alpha > 1) alpha = 1;
  if (alpha < 0) alpha = 0;

  let result = {};
  const hash = getHash(str);
  const hslRaw = hashToHsl(hash);

  result = {
    hsla: `hsla(${hslRaw[0]}, ${decToPercent(hslRaw[1])}, ${decToPercent(
      hslRaw[2]
    )}, ${alpha})`,
    hsl: `hsl(${hslRaw[0]}, ${decToPercent(hslRaw[1])}, ${decToPercent(
      hslRaw[2]
    )})`,
    hslRaw: [hslRaw[0], decToPercent(hslRaw[1]), decToPercent(hslRaw[2])],
    ...result,
  };

  const rgbRaw = hslToRgb(...hslRaw);
  const rgb = `rgb(${rgbRaw[0]}, ${rgbRaw[1]}, ${rgbRaw[2]})`;
  const rgba = `rgba(${rgbRaw[0]}, ${rgbRaw[1]}, ${rgbRaw[2]}, ${alpha})`;
  result = { rgb, rgbRaw, rgba, ...result };

  const hex = rgbToHex(...rgbRaw);
  result = { hex, ...result };

  return result;
}
