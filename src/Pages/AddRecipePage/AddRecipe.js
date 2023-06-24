import { React, useState } from 'react'
import { Link } from 'react-router-dom'

import './AddRecipe.css'
import Navbar from '../../Component/Navbar/Navbar'

const AddRecipe = (props) => {

    const [formData, setFormData] = useState({})

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const createRecipeHandler = (formData) => {
        props.createHandler(formData)
    }

    return (
        <>
            <Navbar />
            <div className='addrecipepage-maincontainer'>
                <p className='addrecipepage-title'>Create Your Recipe</p>
                <div className='addrecipepage-subcontainer'>
                    <div>
                        <label>Recipe Name</label>
                        <input type="text" name="recipeName" onChange={inputHandler} />
                    </div>
                    <div>
                        <label>Image URL</label>
                        <input type="text" name="image_path" onChange={inputHandler} />
                    </div>
                    <div>
                        <label>Categories</label>
                        <input type="text" name="categories" onChange={inputHandler} />
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="text" name="description" onChange={inputHandler} />
                    </div>
                    <div>
                        <label>Total Time</label>
                        <input type="text" name="total_time_string" onChange={inputHandler} />
                    </div>
                    <div>
                        <label>Servings</label>
                        <input type="text" name="servings" onChange={inputHandler} />
                    </div>
                    <div>
                        <label>Ingredients</label>
                        <input type="text" name="ingredients" onChange={inputHandler} />
                    </div>
                    <div>
                        <label>Instructions</label>
                        <input type="text" name="instructions" onChange={inputHandler} />
                    </div>
                    <div className='create-button'>
                        <Link className='create-button-link' to='/recipe'>
                            <button onClick={() => createRecipeHandler(formData)}>Create</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddRecipe