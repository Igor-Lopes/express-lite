module.exports = {
  /* Your Env configs here */
  ssl: {
    enforce: false
  },
  csurfMiddleware: {
    enable: false
  },
  modules: {
    sslify: {
      trustProtoHeader: false
    }
  }
};
