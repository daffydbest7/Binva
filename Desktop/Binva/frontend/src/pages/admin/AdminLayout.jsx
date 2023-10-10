import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/header/Header";
import { useQuery } from "@tanstack/react-query";
import { getLoggedInUser } from "../../services/users";
import {getAllFraudLive} from "../../services/posts";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import MerchantHeader from "./components/header/MerchantHeader";
import UserHeader from "./components/header/UserHeader";
import {AiOutlineLoading} from "react-icons/ai";

const AdminLayout = () => {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);

  const {
    data:profileData,
    isLoading: profileIsLoading,
    error:profileError
  } = useQuery({
    queryFn: () => {
     return getLoggedInUser({ token: userState.userInfo?.data?.token });
    },
    queryKey: ["user"],
    onSuccess: (ProfileData) => {
    
    },
    onError: (err) => {
      console.log(err);
      navigate("/");
      toast.error("Access Denied");
    },
  });
  const { data:liveFraudData,
  isLoading,error} = useQuery({
    queryFn: () => {
      return getAllFraudLive();
    },
    queryKey: ["liveFraud"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  })

  if (profileIsLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
       
        <AiOutlineLoading size={50} className="text-slate-700 animate-spin"/>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen lg:flex-row">
      {profileData.data?.admin && (
         <Header/>
      )}
     {profileData.data?.merchant &&(
      <MerchantHeader/>
     )}
      {!profileData.data?.merchant && !profileData.data?.admin &&(
      <UserHeader/>
     )}
      <main className="bg-[#F9F9F9] flex-1 p-4 lg:p-6">
       
        <div className="text-2xl font-bold">Hi, {profileData?.data?.firstname}</div>
       <div className=" bg-gray-500 p-2 rounded-lg">
        <span className="bg-green-700 text-white font-bold font-roboto border border-green-700 p-2 rounded"> FRAUD DETECTION IN REAL TIME </span>
       <marquee className="">
       <div className="flex flex-row space-x-8 mt-2"> 
        {liveFraudData.data?.data?.slice(0,5).map((fraud)=> 
          <div key={fraud.id} className="text-red-700 flex flex-row">
            
            <div className="">${fraud.amount}</div>
            <div className="ml-2">{fraud.user_id}</div>
           
          </div>
        )
        
        }
      </div>
      </marquee>
       </div>
       
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
