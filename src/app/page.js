"use client";
import React from 'react';
import NavigationBar from './components/Home/NavigationBar';
import Header from './components/Home/Header';
import About from './components/Home/About';
import Services from './components/Home/Services';
import Work from './components/Home/Work';

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