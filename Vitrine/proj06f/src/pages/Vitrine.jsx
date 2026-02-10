import React, { useEffect, useState } from 'react'
import Navegacao from '../components/Navegacao';
import Principal from '../components/Principal';
import ProdutosExemplo from '../datas/produtosExemplo';




const Vitrine = () => {
  const [ produtosEx, setProdutosEx ] = useState([])

  useEffect(() => {
    fetch("http://localhost:4567/")
      .then(Response => Response.json())
      .then((data) => {
        setProdutosEx(data)
        console.log(data)
        console.log(ProdutosExemplo)
      })
      .catch(error => console.error(error));

  }, [])

  return <div>
      <Navegacao>
        <a href='/'>Inicio</a>
        <a href="/promocao"> Promoção </a>
        <a href="/carrinho"> Carrinho </a>
      </Navegacao>
      <Principal Produtos={produtosEx}/>
  </div>
}

export default Vitrine;