import { mod } from "./utils";

export default function hashToHsl(hash) {
  return [mod(~~(360 * hash), 360), 0.7, 0.7];
}
