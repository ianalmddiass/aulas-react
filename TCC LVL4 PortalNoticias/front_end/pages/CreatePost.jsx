import { useState } from 'react'
import axios from 'axios'

import './css/CreatePost.css'

function CreatePost() {
  const token = localStorage.getItem('token')

  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [content, setContent] = useState('')

  if (!token) {
    return (
      <div className='access-denied'>
        <h1>Acesso Negado</h1>
        <p>Você precisa estar autenticado para acessar esta página.</p>
      </div>
    )
  }

  async function handleCreatePost(e) {
    e.preventDefault()

    try {
      await axios.post(
        'http://localhost:3000/posts',
        {
          title,
          subtitle,
          image_url: imageUrl,
          content
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      alert('Post criado com sucesso!')

      setTitle('')
      setSubtitle('')
      setImageUrl('')
      setContent('')
    } 
    catch (error) {
        console.error(error)

    }}}
