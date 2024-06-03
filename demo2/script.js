const recordAudio = () =>
  new Promise(async (resolve) => {
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (error) {
      // Handle error (e.g., user denied permission)
      console.error("Error accessing microphone:", error);
      return;
    }

    const options = { mimeType: "audio/webm" };
    const mediaRecorder = new MediaRecorder(stream, options);
    const audioChunks = [];
    mediaRecorder.addEventListener("dataavailable", (event) => {
      audioChunks.push(event.data);
    });

    const start = () => mediaRecorder.start();

    const stop = () =>
      new Promise((resolve) => {
        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          const play = () => audio.play();
          resolve({ audioBlob, audioUrl, play });
        });
        mediaRecorder.stop();
      });
    resolve({ start, stop });
  });

// Rest of the code remains the same

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

var record = true;

const startRecording = async () => {
  const recording = await recordAudio();
  const recorder = document.getElementById("recorder");
  recorder.disabled = true;
  recording.start();
  while (record == true) {
    await sleep(1);
  }
  const audio = await recording.stop();
  await sleep(2000);
  audio.play();
  recorder.disabled = false;
};

document.getElementById("recorder").addEventListener("click", (e) => {
  if (document.getElementById("recorder").classList.contains("recording")) {
    document.getElementById("recorder").classList.remove("recording");
    document.getElementById("recorder").classList.add("download");
    record = false;
    setTimeout(function () {
      document.getElementById("recorder").classList.remove("download");
      document.getElementById("recorder").classList.add("out");
    }, 1000);
  } else if (
    !document.getElementById("recorder").classList.contains("recording") &&
    !document.getElementById("recorder").classList.contains("download")
  ) {
    document.getElementById("recorder").classList.remove("out");
    document.getElementById("recorder").classList.add("recording");
    record = true;
    startRecording();
  }
});
