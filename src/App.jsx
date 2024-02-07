import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Uses from "./pages/Uses";
import Career from "./pages/Career";
import "./App.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
function App() {
 

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="uses" element={<Uses />} />
        <Route path="career" element={<Career />} />
      </Route>
    )
  );

  return (
   

      <RouterProvider router={router} />
   
  );
}

export default App;
