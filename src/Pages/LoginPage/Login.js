import { React, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

import "./Login.css"

const Login = (props) => {

    const [formData, setFormData] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
        if (props.isLogin) {
            navigate("/recipe")
        }
    }, [props.isLogin])

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const logingHandler = (formData) => {
        props.logingHandler(formData)
    }

    return (
        <>
            <ToastContainer />
            <div className='loginpage-maincontainer'>
                <div className='loginpage-subcontainer'>
                    <p className='login-title'>Log In</p>
                    <div className='lable-and-input'>
                        <label>Email Id</label>
                        <input type='email' name='EmailId' onChange={inputHandler} />
                        <label>Password</label>
                        <input type='password' name='Password' onChange={inputHandler} />
                    </div>
                    <p className='signup-link-container'><Link className='signup-link' to="/signup">Don't have account? Signup</Link></p>
                    <button className='loginpage-login-button' onClick={() => logingHandler(formData)}>Login</button>
                </div>
            </div>
        </>
    )
}

export default Login