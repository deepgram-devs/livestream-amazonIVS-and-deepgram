<template>
  <div>
    <video
      width="520"
      height="440"
      id="video-player"
      controls
      playsinline
    ></video>
  </div>
</template>

<script>
import useIVSPlayerIsReady from "../composables/useIVSPlayerIsReady";
import useCreateIVSPlayer from "../composables/useCreateIVSPlayer";
export default {
  name: "VideoPlayer",
  setup() {
    useIVSPlayerIsReady.then(() => {
      useCreateIVSPlayer();
    });

    return;
  },
};
</script>

<style scoped>
video {
  margin: 20px;
}
</style>
