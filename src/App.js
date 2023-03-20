import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
    </div>
  );
}


function Person() {
  return (
    <div className='person'>
      <h2>Adnan Hassan</h2>
      <p>Ocupation: Job Holder</p>
      <p>habit: coding</p>
    </div>
  )
}

export default App;
