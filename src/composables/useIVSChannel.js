import { ref } from "vue";

export default function useIVSChannel() {
  let playerIsLoaded = ref(false);

  if (window.IVSPlayer && window.IVSPlayer.isPlayerSupported) {
    const player = window.IVSPlayer.create();
    player.attachHTMLVideoElement(document.getElementById("video-player"));
    player.load("PLAYBACK_URL");
    player.play();

    let checkInterval = setInterval(() => {
      if (player.core.isLoaded) {
        playerIsLoaded.value = true;
        clearInterval(checkInterval);
      }
    }, 500);

    return { playerIsLoaded };
  }
}
