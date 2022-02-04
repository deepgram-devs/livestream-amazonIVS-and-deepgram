<template>
  <div>
    <button @click="openStream()">Start</button>
    <button @click="closeStream()">Stop</button>
    <p>{{ status }}</p>
    <p id="transcript"></p>
  </div>
</template>

<script>
import useDeepgram from "../composables/useDeepgram";

export default {
  setup() {
    const { openStream, closeStream, status } = useDeepgram();

    return { openStream, closeStream, status };

    // console.log(key);

    // if (mediaRecorder) {
    //   console.log(mediaRecorder);
    // }

    // mediaRecorder.then((res) => {
    //   console.log(res);
    // });

    // return { start };

    // console.log(getStream);

    // useWebSocket();
    // useDeepgram()

    // navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    //   console.log({ stream });
    //   if (!MediaRecorder.isTypeSupported("audio/webm"))
    //     return alert("Browser not supported");
    //   const mediaRecorder = new MediaRecorder(stream, {
    //     mimeType: "audio/webm",
    //   });

    // mediaRecorder.addEventListener("dataavailable", async (event) => {
    //   console.log(event);
    // });

    // const socket = new WebSocket("ws://localhost:8080/");

    // socket.onopen = () => {
    //   document.querySelector("#status").textContent = "Connected";
    //   console.log({ event: "onopen" });

    //   //   mediaRecorder.addEventListener("dataavailable", async (event) => {
    //   //     if (event.data.size > 0 && socket.readyState == 1) {
    //   //       socket.send(event.data);
    //   //     }
    //   //   });
    //   //   mediaRecorder.start(250);
    //   // start();
    // };

    // socket.onmessage = (message) => {
    //   setTimeout(() => {
    //     document.querySelector("#transcript").textContent =
    //       message.data + " ";
    //   }, 5000);
    // };

    // socket.onclose = () => {
    //   console.log({ event: "onclose" });
    // };

    // socket.onerror = (error) => {
    //   console.log({ event: "onerror", error });
    // };
    // });
    // return {};
  },
};
</script>

<style scoped>
p {
  font-size: 2em;
}
</style>
