//.import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
//import jackie from "./profile.png";

//https://api.github.com/users/rmasonh18

 
 function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!login) return
    setLoading(true);
    console.log(loading)
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);
  if (loading) return <h1> LOADING .....</h1>
  if (error) return
  <pre>{JSON.stringify(error, null, 2)}</pre>
  if (!data) return null;
  if (data) {
    return (
      <div>
        <h1>NAME: <strong></strong>{data.name}</h1>
        <p>{data.blog}</p>
     
        <p>PUBLIC REPOS: {data.public_repos}</p>
        <img alt ={data.login} src={data.avatar_url} />
      </div>
    );
  }


  return <div>No User Available</div>;
    
}
  

export default App;

  