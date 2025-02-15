import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Menu from './Components/MenuBar/Menu'
import Bg from './assets/Backgground.png'
import Home from './Components/Home/Home'
const App = () => {
  return (
    <div style={{ backgroundImage: `url(${Bg})` }} 
      className="w-full h-full bg-cover bg-center bg-opacity-50"
    >
      <Header />
      <Menu />
      <Home />
    </div>
  )
}

export default App
