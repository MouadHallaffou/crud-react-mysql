
import { Routes, Route } from 'react-router-dom'
import PostIndex from './PostIndex'
import CreatePost from './CreatePost'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PostIndex/>} />
        <Route path="create" element={<CreatePost />} />
      </Routes>
    </>
  )
}

export default App
