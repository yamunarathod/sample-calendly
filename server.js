const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Middleware for serving static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Route for the homepage
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
