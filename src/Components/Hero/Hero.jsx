import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
// import {motion} from 'framer-motion'


const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur">

      </div>

     <div className="left-h">
      <Header/>
      <div className="the-best-ad">
        <div></div>
        <span>The best fitness club in the town</span> 
      </div>

      <div className="hero-text">
        <div>
          <span className='stroke-text'>Shape </span>
          <span>Your</span>
        </div>
        <div><span>Ideal Body</span></div>   
      <div>
        <span>
        in here we will help you shape and build your ideal body to the fullest
        </span>
      </div>
      </div>

      {/* figures */}
       <div className="figures">
        <div>
          <span>+140</span>
          <span>Expert Coaches</span>
        </div>

        <div>
          <span>+978</span>
          <span>Members joined</span>
        </div>

        <div>
          <span>+50</span>
          <span>fitness programs</span>
        </div>
       </div>

       {/* Hero buttons */}
       <div className="hero-buttons">
        <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
       </div> 

     </div>


     <div className="right-h">
      <button className='btn'>Join Now</button>
      <div className="heart-rate">
        <img src={heart} alt="" />
        <span>Heart Rate</span>
        <span>116 bpm</span>
      </div>

      {/* Hero Images */}
      <img src={hero_image} alt=""  className='hero_image'/>
      <img src={hero_image_back} alt="" className='hero_image_back'/>   
      
      {/* Calories */}
      <div className="calories">
        <img src={calories} alt="" />
        <div>
        <span>Calories burned</span>
        <span>220 kcal</span>
        </div>
      </div>

      </div>                   
    </div>
  )
}

export default Hero 
