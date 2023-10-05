import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Donate from './Donate';


const MainLayout = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
      <Donate/>
      <Footer/>
    </div>
  )
}

export default MainLayout
