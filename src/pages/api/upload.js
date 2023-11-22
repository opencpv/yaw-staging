// pages/api/deleteImage.js
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name:  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key:  process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret:  process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    console.log('herrere')
    try {

      const { public_id } = req.body;

      console.log(public_id)
      cloudinary.v2.uploader.destroy(public_id)
      .then((res)=> console.log(res))
      console.log('result', result)

      // Check if the deletion was successful
      if (result.result === 'ok') {
        res.status(200).json({ message: 'Image deleted successfully' });
      } else {
        res.status(500).json({ message: 'Failed to delete image' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
