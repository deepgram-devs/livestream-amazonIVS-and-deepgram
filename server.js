const envConfig = require("dotenv").config();
const express = require("express");
const app = express();
const { Deepgram } = require("@deepgram/sdk");
const deepgram = new Deepgram(process.env.DEEPGRAM_API);
const cors = require("cors");
const port = 8080;

app.use(cors());

app.get("/deepgram-token", async (req, res) => {
  const newKey = await deepgram.keys.create(
    process.env.DEEPGRAM_PROJECT_ID,
    "Temporary key - works for 10 secs",
    ["usage:write"],
    { timeToLive: 10 }
  );
  res.send(newKey);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
