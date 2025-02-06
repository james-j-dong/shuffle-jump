import './App.css'
import { Routes, Route } from "react-router-dom"
import MediaPlayer from './components/MediaPlayer'
import EmbedTool from './components/EmbedTool'

function App() {

  return (
  <section className="m-8 md:m-16">
      <Routes>
          <Route path="/" element={<MediaPlayer />} />
          <Route path="/embed" element={<EmbedTool />} />
          <Route path="*" element={<h1 className="text-center text-4xl">404 - Page Not Found</h1>} />
      </Routes>
  </section>
  )
}

export default App
