import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../components/Header'
import NewsCard from '../components/NewsCard'

import './css/home.css'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('http://127.0.0.1:4567')

        setPosts(response.data)
      } catch (error) {
        console.error('Erro ao buscar posts:', error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <>
      <Header />

      <main className='home'>
        <section className='hero'>
          <h2>Últimas Notícias</h2>
          <p>Fique atualizado com tudo o que acontece.</p>
        </section>

        <section className='news-grid'>
          {posts.map((post) => (
            <NewsCard
              key={post.id}
              title={post.title}
              subtitle={post.subtitle}
              image={post.image_url}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default Home