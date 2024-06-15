import { useState } from 'react';

export default function DeleteImage() {
  const [imageName, setImageName] = useState('');
  const [message, setMessage] = useState('');

  const deleteImage = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/delete-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageName }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message);
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      setMessage('Error deleting image');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={deleteImage}>
        <h1 className="font-title bg-green-500 rounded-lg mb-7 text-center p-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Enter image name and click delete button to delete image
        </h1>
        
        <div className='bg-white rounded-lg mt-7 overflow-hidden sm:w-[90%] ml-auto mr-auto'>
          <input 
            type="text" 
            placeholder="Enter image name" 
            value={imageName} 
            onChange={(e) => setImageName(e.target.value)} 
            className='m-5 border-4 border-black sm:w-[50%]'
          />
          <button className='m-5 text-black bg-gradient-to-br from-white to-[#27AB61] px-4 py-2 rounded-lg mr-4 transition-transform hover:scale-105 font-[420]' type="submit">
            Delete Image
          </button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
