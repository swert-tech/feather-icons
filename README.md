# @swert/feather-icons

[![NPM version](https://img.shields.io/npm/v/@swert/feather-icons.svg?style=flat)](https://npmjs.com/package/@swert/feather-icons) [![NPM downloads](https://img.shields.io/npm/dm/@swert/feather-icons.svg?style=flat)](https://npmjs.com/package/@swert/feather-icons)

## Install

```bash
npm install @swert/feather-icons
```

```bash
yarn add @swert/feather-icons
```
## Usage

```js
// Only import what you need!
import { AirplayIcon, AtSignIcon, ... } from '@swert/feather-icons'
```

See all icons and usage here: <https://feathericons.com>

### Sizing

By default, icons will be sized based on the font size of the parent element.

You can set a custom size using the `size` attribute.
For multiple based sizing, pass the desired multiple followed by an `x`.

```html
<ActivityIcon size="1.5x" class="custom-class" />
```

You can also set a `px` size directly by just passing an integer

```html
<ActivityIcon size="25" class="custom-class" />
```
