const express = require('express')
const config = require('./config')
const importFileService = require('./services/import-file')
const saveToDbService = require('./services/save-to-db')
const uploadToSourceService = require('./services/upload-to-source')

const app = express()

app.get('/update', (req, res) => {
  let { sources } = req.query
  sources = sources || []

  console.time('full-time')

  importFileService()

  saveToDbService()

  for (const source of sources) {
    uploadToSourceService(source)
  }

  console.timeEnd('full-time')

  res.status(200).json({ status: 'done' })
})

module.exports = function () {
  app.listen(config.port, config.host, () => {
    console.log(`Running at http://${config.host}:${config.port}/`)
  })
}
