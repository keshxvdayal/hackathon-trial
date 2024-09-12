import React from 'react';

const StyleSelector = ({ setStyle }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Select Writing Style
      </label>
      <select
        onChange={(e) => setStyle(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">Choose a style...</option>
        <option value="formal">Formal</option>
        <option value="casual">Casual</option>
        <option value="technical">Technical</option>
        <option value="research">Research</option>
      </select>
    </div>
  );
};

export default StyleSelector;
