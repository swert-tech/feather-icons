# <img src="./example/src/assets/logo.png" height="100" alt="Swert"> **Feather Icons**

[![NPM version](https://img.shields.io/npm/v/@swert/feather-icons.svg?style=flat)](https://npmjs.com/package/@swert/feather-icons) [![NPM downloads](https://img.shields.io/npm/dm/@swert/feather-icons.svg?style=flat)](https://npmjs.com/package/@swert/feather-icons)

## Install

```bash
npm install @swert/feather-icons
```

```bash
yarn add @swert/feather-icons
```

## Usage

```html
<script setup>
// Only import what you need!
import { CoffeeIcon, ActivityIcon, ... } from '@swert/feather-icons'
</script>

<template>
    <CoffeeIcon size="1.5x" class="custom-class" />
</template>
```

See all icons and usage here: <https://feathericons.com>

### Sizing

By default, icons will be sized based on the font size of the parent element.

You can set a custom size using the `size` attribute.
For multiple based sizing, pass the desired multiple followed by an `x`.

```html
<CoffeeIcon size="1.5x" class="custom-class" />
```

You can also set a `px` size directly by just passing an integer

```html
<CoffeeIcon size="25" class="custom-class" />
```

## Tree shaking

By using ES imports like `import { CoffeeIcon } from '@swert/feather-icons'` with [webpack + minifier](https://webpack.js.org/guides/tree-shaking/#minify-the-output) or Rollup, unused exports in this module will be automatically eliminated.

To make webpack tree shaking work without using any minifier, you can use the per-file icons from [`icons`](https://unpkg.com/vue-feather-icons/icons/) directory, e.g. `import CoffeeIcon from '@swert/feather-icons/icons/CoffeeIcon'`.