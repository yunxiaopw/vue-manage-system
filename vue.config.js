module.exports = {
  devServer: {
    port: 3000,
    open: true
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variable.scss";`
      }
    }
  }
};
