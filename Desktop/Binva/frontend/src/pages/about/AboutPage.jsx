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
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum libero corrupti culpa, autem maxime minima aspernatur nostrum earum ad praesentium obcaecati esse commodi! Ab est quo impedit molestias sed.
       </p>
     </div>
   </div>
   <div className="flex justify-center">
     <div className="max-w-[700px] text-center">
       <p className="mb-6 font-bold uppercase text-primary dark:text-primary-400 text-2xl">
         Mission
       </p>
      
       <p className="mb-16 text-neutral-500 dark:text-neutral-300">
       
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos blanditiis doloremque facilis illo inventore illum, optio veritatis quis odio earum eum ipsum. Voluptas adipisci praesentium consectetur, commodi hic tenetur?
       </p>
     </div>
   </div>

  </div>
  


   <div className="flex justify-center">
     <div className="max-w-[700px] text-center">
       <p className="mb-6 font-bold uppercase text-primary dark:text-primary-400 text-2xl">
         Our Impact
       </p>
      
       <p className="mb-4 text-neutral-500 dark:text-neutral-300">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere veritatis sit vitae odit, soluta impedit in vel laboriosam dolores cum maxime voluptatem alias aut ex exercitationem modi reiciendis eum! Doloremque?
       </p>
       <p className="mb-16 text-neutral-500 dark:text-neutral-300">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum molestias, corrupti delectus nam excepturi quae, itaque, reprehenderit odio commodi laudantium? Dolor doloribus sint necessitatibus similique ipsam. Sapiente, obcaecati earum!
       </p>
     </div>
   </div>
 </section>
 
</div>
    </MainLayout>
    
  )
}

export default AboutPage
