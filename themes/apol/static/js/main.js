// Components
let anchorLinks, navLinks;

// Global Variables
let heightHeader;

window.addEventListener('resize', function() {
	heightHeader = document.querySelector('header').clientHeight;
}, true);

document.addEventListener('DOMContentLoaded', function(){
  heightHeader = document.querySelector('header').clientHeight;
  
	document.querySelectorAll(".js--set-actual-year").forEach(function (item) {
    item.innerHTML = new Date().getFullYear();
  });
});