import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  const { file } = await request.json();
  try {
    // Upload file to Cloudinary
    const uploadedResponse = await cloudinary.uploader.upload(file, {
      upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
    });

    // Create a response with the uploaded file's information
    const response = NextResponse.json(uploadedResponse);
    response.headers.set('Cache-Control', 'no-cache');
    return response;
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Upload error:', error);

    // Create an error response
    const errorResponse = NextResponse.json(
      { error: 'Something went wrong', details: error.message },
      { status: 500 }
    );
    errorResponse.headers.set('Cache-Control', 'no-cache');
    return errorResponse;
  }
}
