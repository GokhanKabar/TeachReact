import React from 'react'
import { useState } from 'react';
import "../styles/BodyHome.css"

const BodyHome = () => {

    const [lang, setlang] = useState("d'anglais");
    const updateInputValue = (evt) => {
        const val = evt.target.value;
        setlang(val);
      };

  return (
    <div className='BodyHome'>
    <div className='first_container'>
    <h2> En quelle matière avec-vous besoin de l'aide ?</h2>
    <input className='searchbar'
      type="text"
      placeholder="SVT,piano,anglais,math.."
      onChange={(evt) => updateInputValue(evt)}
    />
    <h2> {" Voici les Teach'rs " + lang + " qui pourraient vous correspondre"}</h2>
    </div>
    </div>
  )
}

export default BodyHome