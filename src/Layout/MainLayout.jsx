import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Outlet} from 'react-router-dom';


const MainLayout = () => {
  return (
    <div className="overflow-hidden w-screen h-screen">
        <Header/>
      <Outlet/>
        
        <Footer/>

    </div>
  )
}

export default MainLayout