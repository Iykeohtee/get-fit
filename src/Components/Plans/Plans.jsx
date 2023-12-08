import React from 'react'
import './plans.css'
import {plansData} from '../../data/plansData.js'
import whiteThick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <>
      <div className="plan-container">
        
        <div className="blur plans-blur"></div>


        <div className="program-header" style={{gap: '2rem'}}>
            <span className='stroke-text'>ready to start</span>
            <span>your journey</span>
            <span className='stroke-text'>now with us</span>
        </div>

        {/* plans card */}
        <div className="plans">
          {plansData.map((plan, i) => (
            <div className="plan" key={i}> 
                {plan.icon}  
                <span>{plan.name}</span>
                <span>£{plan.price}</span>  

                <div className="features">
                    {plan.features.map((feature) => (
                        <div className="feature">
                            <img src={whiteThick} alt="" /> 
                            <span key={i}>{feature}</span> 
                        </div>
                    ))}

                </div>

                <div><span>See more benefits </span></div>
                <button className='btn'>Join Now</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Plans
