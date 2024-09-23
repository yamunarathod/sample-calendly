const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Adjust paths to static files and views
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, '../views'));

// Route for the homepage
app.get('/', (req, res) => {
  res.render('index'); // Render the EJS view 'index.ejs'
});

// Start the server and log a message
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export the app for serverless deployment (used by Vercel)
module.exports = app;
