<template>
  <div>
    <p>{{ deepgramStatus }}</p>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import useDeepgramKey from "@/composables/useDeepgramKey";
import useDeepgramSocket from "@/composables/useDeepgramSocket";
export default {
  setup() {
    let deepgramStatus = ref("Deepgram Not Connected");

    useDeepgramKey().then((res) => {
      deepgramStatus.value = res.DGStatus.value;
    });

    const { DGStatus_socket } = useDeepgramSocket();

    watch(DGStatus_socket, () => {
      deepgramStatus.value = DGStatus_socket.value;
    });

    return { deepgramStatus };
  },
};
</script>
