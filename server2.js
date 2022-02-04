const envConfig = require("dotenv").config();
const express = require("express");
const app = express();
const { Deepgram } = require("@deepgram/sdk");
const deepgram = new Deepgram(process.env.DEEPGRAM_API);
const cors = require("cors");
const port = 8080;
const WebSocket = require("ws");
// const wss = new WebSocket.Server({ port: port });

app.use(cors());

// wss.on("connection", (ws) => {
//   ws.on("message", (message) => {
//     // deepgramSocket.send(message);
//     ws.send("test");
//   });
// });

app.get("/deepgram-token", async (req, res) => {
  // console.log(req);
  // res.json("Hello");
  const newKey = await deepgram.keys.create(
    process.env.DEEPGRAM_PROJECT_ID,
    "Temporary key - works for 10 secs",
    ["usage:write"],
    { timeToLive: 10 }
  );
  res.send(newKey);
});

// app.get("/", (req, res) => {
//   res.json("Hello World");
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
