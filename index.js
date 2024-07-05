const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const getRandomImage = () => {
    const imagesDir = path.join(__dirname, 'images');
    const images = fs.readdirSync(imagesDir);
    const randomImage = images[Math.floor(Math.random() * images.length)];
    return path.join(imagesDir, randomImage);
  };
  
  // Route to serve random image
  app.get('/random-image', (req, res) => {
    const imagePath = getRandomImage();
    res.sendFile(imagePath);
  });


app.listen("9000",()=>{
    console.log("Server is running on port 9000");
});