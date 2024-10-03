// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Setup the JSON parser for POST requests
app.use(bodyParser.json());

// Create an in memory database
const comments = [];

// GET /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// Start the web server
app.listen(3000, () => {
    console.log('Web server listening on port 3000');
});

// Test with curl
// curl -X POST -d '{ "author": "Alice", "message": "Hello, World!" }' -H 'Content-Type: application/json' http://localhost:3000/comments
// curl http://localhost:3000/comments