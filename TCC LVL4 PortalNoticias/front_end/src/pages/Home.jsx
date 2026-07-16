import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../components/Header'
import NewsCard from '../components/NewsCard'

import '../css/Home.css'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('http://127.0.0.1:4567/posts')

        setPosts(response.data)
        // console.log(">>",response.data)
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
          {
            posts.map(post => {
              return (
                <a href={`/post/${post._id.toString()}`}  >
                  <NewsCard 
                    key={post._id}
                    title={post.title}
                    subtitle={post.subtitle}
                    image={post.image}
                />
                </a>
                // <h1>{post._id}</h1>
              )
            }) 
          }

          
            
          
          
        </section>
      </main>
    </>
  )
}

export default Home