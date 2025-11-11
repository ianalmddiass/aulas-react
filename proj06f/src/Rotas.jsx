import React from "react"
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Vitrine from "./pages/Vitrine"

const Rotas = () => {
  return <BrowserRouter>
        <Routes>
            <Route index path="/" element={<Vitrine/>} />
        </Routes>
  </BrowserRouter>
}

export default Rotas