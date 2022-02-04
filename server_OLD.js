const envConfig = require("dotenv").config();
const { Deepgram } = require("@deepgram/sdk");
const deepgram = new Deepgram(process.env.DEEPGRAM_API);
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: "8080" });
const deepgramSocket = deepgram.transcription.live({
  punctuate: true,
  endpointing: true,
});

let transcript;

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    deepgramSocket.send(message);
    ws.send(transcript);
  });
});

deepgramSocket.addListener("transcriptReceived", (transcription) => {
  transcript = JSON.parse(transcription).channel.alternatives[0].transcript;
});

deepgramSocket.addListener("open", () => {
  console.log("Connection opened!");
});
