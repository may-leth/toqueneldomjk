// documentación de la librería https://tonejs.github.io/
// ejemplo: https://tonejs.github.io/examples/sampler
// iniciamos Tone.js
// https://tonejs.github.io/#tonesampler
const sampler = new Tone.Sampler({
  urls: {
    C3: "C3.mp3",
    "C#3": "Cs3.mp3",
    D3: "D3.mp3",
    "D#3": "Ds3.mp3",
    E3: "E3.mp3",
    F3: "F3.mp3",
    "F#3": "Fs3.mp3",
    G3: "G3.mp3",
    "G#3": "Gs3.mp3",
    A3: "A3.mp3",
    "A#3": "As3.mp3",
    B3: "B3.mp3",
    C4: "C4.mp3",
    "C#4": "Cs4.mp3",
    D4: "D4.mp3",
    "D#4": "Ds4.mp3",
    E4: "E4.mp3",
    F4: "F4.mp3",
    "F#4": "Fs4.mp3",
    G4: "G4.mp3",
    "G#4": "Gs4.mp3",
    A4: "A4.mp3",
    "A#4": "As4.mp3",
    B4: "B4.mp3",
  },
  release: 1, // para que no corte el audio de golpe, tenga una latencia
  baseUrl: "assets/samples/piano/",
}).toDestination(); // conecta a la salida de audio de nuestro navegador

// activamos Tone.js solo cuando se toca una tecla por primera vez
// https://tonejs.github.io/#starting-audio
let audioStarted = false;
function startAudio() {
  if (!audioStarted) {
    // activamos el sistema de audio de Tone.js
    Tone.start();
    audioStarted = true;
  }
}
// https://tonejs.github.io/#tonesynth
// reproduce una nota
function playNote(note) {
  sampler.triggerAttack(note);
}
// para la nota
function stopNote(note) {
  // aplica el release que le decimos en sampler
  sampler.triggerRelease(note);
}
// conectamos piano con teclado del ordenador y ratón: seleccionamos todas las teclas del piano
document.querySelectorAll(".key").forEach((key) => {
  //   console.log(key);
  const note = key.dataset.note; // del elemento key entramos al dataset y guardamos el valor de la nota (ejemplo C3)
  //   console.log(note);
  // creamos los event listener
  // mousedown: cuando hacemos click
  key.addEventListener("mousedown", () => {
    startAudio();
    playNote(note);
    key.classList.add("click");
  });
  // mouseup: cuando dejamos de hacer click
  key.addEventListener("mouseup", () => {
    stopNote(note);
    key.classList.remove("click");
  });
  // mouseleave: si movemos el ratón fuera de la tecla SIN soltar el click
  key.addEventListener("mouseleave", () => {
    stopNote(note);
    key.classList.remove("click");
  });
});
