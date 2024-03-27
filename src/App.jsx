import React from 'react'
import Navbar from './sections/Navbar'
import Banner from './sections/Banner'
import Recomendation from './sections/Recomendation'
import About from './sections/About'
import Menu from './sections/Menu'
import Reviews from './sections/Reviews'
import Footer from './sections/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Recomendation />
      <About />
      <Menu />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App
