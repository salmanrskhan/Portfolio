import React from 'react'
import Card from '../Card';
import data from './data';
import './service.css';

const Service = () => {
    return (
        <section className='' id='service'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container service__container">
                {
                    data.map(item => (
                        <Card key={item.id} className='service light'>
                            <div className="service__icon">{item.icon}</div>
                            <div className="service__details">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}

export default Service;