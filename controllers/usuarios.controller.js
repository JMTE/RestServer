

const {response,request}=require("express")

const bcryptjs=require("bcryptjs");

const Usuario=require("../models/usuario");
const { validationResult } = require("express-validator");

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

    const errors=validationResult(req);

    if (!errors.isEmpty()){
      return res.status(400).json(errors);
    }

    const {nombre,correo,password,role}=req.body;
    const body=req.body;
    const usuario=new Usuario({nombre,correo,password,role});

    //Verificar si el correo existe

    const existeCorreo=await Usuario.findOne({correo:correo})
    if (existeCorreo){
      return res.status(400).json({

        msg:"El correo ya esta registrado"
      })
    }
    //Encriptar la contraseña

    const salt=bcryptjs.genSaltSync();

    usuario.password=bcryptjs.hashSync(password,salt);

    //Guardar en base de datos
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