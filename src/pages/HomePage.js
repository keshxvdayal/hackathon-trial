import React, { useState } from 'react';
import TopicInput from '../components/TopicInput';
import StyleSelector from '../components/StyleSelector';
import TerminologyUpload from '../components/TerminologyUpload';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [topic, setTopic] = useState('');
  const [style, setStyle] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleGenerate = () => {
    if (topic && style) {
      // Save data and navigate to Blog Editor page
      navigate('/editor', { state: { topic, style, file } });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">AI Blog Generator</h1>
      <TopicInput setTopic={setTopic} />
      <StyleSelector setStyle={setStyle} />
      <TerminologyUpload setFile={setFile} />
      <button 
        onClick={handleGenerate}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Generate Blog
      </button>
    </div>
  );
};

export default HomePage;
