import React from 'react'
import "../card.css"
import icon from "../bdaa2a9ed764411cad41fec90491b3d1.png"
import icon1 from "../0301b224455e1f81c0a17f0210fa732a.png"


const  Card = () => {
  return (
    <div className='card-container'>
    <div className='row'>
        <div className='col-md-6'>
        <div className='content-box'>
            <h6>restaurant story</h6>    



            <p id='p-text'>A distinctive, well-preserved and 
            comfortable space, high-quality 
            products, authentic cuisine, food
             and drinks are done flawlessly.</p>

    <p id='main'>
      Bring to the table win-win survival strategies to ensure
      proactive domination. At the end of the day, going forward,
      a new normal that has evolved from generation is on the runway
      heading towards a streamlined cloud solution.
      User generated content.
    </p>
              </div>
             <span>
             <img src={icon1} alt=''/>             </span>

           <div id='item'>
             <h5>Opening Hours</h5>
             <pre>Mon - Fri: 10 am to 9 pm</pre>
             <pre>Sun - Sat: 11 am to 10 pm</pre>
             </div>
       
            
        </div>
        <div className='col-md-6'>
        <div className='img-box'>
                <img src={icon} alt=''/>
            </div>
        </div>

    </div>
      
    </div>
  )
}

export default  Card
