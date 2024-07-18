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
      <br/>
      Front-end is the part that is accessible to the user only, It should be self-explanatory and must be user-friendly and designed. <br/>so to achieve this we have some basic languages which can be used to create interactive web pages. These are the basic needs for the creation of a web page.
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
