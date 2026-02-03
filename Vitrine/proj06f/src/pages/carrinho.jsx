import React, {useState, useEffect} from "react";
import Navegacao from "../components/Navegacao";
import ProdutosExemplo from "../datas/produtosExemplo";
import Janela from "../components/Janela";
import ObterCarrinho from "../functions/ObterCarrinho";
import LimparCarrinho from "../functions/LimparCarrinho";

export default function Carrinho() {
    const [ carrinho, definirCarrinho ] = useState([])
    const [ preco, definirPreco] = useState(0)

    useEffect(() => {
        const resultado = ObterCarrinho()
        definirCarrinho(resultado)
    }, [])

    useEffect(() => {
        var total = 0
        
        carrinho.map(function(codigo){
            for (const produto of ProdutosExemplo)
                if (produto.codigo === codigo)
                    total += parseInt(produto.preco)

        })
        definirPreco(total)
    }, [carrinho])

    return<>
    
        <Navegacao titulo="VITRINE">
            <a href="/"> Início </a>
            <a href="/promocao"> Promoção </a>
            <a href="/carrinho"> Carrinho </a>
        </Navegacao>
    
        <Janela>
            <h1>Total R$ {preco},00</h1>
            <table width="100%">
                <thead>
                    <tr>
                        <td style={{fontWeight: '700'}}>código</td>
                        {/* <td>código</td> */}
                        <td style={{fontWeight: '700'}}>modelo do produto</td>
                        <td style={{fontWeight: '700'}}>preco</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        carrinho.map((codigo, indice) => {
                            for( const produto of ProdutosExemplo) {
                                if (produto.codigo === codigo)
                                    return<tr key={indice}>
                                        <td>{produto.codigo} </td>
                                        <td>{produto.modelo} </td>
                                        <td>R$ {produto.preco}.00</td>
                                </tr>
                            }
                        })
                    }
    
                </tbody>
            </table>
            <button onClick={() => {LimparCarrinho()}}>limpar carrinho</button>
        </Janela>
    </>
}