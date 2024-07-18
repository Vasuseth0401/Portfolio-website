import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/v-high-resolution-logo (1).png'
import contactImg from '../Assets/contact.png'
import menu from '../Assets/menu.png'
import {Link} from 'react-scroll'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

return (
    <div>
    <nav class = "navbar">
        <img src={logo} alt='logo' className='logo'/>

         <div className = "nav-links">
            <Link activeClass='active' to = 'intro' spy = {true} smooth = {true} offset={-100} duration={500} className='nav-links-item'>Home</Link>
            <Link activeClass='active' to = 'about' spy = {true} smooth = {true} offset={-50} duration={500} className='nav-links-item'>About</Link>
            <Link activeClass='active' to = 'project' spy = {true} smooth = {true} offset={-50} duration={500} className='nav-links-item'>Projects</Link>
            <Link activeClass='active' to = 'social' spy = {true} smooth = {true} offset={-50} duration={500} className='nav-links-item'>Socials</Link>
        </div>
       

        <button className = "btn" onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
              <img src = {contactImg} alt = "Contact Me" className = "btnImg"/>Contact Me</button>

            <img src={menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>

        <div className = "navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to = 'intro' spy = {true} smooth = {true} offset={-100} duration={500} className='Menu-item' onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to = 'about' spy = {true} smooth = {true} offset={-50} duration={500} className='Menu-item' onClick={() => setShowMenu(false)}>About</Link>
            <Link activeClass='active' to = 'project' spy = {true} smooth = {true} offset={-50} duration={500} className='Menu-item' onClick={() => setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to = 'social' spy = {true} smooth = {true} offset={-50} duration={500} className='Menu-item' onClick={() => setShowMenu(false)}>Socials</Link>
         <Link activeClass='active' to = 'contact' spy = {true} smooth = {true} offset={-50} duration={500} className='Menu-item' onClick={() => setShowMenu(false)}>Contact</Link> 
        </div>
    </nav>
    </div> 

            
            )
            }

export default Navbar;






