import React from 'react'
import "../styles/CreditCard.css"
import chip from "../assets/chip.png";
import visa from "../assets/Visa.png";
import { useState } from 'react';

const CreditCard = () => {
  const [name, setName] = useState("Mr.Kabar Gokhan");
  const [number, setNumber] = useState("4970 6523 4526 7810");
  const [expireNumber, setExpireNumber] = useState("10/28");


  return (
    <div className='credicard'>
    <div className="wrapper">
      <div className="logo">
        <img src={visa} alt=''></img>
      </div>
      <div className="chip">
        <img src={chip} alt=''></img>
        </div>
    <div className="acc-details">
      <div className="acc-no">
        <span>{number}</span>
      </div>
      <div className="acc-name">
        <span>{expireNumber}</span>
        <h4>{name}</h4>
      </div>
      </div>
    </div>

    <form>
      <label>Nom Prénom
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Numéro de carte
        <input
          type="text" 
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <label>Expiration
        <input
          type="month" 
          value={expireNumber}
          onChange={(e) => setExpireNumber(e.target.value)}
        />
      </label>
    </form>
    </div>
  )
}

export default CreditCard