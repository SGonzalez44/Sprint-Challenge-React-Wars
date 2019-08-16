import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StarWars from './components/StarWars.js';
import './App.css';

function App() { 
  const[data, setData] = useState({});
  useEffect(() => {
  axios.get("https://swapi.co/api/people/1/")
  .then(response => {
    console.log(response.data);
    setData(response.data);
  });
  }, []);
return (
  
    <StarWars title={data.name}
               gender={data.gender}
               height={data.height}
               mass={data.mass}
               hair_color={data.hair_color}
               skin_color={data.skin_color}
                />
 

  )
}

export default App;
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.