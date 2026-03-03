import React from 'react'
import img from'./assets/img.png'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
const App = () => {
  return (
    <div className='w-full'>
   <img src={img} className="w-full h-96 object-cover"></img>
    </div>
  )
}

export default App
