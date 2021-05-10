//.import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
//import jackie from "./profile.png";



function App() {
  const [checked, setChecked] = useState(false);
  
  function toggle() {
    setChecked((checked) => !checked)
  }
  return(
    <>
      <input 
      type ="checkbox" 
      value={checked}
      onChange={toggle}
      />
      <p> {checked ? "checked" : "not checked"}</p>
    </>
  );
}
  

export default App;
