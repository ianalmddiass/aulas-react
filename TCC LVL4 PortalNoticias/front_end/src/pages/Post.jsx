import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header'
import '../css/Post.css'

function Post() {
  const { id } = useParams()

  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:4567/posts/${id}`
        )

        setPost(response.data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  if (loading) {
    return <h2>Carregando...</h2>
  }

  if (!post) {
    return <h2>Post não encontrado.</h2>
  }
  let keys = JSON.stringify(post);
  return (
    <>
      <Header />
      <p> { keys }</p>
        <main className="post-page">
        <h1>{post.title}</h1>

        <img
          src={post.image_url}
          alt={post.title}
          className="post-image"
          />


        <h3>{post.subtitle}</h3>

        <div className="post-content">
          {post.content}
        </div>
      </main>
    </>
  )
}

export default Post