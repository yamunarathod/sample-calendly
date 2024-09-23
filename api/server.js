const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Middleware for serving static files (CSS, JS)
app.use(express.static(path.join(__dirname, '../public')));

// Route for the homepage
app.get('/', (req, res) => {
  res.render(path.join(__dirname, '../views/index'));
});

// Export the app as a serverless function
module.exports = app;
