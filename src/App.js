//.import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
//import jackie from "./profile.png";



function App() {
  const [checked, setChecked] = useState(false);
 
  return(
    <>
      <input 
      type ="checkbox" 
      value={checked}
      onChange={() => setChecked((checked) => !checked)}
      />
      <p> {checked ? "checked" : "not checked"}</p>
    </>
  );
}
  

export default App;
