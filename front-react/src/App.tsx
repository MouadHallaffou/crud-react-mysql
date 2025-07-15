
import { Routes, Route } from 'react-router-dom'
import PostIndex from './PostIndex'
import CreatePost from './CreatePost'
import EditPost from './EditPost'
import ShowPost from './ShowPost'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PostIndex />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/editPost/:id" element={<EditPost />} />
        <Route path="/showPost/:id" element={<ShowPost />} />
      </Routes>
    </>
  )
}

export default App
