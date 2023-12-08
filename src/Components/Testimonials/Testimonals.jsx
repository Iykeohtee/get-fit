import React, { useState } from 'react';
import './testimonials.css';
import {testimonialsData} from '../../data/testimonialsData.js'; 
import leftArrow from '../../assets/leftArrow.png';
import rigthArrow from '../../assets/rightArrow.png';

const Testimonals = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

  
  return (
    <>
      <div className="Testimonials">
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>what they</span>
            <span>say about us</span>
             <span>
               {testimonialsData[selected].review} 
             </span>
             <span>
                <span style={{color: "var(--orange)"}}>
                    {testimonialsData[selected].name}
                </span> {" "}
                <span> 
                   - {testimonialsData[0].status} 
                </span>
             </span>

        </div>


        <div className="right-t">
            <div className='trans'>
          
            </div>
            <div>

            </div>
            <img src={testimonialsData[selected].image} alt="" />
            <div className="arrows">
                <img src={leftArrow} alt="" 
                 onClick={() => {
                    selected === 0 ? setSelected(tLength -1) : setSelected(prev => prev - 1) 
                 }}

                />
                <img 
                onClick={() => {
                    selected === tLength - 1 ? setSelected(0) : setSelected(prev => prev + 1)  
                }}
                src={rigthArrow} alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Testimonals
