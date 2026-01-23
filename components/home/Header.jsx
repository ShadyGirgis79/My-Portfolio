
import { assets } from './../../assets/index';
import Image from 'next/image';
import './Header.scss';
import React from 'react';

export default function Header() {

  const resume = "/Shady-Emad-Resume.pdf";
  const whatsapp = "https://wa.me/+201272517828";
  const linkedin = "https://www.linkedin.com/in/shady-girgis-6b0602314/";
  const github = "https://github.com/ShadyGirgis79";
  const mail = "mailto:Shadygirgis79@email.com";

  return (
    <header className="header">
      {/* Avatar */}
      <div className="profileWrapper">
        <Image
          src={assets.profile_img}
          alt="Profile"
          className="profile"
        />
      </div>

      {/* Greeting */}
      <h3 className="greeting">
        Hi! I’m Shady Emad
        <Image src={assets.hand_icon} alt="Hand" className="handIcon" />
      </h3>

      {/* Main headline */}
      <h1 className="headlineHome">
        Frontend Web & Mobile Developer based in Egypt
      </h1>

      {/* Description */}
      <p className="descriptionHome">
        I am a passionate developer specializing in building modern, responsive
        applications with a strong academic background in Data Science and
        real-world experience applying AI and machine learning concepts.
      </p>

      {/* Actions */}
      <div className="homeButtonContainer">

        <a 
          href={whatsapp} 
          className="primaryButton">
            What's App
          <Image src={assets.whatsapp_logo} alt="" className='iconsLogo'/>
        </a>

        <a 
          href={github} 
          className="primaryButton">
            Git Hub
          <Image src={assets.github_logo} alt="" className='iconsLogo'/>
        </a>

        <a 
          href={linkedin}
          className="primaryButton"
        >
            Linked In
          <Image src={assets.linkedin_logo} alt="" className='iconsLogo'/>
        </a>

        <a
          href={resume}
          download
          className="primaryButton"
        >
            My Resume
          <Image src={assets.cloud_download} alt="" className='iconsLogo'/>
        </a>
      </div>
    </header>
  )
}
