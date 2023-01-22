const data = require("../data/videos.json");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
// =========================create a GET route for videos=========================================
router.get("/", (req, res) => {
  const readVideos = fs.readFileSync("./data/videos.json");
  const videos = JSON.parse(readVideos);

  res.json(videos);
  // res.send(data);
});

// ==================create a GET route for videos details========================================
const videosId = require("../data/videos.json");

router.get("/:id", (req, res) => {
  const readVideos = fs.readFileSync("./data/videos.json");
  const videos = JSON.parse(readVideos);

  res.json(videos);
  //Line 9
  const videoId = videos.find((element) => element.id === req.params.id);
  if (videoId) {
    req.params;
    res.json(videoId);
  } else {
    res.json("Couldn't import data from the API");
  }
});

// ==================create a POST request for new Video==========================================

router.post("/", (req, res) => {
  const readVideos = fs.readFileSync("./data/videos.json");
  const videos = JSON.parse(readVideos);

  const { title, description } = req.body;
  // console.log(title, description);

  const newVideo = {
    id: uuidv4(),
    title,
    channel: "Khalil Channel",
    image: "http://localhost:8080/images/Upload-video-preview.jpeg",
    description,
    views: "12,220",
    likes: "11,330",
    duration: "1:01",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1626032763000,
    comments: [
      {
        id: uuidv4(),
        name: "Micheal Lyons",
        comment:
          "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
        likes: 0,
        timestamp: 1628522461000,
      },
      {
        id: uuidv4(),
        name: "Gary Wong",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        likes: 0,
        timestamp: 1626359541000,
      },
      {
        id: uuidv4(),
        name: "Theodore Duncan",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!",
        likes: 0,
        timestamp: 1626011132000,
      },
    ],
  };

  videos.push(newVideo);
  fs.writeFileSync("./data/videos.json", JSON.stringify(videos));

  res.status(201).send("Video Upload Thank You!");
});

module.exports = router;
