const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar-ul");

burger.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});
