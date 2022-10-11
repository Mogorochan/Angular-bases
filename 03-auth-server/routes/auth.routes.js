const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth.controllers');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

//crear un nuevo usuario
router.post('/new', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength({min: 6}),
    validarCampos
],crearUsuario);

//login usuario
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength({min: 6}),
    validarCampos
],loginUsuario);

//validar y revalidar token
router.get('/renew', revalidarToken);

/*
todo: Forma de exportar con NODE */
module.exports = router;