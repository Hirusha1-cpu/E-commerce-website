import React, { useRef, useState } from "react";

import Ads from './Ads'
import Product from "./Product";
import Loading from "../../Components/Loading/Loading";

const Home = () => {
    const [loading, setLoading] = useState(false);
    if(loading){
        return <Loading/>
    }

  return( 
  <div className="p-5 sm:px-12 md:px-[120px] w-full h-screen overflow-y-scroll pt-[100px]">
    <Ads/>
    <Product  title="Trending products" rowsCount={1} slidesPerView={3} />
    <Product  title="Electronic products" rowsCount={1} slidesPerView={3} />
    <Product  title="Computer products" rowsCount={1} slidesPerView={3} />
  </div>
  )
};

export default Home;
