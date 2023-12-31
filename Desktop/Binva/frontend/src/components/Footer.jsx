import React from 'react';
import {images} from "../constants";
import { FaFacebook,  FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='bg-black'>
     
      <footer className='container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-10 md:pt-20 md:grid-cols-12 lg:grid-cols-12'>

        
      <div className='col-span-5 md:col-span-4 lg:col-span-2'> 
      <h3 className='text-gray-400 font-bold md:text-xl'>About</h3>
      <ul className='text-[#0000ff]  mt-5 space-y-4 text-lg'>
        
          <li>
          <a href="/">About us</a> 
          </li>
          <li>
          <a href="/">Register</a> 
          </li>
          
         
      </ul>
      </div>
      <div className='col-span-5 md:col-span-4 lg:col-span-2'> 
      <h3 className='text-gray-400 font-bold md:text-xl'>Enquiries</h3>
      <ul className='text-[#0000ff]  mt-5 space-y-4 text-lg'>
        <li>
          <a href="/"> Faq</a> 
          </li>
          <li>
          <a href="/"> Partner</a> 
          </li>
          <li>
          
        </li>
      </ul>
      </div>
      <div className='col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 '> 
      <h3 className='text-gray-400 font-bold md:text-xl'>Doc</h3>
      <ul className='text-[#0000ff] text-lg mt-5 space-y-4'>
        <li>
          <a href="/">Getting Started</a> 
          </li>
          <li>
          <a href="/"> Support</a> 
          </li>
         
        
      </ul>
      </div>
      <div className='col-span-5 md:col-span-4 lg:col-span-2'> 
      <h3 className='text-gray-400 font-bold md:text-xl'>Resources</h3>
      <ul className='text-[#0000ff] text-lg mt-5 space-y-4'>
        <li>
          <a href="/">Integration</a> 
          </li>
          <li>
          <a href="/">Pricing</a> 
          </li>
          <li>
          <a href="/">Buy us a coffee </a> 
          </li>
         
      </ul>
      </div>
      <div className='col-span-10 mt-4 md:order-first md:col-span-4 lg:col-span-4'>
        <div className=''>
        <div className='py-3'>
          <img src={images.binva} className='w-20 lg:w-[120px]   brightness-0 invert mx-auto md:mx-0' alt="logo-sm"/>
        </div>
        <p className='text-gray-300 text-sm text-center md:text-left md:text-base'>Make Secured Payments without glitches...</p>
        <div className='flex justify-center items-center text-gray-300 space-x-4 py-8 md:justify-start'>
          <a href="/" className='hover:text-[#0000ff] hover:animate-spin'><FaInstagram size={20}/></a>
        
          <a href="/" className='hover:text-[#0000ff] hover:animate-spin'><FaFacebook size={20}/></a>
          <a href="/" className='hover:text-[#0000ff] hover:animate-spin'><FaTwitter size={20}/></a>
          <a href="/" className='hover:text-[#0000ff] hover:animate-spin'><FaLinkedin size={20}/></a>
        </div>
        </div>
      </div>
      <div className='hidden col-span-12 md:block mx-auto py-4'>
        
        <span className='text-gray-300 mt-4'>developed by</span> <span className='text-[#0000ff]'>
         <a href='https://davidlawrence.onrender.com/' target='_blank'>Hackathon Group 2 @2023 </a> 
        </span>
      </div>
     
      </footer>
    </section>
  )
}

export default Footer
