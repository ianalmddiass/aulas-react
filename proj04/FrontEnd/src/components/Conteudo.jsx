import React from 'react'

const Conteudo = (props) => {
  console.log(props.book)
  return (
    <div className='ModeloConteudo'>
        {/* <div className='ConteudoTitulo'> { props.titulo } </div> */}

        {/* <div className='ConteudoInfo'> { props.genero} </div> */}
        {/* <div className='ConteudoInfo'> { props.ano} </div> */}
        {/* <div className='ConteudoInfo'> { props.autor} </div> */}

        <div className='ConteudoTitulo'> { props.book?.title } </div>
        <div className='ConteudoInfo'> { props.book?.genre} </div>
        <div className='ConteudoInfo'> { props.book?.author} </div>

    </div>
  )
}

export default Conteudo