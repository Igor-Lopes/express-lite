const Sequelize = require('sequelize')

module.exports = (config) => {
  const sequelize = new Sequelize(config.sequelize.url, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    logging: config.sequelize.logging === true ? console.log : false,
    benchmark: config.sequelize.benchmark,
    pool: {
      min: config.sequelize.pool.min,
      max: config.sequelize.pool.max,
      // @note https://github.com/sequelize/sequelize/issues/8133#issuecomment-359993057
      acquire: config.sequelize.pool.acquire
    }
  })

  console.log(config)

  sequelize
    .authenticate()
    .then(() => {
      console.log(
        'Sequelize - Connected on: ' +
        sequelize.options.host +
        ':' +
        sequelize.options.port +
        ' - ' +
        sequelize.config.database
      )
    })
    .catch(err => {
      console.log('Sequelize - Error on connection: ' + err)
    })

  return sequelize
}
