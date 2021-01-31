const moment = require('moment')

module.exports = app => {
  const controller = {}

  const mysqldumpQueue = app.queues.routines.mysqldump

  controller.backup = async (req, res, next) => {
    try {
      await mysqldumpQueue.add('dump', {
        dir: './backups/ ',
        filename: moment().unix() + '-easypag-dev.sql'
      })

      return res.end()
    } catch (ex) {
      next(ex)
    }
  }

  controller.test = async (req, res, next) => {
    const test = await mysqldumpQueue.getJobs()

    res.send(test)
  }

  return controller
}
