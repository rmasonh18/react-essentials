//.import logo from './logo.svg';
import './App.css';



// create header component
function Header(props) {
  //add console to check in browserslist
  console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

//creat main component
function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <ul style = {{textAlign: 'left'}}>
      {props.dishes.map((dish) => <li>{dish}</li>)}

      </ul>
    </section>

  );
}

//footer componet
function Footer(props) {
  return (
    <p> Copyright &copy; {props.year}</p>
  );
  
}

//dishes array
const dishes = [
  "macaroni and cheese",
  "Salmon",
  "Tofu and vegetables"
];




function App() {
  return (
    <div className="App">
    <Header name="Jackie" />
    <Main adjective="amazing" dishes = {dishes}/>
    <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
