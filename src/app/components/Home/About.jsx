'use client';
import { assets, infoList, toolsData } from '../../../assets/index';
import Image from 'next/image';
import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div id="about" className="about">
      <h4 className="aboutIntro">Introduction</h4>
      <h2 className="aboutTitle">About me</h2>

      <div className="aboutLayout">

        {/* content */}
        <div className="aboutContent">
          <p className="aboutDescription">
            I am a Frontend Web & Mobile Developer based in Egypt with a strong passion for building scalable, user-focused digital products.
            I specialize in developing modern web and mobile applications using contemporary frontend technologies.
            <br />
            Alongside my development work, I have an academic specialization in Data Science, enabling me to integrate data-driven thinking into software solutions.
            <br />
            My skill set bridges frontend engineering and intelligent systems, allowing me to work effectively on AI and data-driven features.
          </p>

          {/* Info cards */}
          <ul className="aboutCards">
            {infoList.map(({ icon, title, description }, index) => (
              <li key={index} className="aboutCard">
                <Image src={icon} alt="icon" />
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>

          {/* Tools */}
          <dev className="aboutToolsSection">
            <h4 className="aboutToolsTitle">Tools I Use</h4>
            <ul className="aboutTools">
                {toolsData.map((tool, index) => (
                <li key={index} className="aboutTool">
                    <Image src={tool} alt="tool" />
                </li>
                ))}
            </ul>
          </dev>
          
        </div>
      </div>
    </div>
  )
}

export default About
