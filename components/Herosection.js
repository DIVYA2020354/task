import React from 'react'
import "./hero.css"

const Herosection = () => {
  return (
    <div className='hero-container'>
    <div className='row'>
    <div className='col-md-12'>
    <h1>Our Menu</h1>

    <span>
    <h6 id='h2'>Main Courses</h6>
    <h6> |  Breakfast</h6>
    <h6> |  Thalis</h6>
    <h6> |  Combos</h6>
</span>



    </div>

    <div className='col-md-6'>

        <div className='menu'>
        <span>Aloo Jeera
        <p id='p1'>Main Course / </p>
        
        </span>

            <span>₹80.00</span>        
            </div>
            
        <div className='menu'>
        <span>Aloo Gobhi
        <p id='p1'>Main Course / </p>
</span>
            <span>₹90.00</span>        
            </div>
            
        <div className='menu'>
        <span>Aloo Matar
        <p id='p1'>Main Course / </p>
</span>
            <span>₹100.00</span>        
            </div>



    </div>


    <div className='col-md-6'>
    <div className='menu'>
    <span>Mix Veg
    <p id='p1'>Main Course / </p>
</span>
            <span>₹110.00</span>
    </div>
    <div className='menu'>
    <span>Matar Paneer
    <p id='p1'>Main Course / </p>
</span>
            <span>₹120.00</span>

    </div>
    <div className='menu'>
    <span>Kadai Paneer
    <p id='p1'>Main Course / </p>
</span>
            <span>₹140.00</span>

    </div>




    </div>


    </div>
      
    </div>
  )
}

export default Herosection
