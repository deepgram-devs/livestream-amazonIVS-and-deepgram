import { ref } from "vue";

export default function useIVSChannel() {
  let playerIsLoaded = ref(false);

  if (window.IVSPlayer && window.IVSPlayer.isPlayerSupported) {
    const player = window.IVSPlayer.create();
    player.attachHTMLVideoElement(document.getElementById("video-player"));
    player.load(
      "https://fe6f355df852.us-east-1.playback.live-video.net/api/video/v1/us-east-1.379562766779.channel.MNypeBLg2ede.m3u8"
    );
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
