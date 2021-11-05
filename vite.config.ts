const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: '@swert/feather-icons',
      fileName: (format) => `feather-icons.${format}.js`
    },
  }
})