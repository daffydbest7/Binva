import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import ArticleCard from "../../../components/ArticleCard";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../../services/posts";
import { toast } from "react-hot-toast";
import ArticleCardSkeleton from "../../../components/ArticleCardSkeleton";
import ErrorMessage from "../../../components/ErrorMessage";
import Pagination from "../../../components/Pagination";
import { Link } from "react-router-dom";


const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllPosts(currentPage),
    queryKey: ["articles"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  return (
    <section className="flex flex-col container mx-auto px-5 py-10">
      <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        {isLoading ? (
          [...Array(5)].map((item, index) => (
            <ArticleCardSkeleton
              key={index}
              className="w-full lg:w-[calc(24.5%-15px)] md:w-[calc(33.33%-21px)]"
              
            />
          ))
        ) : isError ? (
          <ErrorMessage message="Couldn't fetch the posts data" />
        ) : (
          data?.data?.data.map((post) => (
            <ArticleCard
              key={post.articleId}
              post={post}
              className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
            />

           
          ))
        )}
        
      </div>
     
      <Pagination
                  onPageChange={(page) => setCurrentPage(page)}
                  currentPage={currentPage}
                  totalPageCount={
                   10
                  }
                />
    </section>
  );
};

export default Articles;
