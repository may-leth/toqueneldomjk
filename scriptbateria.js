// Mapeo de teclas
const keyMap = {
  a: "kick",
  s: "hihatpie",
  d: "hihatcerrado",
  f: "crash",
  g: "ride",
  h: "redoblante",
  j: "redoblantebaquetacruzada",
  k: "tomagudo",
  l: "tombajo",
  p: "tompiso",
};

// Inicializar los samples con rutas locales
const players = new Tone.Players(
  {
    kick: "assets/samples/bateria/Bombo.mp3",
    redoblante: "assets/samples/bateria/Redoblantesonido.mp3",
    redoblantebaquetacruzada:
      "assets/samples/bateria/Redoblante(baqueta-cruzada).mp3",
    hihatpie: "assets/samples/bateria/Hi-Hat(pie).mp3",
    hihatcerrado: "assets/samples/bateria/Hi-Hat(cerrado).mp3",
    crash: "assets/samples/bateria/Platillo-Crash.mp3",
    ride: "assets/samples/bateria/Platillo-Ride.mp3",
    tomagudo: "assets/samples/bateria/Tom-tom-agudo.mp3",
    tombajo: "assets/samples/bateria/Tom-tom-bajo.mp3",
    tompiso: "assets/samples/bateria/Tom-de-piso.mp3",
  },
  {}
).toDestination();

// Click en botones
document.querySelectorAll(".drum-pad").forEach((pad) => {
  pad.addEventListener("click", async () => {
    await Tone.start(); // Activa el audio
    const sound = pad.dataset.sound;
    if (!sound) return;
    playSound(sound);
    animate(pad);

    const showInstrumentPlayed = document.querySelector(
      `.container-bateria .drum-pad[data-sound="${sound}"]`
    );
    if (showInstrumentPlayed) {
      animate(showInstrumentPlayed);
    }
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
