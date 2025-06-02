
const { readFile } = require('node:fs/promises')

// Lo bueno que esto va hacer mas rapido va hacer 2 trabajos en paralelos
// lo bueno cuando lo ejecutemos en paralelo vamos a ver que sta en el orden del primero y el segundo
// porque somos los que estamos controlando
Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
    ]).then(([text, text2]) => {
        console.log('primer texto: '+text)
        console.log('segundo texto: '+text2)
    })

    const text = await readFile('./archivo.txt', 'utf-8')
    console.log('primer texto: '+text)

    console.log('Hacer cosas mientra leer el archivo')

    console.log('Leyendo el segundo archivo')

    const text2 = await readFile('./archivo2.txt', 'utf-8')
    console.log('segundo texto: '+text2)
