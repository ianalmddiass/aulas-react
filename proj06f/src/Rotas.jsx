import React from "react"
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Vitrine from "./pages/Vitrine"
import Promocao from "./pages/Promocao"
import Produto from "./pages/Produto"
import Carrinho from "./pages/carrinho"

const Rotas = () => {
  return <BrowserRouter>
        <Routes>
            <Route index path="/" element={<Vitrine/>} />
            <Route path="/produto/:codigo" element={<Produto/>}/>
            <Route path="/promocao" element={<Promocao/>}/>
            <Route path="/carrinho" element={<Carrinho/>}/>
         </Routes>
  </BrowserRouter>
}

export default Rotas