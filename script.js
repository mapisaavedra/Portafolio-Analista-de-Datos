// =====================
// 1. Typing Effect en tu nombre
// =====================
const text = "👩‍💻 María Pia Saavedra";
let index = 0;
const speed = 120; // Velocidad en ms

function typingEffect() {
  if (index < text.length) {
    document.getElementById("typing-name").innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect, speed);
  }
}
document.addEventListener("DOMContentLoaded", typingEffect);

// =====================
// 2. Scroll suave para la navegación
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// =====================
// 3. Animación fade-in para proyectos
// =====================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".project-card").forEach(card => {
  observer.observe(card);
});
