import React from 'react'
import './LoginSection.css'

const LoginSection = () => {
  return (
    <div className='login-container'>
        <div className='content'>
            <div className='section-container-img'>
            </div>
            <div className='section-container-form'>
                <div className='login-header'>
                    <h2>ICST &nbsp;<span>LOGIN</span></h2>
                </div>
                <div className='login-form'>
                    <form>
                        <div className='form-data'>
                            <input type='text' id='name' name='name' placeholder='username' required/>
                        </div>
                        <div className='form-data'>
                            <input type='password' id='pwd' name='pwd' placeholder='   password' required/>
                        </div>
                        <div className='form-data form-btn'>
                            <button type="submit" className="login-btn">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginSection