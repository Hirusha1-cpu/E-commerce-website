import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <footer  style={{
        boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
    }}
      className="fixed bottom-0 left-0 z-[100] w-full 
    drop-shadow-header-shadow py-5 px-2 bg-my-background 
    flex items-center justify-between"
    >
      
      <FooterIcon Icon={HomeOutlinedIcon} iconText='Home'/>
     
      <FooterIcon Icon={AppsIcon} iconText="Category" />
      <FooterIcon Icon={AccountCircleOutlinedIcon} iconText="Profile" />
     
    </footer>
  );
};

export default Footer;

const FooterIcon = ({ Icon, iconText}) => (
  <IconButton
    sx={{
      padding: "4px",
      paddingTop:'0',
      textTransform: 'capitalize',
      borderRadius: "5px",
      color: "blue",
    }}
  >
    <div className="text-blue hover:text-blue-50 transition-all duration-300">
      <Icon />
      <p className="text-xs font-semibold">{iconText}</p>
      
    </div>
  </IconButton>
);
