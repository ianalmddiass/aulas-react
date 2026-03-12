import React, {useEffect, useState} from "react";
import Navegacao from "../components/Navegacao";
import Exibidor from "../components/Exibidor";


export default function Promocao() {
    const [ produtosEx, setProdutosEx ] = useState([])
    
      useEffect(() => {
        fetch("http://localhost:4567/products")
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
                        marca={ produto.marca } modelo={ produto.modelo } preco={ produto.preco } 
                        descricao={ produto.descricao } id={ produto._id } 
                        image0={ produto.images ? produto.images[0].url : "#" }
                        image1={ produto.images ? produto.images[1].url : "#" }
                        image2={ produto.images ? produto.images[2].url : "#" }
                        />
            })
        }
    </>
}