import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Login from './components/Login';
import Pict from './components/Pict';
import Footer from './components/Footer';
import Register from './components/Register';
import {Button, Alert, Row, Col} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import React, {useState} from 'react';
function App() {
  const [currentForm, setCurrentForm] = useState('register')

  return (
    <div className="App">

      <Header />

      <Row className='landing p-lg-0 pt-lg-5'>
        <Col>{
          currentForm === "login" ? <Login /> : <Register />
        }</Col>
        <Col> <Pict/></Col>
      </Row>
      <br/>

      <Footer />
    </div>
  );
}

export default App;
