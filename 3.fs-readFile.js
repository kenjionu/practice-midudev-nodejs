const fs = require('fs');
console.log('Leyendo el primer archivo')

fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log('primer texto: '+ text)
});


console.log('Hacer cosas mientra leer el archivo')

console.log('Leyendo el segundo archivo')

fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('segundo texto: '+text)
});