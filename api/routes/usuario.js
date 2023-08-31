const {Router} = require('express')
//Desestructuración. Extraer un atributo de un objeto

const route = Router() 

//Importar métodos del controlador
const {usuarioGet} = require('../controllers/usuario')

route.get('/', usuarioGet)

module.exports = route