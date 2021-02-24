const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar-ul");

burger.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
  burger.classList.toggle("active");
  navbar.classList.toggle("nav-active");
});
