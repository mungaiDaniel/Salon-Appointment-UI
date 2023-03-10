import girl from './Img/girl.jpg'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="containe" id='about' style={{ backgroundImage: `url(${girl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '600px'
    }}>
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
        
            <Link to="/book">
            <button type="button" class="btn btn-success mt-3" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
  Book Your Appointment Now
</button>
            </Link>
      </div>
     

    </div>
  )
}

export default Home