import React from "react";
import {useForm, Controller} from "react-hook-form";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { updatePost } from "../../../../services/posts";
//import parseJsonToHtml from "../../../../utils/parseJsonToHtml";
import Editor from "../../../../components/editor/Editor";
//import TiptapEditor from "../../../../components/TiptapEditor";





const EditPost = () => {

  //useNavigate to linking between pages  
  const navigate = useNavigate();
  //get user state
  const userState = useSelector((state)=> state.user)
  
  //get the id from the url params
  const {id} = useParams();
  const [content, setContent] = useState("first");
  
  
  //useMutation hook and pass the neccessary arguments
  const {mutate: mutateEditPost, isLoading, } = useMutation({
    mutationFn:({newTitle, id ,content, token})=>{

    //return the updatePost service created in services
        return  updatePost({newTitle, id, content, token});
    },
    onSuccess: () => {
      toast.success(
        "Your post was updated successfully",
      );
      // dispatch(userActions.setUserInfo(data));
      //localStorage.setItem('account', JSON.stringify(data));
    },
    onError: (error)=>{
        toast.error(error.message)
        console.log(error)
    }
})

  //useEffect
  useEffect(()=>{
    if(!userState.userInfo){
        navigate("/");
    }
}, [navigate,userState.userInfo])

//useForm hook to handle the form (handleSubmit and register are both inbuilt functions for handling submission)
//handleSubmit will be embedded to our own custom function to handle the submit
//register fetches the form inputs and validates the input on the go
const { 
    handleSubmit, register, control,
    formState: { errors, isValid},
    
} = useForm({
    defaultValues:{
        id,
        newTitle: "",
        content: content,
    },
    mode: "onChange",
})

  //handling the submit (our user or custom fuction to handle the submission, we'll pass in the mutate we declared earlier with the useMutation block)
  const submitHandler = (data)=>{
    
    const {id, newTitle, content, token} = data
    mutateEditPost({id, newTitle, content, token: userState.userInfo?.data?.token})
    //setContent(parseJsonToHtml(data?.content));
    console.log(id);
    console.log(content);
}

  return <div>EDIT POST

  <form onSubmit={handleSubmit(submitHandler)}>
  <div className='flex flex-col mb-6 w-full'>
  
  <label htmlFor='name' className='text-[#5a7184] font-semibold block'>
      New Title
  </label>
  <input {...register("newTitle", {
      minLength:{
          value: 5,
          message: "title must be at least 5 character "
      },
      required:{
          value: true,
          message: "Title is required",
      }
  })}
  
  type="text" id='newTitle' placeholder='Enter title'  name='newTitle'
  className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border  ${errors.newTitle ? "border-red-500" : "border-[#c3cad]"}` }/>
  {errors.newTitle?.message && (
      <p className='text-red-500 text-xs mt-1'> {errors?.newTitle.message}</p>
  ) }
   
  
  <label htmlFor='caption' className='text-[#5a7184] mt-3 font-semibold block'>
      Content
  </label>
  <Controller
      name="content"
      control={control}
      defaultValue=""
      render={({field})=> (
          <Editor                 
                
                  value={field.value}
                  editable={true}
                  onDataChange={field.onChange}
                  //renderContent={true}
                  content={content}
                  />
      )}
  
  />
  


 
  <button  type="submit" disabled={!isValid || isLoading}
  id='submit' 
  className=' bg-eni_orange text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad] my-6 disabled:opacity-70 disabled:cursor-not-allowed'>Update Post</button>

  </div>
  
</form>
           
</div>;
};

export default EditPost;