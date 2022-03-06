import React from 'react';
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import Accordian from './Components/Accordian';
import Home from './Pages/Home';
import{
  BrowserRouter,
  Routes,
  Route} from "react-router-dom";
import Services from './Components/Services';


function App() {
  return (
   
    <BrowserRouter>
    <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/card" element={<Card/>} />
        <Route path="/accordian" element={<Accordian />} />
      
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
