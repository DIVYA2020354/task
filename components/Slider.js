import React from 'react'
import "./slider.css"
import logo1 from "../telephone_953780.png"

const Slider = () => {
  return (
    <div className='container'>
    <div className='container-content'>
      <h1>It time to enjoy
the finer things in life.</h1>
      <p>Craving some delectable Indian cuisine? Perhaps you're in the mood for Rajma Chawal? No matter what kind of meal you have in mind, we offers a rich tapestry of flavors to satisfy every palate.</p>
      <button>discovery menu</button>
    </div>
    <div className='contact'>
      <span>Call Us To order now</span>
      <a href="+91-7023302672">+91-7023302672</a>
      
      <a href='/'> <img src={logo1} alt='randome'/></a>

    </div>
      
    </div>
  )
}

export default Slider;
