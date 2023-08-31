const {response} = require('express')

//Importación de los modelos
const Usuario = require('../models/usuario')

//Método GET de la API
const usuarioGet = async(req, res = response) =>{
    //const {nombre} = req.query //Desestructuración

    //Consultar todos los usuarios
    const usuarios = await Usuario.find()

    res.json({  //Respuesta en JSON
        usuarios
    })   
}

//Método POST de la api
const usuarioPost = async(req, res) => {
    let mensaje = 'Inserción Exitosa'
    //const body = req.body //Captura de atributos
    //console.log(body);
    try {
        const usuario = new Usuario({nombre, password, rol, estado}) //Instanciando el objeto
        await usuario.save() //Inserta en la colección
    } catch (error) {
        mensaje = error
    }
    res.json({
        msg: mensaje
    })
}


module.exports = {
    usuarioGet,
    usuarioPost
}