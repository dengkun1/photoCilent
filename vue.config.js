module.exports = {
  devServer: {
    proxy: {
      // /api -> target
      // http://localhost:8081/login -> http://localhost:8081/api
      "/api": {
        target: "http://localhost:8081",
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
