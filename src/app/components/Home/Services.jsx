'use client';
import React from 'react';
import styles from './Services.scss';
import { serviceData } from '../../../assets/index';
import Image from 'next/image';

const Services = () => {
  return (
    <div id="services" className="services">
      <h4 className="servicesIntro">What I offer</h4>
      <h2 className="servicesTitle">My Services</h2>

      <div className='serviceCards'>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div key={index} className="serviceCard">
            <Image src={icon} alt="service icon" className="serviceIcon" />
            <h3 className="serviceTitle">{title}</h3>
            <p className="serviceDescription">{description}</p>        
            </div>
        ))}
      </div>

    </div>
  )
}

export default Services