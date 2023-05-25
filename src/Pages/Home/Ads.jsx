import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay} from "swiper";

// Import Swiper styles
import "swiper/css";

const adsElements = [

    {
        imageUrl:'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk='

    },
    {
        imageUrl:'https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4='
    },
    {
        imageUrl:'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg'
    }

]

const Ads = () => {
  return (
 
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // modules={[Autoplay, Pagination, Navigation]}
        modules={[Autoplay]}
        className='rounded-lg overflow-hidden'
   
      >
      {adsElements.map(({imageUrl}, index)=>( 
      <SwiperSlide key={index}>
      <AdUnit imageUrl={imageUrl} id={index}/>
      </SwiperSlide>) )}

     
      </Swiper>

  )
}

export default Ads;

const AdUnit = ({imageUrl, id}) =>(

        <img 
            src={imageUrl}
            alt={`ad${id}`}
            className="w-full object-contain rounded-lg"
        
        />
)