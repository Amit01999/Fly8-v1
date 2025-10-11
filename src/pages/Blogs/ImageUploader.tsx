import React from 'react';

const ImageUploader = ({ onUpload, label }) => {
  const handleFile = e => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      onUpload(file);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default ImageUploader;
