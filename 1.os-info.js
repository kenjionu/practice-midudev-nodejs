const os = require('node:os')

console.log('Informacion del sistema:')
console.log('-----------------------------------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Version del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPU', os.cpus() + ' núcleos')
console.log('Memoria libre'.os.freemem() / 1024 / 1024 + 'MB')
console.log('Memoria Total'.os.totalmem() / 1024 / 1024 + 'MB')
console.log('uptime', os.uptime() / 60 / 60)
console.log('-----------------------------------')
