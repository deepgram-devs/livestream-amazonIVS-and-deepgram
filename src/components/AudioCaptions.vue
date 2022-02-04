<template>
  <div>
    <p class="status">{{ status }}</p>

    <button @click="openStream()">Start Captions</button>
    <button @click="closeStream()">Stop Captions</button>
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
p {
  font-size: 2em;
}

.status {
  height: 5vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
