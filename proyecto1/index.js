console.log('Hola 2617472')
/*
Realice un algoritmo en JS que imprima los números del 1 al 100
*/
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer( (req, res ) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text-plain')
    res.end('Este es mi primer servidor en node!\n')
})

server.listen( port, hostname, () => {
    console.log(`Servidor ejecutándose en https://${hostname}:${port}/`)
})