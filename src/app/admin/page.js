// 'use client';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';

// export default function Whatwedogallary() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const res = await fetch('/api/images', {
//           method: 'GET',
//           headers: {
//               'Cache-Control': 'no-cache'
//           }
//       });
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         const data = await res.json();
//         setImages(data);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//         setImages([]);
//       }
//     };

//     fetchImages();
//   }, []);

//   const handleUpload = async (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = async () => {
//       try {
//         const res = await fetch('/api/upload', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ file: reader.result }),
//         });
//         if (!res.ok) {
//           throw new Error('Failed to upload image');
//         }
//         const data = await res.json();
//         setImages((prevImages) => [...prevImages, data]);
//         alert('Image uploaded successfully!');
//         setTimeout(() => {
//           window.location.reload();
//         }, 5000);
//       } catch (error) {
//         alert('Failed to upload image.');
//         setTimeout(() => {
//           window.location.reload();
//         }, 3000);
//       }
//     };
//   };

//   const handleDelete = async (public_id) => {
//     try {
//       const res = await fetch('/api/delete', {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ public_id }),
//       });
//       if (!res.ok) {
//         throw new Error('Failed to delete image');
//       }
//       setImages((prevImages) => prevImages.filter((image) => image.public_id !== public_id));
//       alert('Image deleted successfully!');
//       setTimeout(() => {
//         window.location.reload();
//       }, 3000);
//     } catch (error) {
//       alert('Failed to delete image.');
//       setTimeout(() => {
//         window.location.reload();
//       }, 3000);
//     }
//   };

//   return (
//     <>
//       <div className=' bg-[#27AB61]'>
//         <div className=" w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 mx-auto mt-2 ">
//           <div className=" w-full p-4 rounded-lg">
//             <h1 className="bg-green-500 rounded-lg mb-7 border-4 border-green-500 text-center p-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium font-[tittle] ">
//             Choose your image and image automatically uploaded
//             </h1>
//             <div className="flex flex-col items-center sm:w-[90%] p-3 rounded-lg ml-auto mr-auto">
//               <div className='bg-white rounded-lg mt-1 ml-auto mr-auto overflow-hidden sm:w-[90%]'>
//                 <input type="file" className="m-5 overflow-hidden file:mr-5 file:border-0 file:bg-gradient-to-br from-white to-[#27AB61] file:px-5 file:py-2 file:rounded-lg file:text-black file:cursor-pointer file:transition-all file:ease-in-out hover:file:bg-blue-800 mb-4 text-xs sm:text-sm md:text-base lg:text-lg" onChange={handleUpload} />
//               </div>
//             </div>
//             <div>
//               <div>
//               <h1 className=" mt-14 bg-green-500 rounded-lg mb-7 border-4 border-green-500 text-center p-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium font-[tittle] ">
//               Whichever image needs to be deleted 
//               Click on the delete buttons next to that image
//             </h1>
//                 {images.map((img) => (
//                   <div key={img.public_id} className='bg-white rounded-lg' style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
//                     <Image src={img.secure_url} className='rounded-lg m-5' height={300} alt="uploaded" width={300} style={{ maxWidth: '200px', marginRight: '10px' }} />
//                     <button className='mx-16 max-sm:mx-2 bg-red-500 mt-10 inline-block p-3 text-black bg-gradient-to-br from-white to-[#27AB61] px-4 py-2 rounded-lg mr-4 transition-transform hover:scale-105 font-semibold font-[tittle]' onClick={() => handleDelete(img.public_id)}>Delete</button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// "use client";
// import { useEffect, useState } from 'react';

// export default function ImageUploading() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const res = await fetch('/api/images');
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         const data = await res.json();
//         setImages(data);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//         // Handle error: set images to an empty array or display an error message
//         setImages([]);
//       }
//     };

//     fetchImages();
//   }, []);

//   const handleUpload = async (e) => {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const res = await fetch('/api/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }

//       const data = await res.json();
//       setImages([...images, data]);
//     } catch (error) {
//       console.error('Error uploading image:', error);
//       // Handle error: Optionally notify user of upload failure
//     }
//   };

//   const handleDelete = async (public_id) => {
//     try {
//       const res = await fetch('/api/delete', {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ public_id }),
//       });

//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }

//       setImages(images.filter((image) => image.public_id !== public_id));
//     } catch (error) {
//       console.error('Error deleting image:', error);
//       // Handle error: Optionally notify user of delete failure
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleUpload} />
//       <div>
//         {images.map((img) => (
//           <div key={img.public_id} className='bg-red-500'>
//             <img src={img.secure_url} alt="uploaded" width={100} />
//             <button onClick={() => handleDelete(img.public_id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function Admin(){

    return(

        <>welcome to admin</>
    )
}

