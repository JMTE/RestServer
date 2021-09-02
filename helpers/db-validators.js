const Roles = require('../models/role');
const Usuario = require('../models/usuario');
const {res,req}=require("express")

const esRoleValido = async(role = '') => {
 
    const existeRol = await Roles.findOne({ role });
    
    if ( !existeRol ) {
        throw new Error(`El rol ${ role } no está registrado en la BD`);
    }
  }


  const emailExiste=async(correo="")=>{
  const existeCorreo= await Usuario.findOne({correo:correo})
  if (existeCorreo){
    throw new Error (`El correo ${correo} ya existe en la BBDD`)
  }
  }
  module.exports={
      esRoleValido,
      emailExiste
  }


  const idExiste=async(id="")=>{
    const existeId= await Usuario.findById({_id:id})
    if (!existeId){
      throw new Error (`La id ${id} no existe en la BBDD`)
    }
    }
    module.exports={
        esRoleValido,
        emailExiste,
        idExiste
    }