const path = require('node:path')
//bara separa de de carpetas segun so
console.log(path.sep)

// uinr rutas con path.join

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/cesar-secret-files/password.txt')
console.log(base)

const filename = path.filename('/tmp/cesar-secret-files/password.txt', '.txt')
console.log(filename)

const extension = path.extname('iamge.jpg')
console.log(extension)