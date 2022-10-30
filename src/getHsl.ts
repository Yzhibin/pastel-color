import getHash from "./getHash";
import hashToHsl from "./hashToHsl";
import { decToPercent } from "./utils";

export default function getHsl(str: string) {
  const hash = getHash(str);
  const hslRaw = hashToHsl(hash);

  return `hsl(${hslRaw[0]}, ${decToPercent(hslRaw[1])}, ${decToPercent(hslRaw[2])})`;
}
