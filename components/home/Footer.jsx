import React from 'react';
import { workData, assets } from '../../assets/index';
import { motion } from "motion/react";
import styles from './Footer.scss';
import Image from 'next/image';

export default function Footer() {
    const mail = "mailto:Shadygirgis79@email.com";
  return (
    <div className='footer'>
        <div className='w-max flex items-center gap-5 mx-auto'>
            <motion.a 
                initial={{y: 30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={ {duration: 0.6, delay: 0.5}} 
                href={mail}
                className="secondaryButton"
            >
                <Image src={assets.email_logo} alt="" className='iconsLogo'/>
                shadygirgis79@gmail.com
            </motion.a>

        </div>

        <div className="footerDivider"></div>

        <p className="footerCopyright">
            © 2026 Shady Emad. All rights reserved.
        </p>

    </div>
  )
}
