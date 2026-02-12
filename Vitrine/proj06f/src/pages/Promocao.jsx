import React, {useEffect, useState} from "react";
import Navegacao from "../components/Navegacao";
import Exibidor from "../components/Exibidor";
import ProdutosExemplo from "../datas/produtosExemplo";

export default function Promocao() {
    const [ produtosEx, setProdutosEx ] = useState([])
    
      useEffect(() => {
        fetch("http://localhost:4567/")
          .then(Response => Response.json())
          .then((data) => {
            setProdutosEx(data)
            console.log(data)
            // console.log(ProdutosExemplo)
          })
          .catch(error => console.error(error));
        }, [])
    
    return<>
        <Navegacao titulo="VITRINE">
            <a href="/"> Início </a>
            <a href="/promocao"> Promoção </a>
            <a href="/carrinho"> Carrinho </a>
        </Navegacao>
        {
            produtosEx.map(function(produto, indice){
                if (produto.promocao == true)
                    return <Exibidor
                        
                        produto={produto}/>
            })
        }
    </>
}