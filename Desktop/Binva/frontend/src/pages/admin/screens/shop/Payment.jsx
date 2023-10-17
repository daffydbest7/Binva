import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getSingleProduct,getIp} from "../../../../services/posts";
import { toast } from "react-hot-toast";
import ErrorMessage from "../../../../components/ErrorMessage";
import { images } from "../../../../constants";
import {AiFillSecurityScan} from "react-icons/ai";

const Payment = () => {
  const { id } = useParams();
  const userState = useSelector((state)=> state.user);
  const token = userState.userInfo?.data?.token;
  const { data:IpData} = useQuery({
    queryFn: () => getIp(token),
    queryKey: ["getip"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
     
    },
  })

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getSingleProduct({ id }),
    queryKey: ["payment", id ],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
     // console.log(id)
    },
  });
{ console.log(IpData?.data)}
  return (
    <div classNameNameName="lg:mt-[50px]">
      <div classNameNameName="container mx-auto text-center text-2xl font-bold mb-4">
        SECURED PAY 
      </div>
       <section classNameNameName="flex flex-col container mx-auto px-5 py-10">
      
      




{data?.data?.data?.map((payment)=>(
      
<div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
    <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700 max-w-[600px]" >
        <div className="w-full pt-1 pb-5">
            <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                <i className="mdi mdi-credit-card-outline text-3xl"></i>
            </div>
        </div>
        <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">Secure payment info  </h1>
        </div>
       <div className="text-right text-xl text-green-700 font-bold">${payment.price}</div>
       <div className="text-right text-xl text-green-700 font-bold">{payment.productname}</div>
        <div className="mb-3 flex -mx-2">
            <div className="px-2">
                <label for="type1" className="flex items-center cursor-pointer">
                    <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked/>
                    <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3"/>
                </label>
            </div>
            <div className="px-2">
                <label for="type2" className="flex items-center cursor-pointer">
                    <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2"/>
                    <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3"/>
                </label>
            </div>
        </div>
        <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
            <div>
                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text"/>
            </div>
        </div>
        <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Card number</label>
            <div>
                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text"/>
            </div>
        </div>
        <div className="mb-3 -mx-2 flex items-end">
            <div className="px-2 w-1/2">
                <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
                <div>
                    <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                        <option value="01">01 - January</option>
                        <option value="02">02 - February</option>
                        <option value="03">03 - March</option>
                        <option value="04">04 - April</option>
                        <option value="05">05 - May</option>
                        <option value="06">06 - June</option>
                        <option value="07">07 - July</option>
                        <option value="08">08 - August</option>
                        <option value="09">09 - September</option>
                        <option value="10">10 - October</option>
                        <option value="11">11 - November</option>
                        <option value="12">12 - December</option>
                    </select>
                </div>
            </div>
            <div className="px-2 w-1/2">
                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                </select>
            </div>
        </div>
        <div className="mb-10">
            <label className="font-bold text-sm mb-2 ml-1">Security code</label>
            <div>
                <input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text"/>
            </div>
        </div>
        <div>
            <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
        </div>
        <img src={images.binva} alt="hhhhhhhhh" className="mt-4"/>
        <span className="text-3xl text-green-700"> SECURED </span><AiFillSecurityScan/>
    </div>
    
</div>
))}

<div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <a title="Buy me a beer" href="https://davidlawrence.onrender.com" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"/>
        </a>
    </div>
</div>
      
    </section>
    
    </div>
   
  );
};

export default Payment;

