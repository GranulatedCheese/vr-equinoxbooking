import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div>
        <img className="h-screen w-screen object-cover fixed left-0 hue-rotate-90" src="./src/assets/img/msi-myspace-bg.png"/>
        <Navbar/>
        <Sidebar/>
        <Hero/>
    </div>
  )
}

export default App