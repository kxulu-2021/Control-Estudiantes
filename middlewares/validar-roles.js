const {request, response} = require('express');
const esMaestroRole = (req = request, res = response, next) => {
    if (!req.user) {
        return res.status(500).json({
            msg: 'Debes de iniciar sesion con tu cuenta'
        })
    }

    const {role, nombre} = req.user
    if(role != 'ROLE_MAESTRO'){
        return res.status(401).json({
            msg:  'Solo los profesores tienen permiso de hacer esto', nombre
        })
    }



    next();
}

const esAlumnoRole = (req = request, res = response) => {
    if (!req.user) {
        return res.status(500).json({
            msg: 'Por favor inicia sesión con tu cuenta'
        })
    }
}
module.exports = {
    esMaestroRole,
    esAlumnoRole
}