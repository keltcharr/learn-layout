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
  const mobileMenu = document.querySelector("#mobile-menu");
  const mobileMenuOpenBtn = document.querySelector("#header-menu-mobile__button");
  const mobileMenuCloseBtn = document.querySelector("#mobile-menu__close-button");

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
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

//mobileMenuBtn.addEventListener("click", function () {
//   if (!mobileMenu.classList.contains("mobile-menu--is-open")) {
//       mobileMenu.classList.add("mobile-menu--is-open");
//   }
// });

// mobileMenuCloseBtn.addEventListener("click", function () {
//   if (mobileMenu.classList.contains("mobile-menu--is-open")) {
//       mobileMenu.classList.remove("mobile-menu--is-open");
//   }
// });

  mobileMenuOpenBtn.addEventListener("click", function () {
      if (!mobileMenu.classList.contains("mobile-menu--is-open")) {
        mobileMenu.classList.add("mobile-menu--is-open");
      }
    });
   
    mobileMenuCloseBtn.addEventListener("click", function () {
      if (mobileMenu.classList.contains("mobile-menu--is-open")) {
        mobileMenu.classList.remove("mobile-menu--is-open");
      }
    });
  });

  // проба попап
  const modal = document.getElementById("#modal");
  const modalOpener = document.querySelector("")

});