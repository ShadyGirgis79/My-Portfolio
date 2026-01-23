"use client";
import React from 'react';
import NavigationBar from '../components/home/NavigationBar';
import Header from '../components/home/Header';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Work from '../components/home/Work';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';

const page = () => {
  return (
    <>
      <NavigationBar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

export default page