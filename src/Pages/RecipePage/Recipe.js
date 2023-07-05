import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Recipe.css'
import Navbar from '../../Component/Navbar/Navbar'

const Recipe = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Navbar />
            <div className='recipepage-maincontainer'>
                <div className='recipepage-subcontainer'>
                    {props.recipeData.length == 0 ? <p className='recipepage-title'>Nothing to show. Please Add Recipe</p> :
                        props.recipeData.map((item) => {
                            return (
                                <Link className='recipe-link' to={`/aboutrecipe/${item._id}`}>
                                    <div className='recipepage-card'>
                                        <div>
                                            <img src={item.image_path} />
                                        </div>
                                        <p>{item.recipeName}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Recipe