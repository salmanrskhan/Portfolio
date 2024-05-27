import React from 'react';
import './footer.css'
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import Logo from '../../assets/name-logo-light-removebg-preview.png';


const Footer = () => {
  return (
    <footer>
      <a href="index.html" className="footer__logo">
        <img src={Logo} alt="" />
      </a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#projects">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/salmanrskhan" target='_blank'><IoLogoGithub /></a>
        <a href="https://www.linkedin.com/in/salman-khan-003390201/" target='_blank'><FaLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Copyright 2024. All rights are reserved</small>
      </div>
    </footer>
  )
}

export default Footer
