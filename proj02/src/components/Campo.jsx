import React from 'react'
import styled from 'styled-components'

const ModeloCampo = styled.div`
    background: #303741;
    border-radius: 16px;
    padding: 15px;
    margin: 10px;
`

const Campo = (props) => {
  // return <ModeloCampo>
  //   {props.children}
  // </ModeloCampo>
  return <div className="campo">
    {props.children}
  </div>
  
}

export default Campo