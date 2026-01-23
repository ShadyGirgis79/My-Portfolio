
import { assets } from './../../assets/index';
import Image from 'next/image';
import './Header.scss';
import React from 'react';
import { motion } from "motion/react";

export default function Header() {

  const resume = "/Shady-Emad-Resume.pdf";
  const whatsapp = "https://wa.me/+201272517828";
  const linkedin = "https://www.linkedin.com/in/shady-girgis-6b0602314/";
  const github = "https://github.com/ShadyGirgis79";
  const mail = "mailto:Shadygirgis79@email.com";

  return (
    <header className="header">
      {/* Avatar */}
      <motion.div 
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        transition={ {duration: 0.8, type: 'spring', stiffness: 100}}
        className="profileWrapper">
        <Image
          src={assets.profile_img}
          alt="Profile"
          className="profile"
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={ {duration: 0.6, delay: 0.3}}
        className="greeting">
        Hi! I’m Shady Emad
        <Image src={assets.hand_icon} alt="Hand" className="handIcon" />
      </motion.h3>

      {/* Main headline */}
      <motion.h1 
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={ {duration: 0.8, delay: 0.5}}
        className="headlineHome">
        Frontend Web & Mobile Developer based in Egypt
      </motion.h1>

      {/* Description */}
      <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.7}}
        className="descriptionHome">
        I am a passionate developer specializing in building modern, responsive
        applications with a strong academic background in Data Science and
        real-world experience applying AI and machine learning concepts.
      </motion.p>

      {/* Actions */}
      <div className="homeButtonContainer">

        <motion.a
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={ {duration: 0.6, delay: 1}} 
          href={whatsapp} 
          className="primaryButton">
            What's App
          <Image src={assets.whatsapp_logo} alt="" className='iconsLogo'/>
        </motion.a>

        <motion.a
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={ {duration: 0.6, delay: 1}} 
          href={github} 
          className="primaryButton">
            Git Hub
          <Image src={assets.github_logo} alt="" className='iconsLogo'/>
        </motion.a>

        <motion.a 
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={ {duration: 0.6, delay: 1}} 
          href={linkedin}
          className="primaryButton"
        >
            Linked In
          <Image src={assets.linkedin_logo} alt="" className='iconsLogo'/>
        </motion.a>

        <motion.a
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={ {duration: 0.6, delay: 1}} 
          href={resume}
          download
          className="primaryButton"
        >
            My Resume
          <Image src={assets.cloud_download} alt="" className='iconsLogo'/>
        </motion.a>
      </div>
    </header>
  )
}
