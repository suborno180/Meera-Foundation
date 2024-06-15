"use client";
import { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";

export default function Image_View({ hostUrl }) {
  const [images, setImages] = useState([]);
  const [deletingId, setDeletingId] = useState(null); // Track which image is being deleted
  const [loading, setLoading] = useState(false); // For general loading state

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true); // Set loading state while fetching images
        const response = await fetch(`${hostUrl}/api/images`, {
          cache: "no-cache",
        });
        const data = await response.json();
        if (Array.isArray(data)) {
          setImages(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false); // Always reset loading state after fetch completes
      }
    };

    fetchImages();
  }, [hostUrl]);

  const handleDelete = async (public_id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this image?");
    if (!confirmDelete) {
      return; // If user cancels, do nothing
    }

    try {
      setDeletingId(public_id); // Set the id of the image being deleted
      const response = await fetch(`${hostUrl}/api/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ public_id }),
      });

      const result = await response.json();

      if (response.ok) {
        setImages(images.filter((image) => image.public_id !== public_id));
      } else {
        console.error("Failed to delete image:", result.error);
        alert("Failed to delete image. Please try again later."); // Alert the user about the failure
      }
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Error deleting image. Please try again later."); // Alert the user about the error
    } finally {
      setDeletingId(null); // Reset deleting state after delete operation completes
    }
  };

  if (loading) {
    return <p>Loading images...</p>; // Display a loading message while fetching images
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
        {images && images.length > 0 ? (
          images.map((image) => (
            <div key={image.public_id} className="flex flex-col items-center">
              <CldImage
                src={image.public_id}
                width="500"
                height="500"
                crop={{
                  type: "auto",
                  source: true,
                }}
                alt={image.public_id}
              />
              <button
                onClick={() => handleDelete(image.public_id)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
                disabled={deletingId === image.public_id} // Disable delete button while deleting
              >
                {deletingId === image.public_id ? "Deleting..." : "Delete"}
              </button>
            </div>
          ))
        ) : (
          <p>No images found.</p>
        )}
      </div>
    </div>
  );
}