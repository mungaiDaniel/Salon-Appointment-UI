import React from 'react'
import Navdrower from './Navdrower'
import Bookings from './Bookings'
import { BrowserRouter, Routes, Route } from "react-router-dom";


const AdminPage = () => {
  return (
    <div className=" container">
    <div >
      <Bookings/>
      </div>
  </div>
  )
}

export default AdminPage
