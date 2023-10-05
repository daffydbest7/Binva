import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import { images, stables } from "../constants";
import { Link } from "react-router-dom";
                                        
const ArticleCard = ({ post, className }) => {
  return (
    <div
    className={`rounded-xl overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${className}`}
  >
    <Link to={`/articles/${post.articleId}`}>
      <img
        src={
          post.image
           
        }
        alt="title"
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      />
    </Link>
    <div className="p-5">
      <Link to={`/articles/${post.articleId}`}>
        <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
          {post.title}
        </h2>  
      </Link>
      <div className="flex justify-between flex-nowrap items-center mt-6">
        
        <span className="font-bold text-dark-light italic text-sm md:text-base">
          {new Date(post.createdOn).getDate()}{" "}
          {new Date(post.createdOn).toLocaleString("default", {
            month: "long",
          })}
        </span>
      </div>
    </div>
  </div>
  );
};

export default ArticleCard;
