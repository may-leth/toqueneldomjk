// iniciamos Tone.js
const sampler = new Tone.Sampler({
  urls: {
    C3: "C3.mp3",
  },
  release: 1, // para que no corte el audio de golpe, tenga una latencia
  baseUrl: "assets/samples/piano/",
}).toDestination(); // conecta a la salida de audio de nuestro navegador

// activamos Tone.js solo cuando se toca una tecla por primera vez
let audioStarted = false;
function startAudio() {
  if (!audioStarted) {
    // activamos el sistema de audio de Tone.js
    Tone.start();
    audioStarted = true;
  }
}
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
  const note = key.dataset.note; // del elemento key entramos al dataset y guardamos el valor de la nota (ejemplo C3)
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
