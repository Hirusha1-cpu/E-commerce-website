import React, { useRef, useState } from "react";
// import required modules
import { Grid, Mousewheel, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { IconButton, Rating } from "@mui/material";

const productArr = [
  {
    imageUrl:
      "https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg",
    price: "100",
    productTitle: "product title 1",
  },
  {
    imageUrl:
      "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    price: "100",
    productTitle: "product title 2",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    price: "100",
    productTitle: "product title 3",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg",
    price: "100",
    productTitle: "product title 4",
  },
  {
    imageUrl:
      "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    price: "100",
    productTitle: "product title 6",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    price: "100",
    productTitle: "product title 7",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg",
    price: "100",
    productTitle: "product title 8",
  },
  {
    imageUrl:
      "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    price: "100",
    productTitle: "product title 9",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    price: "100",
    productTitle: "product title 10",
  },
  
];
const Product = ({ title, rowsCount, slidesPerView }) => {
  return (
    <section style={{
        boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"
    }} className="w-full mt-6 ">
      <h1 className="text-lg font-bold mt-2 ml-2 mb-3">{title}</h1>
      <Swiper
        slidesPerView={Number(slidesPerView)}
        grid={{
          rows: Number(rowsCount),
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        mousewheel = {true}
        modules={[Grid, Pagination, Mousewheel]}
        
      >
        {productArr.map(({ imageUrl, price, productTitle }, index) => (
          <SwiperSlide key={index}>
            <ProductUnit
              imageUrl={imageUrl}
              price={price}
              productTitle={productTitle}
              id={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Product;

const ProductUnit = ({ imageUrl, price, productTitle, id }) => (
  <IconButton
    sx={{
      padding: "4px",
      borderRadius: "5px",
      color: "red",
      margin:"3px",
      marginBottom: "30px",
    }}
  >
    <div className="w-full mb-7">
      <img
        src={imageUrl}
        alt={`product_unit_${id}`}
        className="w-full object-contain"
      />
      <h3 className="text-sm font-semibold text-stone-900">{productTitle}</h3>
      <Rating 
      name={imageUrl}
      value={3.5}
      readOnly
      precision={0.1}
      defaultValue={2} size="small" 
      />
      <h3 className="text-stone-900 font-bold text-lg">Rs.{price}</h3>
    </div>
    
  </IconButton>
)