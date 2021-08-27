const express = require('express')



class Server{



    constructor(){

        this.app=express();
        this.port=process.env.PORT

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

        //con el middleware enviamos la carpeta publica y con este codigo enviamos nuestro endpoint
        this.app.get('/api',  (req, res)=> {
            res.send('Hello World')
          })
          
    }

    listen(){

        this.app.listen(this.port, ()=>{

            console.log("Servidor trabajando en el puerto " , this.port);
        
        })
    }



}


module.exports= Server;