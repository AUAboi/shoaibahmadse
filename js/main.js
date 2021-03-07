const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar-ul");
const line = document.querySelectorAll(".line");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  line.forEach((line) => {
    line.classList.toggle("line-active");
  });
  navbar.classList.toggle("nav-active");
});
