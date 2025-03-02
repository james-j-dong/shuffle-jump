import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import EmbedTool from './components/EmbedTool'
import MediaPlayer from './components/MediaPlayer'
import Home from './components/Home'

function App() {
  return (
    <>
      <section className="m-8 md:m-16">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path ="/home" element = { <Home/> } />
              <Route path="/getEmbed" element = { <EmbedTool />} />
              <Route path = "/embed" element = { <MediaPlayer videoUrl="https://www.youtube.com/shorts/mcHUXUgHu7E"/> } />
              <Route path="*" element = {<h1 className="text-center text-4xl">404 - Page Not Found</h1>} />
          </Routes>
      </section>
    </>
  )
}

export default App;
