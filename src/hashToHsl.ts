import { HslRawNumbered } from "./types";
import { mod } from "./utils";

export default function hashToHsl(hash: number) : HslRawNumbered{
  return [mod(~~(360 * hash), 360), 0.7, 0.7];
}
