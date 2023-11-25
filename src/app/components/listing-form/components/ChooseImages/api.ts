// import { generateSignature } from "@/lib/utils/cloudinary-upload";

// cloudinaryService.js
const uploadToCloudinary = async (file: any) => {
  const response = await fetch("/api/upload");
  const { signature, timestamp, apiKey, uploadPreset } = await response.json();

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  formData.append("signature", signature);
  formData.append('api_key', apiKey);
  formData.append('timestamp', timestamp);

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

// export async function handleWidgetClick() {
//   const widget = window.cloudinary.createUploadWidget(
//     {
//       cloudName: `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`,
//       apiKey: `${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}`,
//       uploadSignature: generateSignature,
//       resourceType: "image",
//     },
//     (error, result) => {
//       if (!error && result && result.event === "success") {
//         console.log("Uploaded", result.info);
//         setIsImageUploaded(true);
//       } else if (error) {
//         console.log(error);
//       }
//     }
//   );
//   widget.open();
// }

export { uploadToCloudinary };

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

export { handleFileDrop };
