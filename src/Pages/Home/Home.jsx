import React, { useRef, useState } from "react";

import Ads from './Ads'
import Product from "./Product";
import Loading from "../../Components/Loading/Loading";
import MainContainer from "../../Layout/MainContainer";


const Home = () => {
    const [loading, setLoading] = useState(false);
  
    if(loading){
        return <Loading/>
    }

  return( 
  
<MainContainer>

    <Ads/>
   
    <Product  title="Trending products" rowsCount={1} slidesPerView={3} />
    <Product  title="Electronic products" rowsCount={1} slidesPerView={3} />
    <Product  title="Computer products" rowsCount={1} slidesPerView={3} />
</MainContainer>

 
 
  )
};

export default Home;
