import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../components/Header'
// import NewsCard from '../components/NewsCard'


import '../css/AdminHome.css'

function AdminHome() {
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
                    {/* <p>Fique atualizado com tudo o que acontece.</p> */}
                </section>

                <table border="1px">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Created At</th>
                            <th>Udated At</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <section className='news-grid'> */}
                        {
                            posts.map(post => {
                                return (
                                    <tr>
                                        <td>{post._id.toString()}</td>
                                        <td>{post.title.toString()}</td>
                                        <td>{post.created_at.toString()}</td>
                                        <td>{post.updated_at.toString()}</td>
                                        <td>
                                            
                                            <a href={`/post/${post._id}/Update`}>Update</a>
                                        </td>
                                        <td>
                                            {/* <button onClick={deletePost(post._id)}>Delete</button> */}
                                            
                                            <a href={`/post/${post._id}/delete`}>Delete</a>
                                        </td>
                                    </tr>
                                    // <a href={`/post/${post._id.toString()}`}  >
                                    //   <NewsCard 
                                    //     key={post._id}
                                    //     title={post.title}
                                    //     subtitle={post.subtitle}
                                    //     image={post.image}
                                    // />
                                    // </a>
                                    // <h1>{post._id}</h1>
                                )
                            })
                        }
                    </tbody>
                </table>
                <br />

                <a href="/create-post">Criar Post</a>


                {/* </section> */}
            </main>
        </>
    )
}
export default AdminHome