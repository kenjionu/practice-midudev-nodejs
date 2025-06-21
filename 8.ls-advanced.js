const fs = require('node:fs/promises')
const path = require('node:path')
const folder = process.argv[2] ?? '.'
const pc = require('picocolors')

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch (error) {
    console.error(pc.red(`No se pudo leer la carpeta ${folder} `))
    process.exit(1) // que salimos con uno para que aparezco como error en el nodejs en terminal
  }

  // esto si podemos hacer en pararelo es recuperar todo los ficheros del directorio
  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath) // el stats te da la información del archivo
    } catch (e) {
      process.exit(1)
    }

    // fileSystem para leer el directorio recuperar el directorio de ccada archivo tipo tamaño

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : '-'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    return `${pc.magenta(fileType)} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.toString().padStart(10))} ${pc.yellow(fileModified)}`
  })

  const filesInfo = await Promise.all(filesPromises)
  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)
