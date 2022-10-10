const { Router } = require('express');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth.controllers');

const router = Router();

//crear un nuevo usuario
router.post('/new', crearUsuario);

//login usuario
router.post('/', loginUsuario);

//validar y revalidar token
router.get('/renew', revalidarToken);

/*
! Forma de exportar con NODE */
module.exports = router;