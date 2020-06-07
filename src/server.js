const express = require('express')
const config = require('./config')
const miner = require('./services/miner')

const { v4: uuidv4 } = require('uuid')

const app = express()

app.get('/mine', (req, res) => {
  let { hashes } = req.query
  hashes = hashes || [uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4()]

  const reqId = uuidv4()
  console.time(`Time for request: ${reqId}`)

  const minedHashes = hashes.map(s => miner(s))

  console.timeEnd(`Time for request: ${reqId}`)

  res.status(200).json({ hashes: minedHashes })
})

module.exports = function () {
  app.listen(config.port, config.host, () => {
    console.log(`Running at http://${config.host}:${config.port}/`)
  })
}
