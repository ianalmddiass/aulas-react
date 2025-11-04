import React, {useState} from 'react'


const Inicio = () => {
    const dadosInicio = {nome:"", email:"", senha: ""}
    const [dados, definirDados] = useState(dadosInicio)
    
    function Mudar(evento) {
        const valor = evento.target.value
        const campo = evento.target.name
        definirDados({...dados, [campo]: valor})
    }
  return <form className='ModeloFormulario'>
    <input
        type="text" name="nome"
        placeholder="Nome" required/> 

    <input
        type="email" name="email"
        placeholder="Email@mail.com" required/>

    <input
        type="password" name="senha" 
        placeholder="******" required/> 

    <input
        type="date" name="nascimento" 
        required/>

    <input type="submit" value="Cadastrar"/> 
  </form>
    
  
}

export default Inicio