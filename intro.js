import './Intro.css'
import React from 'react';
import Hire from '../Assets/hireme.png'



 import { Link } from 'react-scroll';

function intro() {
  return (
  
    
   
   
   <section id='intro'> 
    <div className="introcontent">
              <span className='Hello'>Hello Everyone,</span>
              <span className='introtext'>I am Vasudev as a Web Developer</span>
     <p className="intropara">I am Skilled Web Developer with experience in creating
      <br/>
      visually appealing and user friendly  websites.
      
    </p> 
    
    <Link>
    <button className="btn2">
      <img src={Hire} alt="lol" className="image2"/>
      hire me
    </button>
    </Link>
   </div>
   
   
            
  
   
    
   </section>

   
   
   
  )
}

export default intro;
