import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';

import './Navbar.css'
import profile from "../../Assests/profile.avif"

const Navbar = (props) => {

    const [movileUiLink, setMobileUiLink] = useState(false)

    return (
        <>
            <div className='navbar-maincontainer'>
                <div className='navbar-subcontainer'>
                    <div className='navbar-leftside-container'>
                        <Link className='title-nav-links' to='/recipe'>Recipe Book</Link></div>

                    {props.isLogin ? (
                        <>
                            <div className={movileUiLink ? 'mobile-nav-link' : 'navbar-rightside-container'} onClick={() => setMobileUiLink(movileUiLink)}>
                                <div className='profile-container'>
                                    <p className='user-name'>{props.userData.UserName}</p>
                                    <img className='profile-image' src={profile} />
                                </div>
                                <Link className='nav-links' to='/recipe'>Recipes</Link>
                                <Link className='nav-links' to='/myrecipe'>My Recipe</Link>
                            </div>
                            <button className='menu-icon' onClick={() => setMobileUiLink(!movileUiLink)} >
                                {movileUiLink ? <ClearIcon /> : <MenuIcon />}
                            </button>
                        </>
                    ) :
                        <>
                            <div className={movileUiLink ? 'mobile-nav-link' : 'navbar-rightside-another-container'} onClick={() => setMobileUiLink(movileUiLink)}>
                                <div className='profile-container'>
                                    <p className='user-name'>{props.userData.UserName}</p>
                                    <img className='profile-image' src={profile} />
                                </div>
                                <Link className='nav-links' to='/recipe'>Recipes</Link>
                                <Link className='nav-links' to='/myrecipe'>My Recipe</Link>
                                <Link className='add-recipe-button' to='/addrecipe'>Add Recipe</Link>
                            </div>
                            <button className='menu-icon' onClick={() => setMobileUiLink(!movileUiLink)} >
                                {movileUiLink ? <ClearIcon /> : <MenuIcon />}
                            </button>
                        </>
                    }

                </div>
            </div>
        </>
    )
}

export default Navbar