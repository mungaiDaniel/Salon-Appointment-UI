import React from 'react'

const Modal = ({closeModal}) => {
  return (
    <div className='modalBackground card bg-light '>
        <div className=' modalContainer card-body text-center'>
            
        <h3 class="card-title mb-3">
            Pedicure
        </h3>
        <p class="card-text"> Pricing <span className='text-warning'>500/= KES</span></p>
        <p class="card-text">A pedicure is a comprehensive treatment of your feet and is suitable for both men and women. It involves cutting, trimming and shaping your toenails, tending to your cuticles, exfoliating, hydrating and massaging your feet, and, if desired, painting your toenails.</p>
        <p class="card-text"><i>Salon Gerente are independent, and prices may vary. Please call us to get specific pricing for your service provider.</i></p>
        <button className='btn btn-danger ms-auto ' onClick={() => {
                closeModal(false)
            }}>Cancel</button>
        </div>

      
    </div>
  )
}

export default Modal
