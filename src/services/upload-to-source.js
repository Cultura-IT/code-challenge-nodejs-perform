const { sleep } = require('sleep')

module.exports = function (source) {
  // Simulo tarea pesada de 7 segundos
  sleep(7)
  console.log(`Exported to source ${source}`)
}
