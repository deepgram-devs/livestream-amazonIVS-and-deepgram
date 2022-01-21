<template>
  <video
    width="520"
    height="440"
    id="video-player"
    controls
    playsinline
  ></video>
</template>

<script>
export default {
  name: "VideoPlayer",
  setup() {
    let IVSPlayerIsReady = false;

    let amazonIVS = document.createElement("script");
    amazonIVS.setAttribute(
      "src",
      "https://player.live-video.net/1.6.1/amazon-ivs-player.min.js"
    );
    document.head.appendChild(amazonIVS);

    let checkInterval = setInterval(function () {
      if (IVSPlayer) {
        console.log(IVSPlayerIsReady);
        if (IVSPlayer) {
          console.log(IVSPlayer);
          IVSPlayerIsReady = true;
          console.log(IVSPlayerIsReady);
          clearInterval(checkInterval);
          createIVSPlayer();
        }
      }
    }, 500);

    function createIVSPlayer() {
      if (IVSPlayerIsReady) {
        if (IVSPlayer && IVSPlayer.isPlayerSupported) {
          const player = IVSPlayer.create();
          player.attachHTMLVideoElement(
            document.getElementById("video-player")
          );
          player.load(
            "https://fe6f355df852.us-east-1.playback.live-video.net/api/video/v1/us-east-1.379562766779.channel.MNypeBLg2ede.m3u8"
          );
          player.play();
        }
      }
    }
  },
};
</script>

<style scoped>
video {
  margin: 20px;
}
</style>
