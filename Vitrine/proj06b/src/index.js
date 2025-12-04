import express from "express"
import cors from "cors"
import Rotas from "./Rotas.js"


const servidor = express()



servidor.use(express.json())

servidor.listen(4000, function() {
    console.log("SERVIDOR EM FUNCIONAMENTO!")
    console.log("http://localhost:4000/")
})

