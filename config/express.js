// Env Config
const config = require('./config')
// Express
const express = require('express')
// Express sslify
const enforce = require('express-sslify')
// Compression
const compression = require('compression')
// Helmet
const helmet = require('helmet')
// Cookie Parser
const cookieParser = require('cookie-parser')
// Csurf
const csurf = require('csurf')
// Morgan
const morgan = require('morgan')
// Body Parser
const bodyParser = require('body-parser')
// Body Parser Error
const bodyParserError = require('bodyparser-json-error')
// Consign
const consign = require('consign')
// Bull Board
const { router } = require('bull-board')

module.exports = () => {
  /* Init Express app and set port */
  const app = express()
  app.set('port', process.env.PORT || 5000)

  // Express sslify
  if (config.ssl.enforce) {
    app.use(enforce.HTTPS(config.modules.sslify))
  }

  // Sequelize
  const sequelize = require('./sequelize/connection.js')(config)

  /* Compression */
  app.use(compression())

  /* Helmet */
  app.use(helmet())

  /* Cookie Parser */
  app.use(cookieParser())

  /* Express Csurf */
  if (config.csurfMiddleware.enable) {
    app.use(csurf({ cookie: true }))
    /* Handle Csurf error */
    app.use((err, req, res, next) => {
      if (err.code !== 'EBADCSRFTOKEN') return next(err)
      res.status(403).end()
    })
  }

  // Redis
  const redisClient = require('./redis/connection.js')(config)
  const createRedisClient = require('./redis/reuse.js')(config)

  // Locals
  app.locals.config = config
  app.locals.sequelize = sequelize
  app.locals.redisClient = redisClient
  app.locals.createRedisClient = createRedisClient

  /* Express Morgan */
  app.use(morgan('dev'))

  /* Body Parser */
  app.use(bodyParser.json())

  /* Body Parser Error */
  app.use(
    bodyParserError.beautify({
      status: 400,
      res: {
        error: 'JSON Bad Syntax'
      }
    })
  )

  // Bull Board
  app.use('/admin/queues', router)

  /* Set view engine */
  app.use(express.static('./public'))
  app.set('view engine', 'pug')
  app.set('views', './app/views')

  /* Set App Locals */
  app.locals.config = config

  /* Autoload modules with Consign */
  consign({
    cwd: 'app'
  })
    .include('models')
    .then('libs')
    .then('queues')
    .then('controllers')
    .then('middlewares')
    .then('routes')
    .then('workers')
    .into(app)

  // Sync Sequelize models
  sequelize.sync()

  return app
}
