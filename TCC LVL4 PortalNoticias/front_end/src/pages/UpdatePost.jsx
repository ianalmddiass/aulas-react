import { useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

import '../css/CreatePost.css'

function UpdatePost() {
  const token = localStorage.getItem('token')
  const {id} = useParams()
  

  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [content, setContent] = useState('')
  const [sport, setSport] = useState('')


  if (!token) {
    return (
      <div className='access-denied'>
        <h1>Acesso Negado</h1>
        <p>Você precisa estar autenticado para acessar esta página.</p>
      </div>
    )
  }
  async function handleUpdatePost(e) {
    e.preventDefault()

    const Data = await axios.get(`http://127.0.0.1:4567/posts/${id}`)

    try {
      await axios.put(
        `http://127.0.0.1:4567/posts/${id}`,
        {
          'title':title,
          'subtitle':subtitle,
          'image_url': imageUrl,
          'content':content,
          'sport':sport
        },
        {
          headers: {
            Authorization: `${token}`
          }
        }
      )

      alert('Post atualizado com sucesso!')

      
    } 
    catch (error) {
        console.error(error)

}}
  return (
    <>
      <Header/>


    <div className='create-post-container'>
      <form className='create-post-form' onSubmit={handleUpdatePost}>
        <h2>Criar Postagem</h2>

        <input
          type='text'
          placeholder='Título da notícia'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type='text'
          placeholder='esporte da notícia'
          value={sport}
          onChange={(e) => setSport(e.target.value)}
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
  </>)
  }

export default UpdatePost;