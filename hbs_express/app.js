//Importando librerias o paquetes
const express = require('express')
//instalar hbs: motor de plantillas de node
const path = require('path')
const hbs = require('hbs')

const app = express() //Especificar la función a emplear

//Definir el puerto de la aplicación
const port = 8181

//Directorio de páginas estáticas
app.use(express.static('public'))

//Configuración del directorio de las vistas hbs
app.set('views', path.join(__dirname+'/public/views'))

//Configuración del directorio que guardará los archivos partials hbs
hbs.registerPartials(__dirname + '/public/views/partials');


//Interpretar hbs por el servidor
app.set('view engine', 'hbs')

//Home: La página que por defecto se cargará
app.get('/', (req, res) => {
    //res.sendFile(__dirname+'/public/home.hbs')
    res.render('home', {
        titulo: 'Home ccbbbbbbbbbbbbbbbb',
        nombre: 'Diego López'
    })
})

app.get('/contacto', (req, res) => {
    res.render('contacto')
})

//Agregar página misión

app.get('*', (req, res) => {
    res.render('404')
})

/*app.get('/con', (req, res) => {
    res.sendFile(__dirname+'/public/contacto.hbs')
})
*/

//Error 404
/*
app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public/404.hbs')
})

*/
app.listen(port , () => {
    console.log(`Escuchando por el puerto ${port}`)
})

