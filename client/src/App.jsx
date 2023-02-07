import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className='col-md-6 mx-auto mt-5'>
        <Outlet/>
      </div>
      <Toaster
        position="bottom-right"
        reverseOrder={false}/>
      <p>Footer</p>
    </div>
  )
}

export default App
