import React from 'react'
import {Footer, Works,  Skills, Offers, Header} from './containers'
import { Cta, Navbar} from './components'
import './App.css'
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Offers />
      <Skills />
      <Cta />
      <Works />
      <Footer />
    </div>
  )
}

export default App
