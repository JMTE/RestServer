

const {Router}= require("express");
const { check } = require("express-validator");
const { usuariosGet, usuariosPost, usuariosPut, usuariosDel, usuariosPatch } = require("../controllers/usuarios.controller");
const { esRoleValido, emailExiste, idExiste } = require("../helpers/db-validators");
const { validarCampos } = require("../middlewares/validar-campos");


const router= Router();



router.get('/', usuariosGet)

//PUT
  router.put('/:id', [
    check("id", "No es una id valida en Mongo").isMongoId(),
    check("id").custom(idExiste),
    check("nombre", "El nombre no puede estar vacio").notEmpty(),
    check("correo", "El correo no es valido").isEmail(),
    check("password", "La contraseña es obligatoria y debe de tener mas de 6 letras").isLength({min:6}),
    check("role").custom(esRoleValido),
    validarCampos

  ] ,
  usuariosPut)


  
  
  
  //POST
  router.post('/', [
    check("correo", "El correo no es valido").isEmail(),
    check("correo").custom(emailExiste),

    check("nombre","El nombre es obligatorio").not().isEmpty(),
    
    check("password","La contraseña es obligatoria y debe de tener mas de 6 letras").isLength({min:6}),
    //check("role", "No es un rol permitido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    check('role').custom(esRoleValido),
    validarCampos
  ], usuariosPost)
  router.delete('/', usuariosDel)
  router.patch("/",usuariosPatch)
  




module.exports=router;

