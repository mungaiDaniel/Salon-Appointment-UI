import femalehairs from './Img/female-hairs.png';
import manicure from './Img/manicure.png';
import braid from './Img/braid.png';
import cream from './Img/cream.png';
import pedicure from './Img/pedicure.png';
import './styles/Services.scss';
import { useState } from 'react';
import Modal from './Modals/ModalPedicure';
import ModalManicure from './Modals/ModalManicure';
import Treatment from './Modals/Treatment';
import Extensions from './Modals/Extensions';
import Hairstles from './Modals/Hairstles';



const Services = () => {

  const [openModal, setOpenModal] = useState(false);
  const [openModalManicure, setOpenModalManicure] = useState(false);
  const [treatment, setTreatment] = useState(false)
  const [extension, setExtension] = useState(false)
  const [hairStyle, setHairStyle] = useState(false)


  return (
    <div id='services'>
       <div className="container">
          <div className="row">
           <div className="col-12 text-center">
            <h2 className="section-services">Our Services</h2>
            <p className='text-success shadow p-3 mb-5 bg-white rounded'>Select service below for full description and pricing</p>
           </div> 
          </div>
        </div>
        <div className="grid-services">

         <div className="img-container" onClick={() => {
          setOpenModal(true); 
         }} >
          <img className='pedicure' src= {pedicure} style={{border: 'none', padding: '0px', filter:'brightness(30) invert(1)'}}alt="Cut"></img>
          <div style={{paddingTop: '24px',paddingLeft: '5px', fontSize: '17px'}}>Pedicure</div>
         </div>
         
         <div className="img-container " onClick={() => {
          setOpenModalManicure(true)}}>
          <img src= {manicure} className="manicure" style={{border: 'none', padding: '10px',filter:'brightness(0) invert(1)'}}alt="Color"></img>
          <div style={{paddingTop: '21px',fontSize: '17px', paddingLeft: '5px'}}>Manicure</div>
         </div>

        <div className="img-container" onClick={() => {
          setTreatment(true)
        }}>
         <img src= {cream}  style={{border: 'none', padding: '10px', filter:'brightness(0) invert(1)'}}alt="Cut"></img>
         <div style={{paddingTop: '20px',fontSize: '17px', marginLeft: '-18px'}}>Treatment</div>
        </div>

        <div className="img-container" onClick={() => {
          setExtension(true)
        }}>
         <img src= {braid}  style={{border: 'none', padding: '10px',filter:'brightness(0) invert(1)'}}alt="Cut"></img>
         <div style={{paddingTop: '20px',fontSize: '17px',marginLeft: '-35px', whiteSpace: 'nowrap'}}>Extension Services</div>
        </div>

        <div className="img-container" onClick={() => {
          setHairStyle(true)
        }}>
         <img src= {femalehairs}  style={{border: 'none', padding: '10px',filter:'brightness(0) invert(1)'}}alt="Cut"></img>
         <div style={{paddingTop: '24px', paddingLeft: '5px', fontSize: '17px',marginLeft:'-20px',whiteSpace: 'nowrap'}}>Hair Styling</div>
        </div>
      </div>
      { openModal && <Modal closeModal={setOpenModal} /> }
      {openModalManicure && <ModalManicure closeManicure={setOpenModalManicure} /> }
      {treatment && <Treatment closeTreatment={setTreatment}/> }  
      {extension && < Extensions closeExtension={setExtension} />}
      {hairStyle && <Hairstles closeStyles={setHairStyle} />}
      

    </div>
  )
}

export default Services
