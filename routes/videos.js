const data = require("../data/videos.json");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

// =========================create a GET route for videos=========================================
router.get("/videos", (req, res) => {
  res.send(data);
});

// ==================create a GET route for videos details========================================
const videosId = require("../data/video-details.json");

router.get("/videos/:id", (req, res) => {
  //Line 9
  const videoId = videosId.find((element) => element.id === req.params.id);
  if (videoId) {
    res.send(videoId);
  } else {
    res.send("Couldn't import data from the API");
  }
});

// ==================create a POST request for new Video==========================================

router.post("/videos", (req, res) => {
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

module.exports = router;
