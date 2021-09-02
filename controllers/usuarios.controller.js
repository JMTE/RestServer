

const {response,request}=require("express")

const bcryptjs=require("bcryptjs");

const Usuario=require("../models/usuario");


//GET

 const usuariosGet=async(req=request, res=response)=> {

    //const {q,nombre,apikey}=req.query;
    const {limite=5, desde =0}=req.query;

   
    // const usuarios=await Usuario.find({estado:true})
    // .skip(Number(desde))
    // .limit(Number (limite))

    // const totalRegistros=await Usuario.countDocuments({estado:true});

    //La anterior forma estaria desfasada y aumentaria el tiempo de respuesta, por eso vamos a hacer una promesa para que las dos interacciones se hagan de forma simultanea
    const [total, usuarios] = await Promise.all([
      Usuario.countDocuments({estado:true}),
      Usuario.find({estado:true})
      .skip(Number(desde))
      .limit(Number(limite))
    ])

    res.json ({
      // totalRegistros,
      //  usuarios

      total,
      usuarios
    })
  }

  
  //POST
  
  
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