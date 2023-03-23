import React from 'react'
import {Button, Alert, Row, Col} from 'react-bootstrap';
import RegisterForm from './RegisterForm';
import Register from './RegisterInfo';
import Pict from '../Pict';
const Signup = () => {
  return (
    <div className='d-sm-flex align-items-center justify-content-between'>
      <Row>
        <Col><Register /></Col>
      </Row>
    </div>
  )
}

export default Signup
