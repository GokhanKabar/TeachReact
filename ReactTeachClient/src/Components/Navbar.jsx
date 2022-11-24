import React from 'react'
import logo from "../assets/teachr.png";
import book from "../assets/book.png";
import { FaCheckCircle } from "react-icons/fa";
import {RiNumber2} from "react-icons/ri"
import {RiNumber1} from "react-icons/ri"
import "../styles/Navbar.css"
import { useState } from 'react';

const Navbar = ({currentPage}) => {



  return (

    <div className='containerLeft'>
        <img src={logo} alt="logo" />
        { currentPage === "Home" ?  (
          <ul>
        <FaCheckCircle className='icon' color="#93C633" size={40} />
          <li>Nos propositions</li>
        <span className='number'><RiNumber2 className='icon' color="#3F6EB4" size={30} /></span>
          <li>Paiement</li>
        </ul> 
        ): (
          <ul>
          <span className='number'><RiNumber1 className='icon' color="#3F6EB4" size={30} /></span>
          <li>Nos propositions</li>
        
        <FaCheckCircle className='icon' color="#93C633" size={40} />
          <li>Paiement</li>
        </ul> 
        )}
      
  </div>
  )
}

export default Navbar