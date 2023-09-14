const Usuario = require('../models/usuario')
const bcrypt = require('bcrypt') //Encriptar

async function comparePassword(passwordForm, passworsBD) {
    const result = await bcrypt.compare(passwordForm, passworsBD);
    return result;
}

const login = async(req, res) => {
    const { nombre, password } = req.body
    
    //Verificar si el nombre existe
    const usuarios = await Usuario.findOne({nombre})
    try {
        if(!usuarios){//Si no encontró el nombre
            return res.status(400).json({
                msg: 'Usuario no existe'
            })
        }
        if(usuarios.estado == false){
            return res.status(400).json({
                msg: 'Usuario está inactivo'
            })
        }

        resultado = await comparePassword(password, usuarios.password)

        if(resultado == true){
            return res.status(200).json({
                msg: 'Bienvenido'
            })
        }
        else{
            return res.status(400).json({
                msg: 'Usuario y/o password incorrecto'
            })
        }

    } catch (error) {
        return res.status(400).json({
            msg: 'Apreciado usuario contacte al administrador.'
        })
    }
}

module.exports = {
    login
}

//Alexandra Gamboa
//Carlos Muñoz
//Yhosman Sánchez
//Santiago Zapata

