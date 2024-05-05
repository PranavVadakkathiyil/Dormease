import React from 'react'
import NavBar from '../Components/NavBar'
import Search from '../Components/Search'
import List from '../Components/List'
import Footer from '../Components/Footer'
import CategoryList from '../Components/CategoryList'
import BannerProduct from '../Components/BannerProduct'
import HorizontalCardProduct from '../Components/HorizontalCardProduct'
const Home = () => {
  return (
    <div>
      
        {/*<Search/>*/}
        
        {/*<CategoryList/>*/}
        <BannerProduct/>
        <HorizontalCardProduct category={"hostel"} heading={"TopHostels"}/>
        <HorizontalCardProduct category={"homeStay"} heading={"TopHomeStay"}/>
        <HorizontalCardProduct category={"sleepPods"} heading={"TopSleepPods"}/>
        <Footer/>
        
    </div>
  )
}

export default Home