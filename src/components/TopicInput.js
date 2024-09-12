import React from 'react';

const TopicInput = ({ setTopic }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Blog Topic/Keywords
      </label>
      <input
        type="text"
        placeholder="Enter blog topic or keywords"
        onChange={(e) => setTopic(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default TopicInput;
