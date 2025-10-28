import React from 'react'

const Titulo = (props) => {
  return (
    <div className='ModeloTitulo'>
        <div className='TituloNome'> {props.nome} </div>
    </div>
  )
}

export default Titulo;