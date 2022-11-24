import React from 'react'
import api from "../api.js"
import { useState, useEffect } from "react";
import user from '../assets/user.png'
import ".././styles/TeacherCard.css"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs"

import { useNavigate } from 'react-router-dom';



const TeacherCard = () => {
  const [backendData, setBackendData] = useState([{}]);
  const [lang, setlang] = useState("d'anglais");
  const navigate = useNavigate();
  const verified = "Diplôme vérifié";
  const [query, setQuery] = useState("");

  const updateInputValue = (evt) => {
      const val = evt.target.value;
      setQuery(val)
      setlang(val);
    };

  useEffect(()=>{
  fetch("/api").then(
    response => response.json()
  ).then(
    data => {
      setBackendData(data)
    }
  )
  }, [])



  return (
    <>
    <div className='first_container'>
    <h2> En quelle matière avec-vous besoin de l'aide ?</h2>
    <input className='searchbar'
      type="text"
      placeholder="SVT,piano,anglais,math.."
      onChange={(evt) => updateInputValue(evt)}

    />
    <h2> {" Voici les Teach'rs " + lang + " qui pourraient vous correspondre"}</h2>
    </div>
    <div className="profile-container">
    {(typeof backendData.users === 'undefined') ? (
      <p> Loading... or network not connected</p>
    ):(
    backendData.users.filter(datas => datas.works.toLowerCase().includes(query)).map((datas,index) => (
      <div className="profile-card" key={index}>
        <img src={user} alt="image1" className="profile-icon" />
        <div className="profile-name">{datas.first_name + " " + datas.last_name}</div>
        <div className="profile-position">Professeur {datas.works}</div>
        <div className="rating">
          <AiFillStar size={25} color="#fbdc0d" />
          <AiFillStar size={25} color="#fbdc0d" />
          <AiFillStar size={25} color="#fbdc0d" />
          <AiFillStar size={25} color="#fbdc0d" />
          <AiOutlineStar size={25} color="#fbdc0d" />
        </div>
        <div className="infoUserItem">
          <BsCheckCircleFill color="#2e33a5" size={30} />
          <span>{verified}</span>
        </div>
        <button className="button" onClick={() => navigate('/payment')}>Choisir</button>
      </div>
        ))
    )}
    </div>
    </>
  )
}

export default TeacherCard