import { ref } from "vue";

export default function useCreateIVSPlayer() {
  if (IVSPlayer && IVSPlayer.isPlayerSupported) {
    const player = IVSPlayer.create();
    player.attachHTMLVideoElement(document.getElementById("video-player"));
    player.load(
      "https://fe6f355df852.us-east-1.playback.live-video.net/api/video/v1/us-east-1.379562766779.channel.MNypeBLg2ede.m3u8"
    );
    player.play();

    let playerIsLoaded = ref(false);
    let checkInterval = setInterval(() => {
      if (player.core.isLoaded) {
        playerIsLoaded.value = true;
        clearInterval(checkInterval);
      }
    }, 500);

    return { playerIsLoaded };
  }
}
