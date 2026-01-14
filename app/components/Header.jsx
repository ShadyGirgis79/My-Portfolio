import { assets } from './../../assets/assets'
import Image from 'next/image'
import './Header.scss'
import React from 'react'

const Header = () => {
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
        <a href="#contact" className="primaryButton">
          Contact Me
          <Image src={assets.right_arrow_white} alt="" className='iconsHome'/>
        </a>

        <a
          href="/Shady-Emad-Resume.pdf"
          download
          className="secondaryButton"
        >
          My Resume
          <Image src={assets.download_icon} alt="" className='iconsHome'/>
        </a>
      </div>
    </header>
  )
}

export default Header
