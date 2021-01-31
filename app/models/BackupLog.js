const Sequelize = require('sequelize')
const sequelizePaginate = require('sequelize-paginate')

module.exports = app => {
  const model = app.locals.sequelize.define('BackupLog', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4
    },
    status: {
      type: Sequelize.ENUM,
      values: ['SUCCESS', 'FAILURE'],
      allowNull: false
    },
    message: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  })

  sequelizePaginate.paginate(model)

  return model
}
