let w = document.documentElement.clientWidth || window.innerWidth;

if (w <= 680) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30
  });
} else {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 30
  });
}


