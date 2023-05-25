import React, { useRef, useState } from "react";

import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { IconButton } from "@mui/material";

const Header = () => {
    
    const [isSearch, setIsSearch] = useState(false);
  return (
    <header style={{
        boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
    }} className="fixed top-0 left-0 z-[100] w-full  py-5 px-2 bg-my-background flex items-center justify-between">
      {/* header left */}
      <div className="flex items-center">
        <IconButton sx={{
            color: 'text-blue-800',
        }}>

        <MenuSharpIcon sx={{
            color: '#fff',
            width: '1.25rem',
            height: '1.25rem',
        
        }} />
        </IconButton>

        <h1 style={{
           display:
           window.innerWidth<640 
           ? isSearch 
            ? 'none':'inline-block' 
           :'inline-block'
        }} className="ml-2 text-sm font-bold">
          HIRU <span className="text-blue-800">DEV</span>
        </h1>
        <div style={{
           backgroundColor:
           window.innerWidth<640 
           ? isSearch 
            ? '#f3f5f6' 
           :'inherit'
           :'#f3f5f6'
        }} className="overflow-hidden ml-2 flex items-center rounded-full bg-[#f3f5f6]">
          <input style={{
           display:
           window.innerWidth<640 
           ? isSearch 
            ? 'inline-block':'none' 
           :'inline-block'
        }}  type="text" placeholder="Search" className="hidden sm:inline-block ml-1 
        w-[200px] bg-inherit outline-none p-2 font-semibold text-sm"/>
          <IconButton onClick={()=>{
            if(window.innerWidth<640){
                setIsSearch(!isSearch)
            }
          }}>

          <SearchSharpIcon sx={{
            color:
            window.innerWidth<640 
            ? isSearch 
             ? 'text-gray-400':'black' 
            :'text-gray-400'

          }} className="text-gray-400"/>
          </IconButton>
        </div>
      </div>
      {/* header right */}
      <IconButton>

      <ShoppingCartSharpIcon sx={{
            color: '#d6c5c50',
            width: '1.25rem',
            height: '1.25rem',
        
        }}/>
      </IconButton>
    </header>
  );
};

export default Header;
