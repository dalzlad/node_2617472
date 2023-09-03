const {Router} = require('express')
//Desestructuración. Extraer un atributo de un objeto

const route = Router() 

//Importar métodos del controlador
const {usuarioGet, usuarioPost, usuarioPut} = require('../controllers/usuario')

route.get('/', usuarioGet) //Listar Datos

route.post('/', usuarioPost) //Insertar Datos

route.put('/', usuarioPut) //Insertar Datos

module.exports = route