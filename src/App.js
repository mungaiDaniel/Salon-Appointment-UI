import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import Navdrower from './components/admin/Navdrower';
import Login from './components/auth/LoginInfo';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Register from './components/auth/RegisterInfo';
import 'font-awesome/css/font-awesome.min.css';
import React, { Suspense, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestimonyPage from './components/addTestimonies/TestimonyPage';
import Book from './components/BookAppointment/Book';
import AdminPage from './components/admin/AdminPage';
import Content from './components/BookAppointment/Content';
import Signup from './components/auth/Signup';
function App() {
  const [currentForm, setCurrentForm] = useState('register');
  const [homePage, setHomePage] = useState('home')

 


  

  return (
    <div className="App">
      <BrowserRouter>
      
      <NavBar />
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

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className='footer'>
      <Footer />
      </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
