//.import logo from './logo.svg';
import './App.css';



// create header component
function Header() {
  return (
    <header>
      <h1>Jackie's Kitchen</h1>
    </header>
  );
}

function App() {
  return (
    <div className="App">
    <Header />
    <h2>Main</h2>
    <h3>Footer</h3>
    </div>
  );
}

export default App;
