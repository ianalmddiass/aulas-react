import React from "react";
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
    const { codigo } = useParams()
    return Object.keys(props.produto).length > 0 ? 
        <>
            <Navegacao titulo="VITRINE">
                <a href="/"> Inicio </a>
                <a href="/promocao"> Promoção </a>
                <a href="/carrinho"> Carrinho </a>
            </Navegacao>
            <Exibidor Produto={
                ProdutosExemplo.find((produto =>produto.codigo === codigo))
            }/>
        </>
        :
        <>
            <Modelo>
                <ModeloDados> Produto não encontrado! </ModeloDados>
            </Modelo>
        </>
    
}