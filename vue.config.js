// eslint-disable-next-line
const path = require("path");

module.exports = {
  // GitHub Pages
  publicPath: process.env.NODE_ENV === "production" ? "/vuetify-portal/" : "/",
  outputDir: path.resolve(__dirname, "docs"),
  transpileDependencies: ["vuetify"],
  devServer: {
    disableHostCheck: true
  },
  pages: {
    index: {
      entry: "src/main.ts",
      title: "xxxx Portal"
    }
  },
  configureWebpack: {
    output: {
      filename: "js/[name].js",
      chunkFilename: "js/[name].js"
    }
  },
  css: {
    extract: {
      filename: "css/[name].css",
      chunkFilename: "css/[name].css"
    }
  }
};
