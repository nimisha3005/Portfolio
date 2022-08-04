import React from 'react'

import { About, AboutMe, Experience, Footer, Header, Skills, Portfolio, Publications } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <AboutMe />
      <Experience/>
      <Publications />
      {/* <About /> */}
      <Portfolio />
      <Skills />
      <Footer />
    </div>
  )
}

export default App