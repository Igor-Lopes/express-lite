module.exports = app => {
  const controller = app.controllers.index

  app.route('/').get(controller.render)

  app.route('/backup').post(app.controllers.api.v1.jobs.backup.backup)
}
