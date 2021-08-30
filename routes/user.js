

const {Router}= require("express");
const { usuariosGet, usuariosPost, usuariosPut, usuariosDel, usuariosPatch } = require("../controllers/usuarios.controller");

const router= Router();

router.get('/', usuariosGet)
  router.put('/', usuariosPut)
  router.post('/',  usuariosPost)
  router.delete('/', usuariosDel)
  router.patch("/",usuariosPatch)
  




module.exports=router;

