import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='navbar-maincontainer'>
                <div className='navbar-subcontainer'>
                    <div className='navbar-leftside-container'>
                        <Link className='title-nav-links' to='/recipe'>Recipe Book</Link></div>
                    <div className='navbar-rightside-container'>
                        <Link className='nav-links' to='/recipe'>Recipes</Link>
                        <Link className='add-recipe-button' to='/addrecipe'>Add Recipe</Link>
                    </div>
                    {/* <Link className='add-recipe-button' to='/addrecipe'>Add Recipe</Link> */}
                </div>
            </div>
        </>
    )
}

export default Navbar