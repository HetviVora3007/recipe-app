import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

import "./Signup.css"

const Signup = (props) => {

    const [formData, setFormData] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
        if (props.isSignup == true) {
            navigate("/login")
        }
    }, [props.isSignup])

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const signinHandler = (formData) => {
        props.signinHandler(formData)
    }

    return (
        <>
            <ToastContainer />
            <div className='signuppage-maincontainer'>
                <div className='signuppage-subcontainer'>
                    <p>Sign Up</p>
                    <div className='signuppage-lable-and-input'>
                        <label>User Name</label>
                        <input type='text' name='UserName' onChange={inputHandler} />
                        <label>Email Id</label>
                        <input type='email' name='EmailId' onChange={inputHandler} />
                        <label>Password</label>
                        <input type='password' name='Password' onChange={inputHandler} />
                    </div>
                    <button className='signuppage-signin-button' onClick={() => signinHandler(formData)}>SignUp</button>
                </div>
            </div>
        </>
    )
}

export default Signup