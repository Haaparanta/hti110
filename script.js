// Get the button elements
var openNavBtn = document.querySelector('.open-nav');
var closeNavBtn = document.querySelector('.close-nav');

// Get the side navigation element
var sideNav = document.querySelector('.side-nav');

// Add event listeners to the buttons
openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);

// Open the side navigation
function openNav() {
  sideNav.style.left = '0';
}

// Close the side navigation
function closeNav() {
  sideNav.style.left = '-200px';
}
