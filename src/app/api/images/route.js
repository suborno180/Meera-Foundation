import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    // Cloudinary से images fetch करना
    const { resources } = await cloudinary.v2.search
      .expression('') // खाली string का उपयोग करें ताकि यह रूट फ़ोल्डर से images को fetch करे
      .sort_by('public_id', 'desc')
      .max_results(30)
      .execute();

    // Response के headers में no-cache जोड़ना
    const response = NextResponse.json(resources);
    response.headers.set('Cache-Control', 'no-cache');

    return response;
  } catch (error) {
    // Error handling
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}







