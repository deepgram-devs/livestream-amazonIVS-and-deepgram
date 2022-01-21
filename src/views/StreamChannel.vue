<template>
  <div>
    <h1 class="header-wrap">Sandra's Channel</h1>
    <video-player />
    <audio-captions />
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer";
import AudioCaptions from "@/components/AudioCaptions.vue";
export default {
  name: "StreamChannel",
  components: {
    VideoPlayer,
    AudioCaptions,
  },
};
</script>
