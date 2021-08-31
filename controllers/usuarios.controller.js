

const {response,request}=require("express")

const Usuario=require("../models/usuario");

 const usuariosGet=(req=request, res=response)=> {

    const {q,nombre,apikey}=req.query;
    res.json ({
        ok:true,
        msg:"get API - Controlador",
        q,
        nombre,
        apikey
    })
  }

  const usuariosPost=async (req, res=response)=> {


    const body=req.body;
    const usuario=new Usuario(body);

    await usuario.save();
    res.json ({
        ok:true,
        msg:"post API - Controlador",
        usuario
    })
  }

  const usuariosPut=(req, res=response)=> {

    const id=req.params.id; 
    res.json ({
        ok:true,
        msg:"Put API - Controlador",
        id
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