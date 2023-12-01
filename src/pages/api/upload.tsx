// // pages/api/upload.js
// import cloudinary from 'cloudinary';

// export default async function handler(req, res) {
//   const timestamp = Math.round(new Date().getTime() / 1000);

//   cloudinary.config({
//     cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
//     api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
//   });

//   const uploadPreset = 'property_images';

//   const stringToSign = `timestamp=${timestamp}&upload_preset=${uploadPreset}`;

//   const signature = cloudinary.utils.api_sign_request(stringToSign, process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET);

//   res.status(200).json({
//     signature,
//     timestamp,
//     apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
//     uploadPreset,
//   });
// }
