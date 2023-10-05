import React from 'react';
import MainLayout from '../../components/MainLayout';
import {AiOutlineCheck} from "react-icons/ai";

const AboutPage = () => {
  return (
    <MainLayout>

      
<div className="container my-24 mx-auto md:px-6">
 
 <section className="mb-32">
  <div className='grid gap-x-5 md:grid-cols-2 lg:grid-cols-2 xl:gap-x-12'>
  <div className="flex justify-center">
     <div className="max-w-[700px] text-center">
       <p className="mb-6 font-bold uppercase text-primary dark:text-primary-400 text-2xl">
         About Us
       </p>
      
       <p className="mb-16 text-neutral-500 dark:text-neutral-300">
       Enibo Albert Charity Foundation is an organization committed to driving 
       positive change in the Niger Delta region of Nigeria. With a focus on 
       Sustainable Development Goals, including Quality Education, No Poverty, 
       Zero Hunger, and Access to Clean Water and Sanitation, we are dedicated 
       to uplifting vulnerable and marginalized communities and creating
       lasting impact.
       </p>
     </div>
   </div>
   <div className="flex justify-center">
     <div className="max-w-[700px] text-center">
       <p className="mb-6 font-bold uppercase text-primary dark:text-primary-400 text-2xl">
         Mission
       </p>
      
       <p className="mb-16 text-neutral-500 dark:text-neutral-300">
       
       Our mission is to foster quality education, alleviate poverty, eliminate hunger,
        and ensure access to clean water for underserved populations in the Niger Delta.
        We believe that by addressing these core areas, we can produce a comprehensive 
        plan for sustainable development, empowering individuals and communities to thrive.
       </p>
     </div>
   </div>

  </div>
  
<div className='text-center text-2xl text-primary my-6 font-bold uppercase'> Goal And Objectives</div>
   <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
     <div className="mb-12">
       <div className="flex">
         <div className="shrink-0">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
             stroke="currentColor" className="mr-3 h-5 w-5 text-success">
             <path stroke-linecap="round" stroke-linejoin="round"
               d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>
         </div>
         <div className="ml-2 grow">
           <p className="mb-1 font-bold">Quality Education</p>
           <p className="text-neutral-500 dark:text-neutral-300">
            <ol type={1} >
              <li>To improve access to quality education for children and adolescents
              in the Niger Delta region through scholarships, learning resources,
              and educational capacity-building programs for educators. 
              </li><br/>
              <li> 
                To create an environment conducive to growth and knowledge 
               acquisition, fostering the development of well-rounded individuals.
              </li>

            </ol>
            
           </p>
           <p className="text-neutral-500 dark:text-neutral-300">
           
           </p>
         </div>
       </div>
     </div>

     <div className="mb-12">
       <div className="flex">
         <div className="shrink-0">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
             stroke="currentColor" className="mr-3 h-5 w-5 text-success">
             <path stroke-linecap="round" stroke-linejoin="round"
               d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>
         </div>
         <div className="ml-2 grow">
           <p className="mb-1 font-bold">No Poverty</p>
           <p className="text-neutral-500 dark:text-neutral-300">
           To alleviate poverty in the Niger Delta Region by implementing
            targeted poverty reduction programs.
           </p><br/>
           <p className="text-neutral-500 dark:text-neutral-300">
           To provide skill development initiatives and micro-enterprise 
           support to empower individuals and communities to lift themselves out of poverty.
           </p>
         </div>
       </div>
     </div>

     <div className="mb-12">
       <div className="flex">
         <div className="shrink-0">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
             stroke="currentColor" className="mr-3 h-5 w-5 text-success">
             <path stroke-linecap="round" stroke-linejoin="round"
               d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>
         </div>
         <div className="ml-2 grow">
           <p className="mb-1 font-bold">Zero Hunger</p>
           <p className="text-neutral-500 dark:text-neutral-300">
           To provide skill development initiatives and 
           micro-enterprise support to empower individuals 
           and communities to lift themselves out of poverty.
           </p><br/>
           <p className="text-neutral-500 dark:text-neutral-300">
           To ensure food security in the Niger Delta region through 
           the implementation of sustainable agricultural practices.
           </p><br/>
           <p className="text-neutral-500 dark:text-neutral-300">
           To ensure food security in the Niger Delta region through
          the implementation of sustainable agricultural practices.
          </p>
         </div>
       </div>
     </div>
     <div className="mb-12">
       <div className="flex">
         <div className="shrink-0">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
             stroke="currentColor" className="mr-3 h-5 w-5 text-success">
             <path stroke-linecap="round" stroke-linejoin="round"
               d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>
         </div>
         <div className="ml-2 grow">
           <p className="mb-1 font-bold">Access to Clean Water and Sanitation</p>
           <p className="text-neutral-500 dark:text-neutral-300">
           To provide access to clean water for communities in the Niger
            Delta region by constructing clean water infrastructure.
           </p><br/>
           <p className="text-neutral-500 dark:text-neutral-300">
           To promote hygiene awareness and advocate for improved
            sanitation facilities.
           </p><br/>
           <p className="text-neutral-500 dark:text-neutral-300">
           To enhance the overall quality of life by ensuring access
            to clean water and sanitation, leading to healthier communities
          </p>
         </div>
       </div>
     </div>
     

    
   </div>

   <div className="flex justify-center">
     <div className="max-w-[700px] text-center">
       <p className="mb-6 font-bold uppercase text-primary dark:text-primary-400 text-2xl">
         Our Impact
       </p>
      
       <p className="mb-4 text-neutral-500 dark:text-neutral-300">
       In less than a year, the Enibo Foundation has deployed humanitarian
        support in over 20 communities, especially during the devastating 
        flood of 2022.
       </p>
       <p className="mb-16 text-neutral-500 dark:text-neutral-300">
       We have received recognition and awards for our outstanding
        contributions to improving the lives of individuals and communities.
       </p>
     </div>
   </div>
 </section>
 
</div>
    </MainLayout>
    
  )
}

export default AboutPage
