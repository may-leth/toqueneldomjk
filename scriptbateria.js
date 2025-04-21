// Mapeo de teclas
const keyMap = {
  a: "kick",
  s: "snare",
  d: "hihat",
  f: "crash",
  g: "tom1",
  h: "tom2",
};

// Inicializar los samples con rutas locales
const players = new Tone.Players({
  kick: "assets/samples/kick.mp3",
  snare: "assets/samples/snare.mp3",
  hihat: "assets/samples/hihat.mp3",
  crash: "assets/samples/crash.mp3",
  tom1: "assets/samples/tom1.mp3",
  tom2: "assets/samples/tom2.mp3",
}, {
}).toDestination();

// Click en botones
document.querySelectorAll(".drum-pad").forEach(pad => {
  pad.addEventListener("click", async () => {
    await Tone.start(); // Activa el audio
    const sound = pad.dataset.sound;
    playSound(sound);
    animate(pad);
  });
});

// Presionar teclas
document.addEventListener("keydown", async (e) => {
  const sound = keyMap[e.key.toLowerCase()];
  if (sound) {
    await Tone.start(); // Activa el audio
    playSound(sound);
    const pad = document.querySelector(`.drum-pad[data-sound="${sound}"]`);
    animate(pad);
  }
});

function playSound(sound) {
  if (players.player(sound)) {
    players.player(sound).start();
  }
}

function animate(pad) {
  pad.classList.add("active");
  setTimeout(() => pad.classList.remove("active"), 150);
}
