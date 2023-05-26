import React from 'react'
import { useSelector } from 'react-redux'
import { categorySelector } from '../../Store/ReduxSlice/categorySlice'
import {useParams} from 'react-router-dom'
import { Rating } from '@mui/material';
import { IconButton } from "@mui/material";

const categoryItemArr = [
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg",
      title: "category title 1",

    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=",
      title: "category title 2",
      
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
      title: "category title 3",
      
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg",
      title: "category title 4",
      
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=",
      title: "category title 5",
      
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
      title: "category title 6",
      
    },
  ];
  

const CategoryItems = () => {
    const category = useSelector(categorySelector);
    console.log(category);
    const {categoryId} = useParams()
    const[ categoryTitle] = category.filter((ele)=>ele.id === categoryId);
    console.log(categoryTitle);
  return (
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <h1 className='text-xl font-bold text-stone-900 mt-2 ml-2 mb-3 '>

        {categoryTitle.title}

      </h1>
      <section
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      }}
      className="m-1 w-full p-6 rounded-lg border-2 border-gray-300 flex flex-col items-center"
    >

        
      <div className='w-full  grid grid-cols-3 grid-rows[auto] gap-4'>
        {categoryItemArr.map(({imageUrl,title},index)=><CategoryItemUnit key={index} imageUrl={imageUrl} 
        title={title}/>)}
      </div>
    </section>
    </div>
  )
}

export default CategoryItems;

const CategoryItemUnit= ({imageUrl,title})=>(
    <IconButton
    sx={{
      color: "gray",
      padding: "1px",
      borderRadius: "6px",
    }}
  >
  
<div style={{
        boxShadow:
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          display: "inline-block!important"
      }} className='w-full rounded-lg' >
    <img src={imageUrl} alt={title} className='w-full object-contain'/>
    <h3 className="w-full items-start text-[15px] text-black mt-3 font-serif">{title}</h3>
    <Rating 
      name={imageUrl}
      value={3.5}
      readOnly
      precision={0.1}
      defaultValue={2} size="small" 
      />

</div>
</IconButton>)