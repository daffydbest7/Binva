import React from 'react';
import MainLayout from '../../components/MainLayout';
import Hero from './container/Hero';
import AboutIntro from './container/AboutIntro';
import Articles from './container/Articles';
import Stat from './container/Stat';
import Testimony from './container/Testimony';
import Partners from './container/Partners';
import FloatingAlert from './container/FloatingAlert';
import Newsletter from './container/Newsletter';

const LandingPage = () => {
  return <MainLayout>
   <Hero/>
   <AboutIntro/>
   <Articles/>
   <Stat/>
   <Testimony/>
   <Partners/>
   <Newsletter/>
   <FloatingAlert/>
  </MainLayout>
  
}

export default LandingPage;
