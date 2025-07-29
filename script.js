// Efecto de escritura en tu nombre
const text = "👩‍💻 María Pia Saavedra";
let index = 0;
const speed = 120; // velocidad en ms

function typingEffect() {
  if (index < text.length) {
    document.getElementById("typing-name").innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect, speed);
  }
}

document.addEventListener("DOMContentLoaded", typingEffect);
