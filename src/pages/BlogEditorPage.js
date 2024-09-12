import React from 'react';
import { useLocation } from 'react-router-dom';

const BlogEditorPage = () => {
  const location = useLocation();
  const { topic, style, file } = location.state || {};

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Generated Blog</h1>
      <p><strong>Topic:</strong> {topic}</p>
      <p><strong>Style:</strong> {style}</p>
      <p><strong>Uploaded Dictionary:</strong> {file?.name || "No file uploaded"}</p>

      {/* This is where you will display the AI-generated blog content */}
      <div className="mt-6">
        <h2 className="text-xl font-bold">Your AI-generated blog will appear here.</h2>
      </div>
    </div>
  );
};

export default BlogEditorPage;
