import {React, useEffect} from "react";
import {useForm, Controller} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import {  useSelector } from "react-redux";
import { createNewPost } from "../../../../services/posts";
import Editor from "../../../../components/editor/Editor";



const NewPost = () => {
    const navigate = useNavigate();
    //get user state
    const userState = useSelector((state)=> state.user)
    
    //handle Image upload
    const handleImage = async (e) => {
       
    };



    //useQuery
    const {mutate: mutateNewPost, isLoading, } = useMutation({
      mutationFn:({image,title,content, token})=>{
          return  createNewPost({image, title, content, token});
      },
      onSuccess: () => {
        toast.success(
          "Your post was created successfully",
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

  const { 
      handleSubmit, register,control,
      formState: { errors, isValid},
      
  } = useForm({
      defaultValues:{
          image: "",
          title: "",
          content: "",
      },
      mode: "onChange",
  })

    //handling the submit
    const submitHandler = async (data,e)=>{
        e.preventDefault();

      // Replace with your Cloudinary cloud name
      const cloudName = "dtr4a6nt2";
      // Replace with your Cloudinary upload preset
      const uploadPreset = "eni_charity"; 
    
      // get the image uploaded
      const file = data.image[0];
      const title = data.title;
      const content = data.content;

      // check if the image is of the correct type
      if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
        // create a new form instance
        const formData = new FormData();
        formData.append("text", title)
        formData.append("text", content)
        formData.append("file", file);
       formData.append("upload_preset", uploadPreset);

        try {
          const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
            {
              method: "POST",
              body: formData,
            }
          );
          // this is the returned object from the cloudinary
          const data = await response.json();
          
          // access your URL with secure_url
         // console.log(data.secure_url);
         const image = data.secure_url;
         console.log(image);
        
         mutateNewPost({image:image, title:title, content:content, token: userState.userInfo?.data?.token})
        } catch (error) {
          console.error(error);
        }
      } else {
        alert("A jpeg/png file could not be found");
      }
     
      
  }

    return <div>CREATE NEW POST

    <form onSubmit={handleSubmit(submitHandler)} enctype="multipart/form-data">
    <div className='flex flex-col mb-6 w-full'>

    <label htmlFor='image' className='text-[#5a7184] font-semibold block'>
        Post Image
    </label>
    <input {...register("image", {
       
        required:{
            value: true,
            message: "image is required",
        }
    })}
   
    type="file" id='image' accept="image/*" placeholder='select image'  name='image'
    className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border  ${errors.image ? "border-red-500" : "border-[#c3cad]"}` }/>
    {errors.image?.message && (
        <p className='text-red-500 text-xs mt-1'> {errors?.image.message}</p>
    ) }   
    
    <label htmlFor='name' className='text-[#5a7184] font-semibold block'>
        Title
    </label>
    <input {...register("title", {
        minLength:{
            value: 5,
            message: "title must be at least 5 character "
        },
        required:{
            value: true,
            message: "Title is required",
        }
    })}
    
    type="text" id='title' placeholder='Enter title'  name='title'
    className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border  ${errors.title ? "border-red-500" : "border-[#c3cad]"}` }/>
    {errors.title?.message && (
        <p className='text-red-500 text-xs mt-1'> {errors?.title.message}</p>
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
                  renderContent={true}
                  //content={content}
                  />
      )}
  
  />


   
    <button  type="submit" disabled={!isValid || isLoading}
    id='submit' 
    className=' bg-eni_orange text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad] my-6 disabled:opacity-70 disabled:cursor-not-allowed'>Post</button>
  
    </div>
</form>
</div>;
  };
  
  export default NewPost;