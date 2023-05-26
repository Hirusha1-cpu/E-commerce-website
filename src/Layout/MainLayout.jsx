import React,{useRef} from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Outlet} from 'react-router-dom';
import PaymentModal from '../Models/PaymentModal';


const MainLayout = () => {
    const paymentModalRef = useRef();

  return (
    <div className="overflow-hidden w-screen h-screen">
         <PaymentModal ref={paymentModalRef}/>
        <Header paymentModalRef={paymentModalRef}/>
      <Outlet/>
        
        <Footer/>

    </div>
  )
}

export default MainLayout