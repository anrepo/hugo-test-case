// Components
let currentYear, anchorLinks, navLinks;

// Global Variables
let heightHeader;

window.addEventListener('resize', function() {
	heightHeader = document.querySelector('header').clientHeight;
}, true);

document.addEventListener('DOMContentLoaded', function(){
  heightHeader = document.querySelector('header').clientHeight;
});