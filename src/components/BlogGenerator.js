import React, { useState } from 'react';
import axios from 'axios';

const BlogGenerator = () => {
  const [topic, setTopic] = useState('');
  const [style, setStyle] = useState('');
  const [keywords, setKeywords] = useState('');
  const [generatedBlog, setGeneratedBlog] = useState('');

  const generateBlog = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/blogs/generate', {
        topic,
        style,
        keywords,
      });
      setGeneratedBlog(response.data.blog);
    } catch (error) {
      console.error("Error generating blog:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter Topic"
      />
      <input
        type="text"
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        placeholder="Enter Style"
      />
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Enter Keywords"
      />
      <button onClick={generateBlog}>Generate Blog</button>

      <div>
        <h2>Generated Blog</h2>
        <p>{generatedBlog}</p>
      </div>
    </div>
  );
};

export default BlogGenerator;
