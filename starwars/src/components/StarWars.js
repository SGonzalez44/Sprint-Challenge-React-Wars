import React from 'react';

function StarWars(props) {
    return (
        <div>
        <h1>Name:{props.title}</h1>
        <h3>Walker Stats</h3>
        <p>Gender:{props.gender}</p>
        <p>Height:{props.height}</p>
        <p>Hair Color:{props.hair_color}</p>
        <p>Skin Color:{props.skin_color}</p>
        </div>
    );
}

export default StarWars;