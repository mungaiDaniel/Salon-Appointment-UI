import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import Navdrower from './components/admin/Navdrower';
import Login from './components/auth/LoginInfo';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import 'font-awesome/css/font-awesome.min.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import TestimonyPage from './components/addTestimonies/TestimonyPage';
import Book from './components/BookAppointment/Book';
import Signup from './components/auth/Signup';
function App() {


  const location = useLocation()

  const isAdmin = location.pathname === "/admin"
  const isTestiomny = location.pathname ==="/testimony"
  

  return (
    <div className="App">
     { !isAdmin && <NavBar />}
        <Routes>
          <Route exact path="/" element={<MainContent/>}/>
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
        <Routes>
          <Route exact path="/register" element={<Signup/>}/>
        </Routes>
        <Routes>
          <Route exact path="/testimony" element={<TestimonyPage/>}/>
        </Routes>
        <Routes >
          <Route exact path="/book" element={<Book/>}/>
        </Routes>
        <Routes>
          <Route exact path="/admin" element={<Navdrower/>}/>
        </Routes>
        <Routes>
          <Route exact path="/employee" element={<Book/>}/>
        </Routes>

      <div className='footer'>
      { !isAdmin || !isTestiomny && <Footer />}
      </div>
    </div>
  );
}
export default App;
