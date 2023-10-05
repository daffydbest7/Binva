import React from 'react';
import "../../../App.css";
import { images } from '../../../constants';

const Stat = () => {
  return (
    <div>
      
<section className="mb-32 text-center lg:text-left">
  


  <div className="container mx-auto text-center lg:text-left xl:px-32">
    <div className="grid items-center lg:grid-cols-2">
      <div className="mb-12 lg:mb-0">
        <div
          className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
          <h2 className="mb-6 text-4xl font-bold">Our Impact?</h2>
          <p className="mb-12 text-neutral-500 dark:text-neutral-300">
          In less than a year, the Enibo Foundation has deployed humanitarian support in over 20 communities, especially during the devastating flood of 2022
          </p>

          <div className="grid gap-x-6 md:grid-cols-3">
            <div className="mb-12 md:mb-0">
              <h2 className="text-dark mb-4 text-3xl font-bold">20+</h2>
              <h5 className="mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300">
                Communities Reached
              </h5>
            </div>

            <div className="mb-12 md:mb-0">
              <h2 className="text-dark mb-4 text-3xl font-bold">3</h2>
              <h5 className="mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300">
                Awards 
              </h5>
            </div>

            <div className="">
              <h2 className="text-dark mb-4 text-3xl font-bold">300+</h2>
              <h5 className="mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300">
                Children Gifted
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={images.eniboImg}
          className="fancy-border-radius rotate-lg-6 w-full shadow-lg dark:shadow-black/20" alt="" />
      </div>
    </div>
  </div>

</section>

    </div>
  )
}

export default Stat
