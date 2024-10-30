// vue.config.js
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  outputDir: 'dist',
  transpileDependencies: true,
  css: {
    extract: {
      // Specify filenames if needed
      // This is optional and can be omitted during development
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css',
    },
  },
  // Ensure the publicPath is correctly set
  publicPath: '/',
});