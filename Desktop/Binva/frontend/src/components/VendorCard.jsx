import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineVerified} from "react-icons/ai";
                                        
const VendorCard = ({ vendor, className }) => {
  return (
    <div
    className={`rounded-xl overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${className}`}
  >
    <Link to={`/articles/${vendor.id}`}>
      <img
        src={
          vendor.avatar
           
        }
        alt="title"
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      />
    </Link>
    <div className="p-5">
      <Link to={`/articles/${vendor.id}`}>
        <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
          {vendor.firstname}
        </h2>  
      </Link>
      <div className="flex justify-between flex-nowrap items-center mt-6">
        
        <span className="font-bold text-dark-light italic text-sm md:text-base">
          <div className="flex flex-row items-center space-x-1">
           <AiOutlineVerified className="text-green-600"/>
            <p>Binva Verified Since: </p>
            {new Date(vendor.created_on).getDate()}{ " "}
            {new Date(vendor.created_on).toLocaleString("default", {
            month: "long",
          })}
          </div>
           
        
        </span>
      </div>
    </div>
  </div>
  );
};

export default VendorCard;
