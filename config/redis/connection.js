const redis = require('redis')

module.exports = (config) => {
  const client = redis.createClient({
    url: config.redis.url
  })

  client.once('error', err => {
    console.log('Redis - Error on connection: ' + err)
  })

  client.once('ready', () => {
    console.info('Redis - Connected on: ' + config.redis.url)
  })

  process.once('exit', () => {
    client.quit()
    console.log(
      'Redis - Disconnected from: ' + config.redis.url
    )
  })

  return client
}
