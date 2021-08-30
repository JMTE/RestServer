

const {response}=require("express")

 const usuariosGet=(req, res=response)=> {

    
    res.json ({
        ok:true,
        msg:"get API - Controlador"
    })
  }

  const usuariosPost=(req, res=response)=> {

    
    res.json ({
        ok:true,
        msg:"post API - Controlador"
    })
  }

  const usuariosPut=(req, res=response)=> {

    
    res.json ({
        ok:true,
        msg:"Put API - Controlador"
    })
  }

  const usuariosDel=(req, res=response)=> {

    
    res.json ({
        ok:true,
        msg:"Delete API - Controlador"
    })
  }

  const usuariosPatch=(req, res=response)=> {

    
    res.json ({
        ok:true,
        msg:"Patch API - Controlador"
    })
  }





  module.exports={

    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDel,
    usuariosPatch
  }