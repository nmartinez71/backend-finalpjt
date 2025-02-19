// Backend (Glitch) - server.js
const path = require("path");
const express = require('express');
const app = express();
const router = express.Router()



// Enable CORS for all routes
var cors = require('cors')
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Your existing routes
app.use("/api", router)

router.get('/songs', (req, res) => {
  const songs = [
    {title: "We Found Love",
            artist: "Rihanna",
            popularity: 10,
            releaseDate: new Date(2011, 9, 22),
            genre: ["electro house"]},
    { title: 'Song 1', artist: 'Artist 1', genre: 'Pop' },
    { title: 'Song 2', artist: 'Artist 2', genre: 'Rock' },
  ];
  res.json(songs);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});