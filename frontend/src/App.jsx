import React, { useContext, useState } from 'react'
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
import Cart from './Pages/Cart'
import { useDispatch } from 'react-redux'
import { setUserDetails } from './store/userSlice'
import AdminPannel from './Pages/AdminPannel'
import Alluser from './Pages/Allusers'
import AllProducts from './Pages/Allproducts'
import CategoryList from './Components/CategoryList'
import ProductDetails from './Pages/ProductDetails'
import SearchProduct from './Pages/SearchProduct'
import AddProperty from './Pages/AddProperty'
const App = () => {
  const dispatch = useDispatch();
  const context = useContext(Context)
  const [cartProductCount,setCartProductCount] = useState(0)
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
const fetchUserAddToCart = async()=>{
  const dataResponse = await fetch(SummaryApi.addToCartProductCount.url,{
    method : SummaryApi.addToCartProductCount.method,
    credentials : 'include'
  })

  const dataApi = await dataResponse.json()

  setCartProductCount(dataApi?.data?.count)
}
useEffect(()=>{
  /**user Details */
  fetchUserDetails()
  /**user Details cart product */
  fetchUserAddToCart()

},[])

  return (
    <BrowserRouter>
    <Context.Provider value={{
      fetchUserDetails, // user detail fetch 
      cartProductCount, // current user add to cart product count,
      fetchUserAddToCart 
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
      <Route path="/product-category/:categoryName" element={<CategoryList/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path='/addproperty' element={<AddProperty/>}/>
    
      
    </Routes>
    </Context.Provider>
    </BrowserRouter>
  )
}

export default App