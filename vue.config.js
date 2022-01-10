const { defineConfig } = require("@vue/cli-service")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        fs: false,
        assert: require.resolve("assert"),
        utils: require.resolve("util"),
        path: require.resolve("path-browserify"),
      },
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
      }),
    ],
  },
  // NOTE When using pwa and pwa
  // pwa: {
  //   themeColor: "#ffffff",
  //   msTileColor: "#ffffff",
  //   appleMobileWebAppCapable: "yes",
  //   appleMobileWebAppStatusBarStyle: "#ffffff",
  // }
})
