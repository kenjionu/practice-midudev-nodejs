const fs = require('node:fs/promises')

const folder = process.argv[2] ?? '.'

async function ls (directory){

}

ls(folder)

fs.readdir(folder)
    .then(files => {
        files.forEach(file => {
            const filePath = path.join(folder, file)

            fs.stat(filePath)
        })
    }).catch(err => {
    if(err){
        console.error('Error al leer el directorio: ', err)
        return;
    }
})