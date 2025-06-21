const http = require('node:http')
const pc = require('picocolors')
const { findAvailablePort } = require('./10.free-port.js')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

// El puerto 0 si le pones pondra el primero que encuentre que esta libre
findAvailablePort(desiredPort).then(port => {
  server.listen(0, () => {
    console.log(`Server listening on port ${pc.greenBright(server.address().port)}`)
  })
})
