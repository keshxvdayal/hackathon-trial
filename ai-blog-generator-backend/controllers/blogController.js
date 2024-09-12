const fs = require('fs');
const csv = require('csv-parser');
const { Configuration, OpenAIApi } = require('openai');

// Load OpenAI API Key from environment variables
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateBlog = async (req, res) => {
  const { topic, style, keywords } = req.body;

  try {
    const prompt = `Generate a ${style} blog post on the topic "${topic}" including the following keywords: ${keywords}.`;

    const response = await openai.createCompletion({
      model: "text-davinci-003",  // Change to GPT-4 if needed
      prompt,
      max_tokens: 1000,
    });

    const blogContent = response.data.choices[0].text;
    res.status(200).json({ blog: blogContent });
  } catch (error) {
    console.error("Error generating blog:", error.message);
    res.status(500).json({ error: "Failed to generate blog." });
  }
};

const uploadDictionary = (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const filePath = file.path;
  const terms = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      if (row.term) {
        terms.push(row.term);
      }
    })
    .on('end', () => {
      console.log('CSV file successfully processed:', terms);
      fs.unlink(filePath, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
      res.status(200).json({ message: 'Dictionary uploaded and processed successfully' });
    })
    .on('error', (err) => {
      console.error('Error reading the CSV file:', err);
      res.status(500).json({ error: 'Error processing the CSV file' });
    });
};

module.exports = {
  generateBlog,
  uploadDictionary,
};
