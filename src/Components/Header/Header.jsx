import React, { useRef, useState } from "react";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { IconButton } from "@mui/material";

let clicked = false;

const Header = ({paymentModalRef}) => {
//   const [isSearch, setIsSearch] = useState(false);
  const logoRef = useRef()
  const searchBoxRef = useRef()
  const searchBoxContainerRef = useRef()



  const searchButtonClickHandle = ()=>{
    if(clicked){
         logoRef.current.style = 'display:none;'
         searchBoxRef.current.style = 'display:inline-block;'
         searchBoxContainerRef.current.style.backgroundColor = '#f3f5f6'
    }else{
        logoRef.current.style = 'display:inline-block;'
        searchBoxRef.current.style = 'display:none;'
        searchBoxContainerRef.current.style.backgroundColor = 'inherit'
    }
  }

  return (
    <header
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      }}
      className="fixed top-0 left-0 z-[100] w-full  py-3 px-2 bg-my-background flex items-center justify-between"
    >
      {/* header left */}
      <div className="flex items-center">
        <IconButton
          sx={{
            color: "text-blue-800",
          }}
        >
          <MenuSharpIcon
            sx={{
              color: "#fff",
              width: "1.25rem",
              height: "1.25rem",
            }}
          />
        </IconButton>

        <h1
        ref={logoRef}
          style={{
            display:
              window.innerWidth < 640
                ? clicked
                  ? "none"
                  : "inline-block"
                : "inline-block",
          }}
          className="ml-2 text-sm font-bold"
        >
          HIRU <span className="text-blue-800">DEV</span>
        </h1>
        <div
        ref={searchBoxContainerRef}
          style={{
            backgroundColor:
              window.innerWidth < 640
                ? clicked
                  ? "#f3f5f6"
                  : "inherit"
                : "#f3f5f6",
          }}
          className="overflow-hidden ml-2 flex items-center rounded-full bg-[#f3f5f6]"
        >
          <input
          ref={searchBoxRef}
            style={{
              display:
                window.innerWidth < 640
                  ? clicked
                    ? "inline-block"
                    : "none"
                  : "inline-block",

              trasition: "all 400ms ease-in-out",
            }}
            type="text"
            placeholder="Search"
            className=" hidden sm:inline-block ml-1 
        w-[200px] bg-inherit outline-none p-2 font-semibold text-sm"
          />
          <IconButton
            onClick={() => {
              if (window.innerWidth < 640) {
                // setIsSearch(!isSearch);
                clicked = !clicked
                searchButtonClickHandle()
                console.log(clicked);
              }
            }}
          >
            <SearchSharpIcon
              sx={{
                color:
                  window.innerWidth < 640
                    ? clicked
                      ? "text-gray-400"
                      : "black"
                    : "text-gray-400",
              }}
              className="text-gray-400"
            />
          </IconButton>
        </div>
      </div>
      {/* header right */}
      <IconButton onClick={()=>{
        paymentModalRef.current.handleOpen();
      }}>
        <div className="relative rounded-full p-1">
          <ShoppingCartSharpIcon
            sx={{
              color: "#d6c5c50",
              width: "1.25rem",
              height: "1.25rem",
            }}
          />
          <div className="absolute top-[2px] flex w-3 h-3 items-center justify-center right-0 text-[7px] text-white bg-black rounded-full">1</div>
        </div>
      </IconButton>
    </header>
  );
};

export default Header;
