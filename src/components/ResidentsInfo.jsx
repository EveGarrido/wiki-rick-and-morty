import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ResidentsInfo = ({url}) => {

const [ character, setCharacter] = useState({});

useEffect(()=>{
  axios.get(url)
    .then(res => setCharacter(res.data))
}, []);

// console.log(character);

let colorStatusCharacter = () => {
  if(character.status === "Alive") {
    return (
    <span style={{color: 'green'}}>
      <i className="fa-solid fa-circle"></i>
    </span>  
    )       
  } else if (character.status === "Dead") {
    return (
    <span style={{color: 'red'}}>
    <i className="fa-solid fa-circle"></i>
    </span>
    )
  } else {
    return (
    <span style={{color: 'grey'}}>
    <i className="fa-solid fa-circle"></i>
    </span>
    )
  }
};


return (
    <div className='character-card'>
      <div className='character-image'>
        <img src={character.image} alt="Photo" />
      </div>
      <div className='character-details'>
        <p><b>{character.name}</b></p>
        <p>
          { 
            colorStatusCharacter()
          }
          {' '}{character.status}
          </p>
        <p>Origin: {character.origin?.name}</p>
        <p>Episodes where appear: {character.episode?.length}</p>
      </div>      
    </div>
  );
};

export default ResidentsInfo;