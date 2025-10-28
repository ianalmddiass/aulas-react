import React from 'react'

const Campo = (props) => {
  return (
    <div className='ModeloCampo'>
        <div className='CampoInterno'>
            { props.children }
        </div>
    </div>
  )
}

export default Campo