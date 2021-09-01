

const {Router}= require("express");
const { check } = require("express-validator");
const { usuariosGet, usuariosPost, usuariosPut, usuariosDel, usuariosPatch } = require("../controllers/usuarios.controller");
const { validarCampos } = require("../middlewares/validar-campos");
const Roles = require('../models/role');

const router= Router();

const esRoleValido = async(role = '') => {
 
  const existeRol = await Roles.findOne({ role });
  console.log(existeRol);
  if ( !existeRol ) {
      throw new Error(`El rol ${ role } no está registrado en la BD`);
  }
}

router.get('/', usuariosGet)
  router.put('/:id', usuariosPut)
  router.post('/', [
    check("correo", "El correo no es valido").isEmail(),
    check("nombre","El nombre es obligatorio").not().isEmpty(),
    check("password","La contraseña es obligatoria y debe de tener mas de 6 letras").isLength({min:6}),
    //check("role", "No es un rol permitido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    check('role').custom(esRoleValido),
    validarCampos
  ], usuariosPost)
  router.delete('/', usuariosDel)
  router.patch("/",usuariosPatch)
  




module.exports=router;

