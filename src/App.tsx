import React from "react";
import './App.css'


import { BrowserRouter as Router, Routes, Route, HashRouter} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/home";



const about: React.FC = () => {
    return (
        <>
           <div className="bg-[#020516] ">
            <HashRouter>
     
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
        </HashRouter>
      
      
</div> 
      
         
            </>
       
    );
}

export default about;
