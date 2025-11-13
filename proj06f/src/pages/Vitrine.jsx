import React from 'react'
import Navegacao from '../components/Navegacao';
import Principal from '../components/Principal';
import ProdutosExemplo from '../datas/produtosExemplo';

const Vitrine = () => {
  return <div>
      <Navegacao>
        <a href='/'>Inicio</a>
        <a href="/produto/1234"> Promoção </a>
        <a href="/carrinho"> Carrinho </a>
      </Navegacao>
      <Principal Produtos={ProdutosExemplo}/>
  </div>
}

export default Vitrine;