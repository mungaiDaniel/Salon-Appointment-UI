import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Register from './components/Register';
import Pict from './components/Pict';
import {Button, Alert, Row, Col} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Header />
      <Row className='landing'>
        <Col><Register /></Col>
        <Col> <Pict/></Col>
      </Row>
    </div>
  );
}

export default App;
