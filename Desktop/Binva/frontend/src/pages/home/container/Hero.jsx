import React from 'react';
import {Button, Carousel } from 'antd';
import {FiSearch} from 'react-icons/fi';
import { images } from '../../../constants';
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  return (
  <section className='container mx-auto bg-gradient-to-b from-[#008000] to-[#007E00] lg:h-screen text-white lg:mt-[35px] mb-[10px] rounded-lg'>
   
    <Carousel 
    autoplay
    draggable={true} 
    dots={true}
    dotPosition='down'
    autoplaySpeed={8000}>
    <div >
    <div className='lg:flex lg:flex-row justify-evenly items-center mx-auto '>
       {/**left */}
      <div className='hidden lg:block text-center '> 
        <h2 className='text-white text-6xl mt-4'> Our goal is to safeguard <br/>your finances against<br/> fraud of all kinds</h2>
        <p className='text-white text-2xl mt-8'>We are dedicated to protecting your funds and investments from prying<br/>
          hands with our exclusive wide range of available services at your disposal.
          <br/>Your happiness and satisfaction is important to us.
        
        </p>
        <p className=' font-bold text-xl mt-4 mb-4 text-white'>
        <TypeAnimation
            sequence={[
            1000,
            'Secure Payment gateway... ',
            1000, 
            'Auto Fraud Detection...',
             1000,
             'Multiple Merchants...',
             1000,
            '24/7 Support...',
            1000,
            
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        </p>
        <button className=' rounded-lg text-2xl  bg-[#0000ff] p-4 text-white hover:bg-[#0101F2] hover:font-bold'> START FREE TRIAL </button>
       
      </div>
     
     
     {/**right */}
       <img src={images.banner} alt='carousel'style={{width:"400px", height:"300px"}} className='lg:mt-[100px] rounded-lg'/>
    
    </div>
      <div className='text-white text-center mt-8'>Used by 20k+ businesses from small startups to household names</div>
      <div className='flex flex-row justify-center space-x-4 mt-4'>
      <img src={images.partner}  alt="partners"/>
      <img src={images.partner2} alt="partners"/>
      <img src={images.partner3} alt="partners"/>
      <img src={images.partner4} alt="partners"/>
      <img src={images.partner5} alt="partners"/>
      <img src={images.partner6} alt="partners"/>
      <img src={images.partner7} alt="partners"/>
      <img src={images.partner8} alt="partners"/>
        
      </div>    
    </div>
    <div >
    <div className='lg:flex lg:flex-row justify-evenly items-center mx-auto '>
       {/**left */}
      <div className='hidden lg:block text-center '> 
        <h2 className='text-white text-6xl mt-4'> Our goal is to safeguard <br/>your finances against<br/> fraud of all kinds</h2>
        <p className='text-white text-2xl mt-8'>We are dedicated to protecting your funds and investments from prying<br/>
          hands with our exclusive wide range of available services at your disposal.
          <br/>Your happiness and satisfaction is important to us.
        
        </p>
        <p className=' font-bold text-xl mt-4 mb-4 text-white'>
        <TypeAnimation
            sequence={[
            1000,
            'Secure Payment gateway... ',
            1000, 
            'Auto Fraud Detection...',
             1000,
             'Multiple Merchants...',
             1000,
            '24/7 Support...',
            1000,
            
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        </p>
        <button className=' rounded-lg text-2xl  bg-[#0000ff] p-4 text-white hover:bg-[#0101F2] hover:font-bold'> START FREE TRIAL </button>
       
      </div>
     
     
     {/**right */}
       <img src={images.binva_banner2} alt='carousel'style={{width:"400px", height:"300px"}} className='lg:mt-[100px] rounded-lg'/>
    
    </div>
      <div className='text-white text-center mt-8'>Used by 20k+ businesses from small startups to household names</div>
      <div className='flex flex-row justify-center space-x-4 mt-4'>
      <img src={images.partner}  alt="partners"/>
      <img src={images.partner2} alt="partners"/>
      <img src={images.partner3} alt="partners"/>
      <img src={images.partner4} alt="partners"/>
      <img src={images.partner5} alt="partners"/>
      <img src={images.partner6} alt="partners"/>
      <img src={images.partner7} alt="partners"/>
      <img src={images.partner8} alt="partners"/>
        
      </div>    
    </div>
    <div >
    <div className='lg:flex lg:flex-row justify-evenly items-center mx-auto '>
       {/**left */}
      <div className='hidden lg:block text-center '> 
        <h2 className='text-white text-6xl mt-4'> Our goal is to safeguard <br/>your finances against<br/> fraud of all kinds</h2>
        <p className='text-white text-2xl mt-8'>We are dedicated to protecting your funds and investments from prying<br/>
          hands with our exclusive wide range of available services at your disposal.
          <br/>Your happiness and satisfaction is important to us.
        
        </p>
        <p className=' font-bold text-xl mt-4 mb-4 text-white'>
        <TypeAnimation
            sequence={[
            1000,
            'Secure Payment gateway... ',
            1000, 
            'Auto Fraud Detection...',
             1000,
             'Multiple Merchants...',
             1000,
            '24/7 Support...',
            1000,
            
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        </p>
        <button className=' rounded-lg text-2xl  bg-[#0000ff] p-4 text-white hover:bg-[#0101F2] hover:font-bold'> START FREE TRIAL </button>
       
      </div>
     
     
     {/**right */}
       <img src={images.binva_banner3} alt='carousel'style={{width:"400px", height:"300px"}} className='lg:mt-[100px] rounded-lg'/>
    
    </div>
      <div className='text-white text-center mt-8'>Used by 20k+ businesses from small startups to household names</div>
      <div className='flex flex-row justify-center space-x-4 mt-4'>
      <img src={images.partner}  alt="partners"/>
      <img src={images.partner2} alt="partners"/>
      <img src={images.partner3} alt="partners"/>
      <img src={images.partner4} alt="partners"/>
      <img src={images.partner5} alt="partners"/>
      <img src={images.partner6} alt="partners"/>
      <img src={images.partner7} alt="partners"/>
      <img src={images.partner8} alt="partners"/>
        
      </div>    
    </div>
    <div >
    <div className='lg:flex lg:flex-row justify-evenly items-center mx-auto '>
       {/**left */}
      <div className='hidden lg:block text-center '> 
        <h2 className='text-white text-6xl mt-4'> Our goal is to safeguard <br/>your finances against<br/> fraud of all kinds</h2>
        <p className='text-white text-2xl mt-8'>We are dedicated to protecting your funds and investments from prying<br/>
          hands with our exclusive wide range of available services at your disposal.
          <br/>Your happiness and satisfaction is important to us.
        
        </p>
        <p className=' font-bold text-xl mt-4 mb-4 text-white'>
        <TypeAnimation
            sequence={[
            1000,
            'Secure Payment gateway... ',
            1000, 
            'Auto Fraud Detection...',
             1000,
             'Multiple Merchants...',
             1000,
            '24/7 Support...',
            1000,
            
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        </p>
        <button className=' rounded-lg text-2xl  bg-[#0000ff] p-4 text-white hover:bg-[#0101F2] hover:font-bold'> START FREE TRIAL </button>
       
      </div>
     
     
     {/**right */}
       <img src={images.binva_banner1} alt='carousel'style={{width:"400px", height:"300px"}} className='lg:mt-[100px] rounded-lg'/>
    
    </div>
      <div className='text-white text-center mt-8'>Used by 20k+ businesses from small startups to household names</div>
      <div className='flex flex-row justify-center space-x-4 mt-4'>
      <img src={images.partner}  alt="partners"/>
      <img src={images.partner2} alt="partners"/>
      <img src={images.partner3} alt="partners"/>
      <img src={images.partner4} alt="partners"/>
      <img src={images.partner5} alt="partners"/>
      <img src={images.partner6} alt="partners"/>
      <img src={images.partner7} alt="partners"/>
      <img src={images.partner8} alt="partners"/>
        
      </div>    
    </div>
    <div >
    <div className='lg:flex lg:flex-row justify-evenly items-center mx-auto '>
       {/**left */}
      <div className='hidden lg:block text-center '> 
        <h2 className='text-white text-6xl mt-4'> Our goal is to safeguard <br/>your finances against<br/> fraud of all kinds</h2>
        <p className='text-white text-2xl mt-8'>We are dedicated to protecting your funds and investments from prying<br/>
          hands with our exclusive wide range of available services at your disposal.
          <br/>Your happiness and satisfaction is important to us.
        
        </p>
        <p className=' font-bold text-xl mt-4 mb-4 text-white'>
        <TypeAnimation
            sequence={[
            1000,
            'Secure Payment gateway... ',
            1000, 
            'Auto Fraud Detection...',
             1000,
             'Multiple Merchants...',
             1000,
            '24/7 Support...',
            1000,
            
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        </p>
        <button className=' rounded-lg text-2xl  bg-[#0000ff] p-4 text-white hover:bg-[#0101F2] hover:font-bold'> START FREE TRIAL </button>
       
      </div>
     
     
     {/**right */}
       <img src={images.binva_banner4} alt='carousel'style={{width:"400px", height:"300px"}} className='lg:mt-[100px] rounded-lg'/>
    
    </div>
      <div className='text-white text-center mt-8'>Used by 20k+ businesses from small startups to household names</div>
      <div className='flex flex-row justify-center space-x-4 mt-4'>
      <img src={images.partner}  alt="partners"/>
      <img src={images.partner2} alt="partners"/>
      <img src={images.partner3} alt="partners"/>
      <img src={images.partner4} alt="partners"/>
      <img src={images.partner5} alt="partners"/>
      <img src={images.partner6} alt="partners"/>
      <img src={images.partner7} alt="partners"/>
      <img src={images.partner8} alt="partners"/>
        
      </div>    
    </div>
    
    
    
    
   </Carousel>
    </section>

  )
}

export default Hero
