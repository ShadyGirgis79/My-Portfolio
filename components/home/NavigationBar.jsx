
import { assets } from './../../assets/index';
import Image from 'next/image';
import styles from './NavigationBar.scss';
import React, { useRef, useEffect, useState } from 'react';

export default function NavigationBar() {
  const sideMenuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const openSideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-300px)";
    setIsOpen(true);
  };
  const closeSideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(300px)";
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        sideMenuRef.current &&
        !sideMenuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        closeSideMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

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

      {/* Navbar */}
      <nav className="navbar">

        {/* Center navigation */}
        <ul className="tabsContainer">
          <li className="tab"><a className="font-Ovo" href="#top">Home</a></li>
          <li className="tab"><a className="font-Ovo" href="#about">About me</a></li>
          <li className="tab"><a className="font-Ovo" href="#services">Services</a></li>
          <li className="tab"><a className="font-Ovo" href="#work">My work</a></li>
          <li className="tab"><a className="font-Ovo" href="#contact">Contact Me</a></li>
        </ul>

        {/* Right-side actions */}
        <div className="actionsContainer">

          {/* <button className="iconButton">
            <Image
              src={assets.moon_icon}
              alt="dark mode"
              className="icon"
            />
          </button> */}

          {/* <a href="#contact" className="connectButton">
            Connect
            <Image
              src={assets.arrow_icon}
              alt="arrow"
              className="arrowIcon"
            />
          </a> */}

          <button ref={menuButtonRef} className="menuButton" onClick={openSideMenu}>
            <Image
              src={assets.menu_black}
              alt="menu button"
              className="icon"
            />
          </button>

        </div>

        {/*---------- Mobile menu button --------- */}
        <ul ref={sideMenuRef} className="mobileMenuContainer" onClick={closeSideMenu}>
          <div className="closeButton">
            <Image src={assets.close_black} alt="close menu" className="closeIcon" />
          </div>

          <li className="sideTab"><a className="font-Ovo" onClick={closeSideMenu} href="#top">Home</a></li>
          <li className="sideTab"><a className="font-Ovo" onClick={closeSideMenu} href="#about">About me</a></li>
          <li className="sideTab"><a className="font-Ovo" onClick={closeSideMenu} href="#services">Services</a></li>
          <li className="sideTab"><a className="font-Ovo" onClick={closeSideMenu} href="#work">My work</a></li>
          <li className="sideTab"><a className="font-Ovo" onClick={closeSideMenu} href="#contact">Contact Me</a></li>

          <p className="navCopyright">
            © 2026 Shady Emad.
            <br /> All rights reserved.
          </p>
        </ul>
            
        

      </nav>
    </>
  )
}