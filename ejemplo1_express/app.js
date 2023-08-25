//Importando librerias o paquetes
const express = require('express')

const app = express() //Especificar la función a emplear

//Definir el puerto de la aplicación
const port = 8181

//Directorio de páginas estáticas
app.use(express.static('public'))

//La página que por defecto se cargará
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/home.html')
})

app.get('/con', (req, res) => {
    res.sendFile(__dirname+'/public/contacto.html')
})

//Error 404
app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public/404.html')
})

app.listen(port , () => {
    console.log(`Escuchando por el puerto ${port}`)
})

