import girl from './Img/girl.jpg'
import { Link, useNavigate  } from "react-router-dom";
import { Alert, AlertTitle } from '@mui/material';
import { useState } from 'react';
import BackgroundSlider from 'react-background-slider';

const Home = () => {

  const [error, setError] = useState('')
  const navigate = useNavigate()
  const token = '';

  const book = () => {
    if (window.localStorage.getItem('access_token')){
      navigate('/book');
    } else {
        setError('please register or login first')
        setTimeout(() => {
          setError('')
        }, 3000);
        

    }
  }
  
  
  
  return (
    <div className="containe" id='about' style={{ backgroundImage: `url(${girl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '600px'
    }}>
      <BackgroundSlider />

{error && <Alert severity="info">
  <AlertTitle>Info</AlertTitle>
  { error } — <strong>check out login page!</strong>
</Alert>}
      <div className='container pt-5'>
      <h1 >SALON GERENTE <span class="text-warning"> WHERE BEAUTY MEETS DESIGN </span></h1>
        <div className='d-sm-flex align-items-center justify-content-between mt-4'>
        {/* <img src={girl} alt="" className='img-fluid w-100 d-sm-block p-2'/> */}
        
        
        </div>
        <p style={{fontSize: '.80rem',
        color: 'white'
      }}>
            Our mission is to provide our clients with results based on our clients needs and the advice of our professional hair stylist. Thank you to all of our clients who continue to support us and in making us one of the leading Hair Salons Kenya.
        </p>


      
            <button type="button" class="btn btn-success mt-3" data-toggle="tooltip" data-placement="right" onClick={book} title="Tooltip on right">
  Book Your Appointment Now
</button>

           
      </div>
       
      

    </div>
  )
}

export default Home