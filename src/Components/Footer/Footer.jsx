import React, { useRef, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { IconButton } from "@mui/material";
import {Link } from "react-router-dom";



const Footer = () => {
    const [whoIsClick, setWhoIsClick]= useState({
        Home:true,
        Category:false,
        Profile:false

    })
  return (
    <footer  style={{
        boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
    }}
      className="fixed bottom-0 left-0 z-[100] w-full 
    drop-shadow-header-shadow py-1 px-2 bg-my-background 
    flex items-center justify-between md:justify-start"
    >

      <FooterIcon clickFun={{whoIsClick, setWhoIsClick}} Icon={HomeOutlinedIcon} iconText='Home'/>
     
      <FooterIcon clickFun={{whoIsClick, setWhoIsClick}} Icon={AppsIcon} iconText="Category" />
       <div className="md:flex-1 md:text-right">
        
      <FooterIcon clickFun={{whoIsClick, setWhoIsClick}} Icon={AccountCircleOutlinedIcon} iconText="Profile" />
       </div>

      
     
    </footer>
  );
};

export default Footer;

const FooterIcon = ({ Icon, iconText, clickFun}) => {
    const clickHandle = () => {
        let obj = {
          Home: true,
          Category: false,
          Profile: false,
        };
      
        if (iconText === 'Category') {
          obj = {
            Home: false,
            Category: true,
            Profile: false,
          };
        } else if (iconText === 'Profile') {
          obj = {
            Home: false,
            Category: false,
            Profile: true,
          };
        }
      
        clickFun.setWhoIsClick(obj);
      };  
      return(
        <Link to={iconText === "Home"?'/':`/${String(iconText).toLowerCase()}`}>
  <IconButton
    sx={{
      padding: "4px",
      paddingTop:'0',
      textTransform: 'capitalize',
      borderRadius: "5px",
      color: "blue",
    }}
  >
    <div style={{
      color:clickFun.whoIsClick[iconText] && 'white'
    
    }}
   
    
    className="text-blue hover:text-blue-50 transition-all duration-300" onClick={clickHandle}>
      <Icon />
      <p className="text-xs font-semibold">{iconText}</p>
      
    </div>
  </IconButton>
        </Link>
)};
