const Roles = require('../models/role');

const esRoleValido = async(role = '') => {
 
    const existeRol = await Roles.findOne({ role });
    
    if ( !existeRol ) {
        throw new Error(`El rol ${ role } no está registrado en la BD`);
    }
  }

  module.exports={
      esRoleValido
  }