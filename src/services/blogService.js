import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const generateBlog = async (topic, style, keywords) => {
  try {
    const response = await axios.post(`${API_URL}/blogs/generate`, {
      topic,
      style,
      keywords,
    });
    return response.data.blog;
  } catch (error) {
    console.error("Error generating blog:", error);
    throw error;
  }
};
