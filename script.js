// Ejemplo para animar el carrusel de coaches
let current = 0;
const coaches = document.querySelectorAll(".coach");
setInterval(() => {
  coaches.forEach((c, i) => {
    c.style.display = (i === current) ? "block" : "none";
  });
  current = (current + 1) % coaches.length;
}, 3000);
