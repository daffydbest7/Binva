import React from 'react';
import {Carousel } from 'antd';
import { images } from '../../../constants';

const Testimony = () => {
const testimonyData =[
  {id: 1,occupation: "Software developer",  name: "David Lawrence", image: images.david, content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere inventore perferendis earum. Ex iusto laboriosam magni ipsum obcaecati molestiae saepe numquam? Officia ab enim deserunt! Distinctio eius magni fugiat harum."},
  {id: 2, occupation: "Domain Master", name: "Victor Abali", image: images.victor, content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere inventore perferendis earum. Ex iusto laboriosam magni ipsum obcaecati molestiae saepe numquam? Officia ab enim deserunt! Distinctio eius magni fugiat harum."},
  {id: 3,occupation: "Lawyer", name: "Barr. Marian ", image: images.marian, content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere inventore perferendis earum. Ex iusto laboriosam magni ipsum obcaecati molestiae saepe numquam? Officia ab enim deserunt! Distinctio eius magni fugiat harum."},
  {id: 4,occupation: "Project Manager", name: "Ifeanyi Onwubu", image: images.ifeanyi, content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere inventore perferendis earum. Ex iusto laboriosam magni ipsum obcaecati molestiae saepe numquam? Officia ab enim deserunt! Distinctio eius magni fugiat harum."},
  {id: 5,occupation: "Content Creator", name: "Doubra Edugo", image: images.doubra, content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere inventore perferendis earum. Ex iusto laboriosam magni ipsum obcaecati molestiae saepe numquam? Officia ab enim deserunt! Distinctio eius magni fugiat harum."}

  
]

  return (
    
<div className="container my-24 mx-auto md:px-6">

<section className="mb-32 text-center">
  <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>

  <Carousel 
    autoplay
    draggable={true} 
    dots={true}
    dotPosition='down'
    autoplaySpeed={2000}>
   {
    testimonyData.map((data)=>(
    <div  className="relative" >
    <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
      <div
        className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none "
        >
        <img className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
          src={data.image} alt="avatar" />
        <div className="flex flex-wrap justify-center">
          <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
            <h5 className="mb-2 text-lg font-bold">{data.name}</h5>
            <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
              {data.occupation}
            </p>
            <p className="mb-6 text-neutral-500 dark:text-neutral-300">
              {data.content}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                <path fill="currentColor"
                  d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
              </svg>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </div>

    ))

   }   
  </Carousel>
</section>

</div>

  )
}

export default Testimony
