const Sequelize = require('sequelize')
const sequelizePaginate = require('sequelize-paginate')

module.exports = app => {
  const model = app.locals.sequelize.define('BackupFile', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4
    },
    fileUrl: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    expiresAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  })

  sequelizePaginate.paginate(model)

  return model
}
