import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

import { MyRecipe } from "./Pages/MyRecipePage/MyRecipe";
import Signup from "./Pages/SignupPage/Signup";
import Login from "./Pages/LoginPage/Login";
import Home from "./Pages/HomePage/Home";
import Recipe from "./Pages/RecipePage/Recipe";
import AboutRecipe from "./Pages/AboutRecipePage.js/AboutRecipe";
import AddRecipe from "./Pages/AddRecipePage/AddRecipe";
import BackendUrl from "./BackendUrl"
import Loading from "./Pages/LoadingPage/Loading";

function App() {

  const [recipeData, setRecipeData] = useState([])
  const [loading, setLoading] = useState(false)
  const [isLogin, setIsLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [userData, setUserData] = useState({})
  const [isCreate, setIsCreate] = useState(false)

  const getRecipeData = async () => {
    setLoading(true)
    const response = await fetch(BackendUrl + `api/recipe`)
    const data = await response.json()
    setRecipeData(data)
    setLoading(false)
  }

  useEffect(() => {
    const getRecipeList = async () => {
      setLoading(true)
      const response = await fetch(BackendUrl + `api/recipe`)
      const data = await response.json()
      setRecipeData(data)
      setLoading(false)
    }
    getRecipeList()
  }, [])

  const addRecipeData = async (formData) => {
    setLoading(true)
    const response = await fetch(BackendUrl + `api/recipe/create`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    if (!response.ok) {
      setLoading(false)
      return toast.error("please fill the Form")
    }
    setLoading(false)
    getRecipeData()
  }

  const rempoveRecipeData = async (_id) => {
    setLoading(true)
    const response = await fetch(BackendUrl + `api/recipe/delete/${_id}`, {
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

  const SigninHandler = async (formData) => {
    try {
      setLoading(true)
      const response = await fetch(BackendUrl + `api/users/signup`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await response.json()
      if (!response.ok) {
        setLoading(false)
        return toast.error(data.message)
      }
      localStorage.setItem("userid", data._id)
      setUserData(data)
      setIsSignup(true)
      setLoading(false)
    }
    catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }

  const LogingHandler = async (formData) => {
    try {
      setLoading(true)
      const response = await fetch(BackendUrl + `api/users/login`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await response.json()
      if (!response.ok) {
        setLoading(false)
        return toast.error(data.message)
      }
      localStorage.setItem("userid", data._id)
      setUserData(data)
      setIsLogin(true)
      setLoading(false)
    }
    catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }

  const signinHandler = (formData) => {
    SigninHandler(formData)
  }
  const logingHandler = (formData) => {
    LogingHandler(formData)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup signinHandler={signinHandler} isSignup={isSignup} />} />
        </Routes>
        {isLogin == false ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login logingHandler={logingHandler} isLogin={isLogin} />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<Login logingHandler={logingHandler} isLogin={isLogin} />} />
            <Route path="/" element={<Home />} />
            <Route path="/recipe" element={<Recipe recipeData={recipeData} isLogin={isLogin} userData={userData} />} />
            <Route path="/aboutrecipe/:id" element={<AboutRecipe isLogin={isLogin} recipeData={recipeData} userData={userData} deleteHandler={deleteHandler} />} />
            <Route path="/addrecipe" element={<AddRecipe isCreate={isCreate} createHandler={createHandler} userData={userData} />} />
            <Route path="/myrecipe" element={<MyRecipe isLogin={isLogin} userData={userData} recipeData={recipeData} />} />
          </Routes>
        )
        }
      </BrowserRouter >
    </>
  );
}

export default App;
