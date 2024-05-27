import React from 'react'
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Card from '../Card';

const Contact = () => {
  const [msgSend, setMsgSend] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    emailjs.sendForm('service_0ktcw86', 'template_z02hqm4', form.current, 'BoPCNCIFAMRHdEqAa')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setMsgSend(true);
        setTimeout(() => { setMsgSend(false)}, 3000)
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
    e.target.reset();
  }

  return (
    <section className='' id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <Card className="contact__option light">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>salmanrsk0510@gmail.com</h5>
            <a href="mailto:" target='_blank'>send a message</a>
          </Card>
          <Card className="contact__option light">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+917007011868</h5>
            <a href="https://api.whatsapp.com/send?phone=+70070011868" target='_blank'>send a message</a>
          </Card>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className='form-div'>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name='message' rows='7' placeholder='Your message' required ></textarea>
          {
            (msgSend) ?
            <div className='success-msg'>Successfully sent</div> :
            null
          }
          </div>
          <button type='submit' className='thm-btn light'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
