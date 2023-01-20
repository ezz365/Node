/*import fs from "fs"

class Usuario{

    constructor(path){
        this.path = path
        }
    
    //crea el usuario
    async crearUsuario(obj){
        try{
            const usuariosArchivo = await this.buscarUsuario()
            let id = 
                usuariosArchivo.length === 0 
                    ? 1 
                    : usuariosArchivo[usuariosArchivo.length-1].id + 1
            const usuario = {id,...obj}
            usuariosArchivo.push(usuario)
            await fs.promises.writeFile(this.path, JSON.stringify(usuariosArchivo))
            return usuario
        }catch(error){
            return error
        }
    }

    //busca el usuario
    async buscarUsuario(){
        try{
            if(fs.existsSync(this.path)){
                const usuariosArchivo = await fs.promises.readFile(this.path, "utf-8")
                const usuarioJS = JSON.parse(usuariosArchivo)
                return usuarioJS
            }else{
                return[]
            }
        }catch(error){
            return error
        }
    }

    //busca el usuario por id
    async buscarUsuarioPorId(idUsuario){
        try{
            const usuarios = await this.buscarUsuario()
            const usuario = usuario.find(u=>u.id===idUsuario)
            return usuario
        }catch(error){
            return error
        }
    }

    //modifica el usuario
    modificarUsuario(){

    }

    //elimina el usuario
    eliminarUsuario(){

    }

}*/