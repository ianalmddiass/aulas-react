import React, {useState, useEffect} from 'react'
import Titulo from './components/Titulo'
import Conteudo from './components/Conteudo'
import Campo from './components/Campo'
import axios from "axios"

const Inicio = () => {
    const [ conteudos, definirConteudos ] = useState([])
    
    useEffect(function() {
        axios.get("http://localhost:4000/api/3")
            .then( (resposta) => {
                const dados = resposta.data

                definirConteudos(dados.books)
                console.log(conteudos)
            })
            .catch( (erro) => {
                console.log("error:", erro)
            })

    }, [])

    return <div className='inicio'>
        <Titulo
            nome="Acelerando com Ruby"
        />
        <Campo>
            { console.log(conteudos) }
            {
                conteudos.map( (book) => {
                    return <Conteudo key={book} book={ book } />
                })
            }
            {/* <Conteudo key={conteudos} book={ conteudos } /> */}
        </Campo>


    </div>
}

export default Inicio