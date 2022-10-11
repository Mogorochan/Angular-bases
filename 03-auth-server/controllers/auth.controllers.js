const { response} = require('express');
const  bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');


const crearUsuario =  async(req, res = response) => {
    
    const {name, email, password} = req.body;

    try {
    //Paso1. Verificar sí hay dos email's iguales
        const usuario = await Usuario.findOne({email}); //verificación

        if (usuario) {
            return res.status(404).json({
                ok: false,
                msg: "El usuario ya existe con ese email, por favos ingresar otro"
            });
        }

    //Paso2. Crear usuario con el modelo
        const dbUser = new Usuario(req.body);

    //Paso5. Encriptar la contraseña(por medio del hash)
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password,salt);

    //Generar el Jason web token (JWT)
    //Paso3. Crear usuario en BD
        await dbUser.save();
        
    //Paso4. Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Algo falló!'
        });
    }


    

}

const loginUsuario = (req, res = response) => {

    const { email, password} = req.body;

    return res.json({
        ok: true,
        msg: 'Login usuario/'
    })
}

const revalidarToken =  (req, res = response) => {
    return res.json({
        ok: true,
        msg: 'Renew/'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}