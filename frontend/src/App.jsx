import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Login from './Pages/login'
import Forgotpass from './Pages/Forgotpass'
import NavBar from './Components/NavBar'
import Signup from './Pages/Signup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'
import SummaryApi from './common'
import Context from './context'
import { useDispatch } from 'react-redux'
import { setUserDetails } from './store/userSlice'
import AdminPannel from './Pages/AdminPannel'
import Alluser from './Pages/Allusers'
import AllProducts from './Pages/Allproducts'
const App = () => {
  const dispatch = useDispatch();
  const fetchUserDetails = async()=>{
    const dataResponse = await fetch(SummaryApi.current_user.url,{
      method : SummaryApi.current_user.method,
      credentials : 'include'
    })

    const dataApi = await dataResponse.json()

    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))
    }
}
useEffect(()=>{
  /**user Details */
  fetchUserDetails()
  /**user Details cart product */
  //fetchUserAddToCart()

},[])

  return (
    <BrowserRouter>
    <Context.Provider value={{
      fetchUserDetails
    }}>
    <ToastContainer />
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/forgot" element={<Forgotpass/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/admin-pannel" element={<AdminPannel/>}/>
      <Route path="/admin-pannel/all-users" element={<Alluser/>}/>
      <Route path="/admin-pannel/all-products" element={<AllProducts/>}/>
        
      
        
      
    </Routes>
    </Context.Provider>
    </BrowserRouter>
  )
}

export default App