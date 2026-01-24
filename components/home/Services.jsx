
import React from 'react';
import styles from './Services.scss';
import { serviceData } from './../../assets/index';
import Image from 'next/image';
import { motion } from "motion/react";

export default function Services() {
  return (
    <div id="services" className="services">
      <motion.h4 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={ {duration: 0.6, delay: 0.3}}
        className="servicesIntro">
        What I offer
      </motion.h4>
      <motion.h2 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={ {duration: 0.6, delay: 0.8}}
        className="servicesTitle">
        My Services
      </motion.h2>

      <motion.div 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={ {duration: 0.5, delay: 0.5}}
        className='serviceCards'>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div 
            key={index} className="serviceCard">
            <Image src={icon} alt="service icon" className="serviceIcon" />
            <h3 className="serviceTitle">{title}</h3>
            <p className="serviceDescription">{description}</p>        
          </div>
        ))}
      </motion.div>

    </div>
  )
}