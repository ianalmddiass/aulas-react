import React, {useState} from 'react'
import styled from 'styled-components'


const ModeloConteudo = styled.div`
    background: ${
      props => props.estado ? "white" : "#eee"
    };
    color: #252525;
    margin-bottom: 16px;
    padding: 16px;
    text-align: center;
    text-decoration: ${
      props => props.estado ? "line-through" : "none"
    };
`


export const Conteudo = (props) => {

  const [feito , definirFeito] = useState(false)

  function Alternar() {
    definirFeito(!feito)
  }



  return (
    <ModeloConteudo onClick={ Alternar } estado={ feito }>
      {props.texto}
    </ModeloConteudo>
  )
}
