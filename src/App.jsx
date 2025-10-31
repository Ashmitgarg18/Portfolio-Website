import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Portfolio from './Portfolio.jsx'
import {Routes, Route} from 'react-router-dom';
import Blog from './Blog.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  )
}

export default App
