
// TOGGLE DARK MODE
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var x = document.getElementById("btnValue");
  if (x.innerHTML === "Dark mode") {
    x.innerHTML = "Light mode";
    x.classList.remove('btn-dark')
    x.classList.toggle('btn-light')
  } else {
    x.innerHTML = "Dark mode";
    x.classList.remove('btn-light')
    x.classList.toggle('btn-dark')
  }
// NAVBAR CHANGE
  var xnav = document.getElementById("navBar")

  xnav.classList.toggle('navbar-dark');
  xnav.classList.toggle('bg-dark');



}


// SLIDER
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
  },
  // init: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },

    // 1440:{
    //   slidesPerView: 5,
    //   spaceBetween: 10,
    // },

  }
});