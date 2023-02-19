const navbar = document.getElementById("navbar");
const button = document.querySelector(".navbar-btn");

button.addEventListener("click", toggleNavbar);

function toggleNavbar() {
  navbar.classList.toggle("show-navbar");
  button.classList.toggle("active");
}
