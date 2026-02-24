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
        console.log(">> " + id.toString())
        const fetchProdutos = async () => {
            try {

                const response = await fetch("http://127.0.0.1:4567/" + id.toString())
                
                if (!response.ok) { throw new Error("Falha oa recuperar os dados") }
                
                const dados = await response.json()
                console.log(dados)
                setProduto(dados)
            }
            catch (err) {
                console.log("Erro")
            }   

        }
        
        fetchProdutos()
    }, [id])

    return <>
        <Navegacao titulo="VITRINE">
            <a href="/"> Inicio </a>
            <a href="/promocao"> Promoção </a>
            <a href="/carrinho"> Carrinho </a>
        </Navegacao>
        { produto.marca }
        <Exibidor produto={produto} />
    </>
    
}