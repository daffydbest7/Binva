import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/header/Header";
import { useQuery } from "@tanstack/react-query";
import { getLoggedInUser } from "../../services/users";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import MerchantHeader from "./components/header/MerchantHeader";
import UserHeader from "./components/header/UserHeader";

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

  if (profileIsLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h3 className="text-2xl text-slate-700">Loading, Please kindly wait 5s to validate request...</h3>
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
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
