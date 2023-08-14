import React, { useState } from 'react'
import './App.css'
import Nav from './components/hero-section/nav-bar'
import Carousel from './components/hero-section/carousel'
import slides from "../src/data/carousalData.json"
import CardSec from './components/section-one'
import SecTwo from './components/section-two'

function App() {
  

  return (
    <>
      <Nav />
      <Carousel data={slides} />
      <CardSec />
      <SecTwo/>
    </>
  );
}

export default App
