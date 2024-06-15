// import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const handler = async (req, res) => {
//   const { id } = req.body;
//   try {
//     await cloudinary.uploader.destroy(id);
//     res.status(200).json({ message: 'Image deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete image' });
//   }
// };

// export default handler;


import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function DELETE(request) {
  try {
    const { public_id } = await request.json();

    if (!public_id) {
      return NextResponse.json({ error: 'Public ID is required' }, { status: 400 });
    }

    const deleteResponse = await cloudinary.uploader.destroy(public_id);

    if (deleteResponse.result !== 'ok') {
      return NextResponse.json({ error: 'Failed to delete image' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
