<template>
  <div>
    <p id="status">Not Connected</p>
    <p id="transcript"></p>
  </div>
</template>

<script>
export default {
  setup() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      console.log({ stream });
      if (!MediaRecorder.isTypeSupported("audio/webm"))
        return alert("Browser not supported");
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: "audio/webm",
      });

      const socket = new WebSocket("ws://localhost:8080/");

      socket.onopen = () => {
        document.querySelector("#status").textContent = "Connected";
        console.log({ event: "onopen" });
        mediaRecorder.addEventListener("dataavailable", async (event) => {
          if (event.data.size > 0 && socket.readyState == 1) {
            socket.send(event.data);
          }
        });
        mediaRecorder.start(250);
      };

      socket.onmessage = (message) => {
        setTimeout(() => {
          document.querySelector("#transcript").textContent =
            message.data + " ";
        }, 5000);
      };

      socket.onclose = () => {
        console.log({ event: "onclose" });
      };

      socket.onerror = (error) => {
        console.log({ event: "onerror", error });
      };
    });
    return {};
  },
};
</script>

<style scoped>
p {
  font-size: 2em;
}
</style>
