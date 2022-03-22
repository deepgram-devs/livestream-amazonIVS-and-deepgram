<template>
  <div>
    <p class="status">AWS Channel {{ IVSStatus }}</p>
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
import { ref, watch } from "vue";
import useIVSPlayer from "../composables/useIVSPlayer";
import useIVSChannel from "../composables/useIVSChannel";

export default {
  name: "VideoPlayer",
  setup() {
    let IVSStatus = ref("Is Not Connected");

    useIVSPlayer.then(() => {
      const { playerIsLoaded } = useIVSChannel();
      watch(playerIsLoaded, () => {
        if (playerIsLoaded.value) {
          IVSStatus.value = "Is Connected";
        }
      });
    });
    return { IVSStatus };
  },
};
</script>
