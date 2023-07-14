import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import "./MyRecipe.css"
import Navbar from '../../Component/Navbar/Navbar'

export const MyRecipe = (props) => {

    const [myRecipeData, setMyRecipeData] = useState([])

    useEffect(() => {
        const id = localStorage.getItem('userid')
        const Data = props.recipeData
        const obj = Data.filter(d => (d.createdBy) == (id))
        setMyRecipeData(obj)
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Navbar userData={props.userData} />
            <div className='myrecipepage-maincontainer'>
                <div className='myrecipepage-subcontainer'>
                    {myRecipeData.length == 0 ? <p className='myrecipepage-title'>Nothing to show. Please Add Recipe</p> :
                        (myRecipeData.map((item) => {
                            return (
                                <Link className='myrecipepage-link' to={`/aboutrecipe/${item._id}`}>
                                    <div className='myrecipepage-card'>
                                        <div>
                                            <img src={item.image_path} />
                                        </div>
                                        <p>{item.recipeName}</p>
                                    </div>
                                </Link>
                            )
                        }))
                    }
                </div>
            </div>
        </>
    )
}
