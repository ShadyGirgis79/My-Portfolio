
import { assets } from './../../assets/index';
import Image from 'next/image';
import styles from './Background.scss';
import React from 'react';

export default function Background() {
  return (
    <>
          {/* Background glow */}
          <div className="backgroundWrapper">
            <Image
              src={assets.header_bg_color}
              alt="background"
              className="backgroundImage"
            />
          </div>
    
          {/* Mobile Background glow */}
          <div className="mobileBackgroundWrapper">
            <Image
              src={assets.mobile_background}
              alt="background"
              className="backgroundImage"
            />
          </div>
        </>
  )
}