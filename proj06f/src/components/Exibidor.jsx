import React from "react";
import styled from "styled-components";

const Modelo = styled.div`
    background: #fff;
    display: flex;
    margin: 32px 0;
    overflow: hidden;
`

const ModeloImagens = styled.div`
    display: flex;
    overflow-x: scroll;
    max-width: 480px;
`

const ModeloDados = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
`
export default function Exibidor(props) {
    return <Modelo>
        <ModeloImagens>
                <img 
                    src={ props.produto.imagens[0] }
                    height={ 450 }
                />
                <img 
                    src={ props.produto.imagens[1] }
                    height={ 450 }
                />
                <img 
                    src={ props.produto.imagens[2] }
                    height={ 450 }
                />
        </ModeloImagens>
        <ModeloDados>
            <div> {props.produto.marca} </div>
            <div> {props.produto.modelo} </div>
            <div> ${props.produto.preco} </div>
            <div> {props.produto.descricao} </div>
            <button> Adicionar ao Carrinho </button>
        </ModeloDados>

    </Modelo>
}