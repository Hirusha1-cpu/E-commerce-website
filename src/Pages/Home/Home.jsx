import React from "react";
import Ads from './Ads'
import Product from "./Product";

const Home = () => {
  return( 
  <div className="p-5 w-full h-screen overflow-y-scroll pt-[100px]">
    <Ads/>
    <Product  title="Trending products" rowsCount={1} slidesPerView={3} />
  </div>
  )
};

export default Home;
