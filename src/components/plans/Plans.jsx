import React from 'react';
import "./Plans.css"; 
import whiteTick from '../../assets/whiteTick.png';
import { plansData } from '../../data/plansData';
const Plans=()=>{
    return(
     <div className='plans-container' id='Plans'>
     <div className='blur plans-blur-1'></div>
     <div className='blur plans-blur-2'></div>
        <div className='programs-header' style={{gap:'3rem'}} >
            <span className='stroke-text'> READY TO START </span>
            <span> YOUR JOURNEY </span>
            <span className='stroke-text'> NOW WITH US </span>
        </div>
        {/*Plans card*/}
        <div className='plans'>
           {plansData.map ((Plans,i)=>(
            <div className='plan'key={i}>
                {Plans.icon}
                  <span>{Plans.name}</span>
                  <span>$ {Plans.price}</span>
                <div className='features'>
                    {Plans.features.map((features, i)=>(
                    <div className='feature'>
                    <img src={whiteTick} alt=""/>
                    <span key={i}>{features}</span>
                    </div>
                     ))}
                 </div>
            <div>
              <span>See more benifits</span>
            </div>
             <button className="btn">Join Now</button>
         </div>
          ))}
        </div>
     </div>
    );
   };
export default Plans;