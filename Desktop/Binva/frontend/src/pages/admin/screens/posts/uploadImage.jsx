export default function UploadImage() {
 
    
    const handleImage = async (e) => {
        e.preventDefault();

      // Replace with your Cloudinary cloud name
      const cloudName = "dtr4a6nt2";
      // Replace with your Cloudinary upload preset
      const uploadPreset = "eni_charity"; 
    
      // get the image uploaded
      const file = e.target.files[0];

      // check if the image is of the correct type
      if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
        // create a new form instance
        const formData = new FormData();
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
          console.log(data.secure_url);
        } catch (error) {
          console.error(error);
        }
      } else {
        alert("A jpeg/png file could not be found");
      }
    };

  return (
    <div>
      <form>
        <label htmlFor="banner">Banner Image</label>
        <input
          id="banner"
          type="file"
          name="banner"
          accept="image/jpeg, image/png"
          onChange={handleImage}
        />
        <button type="submit"> submit</button>
      </form>
    </div>
  );
}