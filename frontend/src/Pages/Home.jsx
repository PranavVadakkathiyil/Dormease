import React from 'react'
import NavBar from '../Components/NavBar'
import Search from '../Components/Search'
import Banner from '../Components/Banner'
import List from '../Components/List'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div>
      
        <Search/>
        <Banner/>
        <List/>
        <Footer/>
    </div>
  )
}

export default Home