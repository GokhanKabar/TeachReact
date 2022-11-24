import React from 'react'
import { useEffect } from "react";
import Navbar from '../Components/Navbar'
import TeacherCard from '../Components/TeacherCard.jsx';


const Home = () => {

  const CurrentPage = "Home";

  return (
    <div className='home'>
    <Navbar currentPage={CurrentPage} />
    <TeacherCard/>
    </div>
  )
}

export default Home