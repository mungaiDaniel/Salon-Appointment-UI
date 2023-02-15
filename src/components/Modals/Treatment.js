import React from 'react'

const Treatment = ( {closeTreatment} ) => {
  return (
    <div>
      <div className='modalBackground card bg-light '>
        <div className=' modalContainer card-body text-center'>
            
        <h3 class="card-title mb-3">
            Treatment
        </h3>
        <p class="card-text"> Pricing <span className='text-warning'>1000/= KES</span></p>
        <p class="card-text">Salon treatments are designed to moisturise the hair from the inside out, restore and protect your scalp and boost hair growth. Read on to explore the variety of treatments and find the perfect one for your hair type.</p>
        <p class="card-text"><i>Salon Gerente are independent, and prices may vary. Please call us to get specific pricing for your service provider.</i></p>
        <button className='btn btn-danger ms-auto ' onClick={() => {
                closeTreatment(false)
            }}>Cancel</button>
        </div>

      
    </div>
    </div>
  )
}

export default Treatment
