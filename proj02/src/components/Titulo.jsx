import styled from "styled-components"
import React from "react"

const TituloStyled = styled.div`
    color: #2da9f3;
    font-size: 32pt;
    padding: 32px 0;
    text-align: center;
`

export default function Titulo(props) {
    return <TituloStyled>{props.nome}</TituloStyled>
}