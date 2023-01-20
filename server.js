import express from "express"
import { ProductManager } from "./ProductManager.js"

const app = express()
const productManager = new ProductManager("productos.json")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/productos",async(req,res)=>{
    const {limit} = req.query
    const productos = await productManager.obtenerProductos(limit || "max")
    res.json({productos})
})

app.get("/productos/:codigoProducto",async(req,res)=>{
    const {codigoProducto} = req.params
    const productos = await productManager.getProductById(codigoProducto)
    res.json({productos})
})

const PORT = 8080

app.listen(PORT, ()=>{
    console.log(`Escuchando al ${PORT}`)
})