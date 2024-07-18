import React from 'react'
import Project from '../Assets/project.jpg'
import './Project.css'

const project=()=>{
  return (
    <section id="project">
        <h2 className="p1">This is my first project</h2>
        <span className="p2">project of html and css</span>
        <div className="project1">
        <div className="project-img">
           <a href="#"><img src={Project} alt="logo" className="pro"/></a>
        </div>
          <div className="itemdetails">
            <h2 className='p3'>Project-1</h2>
            <p className='p4'>Techstack:-HTML AND CSS</p>
        </div>
         <div className="project-img2">
           <a href="#"><img src={Project} alt="logo" className="pro"/></a>
        </div> 
</div>

       
        
    </section>
  )
}

export default project;
