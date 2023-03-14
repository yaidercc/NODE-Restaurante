const {
    response
} = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

const validateJwt = async (req, res = response, next) => {
    const token = req.header("x-token");
    // Se valida la vigencia del token
    if (!token) {
        res.status(401).json({
            msg: "No hay token en la peticion."
        })
    }

    try {
        // se extrae el id
        const {
            uuid
        } = jwt.verify(token, process.env.SECRETKEY);

        // Se busca el usuario
        const usuario = User.findById(uuid);

        // Se valida la existencia del usuario
        if (!usuario) {
            res.status(401).json({
                msg: "El usuario no existe."
            })
        }

        // Se valida el estado del usuario
        if (!usuario.status) {
            res.status(401).json({
                msg: "El usuario esta inactivo."
            })
        }
        // Se envia el usuario en la peticion
        req.usuario = usuario;
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error
        })
    }
}
module.exports = {
    validateJwt
};