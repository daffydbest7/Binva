import React from 'react';
import {Button, Carousel } from 'antd';
import {FiSearch} from 'react-icons/fi';
import { images } from '../../../constants';
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  return (
  <section className='container mx-auto bg-gradient-to-b from-eni_orange to-green-300 lg:h-[500px] text-white lg:mt-[35px] mb-[10px] rounded-lg'>
   
    <Carousel 
    autoplay
    draggable={true} 
    dots={true}
    dotPosition='down'
    autoplaySpeed={8000}>
    <div >
    <div className='lg:flex lg:flex-row justify-between items-center mx-auto '>
       {/**left */}
      <div className='hidden lg:block text-center '> 
        <h1 className='lg:ml-[250px] font-bold text-4xl mb-4 '> ENIBO ALBERT CHARITY FOUNDATION </h1>
        <p className='lg:ml-[250px] font-bold text-xl mb-4'>
        <TypeAnimation
            sequence={[
            1000,
            'Quality Education... ',
            1000, 
            'No Poverty...',
             1000,
             'Zero Hunger...',
             1000,
            'Access to Clean Water and Sanitation...',
            1000,
            
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        </p>
        <button className='lg:ml-[250px] rounded-lg text-2xl  bg-blue-500 p-4 text-white hover:bg-blue-300 hover:font-bold'> DONATE </button>
      </div>
     
     {/**right */}
       <img src={images.enibobanner3} alt='carousel'style={{width:"700px", height:"500px"}} className='lg:h-[500px] '/>
    
    </div>
    </div>
    <div>
    <div className='lg:flex lg:flex-row justify-between items-center mx-auto ' >
       {/**left */}
       <div className='hidden lg:block text-center '> 
        <h1 className='lg:ml-[250px] font-bold text-4xl mb-4 '> ENIBO ALBERT CHARITY FOUNDATION </h1>
        <p className='lg:ml-[250px] font-bold text-xl mb-4'>
        <TypeAnimation
            sequence={[
            1000,
            'Quality Education... ',
            1000, 
            'No Poverty...',
             1000,
             'Zero Hunger...',
             1000,
            'Access to Clean Water and Sanitation...',
            1000,
            
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        </p>
        <button className='lg:ml-[250px] rounded-lg text-2xl  bg-blue-500 p-4 text-white hover:bg-blue-300 hover:font-bold'> DONATE </button>
      </div>
    <img src={images.enibobanner} alt='carousel' style={{width:"700px", height:"500px"}} className=' lg:h-[500px] '/>
    </div>
    </div>
    
    <div>
    <div className='lg:flex lg:flex-row justify-between items-center mx-auto'>
       {/**left */}
       <div className='hidden lg:block text-center '> 
        <h1 className='lg:ml-[250px] font-bold text-4xl mb-4 '> ENIBO ALBERT CHARITY FOUNDATION </h1>
        <p className='lg:ml-[250px] font-bold text-xl mb-4'>
        <TypeAnimation
            sequence={[
            1000,
            'Quality Education... ',
            1000, 
            'No Poverty...',
             1000,
             'Zero Hunger...',
             1000,
            'Access to Clean Water and Sanitation...',
            1000,
            
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        </p>
        <button className='lg:ml-[250px] rounded-lg text-2xl  bg-blue-500 p-4 text-white hover:bg-blue-300 hover:font-bold'> DONATE </button>
      </div>
    <img src={images.enibobanner4} alt='carousel' style={{width:"700px", height:"500px"}} className=' lg:h-[500px]'/>
    </div>
    </div>
    
    <div>
    <div  className='lg:flex lg:flex-row justify-between items-center mx-auto'>
     {/**left */}
     <div className='hidden lg:block text-center '> 
        <h1 className='lg:ml-[250px] font-bold text-4xl mb-4 '> ENIBO ALBERT CHARITY FOUNDATION </h1>
        <p className='lg:ml-[250px] font-bold text-xl mb-4'>
        <TypeAnimation
            sequence={[
            1000,
            'Quality Education... ',
            1000, 
            'No Poverty...',
             1000,
             'Zero Hunger...',
             1000,
            'Access to Clean Water and Sanitation...',
            1000,
            
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        </p>
        <button className='lg:ml-[250px] rounded-lg text-2xl  bg-blue-500 p-4 text-white hover:bg-blue-300 hover:font-bold'> DONATE </button>
      </div>
      <img src={images.enibobanner2} alt='carousel' style={{width:"700px", height:"500px"}} className=' lg:h-[500px] '/>
    </div>
    </div>
   </Carousel>
    </section>

  )
}

export default Hero
