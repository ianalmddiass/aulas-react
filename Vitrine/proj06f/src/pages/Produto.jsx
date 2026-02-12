import React, {useState, useEffect} from "react";
import Navegacao from "../components/Navegacao" 
import Exibidor from "../components/Exibidor";
import ProdutosExemplo from "../datas/produtosExemplo";
import {useParams} from "react-router-dom"
import styled from "styled-components";

const Modelo = styled.div`
    background: #fff;
    display: flex;
    margin: 32px 0;
    overflow: hidden;
`
const ModeloDados = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
`

export default function Produto(props) {
    const { params } = useParams()

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

    return <>
        <Navegacao titulo="VITRINE">
            <a href="/"> Inicio </a>
            <a href="/promocao"> Promoção </a>
            <a href="/carrinho"> Carrinho </a>
        </Navegacao>
        {
            produtosEx.map(function(produto,indice){
                if (produto._id === params)
                    console.log(produto)
                    return <Exibidor                     
                        produto={produto}/>
                })
        }
    </>
    
}