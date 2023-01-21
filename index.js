const data = require("./data/videos.json");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const { v4: uuidv4 } = require("uuid");
var cors = require("cors");

app.use(cors());
app.use(express.json());

// NEW CODE
app.use(express.static("public"));
// END OF NEW CODE

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// =========================create a GET route for videos=========================================
app.get("/videos", (req, res) => {
  res.send(data);
});

// ==================create a GET route for videos details========================================
const videosId = require("./data/video-details.json");

app.get("/videos/:id", (req, res) => {
  //Line 9
  const videoId = videosId.find((element) => element.id === req.params.id);
  if (videoId) {
    res.send(videoId);
  } else {
    res.send("Couldn't import data from the API");
  }
});

// ==================create a POST request for new Video==========================================

app.post("/videos", (req, res) => {
  const { title, channel, image } = req.body;
  const newVideo = {
    id: uuidv4(),
    title,
    channel,
    image,
  };
  data.push(newVideo);
  res.json(newVideo);
});
