import getHash from "./getHash";
import hashToHsl from "./hashToHsl.js";
import { decToPercent } from "./utils";

export default function getHsl(str) {
  const hash = getHash(str);
  const hslRaw = hashToHsl(hash);

  return `hsl(${hslRaw[0]}, ${decToPercent(hslRaw[1])}, ${decToPercent(
    hslRaw[2]
  )})`;
}
