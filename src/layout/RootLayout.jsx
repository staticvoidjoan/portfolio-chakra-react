import { Box, Image } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { FaHeart } from "react-icons/fa";
import keisi from "../assets/lemon.png";
export default function RootLayout() {


  return (
    <Box h="100vh" overflow={"auto"} bg={"blackBrand.100"}>
      <NavBar />
      <Outlet />
     
    
      
    </Box>
  );
}
