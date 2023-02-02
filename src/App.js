import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Login from './components/Login';
import Pict from './components/Pict';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import Services from './components/Services';
import Stylist from './components/Stylist';
import Location from './components/Location';
import {Button, Alert, Row, Col} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import React, {useState} from 'react';

function App() {
  const [currentForm, setCurrentForm] = useState('register');
  const [homePage, setHomePage] = useState('home')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">

      <Header />

      { 
        homePage === 'home' ? <Home /> :
        <Row className='landing p-lg-0 pt-lg-5'>
        <Col>{
          currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
        }</Col>
        <Col> <Pict/></Col>
      </Row>
      }
      <Services />
      <Stylist />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
