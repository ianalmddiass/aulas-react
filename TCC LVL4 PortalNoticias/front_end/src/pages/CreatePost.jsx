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
        'http://127.0.0.1:4567/posts',
        {
          title,
          subtitle,
          image_url: imageUrl,
          content
        },
        {
          headers: {
            Authorization: `${token}`
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

}}
  return (
    <div className='create-post-container'>
      <form className='create-post-form' onSubmit={handleCreatePost}>
        <h2>Criar Postagem</h2>

        <input
          type='text'
          placeholder='Título da notícia'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type='text'
          placeholder='Subtítulo'
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />

        <input
          type='text'
          placeholder='URL da imagem'
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <textarea
          placeholder='Conteúdo da notícia'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button type="submit">Publicar</button>
      </form>
    </div>
  )
  }

export default CreatePost;