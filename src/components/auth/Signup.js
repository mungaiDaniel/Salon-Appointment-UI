import React from 'react'
import {Button, Alert, Row, Col} from 'react-bootstrap';
import RegisterForm from './RegisterForm';
import Register from './RegisterInfo';
import Pict from '../Pict';
const Signup = () => {
  return (
    <div>
      <Row className='containe'>
        <Col><Register /></Col>
        <Col> <Pict/></Col>
      </Row>
    </div>
  )
}

export default Signup
