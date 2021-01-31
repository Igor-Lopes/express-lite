const Redis = require('ioredis')

module.exports = config => {
  const REDIS_URL = config.redis.url
  const maxListeners = config.eventEmitter.maxListeners

  const client = new Redis(REDIS_URL)
  const subscriber = new Redis(REDIS_URL)

  client.setMaxListeners(client.getMaxListeners() + maxListeners)
  subscriber.setMaxListeners(subscriber.getMaxListeners() + maxListeners)

  const opts = {
    createClient: type => {
      switch (type) {
        case 'client':
          return client
        case 'subscriber':
          return subscriber
        default:
          return new Redis(REDIS_URL)
      }
    }
  }

  return opts
}
