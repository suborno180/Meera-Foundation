"use client";
import React, { useState } from "react";
import { CldUploadButton } from "next-cloudinary";

const UploadImage = () => {
  const [uploadedFileName, setUploadedFileName] = useState("");

  const handleUploadSuccess = (result) => {
    // Set the uploaded file name
    setUploadedFileName(result.info.original_filename);

    // Refresh the page after successful upload
    // window.location.reload();
  };

  return (
    <div>
      <div className="mt-2 bg-green-500 text-white px-4 py-2 max-w-[150px] text-center rounded">
        <CldUploadButton
          uploadPreset="sdz3c5af"
          onSuccess={handleUploadSuccess}
        />
      </div>
      {uploadedFileName && (
        <p className="mt-4">Uploaded file: {uploadedFileName}</p>
      )}
    </div>
  );
};

export default UploadImage;
