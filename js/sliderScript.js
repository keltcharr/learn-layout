const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    speed: 500
  });