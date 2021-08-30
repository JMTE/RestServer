const express = require('express')



class Server{



    constructor(){

        this.app=express();
        this.port=process.env.PORT
        this.usuariosPath="/api/usuarios"

        //Middlewares
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares(){

        //directorio publico

        this.app.use(express.static("public"))
    }

    routes(){
        
        this.app.use(this.usuariosPath, require("../routes/user"))

        //con el middleware enviamos la carpeta publica y con este codigo enviamos nuestro endpoint
       
    }

    listen(){

        this.app.listen(this.port, ()=>{

            console.log("Servidor trabajando en el puerto " , this.port);
        
        })
    }



}


module.exports= Server;