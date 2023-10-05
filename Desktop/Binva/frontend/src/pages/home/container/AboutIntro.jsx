import React from 'react';
import { images } from '../../../constants';
import {Link, useNavigate } from 'react-router-dom';
import {AiOutlineArrowRight } from 'react-icons/ai'



const AboutIntro = () => {
  const navigate = useNavigate();
  return (
    <>
      
      <section className='lg:mt-[90px] container mx-auto relative bg-gradient-to-b from-white to-eni_orange rounded-lg'>
        <div className='container grid grid-cols-12 gap-10 lg:place-items-center'>
         <div className='hidden col-span-12  md:block md:order-first lg:col-span-6 '>
            <div className=' mx-auto relative'>
            <div className="w-full  relative z-[1] rounded-xl">
            <img src={images.enibokids1} alt="about_intro" className='mx-auto  h-1/2 object-cover object-center'/>
           
            </div>
            </div>
            
            </div>
        
          <div className='col-span-12 lg:col-span-6'>
            <h2 className='font-bold  md:text-center lg:text-left  text-5xl mx-[4px]'> About Us</h2>
            <p className='text-black/80 text-sm w-full mx-[4px] py-3 mt-3 leading-7 md:text-center md:text-base lg:text-left'>
                <span className='font-bold italic text-xl '> Enibo Albert Charity Foundation is an organization committed to driving positive change in the Niger Delta region of Nigeria. With a focus on Sustainable Development Goals, including Quality Education, No Poverty,  Zero Hunger, and Access to Clean Water and Sanitation, we are dedicated to uplifting vulnerable and marginalized communities and creating lasting impact.</span> 
                </p>
                <div className=''>
                  <button onClick={()=> navigate('/about')} className='text-white mt-10 p-4 mx-[4px] rounded-lg bg-orange-500 hover:text-orange-500 hover:bg-white hover:animate-pulse animate-pulse outline-none flex flex-row space-x-2 items-center'> <span>READ MORE</span> <span><AiOutlineArrowRight/> </span></button>
                </div>
            </div>
          
        </div>    
      </section>

    </>
  )
}

export default AboutIntro
