import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import './AboutRecipe.css'
import Navbar from '../../Component/Navbar/Navbar'

const AboutRecipe = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [aboutrecipeData, setAboutRecipeData] = useState({})
    const params = useParams()

    useEffect(() => {
        const Data = props.recipeData
        const obj = Data.filter(d => (d._id) == (params.id))
        setAboutRecipeData(obj[0])
    }, [])

    const deleteHandler = (_id) => {
        props.deleteHandler(_id)
    }

    return (
        <>
            <Navbar />
            <div className='aboutrecipe-maincontainer'>
                <div className='aboutrecipe-subcontainer'>
                    <div className='aboutrecipe-image-and-description-container'>
                        <div className='aboutrecipe-left-side-container'>
                            <img src={aboutrecipeData.image_path} />
                        </div>
                        <div className='aboutrecipe-right-side-container'>
                            <div className='aboutrecipe-right-side-subcontainer'>
                                <p className='recipe-title'>{aboutrecipeData.recipeName}</p>
                                <p className='recipe-categories'>{aboutrecipeData.categories}</p>
                                <p className='recipe-total-time'>{aboutrecipeData.total_time_string}</p>
                                <p className='recipe-servings'>{aboutrecipeData.servings}</p>
                                <p className='recipe-description'>{aboutrecipeData.description}</p>
                            </div>
                        </div>
                    </div>
                    <p className='ingredients-title'>Ingredients</p>
                    <p className='ingredients-list'>{aboutrecipeData.ingredients}</p>

                    <p className='instructions-title'>Instructions</p>
                    <p className='instructions-list' >{aboutrecipeData.instructions}</p>
                    <div className='delete-button'>
                        <Link to='/recipe' className='delete-button-link'>
                            <button onClick={() => deleteHandler(aboutrecipeData._id)}>Delete Recipe</button>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}

export default AboutRecipe