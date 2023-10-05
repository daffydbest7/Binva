import React from 'react';
import { images } from '../constants';
import "../App.css";

const Donate = () => {
  return (
    
<div className="container my-24 mx-auto md:px-6">
 
 <section className="mb-32 text-center lg:text-left">
   <div className="py-12 md:px-6 md:px-12">
     <div className="container mx-auto xl:px-32">
       <div className="flex grid items-center lg:grid-cols-2">
         <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
           <div
             className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
             <h2 className="mb-6 text-3xl font-bold">Why is it so great?</h2>
             <p className="mb-8 text-neutral-500 dark:text-neutral-300">
               Nunc tincidunt vulputate elit. Mauris varius purus malesuada
               neque iaculis malesuada. Aenean gravida magna orci, non
               efficitur est porta id. Donec magna diam.
             </p>

             <div className="grid gap-x-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
               <div className="mb-6">
                 <p className="flex items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                     stroke="currentColor" className="mr-3 h-5 w-5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Support
                   24/7
                 </p>
               </div>

               <div className="mb-6">
                 <p className="flex items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                     stroke="currentColor" className="mr-3 h-5 w-5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Analytics
                 </p>
               </div>

               <div className="mb-6">
                 <p className="flex items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                     stroke="currentColor" className="mr-3 h-5 w-5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                   </svg>Components
                 </p>
               </div>
               <div className="mb-6">
                 <p className="flex items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                     stroke="currentColor" className="mr-3 h-5 w-5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Updates
                 </p>
               </div>

               <div className="mb-6">
                 <p className="flex items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                     stroke="currentColor" className="mr-3 h-5 w-5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Reports
                 </p>
               </div>

               <div className="mb-6">
                 <p className="flex items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                     stroke="currentColor" className="mr-3 h-5 w-5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Mobile
                 </p>
               </div>
               <div className="mb-6">
                 <p className="flex items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                     stroke="currentColor" className="mr-3 h-5 w-5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Modules
                 </p>
               </div>

               <div className="mb-6">
                 <p className="flex items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                     stroke="currentColor" className="mr-3 h-5 w-5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Blocks
                 </p>
               </div>

               <div className="mb-6">
                 <p className="flex items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                     stroke="currentColor" className="mr-3 h-5 w-5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Templates
                 </p>
               </div>
             </div>
           </div>
         </div>
         <div className="md:mb-12 lg:mb-0">
           <img src={images.ctaDonate}
             className="rotate-lg-6 w-full rounded-lg shadow-lg" alt="" />
         </div>
       </div>
     </div>
   </div>
 </section>

</div>

  )
}

export default Donate
