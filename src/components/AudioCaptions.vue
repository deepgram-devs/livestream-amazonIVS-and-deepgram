<template>
  <div>
    <p class="status">{{ status }}</p>
    <div class="btn-container">
      <button class="dg-btn" @click="openStream()">Start Captions</button>
      <button class="dg-btn-stop" @click="closeStream()">Stop Captions</button>
    </div>
  </div>
</template>

<script>
import useDeepgram from "../composables/useDeepgram";

export default {
  setup() {
    const { openStream, closeStream, status } = useDeepgram();
    return { openStream, closeStream, status };
  },
};
</script>

<style scoped>
.btn-container {
  display: flex;
  justify-content: center;
}
.status {
  height: 5vh;
}
</style>
