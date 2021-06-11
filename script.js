var typed = new Typed(".typing", {
  strings: [
    "FrontEnd Developer",
    "BackEnd Developer",
    "FullStackDeveloper",
    "Gamer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});
