import React, {useState, useEffect} from 'react';
import StarWars from "./components/StarWars"
import './App.css';
import axios from 'axios';

function App() {

  const [state, setState] = useState([]);
  
  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
    .then(response => {
      setState(response.data.results);
    })
    .catch(err =>
      console.log(err))
  }, [])
  
    return (
      <div className="center">
        <h1>React Wars</h1>
        <div>
        {state.map((data) =>{
        return <StarWars key={data.name} 
                        name={data.name} 
                        age={data.birth_year}
                        height={data.height}
                        mass={data.mass}
                        hairColor={data.hair_color}   
                        eyeColor={data.eye_color} 
                        gender={data.gender} 
                       
                 />
          })
          }
          </div>
      </div>
    );
  }
  
  export default App;
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.