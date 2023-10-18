import React from 'react';
import { useNavigate } from 'react-router-dom';
import {AiOutlineArrowRight } from 'react-icons/ai'



const AboutIntro = () => {
  const navigate = useNavigate();
  return (
    <>
      
      <section className='lg:mt-[90px] container mx-auto relative '>
        <div className='container grid grid-cols-12 lg:place-items-center'>
          <div className='col-span-12 lg:col-span-8'>
            <h2 className='font-bold  md:text-center lg:text-left  text-5xl mx-[4px]'> About Us</h2>
            <p className='text-black/80 text-sm w-full mx-[4px] py-3 mt-3 leading-7 md:text-center md:text-base lg:text-left'>
                <span className='font-bold italic text-xl '> Binva is a pioneering KYC compliance platform that incorporates all the necessary Know-Your-Customer (KYC) and Anti-Money Laundering (AML) tools and digital identity services for safe client identity verification, AML screening, and lifecycle management.</span> 
                </p>
                <div className=''>
                  <button onClick={()=> navigate('/about')} className='text-white mt-10 p-4 mx-[4px] rounded-lg bg-[#0000ff] hover:text-[#0101F2] hover:bg-white hover:animate-pulse animate-pulse outline-none flex flex-row space-x-2 items-center'> <span>READ MORE</span> <span><AiOutlineArrowRight/> </span></button>
                </div>
            </div>
          
        </div>    
      </section>

    </>
  )
}

export default AboutIntro
