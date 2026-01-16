"use client";
import React from 'react';
import NavigationBar from '../components/home/NavigationBar';
import Header from '../components/home/Header';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Work from '../components/home/Work';

const page = () => {
  return (
    <>
      <NavigationBar />
      <Header />
      <About />
      <Services />
      <Work />
    </>
  )
}

export default page