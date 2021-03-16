# Pastel Color

Generate a visually pleasant color determined from a string value. It is useful for getting a color for a tag based on the text, or getting a default user avatar color from their usernames.

## Get Started

Install with yarn:

```
yarn add pastel-color
```

or npm:

```
npm install --save pastel-color
```

## Usage

### ES6 Import

```js
import {
  getPastelColor,
  getHsl,
  getHsla,
  getRgb,
  getRgba,
  getHex,
} from "pastel-color";
console.log(getPastelColor("some string"));
/*
{
  hex: '#d37de8',
  rgb: 'rgb(211, 125, 232)',
  rgbRaw: [ 211, 125, 232 ],
  rgba: 'rgba(211, 125, 232, 0.9)',
  hsla: 'hsla(288, 70%, 70%, 0.9)',
  hsl: 'hsl(288, 70%, 70%)',
  hslRaw: [ 288, '70%', '70%' ]
}
*/
```

### commonJS

```js
const pastelColor = require("pastel-color");
const colors = pastelColor.getPastelColor("some string");
```

## API

---

### `getPastelColor(str [, options])`

#### Parameters

- `str` - `String`: the string used to generate the color. If the value is falsy, arandom color is generated.
- `options` - `Object`: the [options](#options).

#### Returns

A color `Object` contains all representation of the same generated color.

- `hsl` - `String`: the HSL format. The saturation and lightness are 70%.
- `hsla` - `String`: the HSLA format. Alpha is determined by [options](#options).
- `hslRaw` - `Array`: an array of 3 HSL values.
- `rgb` - `String`: the RGB format. Converted from HSL format.
- `rgba` - `String`: the RGBA format. Alpha is determined by [options](#options).
- `rgbRaw` - `Array`: an array of 3 RGB values.
- `hex` - `String`: the HEX format. Converted from HSL format.

---

### `getHsl(str)`

Returns `String`. A shortcut to get HSL format.

---

### `getHsla(str [, options])`

Returns `String`. A shortcut to get HSLA format.

---

### `getRgb(str)`

Returns `String`. A shortcut to get RGB format.

---

### `getRgba(str [, options])`

Returns `String`. A shortcut to get RGBA format.

---

### `getHex(str)`

Returns `String`. A shortcut to get HEX format.

---

### `options`

An object may contain the following configuration parameters:

- `alpha`: the alpha value used to generate the hsla or rgba value. Default is 0.9.
- `a`: an alias for alpha.
