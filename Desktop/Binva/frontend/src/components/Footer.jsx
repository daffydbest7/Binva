import React from 'react';
import {images} from "../constants";
import { FaFacebook,  FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='bg-black'>
      <div><marquee className="text-white">..king david essentials</marquee></div>
      <footer className='container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-10 md:pt-20 md:grid-cols-12 lg:grid-cols-12'>

        
      <div className='col-span-5 md:col-span-4 lg:col-span-2'> 
      <h3 className='text-gray-400 font-bold md:text-xl'>About Foundation</h3>
      <ul className='text-green-500  mt-5 space-y-4 text-lg'>
        
          <li>
          <a href="/">About us</a> 
          </li>
          <li>
          <a href="/"> Join mission</a> 
          </li>
          
         
      </ul>
      </div>
      <div className='col-span-5 md:col-span-4 lg:col-span-2'> 
      <h3 className='text-gray-400 font-bold md:text-xl'>Enquiries</h3>
      <ul className='text-green-500  mt-5 space-y-4 text-lg'>
        <li>
          <a href="/"> Faq</a> 
          </li>
          <li>
          <a href="/"> Volunteer</a> 
          </li>
          <li>
          
        </li>
      </ul>
      </div>
      <div className='col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 '> 
      <h3 className='text-gray-400 font-bold md:text-xl'>Giving</h3>
      <ul className='text-green-500 text-lg mt-5 space-y-4'>
        <li>
          <a href="/">Donate</a> 
          </li>
          <li>
          <a href="/"> Support</a> 
          </li>
         
        
      </ul>
      </div>
      <div className='col-span-5 md:col-span-4 lg:col-span-2'> 
      <h3 className='text-gray-400 font-bold md:text-xl'>Articles</h3>
      <ul className='text-green-500 text-lg mt-5 space-y-4'>
        <li>
          <a href="/">Education</a> 
          </li>
          <li>
          <a href="/">Outreach</a> 
          </li>
          <li>
          <a href="/"> more...</a> 
          </li>
         
      </ul>
      </div>
      <div className='col-span-10 mt-4 md:order-first md:col-span-4 lg:col-span-4'>
        <div className=''>
        <div className='py-3'>
          <img src={images.logo} className='w-20 lg:w-[120px]  lg:h-[120px] brightness-0 invert mx-auto md:mx-0' alt="logo-sm"/>
        </div>
        <p className='text-gray-300 text-sm text-center md:text-left md:text-base'>Driving positive change in the Niger Delta Region of Nigeria</p>
        <div className='flex justify-center items-center text-gray-300 space-x-4 py-8 md:justify-start'>
          <a href="/" className='hover:text-teal-500 hover:animate-spin'><FaInstagram size={20}/></a>
        
          <a href="/" className='hover:text-teal-500 hover:animate-spin'><FaFacebook size={20}/></a>
          <a href="/" className='hover:text-teal-500 hover:animate-spin'><FaTwitter size={20}/></a>
          <a href="/" className='hover:text-teal-500 hover:animate-spin'><FaLinkedin size={20}/></a>
        </div>
        </div>
      </div>
      <div className='hidden col-span-12 md:block mx-auto py-4'>
        
        <span className='text-gray-300 mt-4'>developed by</span> <span className='text-green-500'>
         <a href='https://davidlawrence.onrender.com/' target='_blank'>David Lawrence @2023 </a> 
        </span>
      </div>
     
      </footer>
    </section>
  )
}

export default Footer
