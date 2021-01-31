module.exports = {
  sequelize: {
    url: 'mysql://root:root@localhost:3306/backupper_dev',
    logging: false,
    benchmark: false,
    pool: {
      min: 0,
      max: 20,
      acquire: 120000
    }
  },
  redis: {
    url: 'redis://127.0.0.1:6379/0'
  },
  // Set true to use sslify middleware. Production recommended
  ssl: {
    enforce: false
  },
  // Set true to use csurf middleware protection. Production recommended
  csurfMiddleware: {
    enable: false
  },
  // sslify settings. Check docs for all available options. By default trustProtoHeader is set to false. Only set it to true if you trust your proxy, eg.: Heroku
  modules: {
    sslify: {
      trustProtoHeader: false
    }
  },
  eventEmitter: {
    maxListeners: 50
  }
}
