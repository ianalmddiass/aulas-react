import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router'

import Vitrine from './pages/Vitrine';
import Produto from './pages/Produto';
import Promocao from './pages/Promocao';
import Carrinho from './pages/carrinho';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Vitrine />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="/promocao" element={<Promocao />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </BrowserRouter>
  )
}
export default App;


