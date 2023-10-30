let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

function navbardisplay() {
  menu.classList.toggle("fa-close");
  navbar.classList.toggle("active");
}
menu.addEventListener("click", navbardisplay);

window.onscroll = () => {
  menu.classList.remove("fa-close");
  navbar.classList.remove("active");
};

function searchform() {
  document.querySelector("#search-form").classList.add("active");
}
function removeform() {
  document.querySelector("#search-form").classList.remove("active");
}

document.querySelector("#search-icon").addEventListener("click", searchform);

document.querySelector("#close").addEventListener("click", removeform);
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
