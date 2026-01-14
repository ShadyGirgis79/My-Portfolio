'use client';
import React from 'react'
import NavigationBar from './components/NavigationBar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'

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