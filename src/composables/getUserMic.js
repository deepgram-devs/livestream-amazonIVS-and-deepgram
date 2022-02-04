import { readonly } from "vue";

let mediaRecorder = readonly({});

navigator.mediaDevices.getUserMedia({ audio: true }).then((res) => {
  mediaRecorder = new MediaRecorder(res, {
    audio: true,
  });
});

export default function getUserMic() {
  return { mediaRecorder };
}
