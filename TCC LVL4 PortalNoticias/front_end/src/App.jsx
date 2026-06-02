import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import CreatePost from './pages/CreatePost'
import Post from './pages/Post'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/post/:id' element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
