import React from "react";
import logo from "../../../public/logo.png";
import { Box } from "./box";

export const CivisRateImage = () => {
    
    return (
        <Box><a href="/">
        <img src={logo.src} alt="CivisRate Logo"
        style= {{


            paddingLeft: 10


        }}
        /></a></Box>
        
    );
};

export default CivisRateImage;