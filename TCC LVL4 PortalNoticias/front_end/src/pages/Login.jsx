import { useState } from 'react'
import axios from 'axios'

import './css/Login.css'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const response = await axios.post('http://127.0.0.1:4567/session', {
        username,
        password
      })

      localStorage.setItem('token', response.data.access_token)

      alert('Login realizado com sucesso!')

      window.location.href = '/create-post'
    } catch (error) {
      console.error(error)
      alert('Usuário ou senha inválidos')
    }
  }

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleLogin}>
        <h2>Login Administrativo</h2>

        <input
          type='text'
          placeholder='Usuário'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type='password'
          placeholder='Senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit'>Entrar</button>
      </form>
    </div>
  )
}

export default Login