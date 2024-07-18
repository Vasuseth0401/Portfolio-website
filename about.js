import React from 'react'
import './About.css'
import HTML from '../Assets/HTML5_Badge.svg'
import CSS from '../Assets/css-3.svg'
import JS from '../Assets/javascript.svg'
import Bootsrap from '../Assets/bootstrap.png'
import react from '../Assets/react.svg'

const about=()=> {
  return (
   
    <section id="about">
        <span className="t1">What will i know</span>
          <span className="t2">I am Web devloper with a 10 years experience</span>
          <div className="aboutbars">
          <div className="aboutbar">
            <img src={HTML} alt="logo" className="HTMLogo"/>
            <div className="bartext">
                <h2>Hypertext Markup Language</h2>
                <p>It is HTML</p>
            </div>
          </div>
          </div>
          <div className="aboutbars">
          <div className="aboutbar">
            <img src={CSS} alt="logo" className="HTMLogo"/>
            <div className="bartext">
                <h2>Cascading StyleSheet</h2>
                <p>It is also known as css</p>
            </div>
          </div>
          </div>
          <div className="aboutbars">
          <div className="aboutbar">
            <img src={JS} alt="logo" className="HTMLogo"/>
            <div className="bartext">
                <h2>Javascript</h2>
                <p>It is Javascript</p>
            </div>
          </div>
          </div>
          <div class="aboutbars">
          <div class="aboutbar">
            <img src={Bootsrap} alt="logo" className="HTMLogo"/>
            <div class="bartext">
                <h2>Bootsrap</h2>
                <p>It is Bootstrap</p>
            </div>
          </div>
          </div>
          <div class="aboutbars">
          <div class="aboutbar">
            <img src={react} alt="logo" className="React"/>
            <div class="bartext">
                <h2>React(Famous JavaScript Library)</h2>
                <p>It is a React a javascript library</p>
            </div>
          </div>
          </div>
          
    </section>
   
  )
}

export default about;
