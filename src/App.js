import React from "react";
import './Styles/App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/UI/Button/Navbar/Navbar";
import AppRouter from "./Components/AppRouter";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      
       <AppRouter />
      
    </BrowserRouter>
  )
}

export default App;