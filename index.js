const videoRoutes = require("./routes/videos");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
var cors = require("cors");

app.use(cors());
app.use(express.json());
// This displays message that the server running and listening to specified port

app.use(express.static("public"));

app.use("/", videoRoutes);
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
