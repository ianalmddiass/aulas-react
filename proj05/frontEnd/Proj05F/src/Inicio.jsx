import React, {useState} from 'react'
import axios from "axios"

const Inicio = () => {
    
    const dadosInicio = {nome:"", email:"", senha: ""}
    const [dados, definirDados] = useState(dadosInicio)
    
    const Mudar = (evento) => {
        const valor = evento.target.value
        const campo = evento.target.name
        definirDados({...dados, [campo]: valor})
    }
    
    async function adicionar(evento){
        evento.preventDefault()
        await axios.post("http://localhost:4567/", dados)
        .then((response)=>{
            console.log(response)
        })
        definirDados(dadosInicio)
    }

    

    return <form className='ModeloFormulario' onSubmit={adicionar}>
        <input
            value={ dados.nome }
            onChange={ Mudar }
            type="text" name="nome"
            placeholder="Nome" required
        /> 

        <input
            value={ dados.email }
            onChange={ Mudar }
            type="email" name="email"
            placeholder="Email@mail.com" required
        />

        <input
            value={ dados.senha }
            onChange={ Mudar }
            type="password" name="senha" 
            placeholder="******" required
        /> 

        {/* <input
            value={ dados.nascimento }
            onChange={ Mudar }
            type="date" name="nascimento" 
            required
        /> */}

        <input 
            type="submit" 
            value="Cadastrar" 
        /> 
        
    </form>
    
  
}

export default Inicio;