import React from 'react'
import "./CSS/LoginSignup.css"

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>SIgn Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="" placeholder='Your Name' id="" />
          <input type="email" name="" placeholder='Email Address' id="" />
          <input type="password" name="" placeholder='Password' id="" />
        </div>
          <button>Continue</button>
          <p className="loginsignup-login">
            Already have an account? <span>Login Here</span>
            <div className="loginsignup-agree">
              <input type="checkbox" name="" id="" />
              <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
          </p>
      </div>
    </div>
  )
}

export default LoginSignup
