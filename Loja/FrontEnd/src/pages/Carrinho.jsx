import React, {useState, useEffect} from "react";
import Navegacao from "../components/Navegacao";
import Janela from "../components/Janela";
import ObterCarrinho from "../functions/ObterCarrinho";
import LimparCarrinho from "../functions/LimparCarrinho";

export default function Carrinho() {
    
    const [ produtosEx, setProdutosEx ] = useState([])
    const [ carrinhoId, definirCarrinhoId ] = useState([])
    const [ carrinho, definirCarrinho ] = useState([])
    const [ preco, definirPreco] = useState(0)
        
    useEffect(() => {
        fetch("http://localhost:4567/products")
            .then(Response => Response.json())
            .then((data) => {
            setProdutosEx(data)
            // console.log(ProdutosExemplo)
        })
        .catch(error => console.error(error));
    }, [])

    useEffect(() => {
        const resultado = ObterCarrinho()
        // console.log(resultado)
        definirCarrinhoId(resultado)
    }, [])

    useEffect(() => {
        let total = 0
        let newCar = []
        carrinhoId.map(function(id){
            // console.log(id)
            produtosEx.map(produto => {
                // console.log(produto)
                if (produto._id === id){
                    newCar = [...newCar, produto]
                    console.log(">>",newCar)
                    let val = parseInt(produto.preco)
                    total += val
                    // console.log(val)
                }
            })
        })
        // console.log(total)
        definirCarrinho(newCar)
        definirPreco(total)
    }, [carrinhoId, produtosEx])

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
                    {/* { console.log(carrinho) } */}
                    {
                        carrinho.map((element, indice) => {
                            return(<tr key={indice}>
                                    <td>{element.codigo} </td>
                                    <td>{element.modelo} </td>
                                    <td>R$ {element.preco}</td>
                            </tr>)
                        })
                    }
    
                </tbody>
            </table>
            <button onClick={() => {LimparCarrinho()}}>limpar carrinho</button>
        </Janela>
    </>
}