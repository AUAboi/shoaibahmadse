const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar-ul");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navbar.classList.toggle("nav-active");
});
