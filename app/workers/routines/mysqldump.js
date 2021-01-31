

const mysqldump = require("mysqldump")

module.exports = app => {

  const queue = app.queues.routines.mysqldump


  queue.process(
    'dump',
    1,
    async job => {
      try {
        mysqldump({
          connection: {
              host: 'localhost',
              user: 'root',
              password: 'root',
              database: 'easypag_dev',
          },
          dumpToFile: job.data.dir + job.data.filename,
      });

      return Promise.resolve(true)
  
      } catch (ex) {
        return Promise.reject(new Error(ex))
      }
    }
  )

  queue.on('active', (job, jobPromise) => {
    console.log(JSON.stringify(job))
  })

  queue.on('completed', async (job, result) => {
    console.log(JSON.stringify(job))
  })

  queue.on('failed', async (job, err) => {
    console.log(JSON.stringify(job))
  })

  queue.on('error', error => {
    console.log(error)
  })

  queue.on('waiting', jobId => {
    console.log(jobId)
  })

  queue.on('stalled', job => {
    console.log(JSON.stringify(job))
  })

  queue.on('removed', job => {
    console.log(JSON.stringify(job))
  })

  return queue
}
