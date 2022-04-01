import { ref } from "vue";
import useDeepgramKey from "./useDeepgramKey";
import useMicrophone from "./useMicrophone";

let DGStatus_socket = ref("");

function openDeepgramSocket(apiKey, microphone) {
  const socket = new WebSocket(
    "wss://api.deepgram.com/v1/listen?punctuate=true",
    ["token", apiKey]
  );

  socket.onopen = () => {
    if (microphone.state != "recording") {
      // updates DGStatus_socket
      DGStatus_socket.value = "Connected to Deepgram";
      console.log("Connection opened.");

      microphone.addEventListener("dataavailable", async (event) => {
        if (event.data.size > 0 && socket.readyState == 1) {
          socket.send(event.data);
        }
      });

      microphone.start(200);
    }
  };

  socket.onmessage = (message) => {
    const received = JSON.parse(message.data);
    const transcript = received.channel.alternatives[0].transcript;
    if (transcript && received.is_final) {
      // updates DGStatus_socket
      DGStatus_socket.value = transcript + "";
    }
  };

  socket.onclose = () => {
    console.log("Connection closed.");
  };
}

export default function useDeepgramSocket() {
  useDeepgramKey().then((keyRes) => {
    useMicrophone().then((microphoneRes) => {
      let apiKey = keyRes.key.value;
      let microphone = microphoneRes.microphone;

      openDeepgramSocket(apiKey, microphone);
    });
  });
  return { DGStatus_socket };
}
