//.import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
//import jackie from "./profile.png";

//https://api.github.com/users/rmasonh18

 
 function App({ login }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data) {
    return (
      <div>
        <h1>NAME: <strong></strong>{data.login}</h1>
        <p>PUBLIC REPOS: {data.public_repos}</p>
        <img alt ={data.login} src={data.avatar_url} />
      </div>
    );
  }


  return <div>No User Available</div>;
    
}
  

export default App;

  