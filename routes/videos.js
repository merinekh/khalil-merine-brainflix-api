const data = require("../data/videos.json");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

// =========================create a GET route for videos=========================================
router.get("/", (req, res) => {
  res.send(data);
});

// ==================create a GET route for videos details========================================
const videosId = require("../data/videos.json");

router.get("/:id", (req, res) => {
  //Line 9
  const videoId = videosId.find((element) => element.id === req.params.id);
  if (videoId) {
    req.params;
    res.send(videoId);
  } else {
    res.send("Couldn't import data from the API");
  }
});

// ==================create a POST request for new Video==========================================

router.post("/videos", (req, res) => {
  const { title, descr } = req.body;
  const newVideo = {
    id: uuidv4(),
    title,
    channel,
    image: "http://localhost:8080/images/Upload-video-preview.jpg",
    description:
      "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
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
  data.push(newVideo);
  res.json(newVideo);
});

module.exports = router;
