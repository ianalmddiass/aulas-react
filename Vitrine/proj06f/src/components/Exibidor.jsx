import React from "react";
import styled from "styled-components";
import SalvarCarrinho from "../functions/SalvarCarrinho";
// import Produtos from "../functions/FetchProdutos";

const Modelo = styled.div`
    background: #fff;
    margin: 32px 0;
    overflow: hidden;
`

const ModeloImagens = styled.div`
    display: flex;
    overflow-x: scroll;
    min-width: 500px;
`

const ModeloDados = styled.div`
    gap: 16px;
    padding: 16px;
`
export default function Exibidor(props) {

    console.log(props)
    console.log(props['produto'])
    console.log(props.produto)
    return <Modelo>
        <ModeloImagens>
                <img 
                    src={ props.produto.images[0]['url'] }
                    alt="#"
                    height={ 450 }
                />
                <img 
                    src={ props.produto.images[1]['url'] }
                    alt="#"
                    height={ 450 }
                />
                <img 
                    src={ props.produto.images[2]['url'] }
                    alt="#"
                    height={ 450 }
                />
        </ModeloImagens>
        <ModeloDados>
            <div> {props.produto.marca} </div>
            <div> {props.produto.modelo} </div>
            <div> ${props.produto.preco} </div>
            <div> {props.produto.descricao} </div>
            <button onClick={()=> SalvarCarrinho(props.produto._id)}>
                Adicionar ao Carrinho 
            </button>
        </ModeloDados>
        
    </Modelo>
}