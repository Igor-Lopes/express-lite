const Queue = require('bull')
const { setQueues, BullAdapter } = require('bull-board')

module.exports = app => {
  // Queue
  const queue = new Queue('routines-mysqldump', app.locals.createRedisClient)

  setQueues([
    new BullAdapter(queue)
  ])

  return queue
}
