import React from 'react';
import styles from './Details.scss';
import Image from 'next/image';
import { assets } from './../../assets/index';

export default function Details({ project }) {
  if (!project) return <h1>Project Not Found</h1>;

  return (
    <div className="detailsWrapper">

      {/* Cover Image */}
      <div className="coverWrapper">
        <Image
          src={project.coverImage}
          alt="Project Cover"
          className="projectCoverImage"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="projectTitle">{project.title}</h1>

      {/* Description */}
      <p className="projectDescription">{project.description}</p>

      {/* Buttons */}
      <div className="buttonContainer">
        {project.githubLink && (
          <a href={project.githubLink} className="primaryButton">
            GitHub Repo
            <Image src={assets.github_logo} alt="github" className="iconsLogo" />
          </a>
        )}

        {project.webLink && (
          <a href={project.webLink} className="primaryButton">
            View Website
            <Image src={assets.web_icon} alt="web" className="iconsLogo" />
          </a>
        )}

        {project.installAndroid && (
          <a href={project.installAndroid} className="primaryButton">
            Install on Android
            <Image src={assets.android_logo} alt="android" className="iconsLogo" />
          </a>
        )}

        {project.installIOS && (
          <a href={project.installIOS} className="primaryButton">
            Install on iOS
            <Image src={assets.ios_logo} alt="ios" className="iconsLogo" />
          </a>
        )}
      </div>

      {/* Images Gallery */}
      {project.images && project.images.length > 0 && (
        <div className="imagesScroller">
          {project.images.map((img, index) => (
            <div className="imageCard" key={index}>
              <Image src={img} alt={`project-${index}`} />
            </div>
          ))}
        </div>
      )}

      {/* Video */}
      {project.video && (
        <a 
          href={project.video}
          className="secondaryButton"
        >
          <Image src={assets.video_icon} alt="video icon" className='iconsLogo'/>
          Check View
        </a>
      )}

    </div>
  );
}
