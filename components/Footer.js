import React from 'react'
import "./footer.css"
import logo4 from "../WhatsApp Image 2025-03-08 at 17.24.45_cbe09b27.jpg"





const Footer = () => {
  return (
    <div className='container-foot'>
      <div className='row'>
        <div className='col-md-12'>
          <div className="container-fluid d-flex justify-content-center align-items-center ms-2 my-5">
            <div className="row">
              <div className="col-3">
                <div className='upper'>
                <img src={logo4} alt=''/>
                <p>Our buzzy food-hall style concept
is inspired by international dining
styles, especially in Asia. Explore
the following fast-action food</p>






                </div>
              </div>
              <div className="col-3">
                <div className="ms-3">
                  <h2>Quick Links</h2>
                  <ul className="lh-lg">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Our Product</li>
                  </ul>
                </div>
              </div>
              <div className="col-3">
                <div>
                  <h2>Location</h2>
                  <div className='address-section'>
                    <span className='addres-item'>Address:</span>
                    <p className='p'>Shop No. 26 Third floor, RMR Complex, 189/190, 3rd Cross Road, Neeladri Nagar, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 56010</p>
                  </div>
                  <div className='booking-section'  style={{marginTop: '20px'}}>
                    <span className='booking'>Booking & Contact:</span>
                    <ul className='contact-list'>
                      <li style={{color:"white",marginBottom:"15px", marginTop:"15px"}}>Jaipuriya.jadoo@gmail.com</li>
                      <li style={{marginBottom: '15px'}}>+91 82390 00728</li>
                      <li style={{marginBottom: '15px'}}>+91 70233 02672</li>
                      <li style={{marginBottom: '15px'}}>+91 94810 65676</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div>
                  <h2>Latest News</h2>
                  <p className='Register'>Register your email to not miss any news and offers from us!</p>
                  <input type="email" id="email" name="email" placeholder="Email*" required/>
                <span id='check'>
                <input type="checkbox" className="custom-checkbox value" />
                <p id='sec'>I agree to the Privacy Policy</p>

                </span>
                </div>
              </div>
              <div style={{width: 1200, height: 2, backgroundColor: 'rgb(170, 37, 37)', color: 'rgb(36, 34, 34)'}} className="mx-auto"> 
              <div class="ms-3">
           


          </div>
              
              </div>
              
            </div>
          </div>
          <p class="ms-4 mb-10" style={{color:"#F5874E"}}>Copyright © 2025 Jaipuriya Jadoo. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}


export default Footer;