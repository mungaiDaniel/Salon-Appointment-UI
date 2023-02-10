import React from 'react'

const Extensions = ( {closeExtension} ) => {
  return (
    <div>
      <div className='modalBackground card bg-light '>
        <div className=' modalContainer card-body text-center'>
            
        <h3 class="card-title mb-3">
            Extension Services
        </h3>
        <p class="card-text"> Pricing <span className='text-warning'>1500/= KES</span></p>
        <p class="card-text">Extensions can quickly and easily add volume and length, naturally enhancing your hairstyle for a different look. They can be a quick, gratifying way to compensate for a bad haircut or prepare for a special occasion.</p>
        <p class="card-text"><i>Salon Gerente are independent, and prices may vary. Please call us to get specific pricing for your service provider.</i></p>
        <button className='btn btn-danger ms-auto ' onClick={() => {
                closeExtension(false)
            }}>Cancel</button>
        </div>

      
    </div>
    </div>
  )
}

export default Extensions
