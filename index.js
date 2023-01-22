const videoRoutes = require("./routes/videos");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
var cors = require("cors");

app.use(cors());
app.use(express.json());

// NEW CODE
app.use(express.static("public"));
// END OF NEW CODE

// This displays message that the server running and listening to specified port

app.use(express.static("public"));

app.use("/videos", videoRoutes);
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
