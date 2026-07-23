import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import CreatePost from './pages/CreatePost'
import Post from './pages/Post'
import AdminHome from './pages/AdminHome'
import DeletePost from './pages/DeletePost'
import UpdatePost from './pages/UpdatePost'
// import '../public/css/Home.css'
// import '../public/css/header.css'
// import '../public/css/newscard.css'
// import '../public/css/CreatePost.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/admin-home' element={<AdminHome />} />
        <Route path='/post/:id/delete' element={<DeletePost />} />
        <Route path='/post/:id/update' element={<UpdatePost />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
