import React from 'react'
import styled from 'styled-components'

const ModeloTitulo = styled.div`
    background: linear-gradient(45deg, #cb356b, #bd3f32);
    color: white;
    padding: 32px;
`

const TituloNome = styled.div `
    font-size: 32pt;
    margin-top: 96px;
`
const TituloData = styled.div`
    font-size: 16pt;
    margin-top: 8px;
`

export const Titulo = (props) => {
    const DataHoje = new Date()
    const DataFormato = { weekday: "long", day: "numeric", month: "long" }
    const DataFinal = DataHoje.toLocaleDateString("pt-br", DataFormato)
  return (
    <ModeloTitulo>
        <TituloNome>{ props.nome }</TituloNome>
        <TituloData>{DataFinal}</TituloData>
    </ModeloTitulo>
  )
}
