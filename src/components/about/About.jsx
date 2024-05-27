import React from 'react'
import './about.css'
import ME from '../../assets/about-img.webp'


import data from './data'
import Card from '../Card'

const about = () => {
  return (
    <section className='light' id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">

          <h2>Hi, I’m MD SALMAN KHAN. Nice to meet you.</h2>
          <p>As a Junior Front-End Developer, I specialize in creating awesome websites using HTML, CSS, JavaScript, React, Tailwind, and SCSS. I'm great at making websites look good on any device and ensuring they're easy to use. I love writing clean and efficient code to build dynamic and engaging interfaces. I enjoy working with teams to create outstanding web applications.</p>

          <div className='about__cards'>
            {
              data.map(item => (
                <Card key={item.id} className='about__card'>
                  <span className="about__card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>

          <a href="#contact" className='thm-btn'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default about;
















// ===========================
// import React from 'react'
// import './about.css'
// import ME from '../../assets/me-about.jpg'
// import { FaAward } from 'react-icons/fa'
// import { FiUsers } from 'react-icons/fi'
// import { VscFolderLibrary } from 'react-icons/vsc'

// const about = () => {
//   return (
//     <section id='about'>
//       <h5>Get To Know</h5>
//       <h2>about me</h2>

//       <div className="container about__container">
//         <div className="about__me">
//           <div className="about__me-image">
//             <img src={ME} alt="" />
//           </div>
//         </div>

//         <div className="about__content">
//           <div className="about__cards">
//             <article className="about__card">
//               <FaAward className='about__icon' />
//               <h5>Experiecne</h5>
//               <small>1+ Yeatrs Working</small>
//             </article>
//             <article className="about__card">
//               <FiUsers className='about__icon' />
//               <h5>C</h5>
//               <small>1+ </small>
//             </article>
//             <article className="about__card">
//               <VscFolderLibrary className='about__icon' />
//               <h5>P</h5>
//               <small>1+00</small>
//             </article>
//           </div>

//           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, quos repudiandae. Pariatur rem ullam repellat eaque alias natus aliquam nulla aliquid dicta qui sed error doloremque magnam enim, quos soluta.</p>
//           <a href="#contact" className='btn btn-primary'>Let's Talk</a>

//         </div>
//       </div>

//     </section>
//   )
// }

// export default about;