// process
// argumentos de entrada

console.log(process.argv)

// controlar el proceso y su salida
process.exit(0)
process.exit(1) // es que ve un error

// podemos controlar eventos del proceso
process.on('exit', () => {
//limpiar recursos
})

// current working directory
process.cwd()
console.log(process.cwd())

//platform
console.log(process.env.PEPITO)


