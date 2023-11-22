import axios from 'axios';
import crypto from "crypto";

const generateSHA1 = (data) => {
    const hash = crypto.createHash("sha1");
    hash.update(data);
    return hash.digest("hex");
}
const generateSignature = (publicId, apiSecret) => {
    const timestamp = new Date().getTime();
    return `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
};

const deleteImage = async (publicId) => {
    alert('here')
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const timestamp = new Date().getTime();
    const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
    const apiSecret = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
    const signature = generateSHA1(generateSignature(publicId, apiSecret));
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;

    const formData = new FormData()
    formData.append('public_id', publicId)
    formData.append('signature', signature)
    formData.append('api_key', apiKey)
    formData.append('timestamp', timestamp)

    try {
        const response = await axios.post(url, formData);

        console.log(response.data)
        
    } catch (error) {
        console.log(error)
       
    }
}

export default deleteImage