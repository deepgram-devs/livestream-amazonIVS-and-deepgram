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
import useIVSPlayerIsReady from "../composables/useIVSPlayerIsReady";
import useCreateIVSPlayer from "../composables/useCreateIVSPlayer";
import { ref, watch } from "vue";
export default {
  name: "VideoPlayer",
  setup() {
    let IVSStatus = ref("Is Not Connected");

    useIVSPlayerIsReady.then(() => {
      const { playerIsLoaded } = useCreateIVSPlayer();

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
