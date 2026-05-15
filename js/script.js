/* EFECTO 3D SUAVE */

const card = document.getElementById("card3d");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;

  card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});
/* MENU MOBILE */

const menuBtn = document.getElementById("menu-btn");
const links = document.getElementById("links");

menuBtn.addEventListener("click", () => {
  links.classList.toggle("active");
});