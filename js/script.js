document.addEventListener('DOMContentLoaded', function () {
   //mobile menu
   const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
   const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
   const videoPlayer = document.getElementById('videoPlayer');

   // console.log(toggleButton);
   // console.log(mobileMenu);

   toggleButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
   });
});

// video modal
const modal = document.getElementById('videoModal');
const videoButton = document.querySelector('.preview__video-button');
const closeButton = document.querySelector('.modal__close-button');

videoButton.addEventListener('click', function () {
   modal.style.display = 'block';
   // replace the src attribute with video url
   videoPlayer.src = 'https://www.youtube.com/embed/8sXRyHI3bLw';
   // console.log(videoPlayer);

   // close modal on close btn click

   closeButton.addEventListener('click', function () {
      modal.style.display = 'none';
      videoPlayer.src = '';
   });

   window.addEventListener('click', function (event) {
      if (event.target == modal) {
         modal.style.display = 'none';
         videoPlayer.src = '';
      }
   });
});

// navigation background on scroll
window.addEventListener('scroll', function () {
   const navbar = this.document.querySelector('.navbar');

   if (this.window.scrollY > 0) {
      navbar.classList.add('navbar-scroll');
   } else {
      navbar.classList.remove('navbar-scroll');
   }
});
