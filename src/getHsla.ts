import getHash from "./getHash";
import hashToHsl from "./hashToHsl";
import { decToPercent } from "./utils";

export default function gethsl(str: string, options: {alpha?: number, a?: number} = {}) {
  let { alpha, a } = options;
  if (alpha || a) alpha = alpha || a;
  else alpha = 0.9;
  if (alpha > 1) alpha = 1;
  if (alpha < 0) alpha = 0;

  const hash = getHash(str);
  const hslRaw = hashToHsl(hash);

  return `hsla(${hslRaw[0]}, ${decToPercent(hslRaw[1])}, ${decToPercent(hslRaw[2] )}, ${alpha})`;
}
