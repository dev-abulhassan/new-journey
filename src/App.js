import { useEffect, useState } from 'react';
import './App.css';



function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries(props) {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div>
      <h2>Visit Duniya Dari</h2>


    </div>
  )
}

export default App;
