import React from 'react';
import {Card} from 'semantic-ui-react';
import './StarWars.scss';


const StarWars = (props) => {
    console.log(props);
    return(
        <Card>
            <Card.Content>
                <h3>Name:{props.name}</h3>
                <p>Age:{props.age}</p>
                <p>Height:{props.height}</p>
                <p>Mass:{props.mass}</p>
                <p>Hair Color:{props.hair}</p>
                <p>Eye Color:{props.eye}</p>
                <p>Gender:{props.gender}</p>
               
            </Card.Content>
        </Card>

    );
}

export default StarWars;