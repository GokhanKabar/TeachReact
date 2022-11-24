import React from 'react'
import CreditCard from '../Components/CreditCard.jsx';
import Navbar from '../Components/Navbar'

const Payment = () => {

  const CurrentPage = "Payment";

  return (
    <div>
    <Navbar currentPage={CurrentPage}/>
    <CreditCard/>
    </div>
  )
}

export default Payment