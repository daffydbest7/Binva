import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import VendorCard from "../../../../components/VendorCard";
import { useQuery } from "@tanstack/react-query";
import { getAllVendors } from "../../../../services/posts";
import { toast } from "react-hot-toast";
import VendorCardSkeleton from "../../../../components/VendorCardSkeleton";
import ErrorMessage from "../../../../components/ErrorMessage";

import { Link } from "react-router-dom";


const Shop = () => {
  
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllVendors(),
    queryKey: ["vendors"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  return (
    <div className="lg:mt-[50px]">
      <div className="container mx-auto text-center text-2xl font-bold mb-4">
        SELECT FROM OUR TOP RATED FINTECHS, MERCHANTS AND VENDORS
      </div>
       <section className="flex flex-col container mx-auto px-5 py-10">
      <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        {isLoading ? (
          [...Array(5)].map((item, index) => (
            <VendorCardSkeleton
              key={index}
              className="w-full lg:w-[calc(24.5%-15px)] md:w-[calc(33.33%-21px)]"
              
            />
          ))
        ) : isError ? (
          <ErrorMessage message="Couldn't fetch the vendor data" />
        ) : (
          data?.data?.data.map((post) => (
            <VendorCard
              key={post.id}
              vendor={post}
              className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
            />

           
          ))
        )}
        
      </div>
     
      
    </section>
    </div>
   
  );
};

export default Shop;

