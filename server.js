const express = require('express');
const app = express();
const port = 3000;

//For serving static files (HTML, CSS, JS)
app.use(express.static('public'));

// Main page
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Launch server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
