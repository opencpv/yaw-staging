import axios from "axios";
import * as shai from 'shai';

const uploadToCloudinary = async (file: any) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "property_images");

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export { uploadToCloudinary };

const deleteFromCloudinary = async (publicId: string) => {
  // Delete image from Cloudinary
  // try {
  //   const deleteResponse = await fetch(
  //     `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/destroy/${publicId}`,
  //     {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Basic ${btoa(
  //           `${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}:${process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET}`
  //         )}`,
  //       },
  //     }
  //   );

  //   if (deleteResponse.ok) {
  //     const deleteData = await deleteResponse.json();
  //     // Return the result of the delete operation
  //     return deleteData.result === "ok";
  //   } else {
  //     // Handle non-OK status codes
  //     console.error("Error deleting image. Status:", deleteResponse.status);
  //     throw new Error(
  //       `Failed to delete image. Status: ${deleteResponse.status}`
  //     );
  //   }
  // } catch (deleteError) {
  //   console.error("Error deleting image:", deleteError);
  //   throw deleteError;
  // }
  // const timestamp = new Date().getTime()

  // const string = `public_id=${}&timestamp=${timestamp}`
  // const signature = await shai(string)
  // const formData = new FormData()
  // formData.append("public_id", publicId)
  // formData.append("signature",signature)
  // formData.append("api_key", `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`)
  // formData.append("timestamp",timestamp)
  // const res = await axios.post("https://api.cloudinary.com/v1_1//image/destroy", formData)
};

const handleFileDrop = async (files: any, setFiles: any) => {
  if (files?.length) {
    const uploadedFiles = await Promise.all(
      files.map(async (file: any) => {
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

    setFiles((previousFiles: any) => [...previousFiles, ...uploadedFiles]);
  }
};

export { handleFileDrop, deleteFromCloudinary };
