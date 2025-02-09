import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Menu from './Components/MenuBar/Menu'
import Bg from './assets/Backgground.png'
const App = () => {
  return (
    <div style={{ backgroundImage: `url(${Bg})` }} 
      className="w-full h-full bg-cover bg-center bg-opacity-50"
    >
      <Header />
      <Menu />
       <div className=' w-[80vw] h-200 mt-0 m-auto border-l-1 border-r-1 border-gray-800'>
         
      </div>
    </div>
  )
}

export default App
