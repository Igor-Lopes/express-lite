const Sequelize = require('sequelize')
const sequelizePaginate = require('sequelize-paginate')

module.exports = app => {
  const model = app.locals.sequelize.define('BackupRule', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4
    },
    connection: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    bucketType: {
      type: Sequelize.ENUM,
      values: ['S3', 'GOOGLE_STORAGE'],
      allowNull: false
    },
    bucketCredentials: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM,
      values: ['READY', 'RUNNING'],
      allowNull: false
    },
    nextRunAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    webhookUrl: {
      type: Sequelize.STRING,
      allowNull: false
    },
    webhookSecret: {
      type: Sequelize.STRING,
      allowNull: true
    }
  })

  sequelizePaginate.paginate(model)

  return model
}
