import React from 'react'

const ModalManicure = ({ closeManicure }) => {
  return (
    <div>
      <div className='modalBackground card bg-light '>
        <div className=' modalContainer card-body text-center'>
            
        <h3 class="card-title mb-3">
            Manicure
        </h3>
        <p class="card-text"> Pricing <span className='text-warning'>500/= KES</span></p>
        <p class="card-text">A manicure is a beauty treatment of the hands. Your nails will be cut, filed, and shaped. You will then have your cuticles pushed back and tidied, and then enjoy a hand massage. The final step will be the painting of the nails with a colour of your choice.</p>
        <p class="card-text"><i>Salon Gerente are independent, and prices may vary. Please call us to get specific pricing for your service provider.</i></p>
        <button className='btn btn-danger ms-auto ' onClick={() => {
                closeManicure(false)
            }}>Cancel</button>
        </div>
      
    </div>
    </div>
  )
}

export default ModalManicure
