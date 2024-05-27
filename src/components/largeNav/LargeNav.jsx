import React from 'react'
import Logo from '../../assets/name-logo-light.png';
import data from './data';
import './largeNav.css';

const LargeNav = () => {
    return (
        <nav>
            <div className='container-max nav__container'>
                <a href="index.html" className="nav__logo">
                    <img src={Logo} alt="" />
                </a>
                <ul className='nav__menu'>
                    {
                        data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
                    }
                </ul>
                <button className='btn-fill'>
                    <a href="#contact" className=''>Let’s Connect</a>
                </button>
            </div>
        </nav>
    )
}

export default LargeNav;