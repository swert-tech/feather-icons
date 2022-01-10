# <img src="./example/src/assets/logo.png" height="100" alt="Swert"> **Feather Icons**
[![NPM version](https://img.shields.io/npm/v/@swert/feather-icons.svg?style=for-the-badge)](https://npmjs.com/package/@swert/feather-icons) [![NPM downloads](https://img.shields.io/npm/dm/@swert/feather-icons.svg?style=for-the-badge)](https://npmjs.com/package/@swert/feather-icons)

## Install

```bash
$ npm install @swert/feather-icons
```

```bash
$ pnpm install @swert/feather-icons
```

```bash
$ yarn add @swert/feather-icons
```

## Usage

```html
<script setup>
// Only import what you need!
import { FeatherIcon, CoffeeIcon, ... } from '@swert/feather-icons'
</script>

<template>
    <FeatherIcon size="1.5x" class="custom-class" />
</template>
```

See all icons and usage here: <https://feathericons.com>

### Sizing

By default, icons will be sized based on the font size of the parent element.

You can set a custom size using the `size` attribute.
For multiple based sizing, pass the desired multiple followed by an `x`.

```html
<FeatherIcon size="1.5x" class="custom-class" />
```

You can also set a `px` size directly by just passing an integer

```html
<FeatherIcon size="25" class="custom-class" />
```

## Tree shaking

By using ES imports like `import { FeatherIcon } from '@swert/feather-icons'` with [webpack + minifier](https://webpack.js.org/guides/tree-shaking/#minify-the-output) or Rollup, unused exports in this module will be automatically eliminated.