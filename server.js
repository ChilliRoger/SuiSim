// Import express module
const express = require('express');

// Create an instance of express
const app = express();

// Define the port for the backend server
const port = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample GET route
app.get('/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Sample POST route
app.post('/data', (req, res) => {
  console.log('Received data:', req.body);
  res.json({ status: 'Data received successfully' });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
