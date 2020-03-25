import cloudinary from "cloudinary";
import DataUri from "datauri";
import path from "path";

const dataUri = new DataUri();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY
});

export default async image => {
  try {
    const processedImage = dataUri.format(
      path.extname(image.originalname).toString(),
      image.buffer
    ).content;
    const result = await cloudinary.v2.uploader.upload(processedImage);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
