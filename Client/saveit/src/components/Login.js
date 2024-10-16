import React from 'react'
import  './comp.css'

function Login() {
    
  return (
    <div className="login">
       <div className='Container'>
        <h3>Login</h3>
        <input type="text" placeholder='Username'/>
        <input type="password" placeholder='Password'/>
        <button type="button" classname="login-btn">Login</button>
       </div>
    </div>
  )
}

export default Login