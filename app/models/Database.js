const Sequelize = require('sequelize')
const sequelizePaginate = require('sequelize-paginate')

module.exports = app => {
  const model = app.locals.sequelize.define('Database', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    connection: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM,
      values: ['AVAILABLE', 'UNAVAILABLE', 'UNKOWN'],
      defaultValue: 'UNKOWN'
    }
  })

  sequelizePaginate.paginate(model)

  return model
}
