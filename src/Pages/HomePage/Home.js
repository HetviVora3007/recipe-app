import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import './Home.css'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className='homepage-maincontainer'>
                <div className='homepage-leftside-container'>
                    <p className='homepage-title'>Elevate your home cooking with your expertly curated recipes!</p>
                    <p className='homepage-subtitle'>Let's make a delicious dish with the best recipe for the family</p>
                </div>
                <div className='homepage-rigtside-container'>
                    <Link className='button-link' to='/login'>Get Started</Link>
                </div>
            </div>
        </>
    )
}

export default Home