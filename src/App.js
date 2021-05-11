
//import jackie from "./profile.png";

//https://api.github.com/users/rmasonh18
import React from "react";
import "./App.css";
import {  Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contact

} from "./pages";

function App() {
  return (
    <div>
      

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
   
      
    </div>
  );
}

export default App;

