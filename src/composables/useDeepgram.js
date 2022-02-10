import { onBeforeMount, ref } from "vue";
import getUserMic from "../composables/getUserMic";

let key;
let recorder;
const status = ref("Not Connected");

//Get token from Deepgram and once it arrives, open Deepgram socket
const getData = async () => {
  fetch("http://localhost:8080/deepgram-token", {
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((response) => {
      key = response.key;
      openDeepgramSocket();
    })
    .catch((error) => {
      console.log("Looks like there was a problem: \n", error);
    });
};

//Open channel to Deepgram to send data
const openDeepgramSocket = () => {
  const { mediaRecorder } = getUserMic();
  recorder = mediaRecorder;
  const socket = new WebSocket(
    "wss://api.deepgram.com/v1/listen?punctuate=true",
    ["token", key]
  );

  socket.onopen = () => {
    status.value = "";
    console.log("Connection opened.");

    recorder.addEventListener("dataavailable", async (event) => {
      if (event.data.size > 0 && socket.readyState == 1) {
        socket.send(event.data);
      }
    });
    recorder.start(200);
  };

  socket.onmessage = (message) => {
    const received = JSON.parse(message.data);
    const transcript = received.channel.alternatives[0].transcript;
    if (transcript && received.is_final) {
      status.value = transcript + "";
    }
  };

  socket.onclose = () => {
    console.log("Connection closed.");
  };
};

//Methods to make available in component

const openStream = () => {
  status.value = "Connected";
  getData();
};

const closeStream = () => {
  recorder.stop();
  status.value = "Not Connected";
};

export default function useDeepgram() {
  onBeforeMount(() => {
    getUserMic();
  });

  return { openStream, closeStream, status };
}
