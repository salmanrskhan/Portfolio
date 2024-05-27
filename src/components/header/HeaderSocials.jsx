import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {FaWhatsappSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="" target='_blank'><BsLinkedin /></a>
        <a href="" target='_blank'><FaGithubSquare /></a>
        <a href="" target='_blank'> <FaWhatsappSquare/></a>
    </div>
  )
}

export default HeaderSocials;