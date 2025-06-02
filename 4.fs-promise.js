/*const { promisify } = require('node:util');

const readFilePromise = promisify(fs.readFile);
*/
const fs = require('fs/promises');

console.log('Leyendo el primer archivo')

fs.readFile('./archivo.txt', 'utf-8')
    .then(text => console.log('primer texto: '+text))


console.log('Hacer cosas mientra leer el archivo')

console.log('Leyendo el segundo archivo')

fs.readFile('./archivo2.txt', 'utf-8')
.then(text => console.log('segundo texto: '+text))