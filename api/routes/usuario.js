const {Router} = require('express')
//Desestructuración. Extraer un atributo de un objeto

const route = Router() 

//Importar métodos del controlador
const {usuarioGet, usuarioPost} = require('../controllers/usuario')

route.get('/', usuarioGet) //Listar Datos

route.post('/', usuarioPost) //Insertar Datos

module.exports = route