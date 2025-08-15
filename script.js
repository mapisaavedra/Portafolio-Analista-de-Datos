// ========= Año en el footer =========
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});

// ========= Menú móvil =========
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("menu");
if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// ========= Scroll suave para anclas internas =========
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const targetId = a.getAttribute("href");
    const el = document.querySelector(targetId);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (menu && menu.classList.contains("open")) {
      menu.classList.remove("open");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    }
  });
});

// ========= Reveal on scroll =========
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("in-view");
  });
}, { threshold: 0.2 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// ========= Toggle de tema (claro por defecto / oscuro) =========
const themeBtn = document.querySelector(".nav-toggle-theme");
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

function setTheme(t){
  document.documentElement.classList.toggle("dark", t === "dark");
  document.documentElement.classList.toggle("light", t === "light");
  localStorage.setItem("theme", t);
}
if (themeBtn){
  themeBtn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  });
}

// ========= Filtro por tecnología =========
const chips = document.querySelectorAll(".filters .chip");
const cards = document.querySelectorAll(".grid .card, .feature.card");
chips.forEach(chip=>{
  chip.addEventListener("click", ()=>{
    chips.forEach(c=>c.classList.remove("is-active"));
    chip.classList.add("is-active");
    const f = chip.dataset.filter;
    cards.forEach(card=>{
      const tags = (card.dataset.tags || "");
      const shouldShow = (f === "all") || tags.includes(f);
      card.style.display = shouldShow ? "" : "none";
    });
  });
});
