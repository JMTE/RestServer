

const {response,request}=require("express")

const bcryptjs=require("bcryptjs");

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

    
    const {nombre,correo,password,role}=req.body;
    const body=req.body;
    const usuario=new Usuario({nombre,correo,password,role});

   

    
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

  const usuariosPut=async(req, res=response)=> {

    const id=req.params.id;
    
    const {_id, password, google,correo, ... resto}= req.body;

    //Validar contra BBDD

    if (password){
      //Encriptar la contraseña
      const salt=bcryptjs.genSaltSync();

      resto.password=bcryptjs.hashSync(password,salt);
  

    }

    const usuarioDB=await Usuario.findByIdAndUpdate(id,resto)


    res.json ({
        ok:true,
        msg:"Put API - Controlador",
        id,
        usuarioDB
        
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