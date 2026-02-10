import React from 'react'
import Carrinho from '../pages/carrinho';

const LimparCarrinho = () => {
    localStorage.removeItem('carrinho');
    return (
        console.log("carrinho esvaziado") 
    )
}

export default LimparCarrinho