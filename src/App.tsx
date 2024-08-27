import React from "react";
import './App.css'

import Home from "./pages/home";
import { BrowserRouter as  Routes, Route, HashRouter} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";



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
