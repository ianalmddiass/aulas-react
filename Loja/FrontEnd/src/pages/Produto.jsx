import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import Navegacao from "../components/Navegacao" 
import Exibidor from "../components/Exibidor";
// import ProdutosExemplo from "../datas/produtosExemplo";
// import styled from "styled-components";

// const Modelo = styled.div`
//     background: #fff;
//     display: flex;
//     margin: 32px 0;
//     overflow: hidden;
// `
// const ModeloDados = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 16px;
//     padding: 16px;
// `

export default function Produto() {
    const { id } = useParams()

    const [ produto, setProduto ] = useState({})
    
    useEffect(() => {
        fetch("http://localhost:4567/products/"+ id.toString()) 
        .then(Response => Response.json())
        .then((data) => {
            setProduto(data)
            // console.log(data)
            // console.log(ProdutosExemplo)
        })
        .catch(error => console.error(error));

    }, [])

    
    return <>
        <Navegacao titulo="VITRINE">
            <a href="/"> Inicio </a>
            <a href="/promocao"> Promoção </a>
            <a href="/carrinho"> Carrinho </a>
        </Navegacao>
        { console.log('Imagens: ', produto.images ) }
        <Exibidor marca={ produto.marca } modelo={ produto.modelo } preco={ produto.preco } 
            descricao={ produto.descricao } id={ produto._id } 
            image0={ produto.images ? produto.images[0].url : "#" }
            image1={ produto.images ? produto.images[1].url : "#" }
            image2={ produto.images ? produto.images[2].url : "#" }/>
    </>
    
}