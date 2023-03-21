import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name="Adnan Hasan" ocupation="Job Holder"></Person>
      <Person name="Masud Rana" ocupation="Programmer"></Person>
      <Person name="Busra" ocupation="ai sala bou niye bastoi thake"></Person>
    </div>
  );
}


function Person(props) {
  return (
    <div className='person'>
      <h2>{props.name}</h2>
      <p>{props.ocupation}</p>
    </div>
  )
}

export default App;
