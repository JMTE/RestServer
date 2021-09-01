

const {Router}= require("express");
const { check } = require("express-validator");
const { usuariosGet, usuariosPost, usuariosPut, usuariosDel, usuariosPatch } = require("../controllers/usuarios.controller");
const { validarCampos } = require("../middlewares/validar-campos");

const router= Router();

router.get('/', usuariosGet)
  router.put('/:id', usuariosPut)
  router.post('/', [
    check("correo", "El correo no es valido").isEmail(),
    check("nombre","El nombre es obligatorio").not().isEmpty(),
    check("password","La contraseña es obligatoria y debe de tener mas de 6 letras").isLength({min:6}),
    check("role", "No es un rol permitido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    validarCampos
  ], usuariosPost)
  router.delete('/', usuariosDel)
  router.patch("/",usuariosPatch)
  




module.exports=router;

