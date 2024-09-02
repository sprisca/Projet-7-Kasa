import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Home from './pages/home/home.jsx'
import About from './pages/about/about.jsx'
import Logement from './pages/logement/logement.jsx'
import Error from './pages/error/error.jsx'
function App() {
  return (
    <BrowserRouter>
    <div>
    <Header />
    <Routes>
      <Route path ='/' element={<Home />} />
      <Route path ='/about' element={<About />} />
      <Route path ='/logement/:id' element={<Logement />} />
      <Route path ='*' element={<Error />} />
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
  )
}

export default App
