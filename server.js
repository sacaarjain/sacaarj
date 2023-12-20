const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Enable CORS for all routes
app.use(cors());

app.get('/data/albums.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'data/albums.json'));
});


app.listen(8080, () => {
  console.log('Server running on port 8080');
});
