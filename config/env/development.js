module.exports = {
  /* Set true to use sslify middleware. Production recommended */
  ssl: {
    enforce: false
  },
  /* Set true to use csurf middleware protection. Production recommended */
  csurfMiddleware: {
    enable: false
  },
  /* sslify settings. Check docs for all available options. By default trustProtoHeader is set to false. Only set it to true if you trust your proxy, eg.: Heroku */
  modules: {
    sslify: {
      trustProtoHeader: false
    }
  }
};
