import React from 'react';
import MainLayout from '../../components/MainLayout';
import Hero from './container/Hero';
import AboutIntro from './container/AboutIntro';
import Stat from './container/Stat';
import Testimony from './container/Testimony';
import Partners from './container/Partners';
import FloatingAlert from './container/FloatingAlert';


const LandingPage = () => {
  return <MainLayout>
   <Hero/>
   <AboutIntro/>
   
   <Stat/>
   <Testimony/>
   <Partners/>
   
   <FloatingAlert/>
  </MainLayout>
  
}

export default LandingPage;
