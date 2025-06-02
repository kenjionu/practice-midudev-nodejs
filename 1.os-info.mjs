import { platform, release, arch, cpus, freemem,totalmen, uptime } from "node:os";

console.log('Informacion del sistema:')
console.log('-----------------------------------')

console.log('Nombre del sistema operativo', platform())
console.log('Version del sistema operativo', release())
console.log('Arquitectura', arch())
console.log('CPU', cpus() + ' núcleos')
console.log('Memoria libre'. freemem() / 1024  / 1024 + 'MB')
console.log('Memoria Total'. totalmem() / 1024  / 1024 + 'MB')
console.log('uptime', uptime() / 60 / 60)
console.log('-----------------------------------')