import React from 'react'

const Hairstles = ({ closeStyles }) => {
  return (
    <div>
      <div className='modalBackground card bg-light '>
        <div className=' modalContainer card-body text-center'>
            
        <h3 class="card-title mb-3">
            Hair styles
        </h3>
        <p class="card-text"> Pricing <span className='text-warning'>1000/= KES</span></p>
        <p class="card-text">Hair Stylist responsibilities include cutting hair using basic and advanced techniques, consulting customers about styles and colors and applying hair care products, like treatment oils and masks. If you have experience cutting short and long hair and are up-to-date with styling trends, we'd like to meet you.</p>
        <p class="card-text"><i>Salon Gerente are independent, and prices may vary. Please call us to get specific pricing for your service provider.</i></p>
        <button className='btn btn-danger ms-auto ' onClick={() => {
                closeStyles(false)
            }}>Cancel</button>
        </div>

      
    </div>
    </div>
  )
}

export default Hairstles
