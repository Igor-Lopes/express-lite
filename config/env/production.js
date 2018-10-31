module.exports = {
  /* Set true to use sslify middleware. Production recommended */
  ssl: {
    enforce: true
  },
  /* Set true to use csurf middleware protection. Production recommended */
  csurfMiddleware: {
    enable: true
  },
  /* sslify settings. Check docs for all available options. By default trustProtoHeader is set to false. Only set it to true if you trust your proxy, eg.: Heroku */
  modules: {
    sslify: {
      trustProtoHeader: true
    }
  }
};
