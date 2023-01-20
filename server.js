import express from "express"
import { ProductManager } from "./ProductManager.js"

//declaramos la ruta express
const app = express()

//declaramos productManager
const productManager = new ProductManager("productos.json")

//Metodo use
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Rutas
//usuarios
app.get("/productos",async(req,res)=>{
    try{
        const {limit} = req.query
        const productos = await productManager.obtenerProductos(limit || "max")
        res.json({productos})
    }catch(error){
        res.send(error)
    }
})
//usuarios por codigo
app.get("/productos/:codigoProducto",async(req,res)=>{
    const {codigoProducto} = req.params
    try{
        const producto = await productManager.getProductById(parseInt(codigoProducto))
        if(producto){
            res.status(200).json({message: "Producto encontrado con exito",usuario})
        }else{
            res.status(400).json({message: "Producto no encontrado"})
        }
    }catch(error){
        res.send(error)
    }
})

app.post("/productos",async(req,res)=>{
    const obj = req.body    
    const producto = await productosClass.crearProducto(obj)
    res.json({message:"Producto creado con exito", producto})
})

//declarar el puerto 8080
const PORT = 8080

app.listen(PORT, ()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})