const express = require('express');
const multer = require('multer');
const { generateBlog, uploadDictionary } = require('../controllers/blogController');

const router = express.Router();

// Multer configuration for file uploads
const upload = multer({ dest: 'uploads/' });

// Route for generating a blog
router.post('/generate', generateBlog);

// Route for uploading a custom dictionary (industry-specific terminology)
router.post('/upload-dictionary', upload.single('dictionary'), uploadDictionary);

module.exports = router;
