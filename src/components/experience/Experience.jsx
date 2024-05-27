import React from 'react';
import './experience.css';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { BsPatchCheckFill } from 'react-icons/bs';
import Card from '../Card';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>Skills</h2>

      <div className="container experience__container">

        {/* Frontend */}
        <Card className="experience__card light">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {/* Frontend Skills */}
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <span className='star-icon'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /></span>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <span className='star-icon'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /></span>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <span className='star-icon'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar /></span>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <span className='star-icon'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar /></span>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SCSS</h4>
                <span className='star-icon'><FaStar /> <FaStar /> <FaStar /> <FaRegStar /> <FaRegStar /></span>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
                <span className='star-icon'><FaStar /> <FaStar /> <FaStarHalfAlt /> <FaRegStar /> <FaRegStar /></span>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <span className='star-icon'><FaStar /> <FaStar /> <FaStar /> <FaRegStar /> <FaRegStar /></span>
              </div>
            </article>
          </div>
        </Card>

        {/* Learning and Other Skills */}
        <Card className="experience__card light">
          <h3>Learning and Other Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node.js</h4>
                <span className='star-icon'><FaStar /> <FaStar /> <FaStar /> <FaRegStar /> <FaRegStar /></span>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Learning</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Express</h4>
                <small className='text-light'>Learning</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Learning</small>
              </div>
            </article>
            
          </div>
        </Card>

      </div>
    </section>
  )
}

export default Experience;
