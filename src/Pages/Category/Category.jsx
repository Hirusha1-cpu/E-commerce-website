import { IconButton, ListItemButton } from "@mui/material";
import React from "react";
import {Link } from "react-router-dom";
const categoryArr = [
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg",
    title: "category title 1",
    categoryId:'category1'
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=",
    title: "category title 2",
    categoryId:'category2'
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
    title: "category title 3",
    categoryId:'category3'
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg",
    title: "category title 4",
    categoryId:'category4'
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=",
    title: "category title 5",
    categoryId:'category5'
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
    title: "category title 6",
    categoryId:'category6'
  },
];

const Category = () => {
  return (
    <div className=" px-5  py-[100px] w-full h-screen overflow-y-scroll">
      <div
        className="w-full p-2 pr-0 pl-5 "
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        }}
      >
        <h1 className="text-xl font-bold text-stone-900 mt-2 ml-2 mb-3">Main Categories</h1>
        <div className="grid grid-cols-2 md:grid-cols-4  grid-rows-[auto] gap-5 mr-5">
          {categoryArr.map(({ imageUrl, title , categoryId}, index) => (
            <CategoryUnitItems key={index} imageUrl={imageUrl} title={title} categoryId={categoryId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
const CategoryUnitItems = ({ imageUrl, title ,categoryId}) => (
    <Link to={`/category/${categoryId}`}>
    {/* <div>

  <IconButton
    sx={{
      color: "gray",
      padding: "1px",
      borderRadius: "6px",
    }}
  > */}
    <ListItemButton sx={{
        padding:0,
        margin:0,
        boxShadow:
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        borderRadius: '6px',
        backgroundColor: 'transparent', 

    }}>

    <section
      
      className="m-1 w-full p-6  rounded-lg border-2 border-gray-300  items-center"
    >
      <img
        src={imageUrl}
        alt={title}
        className="rounded-full
     w-[50px] h-[50px] "
      />
      <h2 className="text-[15px] flex flex-col sm:text-sm text-black mt-3 font-serif">Category Item</h2>
    </section>
    </ListItemButton>
  {/* </IconButton>
    </div> */}
    </Link>
);
