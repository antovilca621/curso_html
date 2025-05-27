const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Tamaño de pantalla
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const phrase = "TE AMO SANTI";
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

// Dibujar el texto
function draw() {
  // Fondo semitransparente para el efecto de estela
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff69b4"; // Rosa fuerte (HotPink)
  ctx.font = fontSize + "px Arial";

  for (let i = 0; i < drops.length; i++) {
    const text = phrase;
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 100);

// Redimensionar al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});