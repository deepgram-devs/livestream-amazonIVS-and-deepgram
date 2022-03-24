//make this more agnostic to work for appending any script
export default new Promise((res) => {
  const script = document.createElement("script");
  script.setAttribute(
    "src",
    "https://player.live-video.net/1.6.1/amazon-ivs-player.min.js"
  );
  document.head.appendChild(script);
  script.onload = () => res();
  script.onerror = () => {
    throw "IVS PLAYER ERROR";
  };
});
