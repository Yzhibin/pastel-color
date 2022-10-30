import getHash from "./getHash";
import hashToHsl from "./hashToHsl";
import hslToRgb from "./hslToRgb";
import rgbToHex from "./rgbToHex";
import { HslRaw } from "./types";
import { decToPercent } from "./utils";

export default function getPastelColor(str?: string, options: {alpha?: number, a?: number}  = {}) : {
  hsl: string,
  hsla: string,
  hslRaw: [h: number, s: string, l: string],
  rgb: string,
  rgba: string,
  rgbRaw: [r: number, g: number, b: number],
  hex: string
} {
  let { alpha, a } = options;
  if (alpha || a) alpha = alpha || a;
  else alpha = 0.9;
  if (alpha > 1) alpha = 1;
  if (alpha < 0) alpha = 0;

  const hash = getHash(str);
  const hslRawNumbered = hashToHsl(hash);
  const hslRaw : HslRaw = [hslRawNumbered[0], decToPercent(hslRawNumbered[1]), decToPercent(hslRawNumbered[2])];
  const hsla = `hsla(${ hslRaw[0] }, ${ hslRaw[1] }, ${ hslRaw[2] }, ${ alpha })`;
  const hsl = `hsl(${ hslRaw[0] }, ${ hslRaw[1] }, ${ hslRaw[2] })`;

  const rgbRaw = hslToRgb(...hslRawNumbered);
  const rgb = `rgb(${rgbRaw[0]}, ${rgbRaw[1]}, ${rgbRaw[2]})`;
  const rgba = `rgba(${rgbRaw[0]}, ${rgbRaw[1]}, ${rgbRaw[2]}, ${alpha})`;
  
  const hex = rgbToHex(...rgbRaw);

  return {
    hslRaw,
    hsla,
    hsl,
    rgbRaw,
    rgb,
    rgba,
    hex
  }
}
