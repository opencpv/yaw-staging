// cloudinaryService.js
const uploadToCloudinary = async (file : any) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset"); // Replace with your Cloudinary upload preset

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
  
      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };
  
  export { uploadToCloudinary };
  

  const handleFileDrop = async (files : any, setFiles : any) => {
    if (files?.length) {
      const uploadedFiles = await Promise.all(
        files.map(async (file : any) => {
          try {
            const preview = await uploadToCloudinary(file);
  
            return {
              ...file,
              preview,
            };
          } catch (error) {
            // Handle error if needed
            console.error("Error uploading image:", error);
            return file;
          }
        })
      );
  
      setFiles((previousFiles : any) => [...previousFiles, ...uploadedFiles]);
    }
  };
  
  export { handleFileDrop };