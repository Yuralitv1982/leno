document.addEventListener('DOMContentLoaded', function () {
   const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
   const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

   console.log(toggleButton);
   console.log(mobileMenu);

   toggleButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
   });
});
