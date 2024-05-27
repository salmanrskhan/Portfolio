import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { useState } from 'react'
import { FaHandshake } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <div className='small-nav'>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} title='Home'><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} title='About'><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} title='Skills'><GiSkills /></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''} title='Projects'><FaProjectDiagram /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} title='Contact'><FaHandshake /></a>
    </div>
  )
}

export default Nav;