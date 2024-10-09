import React from 'react'
 import {useRef} from 'react'
import Linkedin from '../Assets/linkedin.svg'
import Facebook from '../Assets/facebook.svg'
import Instagram from '../Assets/instagram.svg'
import Github from '../Assets/github.svg'
import emailjs from '@emailjs/browser';
import './Social.css'


function Social() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ios5ycs', 'template_po75mhl', form.current, {
        publicKey: 'FKsE1x2HwAiYWHBk8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
   <section id="one">
    <div id="social">
    <h1 className="socialtitle">Social</h1>
    <p className="socialdesc">Here you can connect me on Social Media.</p>
    </div>
    <div className="socialimgs">
           <a href="www.linkedin.com/in/vasu-seth-744072257/"><img src={Linkedin} alt="hi" className='socialimg'/></a>
           <a href="#"><img src={Facebook} alt="hi" className='socialimg'/></a>
           <a href="#"><img src={Instagram} alt="hi" className='socialimg'/></a>
           <a href="https://github.com/Vasuseth0401"><img src={Github} alt="hi" className='socialimg'/></a>
    </div>
    
    <div id='contact'>
      <h2 className='contact1'>Contact Details</h2>
      <p className='contactdesc'>Fell Free to contact me</p>
    </div>
    <form className='contactForm' ref={form} onSubmit={sendEmail}>
    
      <input type='text' className='name' placeholder='your name' name='from_name'/>
      <input type='email' className='email' placeholder='your email' name='your_email'/>
       <textarea className='msg' name='message' rows="5" placeholder='your message'></textarea> 
      <button type='submit' value="send" className='submitbtn' onClick={()=>{
        alert("Confirmation has been send")
      }}>Submit</button>
      
    </form>
    {/* <div className="socialimgs">
           <a href="#"><img src={Linkedin} alt="hi" className='socialimg'/></a>
           <a href="#"><img src={Facebook} alt="hi" className='socialimg'/></a>
           <a href="#"><img src={Instagram} alt="hi" className='socialimg'/></a>
           <a href="#"><img src={Github} alt="hi" className='socialimg'/></a>
    </div> */}
    

   </section>
  )
}

export default Social;
