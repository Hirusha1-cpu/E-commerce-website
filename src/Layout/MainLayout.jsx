import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Outlet } from '@mui/icons-material'
import Home from '../Pages/Home/Home'

const MainLayout = () => {
  return (
    <div className="overflow-hidden w-screen h-screen">
        <Header/>
        <Home/>
        
        <Footer/>

    </div>
  )
}

export default MainLayout