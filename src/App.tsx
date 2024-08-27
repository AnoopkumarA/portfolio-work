import React from "react";
import './App.css'

import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route, HashRouter} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";



const about: React.FC = () => {
    return (
        <>
           <div className="bg-[#020516] ">
            <HashRouter>
     <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
        </Router>
        </HashRouter>
      
      
</div> 
      
         
            </>
       
    );
}

export default about;
