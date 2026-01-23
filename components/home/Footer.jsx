import React from 'react';
import { workData, assets } from '../../assets/index';
import styles from './Footer.scss';
import Image from 'next/image';

export default function Footer() {
    const mail = "mailto:Shadygirgis79@email.com";
  return (
    <div className='footer'>
        <div className='w-max flex items-center gap-5 mx-auto'>
            <a 
                href={mail}
                className="secondaryButton"
            >
                <Image src={assets.email_logo} alt="" className='iconsLogo'/>
                shadygirgis79@gmail.com
            </a>

        </div>

        <div className="footerDivider"></div>

        <p className="footerCopyright">
            © 2025 Shady Emad. All rights reserved.
        </p>

    </div>
  )
}
