import femalehairs from '../Img/female-hairs.png';
import manicure from '../Img/manicure.png';
import braid from '../Img/braid.png';
import cream from '../Img/cream.png';
import pedicure from '../Img/pedicure.png';
import './Services.scss';

const Services = () => {
  return (
    <div>
       <div className="container">
          <div className="row">
           <div className="col-12 text-center">
            <h2 className="section-services">Our Services</h2>
            <p className='text-success shadow p-3 mb-5 bg-white rounded'>Select service below for full description and pricing</p>
           </div> 
          </div>
        </div>
        <div className="grid-services">
         <div className="img-container" >
          <img className='pedicure' src= {pedicure} style={{border: 'none', padding: '0px', filter:'brightness(30) invert(1)'}}alt="Cut"></img>
          <div style={{paddingTop: '24px',paddingLeft: '5px', fontSize: '17px'}}>Pedicure</div>
         </div>
         
         <div className="img-container ">
          <img src= {manicure} className="manicure" style={{border: 'none', padding: '10px',filter:'brightness(0) invert(1)'}}alt="Color"></img>
          <div style={{paddingTop: '21px',fontSize: '17px', paddingLeft: '5px'}}>Manicure</div>
         </div>

        <div className="img-container">
         <img src= {cream}  style={{border: 'none', padding: '10px', filter:'brightness(0) invert(1)'}}alt="Cut"></img>
         <div style={{paddingTop: '20px',fontSize: '17px', marginLeft: '-18px'}}>Treatment</div>
        </div>

        <div className="img-container">
         <img src= {braid}  style={{border: 'none', padding: '10px',filter:'brightness(0) invert(1)'}}alt="Cut"></img>
         <div style={{paddingTop: '20px',fontSize: '17px',marginLeft: '-35px', whiteSpace: 'nowrap'}}>Extension Services</div>
        </div>

        <div className="img-container">
         <img src= {femalehairs}  style={{border: 'none', padding: '10px',filter:'brightness(0) invert(1)'}}alt="Cut"></img>
         <div style={{paddingTop: '24px', paddingLeft: '5px', fontSize: '17px',marginLeft:'-20px',whiteSpace: 'nowrap'}}>Hair Styling</div>
        </div>
      </div>
    </div>
  )
}

export default Services
