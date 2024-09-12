import React from 'react';

const TerminologyUpload = ({ setFile }) => {
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Upload Industry-Specific Terminology
      </label>
      <input
        type="file"
        onChange={handleFileChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default TerminologyUpload;
