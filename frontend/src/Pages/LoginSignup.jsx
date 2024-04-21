import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsingnup-container">
        <h1>Sing Up</h1>
        <div className="loginsingnup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className='loginsingnup-agree'>
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to thee terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup