import React from "react";
import styled from "styled-components";
import SalvarCarrinho from "../functions/SalvarCarrinho";

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

    return <Modelo>
        <ModeloDados>
            <div> {props.marca} </div>
            <div> {props.modelo} </div>
            <div> ${props.preco} </div>
            <div> {props.descricao} </div>
            <button onClick={()=> SalvarCarrinho(props.id)}>
                Adicionar ao Carrinho 
            </button>
        </ModeloDados>
        <ModeloImagens>
            <img
                src={ props.image0 }
                alt="#"
                height={ 450 }
            />
            <img
                src={ props.image1 }
                alt="#"
                height={ 450 }
            />
            <img
                src={ props.image2 }
                alt="#"
                height={ 450 }
            />
        </ModeloImagens>
    </Modelo>
}
