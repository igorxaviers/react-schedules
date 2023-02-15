import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import './style.scss'

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <Outlet/>
      
      <Toaster
        position="bottom-right"
        reverseOrder={false}/>
      <Footer/>
    </div>
  )
}

export default App
