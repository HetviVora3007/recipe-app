import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./Pages/HomePage/Home";
import Recipe from "./Pages/RecipePage/Recipe";
import AboutRecipe from "./Pages/AboutRecipePage.js/AboutRecipe";
import AddRecipe from "./Pages/AddRecipePage/AddRecipe";
import BackendUrl from "./BackendUrl"
import Loading from "./Pages/LoadingPage/Loading";

function App() {

  const [recipeData, setRecipeData] = useState([])
  const [loading, setLoading] = useState(false)

  console.log(recipeData)

  const getRecipeData = async () => {
    setLoading(true)
    const response = await fetch(BackendUrl)
    console.log(BackendUrl)
    const data = await response.json()
    setRecipeData(data)
    setLoading(false)
  }

  useEffect(() => {
    const getRecipeList = async () => {
      setLoading(true)
      const response = await fetch(BackendUrl)
      const data = await response.json()
      setRecipeData(data)
      setLoading(false)
    }
    getRecipeList()
  }, [])

  const addRecipeData = async (formData) => {
    setLoading(true)
    const response = await fetch(BackendUrl + `/create`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    getRecipeData()
  }

  const rempoveRecipeData = async (_id) => {
    setLoading(true)
    const response = await fetch(BackendUrl + `/delete/${_id}`, {
      method: 'DELETE'
    })
    getRecipeData()
  }

  const createHandler = (formData) => {
    addRecipeData(formData)
  }

  const deleteHandler = async (_id) => {
    rempoveRecipeData(_id)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe recipeData={recipeData} />} />
          <Route path="/aboutrecipe/:id" element={<AboutRecipe recipeData={recipeData} deleteHandler={deleteHandler} />} />
          <Route path="/addrecipe" element={<AddRecipe createHandler={createHandler} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
