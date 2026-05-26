import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import CreatePost from '../pages/CreatePost'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
