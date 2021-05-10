//.import logo from './logo.svg';
import './App.css';
//import jackie from "./profile.png";

function SecretComponent() {
  return <h1>Secret for only authorized users</h1>
}

function RegularComponent() {
  return <h1>Every user has access</h1>
}




function App(props) {
 // use shorthand react.fragment for conditional rendering
 return (
  <>
    {props.authorized ? <SecretComponent /> : <RegularComponent />}
  </>
 );
}

export default App;
