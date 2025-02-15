import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import MediaPlayer from './components/MediaPlayer'
import EmbedTool from './components/EmbedTool'
import Home from './components/Home'

function App() {

  return (
    <>
      <section className="m-8 md:m-16">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path ="/home" element = { <Home/> } />
              <Route path="/mediaplayer" element = {<MediaPlayer />} />
              <Route path="/embed" element = {<EmbedTool />} />
              <Route path="*" element = {<h1 className="text-center text-4xl">404 - Page Not Found</h1>} />
          </Routes>
      </section>
    </>
  )
}

export default App;
