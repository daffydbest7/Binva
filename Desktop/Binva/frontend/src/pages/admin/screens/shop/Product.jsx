import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../../../components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getAllProductByMerchantId } from "../../../../services/posts";
import { toast } from "react-hot-toast";
import ProductCardSkeleton from "../../../../components/ProductCardSkeleton";
import ErrorMessage from "../../../../components/ErrorMessage";

const Product = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllProductByMerchantId({ id }),
    queryKey: ["product", id ],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
      console.log(id)
    },
  });

  return (
    <div className="lg:mt-[50px]">
      <div className="container mx-auto text-center text-2xl font-bold mb-4">
        AVAILABLE PRODUCTS AND SERVICES
      </div>
       <section className="flex flex-col container mx-auto px-5 py-10">
      <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        {isLoading ? (
          [...Array(5)].map((item, index) => (
            <ProductCardSkeleton
              key={index}
              className="w-full lg:w-[calc(24.5%-15px)] md:w-[calc(33.33%-21px)]"
              
            />
          ))
        ) : isError ? (
          <ErrorMessage message="Couldn't fetch the this merchants services" />
        ) : (
          data?.data?.data.map((post) => (
            <ProductCard
              key={post.id}
              product={post}
              className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
            />

           
          ))
        )}
        
      </div>
     
      
    </section>
    </div>
   
  );
};

export default Product;

