const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: ".slider-num",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      const currentSlide = current < 10 ? "0" + current.toString() : current;
      const totalSlides = total < 10 ? "0" + total.toString() : total;
      return (
        '<span class="slider-num__current">' +
        currentSlide +
        '</span><span class="slider-num__divider"></span><span class="slider-num__total">' +
        totalSlides +
        "</span>"
      );
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  speed: 500
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("#header");
  const scrollUp = document.querySelector("#scroll-up");

  if (window.scrollY > 100) {
    header.classList.add("header--sticky");
  }

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("header--sticky");
    } else {
      header.classList.remove("header--sticky");
    }

    if (window.scrollY > 400) {
      scrollUp.classList.add("scroll-up--visible");
    } else {
      scrollUp.classList.remove("scroll-up--visible");
    }

    scrollUp.addEventListener("click", function () {
      console.log(window);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // проба попап
  const openPopunBtn = document.querySelector("#btn-popup");
  const modal = document.querySelector("#my-modal");
  const closeBtn = document.querySelector("#modal-close__btn");

  openPopunBtn.addEventListener("click", function() {
      modal.classList.add("modal-popup--visible");
  })

  closeBtn.addEventListener("click", function() {
      modal.classList.remove("modal-popup--visible");
  })
});