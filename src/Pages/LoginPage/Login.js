import React from 'react'

import "./Login.css"

const Login = () => {
    return (
        <>
            <div className='loginpage-maincontainer'>
                <div className='loginpage-subcontainer'>
                    <p>Login In</p>
                    <div className='lable-and-input'>
                        <label>Email Id</label>
                        <input type='email' name='email' placeholder='' />
                        <label>Password</label>
                        <input type='password' name='password' placeholder='' />
                    </div>
                    <button className='loginpage-login-button'>Login</button>
                </div>
            </div>
        </>
    )
}

export default Login