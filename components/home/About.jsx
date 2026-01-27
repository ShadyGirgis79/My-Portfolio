
import { assets, infoList, toolsData } from './../../assets/index';
import { motion } from "motion/react";
import Image from 'next/image';
import React from 'react';
import './About.scss';

export default function About() {
  return (
    <div id="about" className="about">
      <motion.h4 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={ {duration: 0.6, delay: 0.3}}
        className="aboutIntro">
        Introduction
      </motion.h4>
      <motion.h2 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={ {duration: 0.5, delay: 0.5}}
        className="aboutTitle">
        About me
      </motion.h2>

      <div className="aboutLayout">

        {/* content */}
        <motion.div 
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={ {duration: 0.5, delay: 0.5}}
          className="aboutContent">
          <motion.p 
            initial={{y: -30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={ {duration: 0.3, delay: 0.8}}
            className="aboutDescription">
            I am a Frontend Web & Mobile Developer based in Egypt with a strong passion for building scalable, user-focused digital products.
            I specialize in developing modern web and mobile applications using contemporary frontend technologies.
            <br />
            Alongside my development work, I have an academic specialization in Data Science, enabling me to integrate data-driven thinking into software solutions.
            <br />
            My skill set bridges frontend engineering and intelligent systems, allowing me to work effectively on AI and data-driven features.
          </motion.p>

          {/* Info cards */}
          <motion.ul 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={ {duration: 0.6, delay: 1}}
            className="aboutCards">
            {infoList.map(({ icon, title, firstDescription, secondDescription }, index) => (
              <motion.li 
                initial={{scale: 0}}
                whileInView={{scale: 1}}
                whileHover={{scale: 1.05}}
                transition={ {duration: 0.8, type: 'spring', stiffness: 100}}
                key={index} className="aboutCard">
                <Image src={icon} alt="icon" />
                <h3>{title}</h3>
                <p>{firstDescription}</p>
                <p>{secondDescription}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools */}
          <div className="aboutToolsSection">
            <motion.h4 
              initial={{x: -20, opacity: 0}}
              whileInView={{x: 0, opacity: 1}}
              transition={ {duration: 0.5, delay: 0.5}}
              className="aboutToolsTitle">
              Tools I Use
            </motion.h4>
            <ul className="aboutTools">
                {toolsData.map((tool, index) => (
                <motion.li 
                  initial={{x: -20, opacity: 0}}
                  whileInView={{x: 0, opacity: 1}}
                  whileHover={{scale: 1.05}}
                  transition={ {duration: 0.8, type: 'tween', stiffness: 100}}
                  key={index} className="aboutTool">
                    <Image src={tool} alt="tool" />
                </motion.li>
                ))}
            </ul>
          </div>
          
        </motion.div>
      </div>
    </div>
  )
}

