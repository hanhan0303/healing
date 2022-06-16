// navMenu的js--Start
const navButton = document.querySelector('.nav_btn');
const navMenu = document.querySelector('.nav_menu');

navButton.addEventListener('click', function () {
  navButton.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// navMenu的js--End
