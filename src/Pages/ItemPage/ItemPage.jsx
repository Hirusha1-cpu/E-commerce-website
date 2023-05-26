import { IconButton } from '@mui/material'
import React, { useRef, useState } from 'react'

const ItemImageArr = [
    'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg',
    'https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=',
    
    'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg',
    'https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=',

]

const ItemPage = () => {
    const mainImageRef = useRef()
    const subImageRef = useRef([])

  return (
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
        <h1 className='text-lg font-bold px-3 mb-7'>Item Title</h1>
        <img
        ref={mainImageRef}
        src={ItemImageArr[0]} 
        alt="main item" 
        className='w-full object-contain 
        rounded-md ' />
        <div className='w-full mt-5 grid grid-cols-4 text-center grid-rows-1 gap-3'>
            {ItemImageArr.map((ele,index)=>(
                <IconButton key={index} sx={{
                    padding: '0',
                    borderRadius: '2px',

                }} 
                // onClick={()=> console.log('clicked', subImageRef.current[index])}
                onClick={()=>{
                    subImageRef.current[index].style.border = '5px solid gold';
                    mainImageRef.current.src = subImageRef.current[index].src
                    for(let i = 0; i<ItemImageArr.length; i++){
                        if(i!== index){
                            subImageRef.current[i].style.border = 'none';
                        
                        }
                    }
                }}
                >

                    <img
                    ref={(refEle)=>subImageRef.current[index]= refEle}
                    name={`item image ref : ${index}`}
                    src={ele} alt={ele} className='w-full object-contain 
                    rounded-sm'/>
                </IconButton>
            ))}

        </div>

    </div>
  )
}


export default ItemPage