import React, {useState, useEffect} from "react";
import Navegacao from "../components/Navegacao";
import ProdutosExemplo from "../datas/produtosExemplo";
import Janela from "../components/Janela";
import ObterCarrinho from "../functions/ObterCarrinho";

export default function Carrinho() {
    const [ carrinho, definirCarrinho ] = useState([])
    useEffect(function() {
        const resultado = ObterCarrinho()
        definirCarrinho(resultado)
    })
    return<>
        <Navegacao titulo="VITRINE">
            <a href="/"> Início </a>
            <a href="/promocao"> Promoção </a>
            <a href="/carrinho"> Carrinho </a>
        </Navegacao>
        <Janela>
            <table width="100%">
                <tbody>
                    <tr>
                        <td>código</td>
                        <td>modelo do produto</td>
                        <td>preco</td>
                    </tr>
                </tbody>
            </table>
        </Janela>
    </>
}