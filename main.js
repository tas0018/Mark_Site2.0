const tabs = document.querySelectorAll(["[data-tab-target]"]);
const tabContents = document.querySelectorAll("[data-tab-content]");

//Smooth scroll using jquery

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });

    target.classList.add("active");
  });
});

//jquery code move to top of PoweEd section on click
$(".btn").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".img-slider").offset().top,
    },
    "slow"
  );
});

//Jquery code for swiping functionality for slide 1
$("#power-slide").on("swipeleft", function (e) {
  currentSlide = 0;
  slides.forEach((slide) => {
    slide.classList.remove("activeSlide");

    btns.forEach((btn) => {
      btn.classList.remove("activeSlide");
    });
  });

  slides[currentSlide + 1].classList.add("activeSlide");
  btns[currentSlide + 1].classList.add("activeSlide");
  currentSlide = 1;
  console.log(currentSlide);
});

//Jquery code for swiping functionality for slide 2
//Swipe left
$("#purchase-slide").on("swipeleft", function (e) {
  slides.forEach((slide) => {
    slide.classList.remove("activeSlide");

    btns.forEach((btn) => {
      btn.classList.remove("activeSlide");
    });
  });

  slides[currentSlide + 1].classList.add("activeSlide");
  btns[currentSlide + 1].classList.add("activeSlide");
  currentSlide++;
  console.log(currentSlide);
});

//Swipe Right
$("#purchase-slide").on("swiperight", function (e) {
  slides.forEach((slide) => {
    slide.classList.remove("activeSlide");

    btns.forEach((btn) => {
      btn.classList.remove("activeSlide");
    });
  });

  slides[currentSlide - 1].classList.add("activeSlide");
  btns[currentSlide - 1].classList.add("activeSlide");
  currentSlide--;
  console.log(currentSlide);
});

//Jquery code for swiping functionality for slide 3
//Swipe left
$("#lease-slide").on("swipeleft", function (e) {
  slides.forEach((slide) => {
    slide.classList.remove("activeSlide");

    btns.forEach((btn) => {
      btn.classList.remove("activeSlide");
    });
  });

  slides[currentSlide + 1].classList.add("activeSlide");
  btns[currentSlide + 1].classList.add("activeSlide");
  currentSlide++;
  console.log(currentSlide);
});

//Swipe Right
$("#lease-slide").on("swiperight", function (e) {
  slides.forEach((slide) => {
    slide.classList.remove("activeSlide");

    btns.forEach((btn) => {
      btn.classList.remove("activeSlide");
    });
  });

  slides[currentSlide - 1].classList.add("activeSlide");
  btns[currentSlide - 1].classList.add("activeSlide");
  currentSlide--;
  console.log(currentSlide);
});

//Jquery code for swiping functionality for slide 4
//Swipe right
$("#subscribe-slide").on("swiperight", function (e) {
  slides.forEach((slide) => {
    slide.classList.remove("activeSlide");

    btns.forEach((btn) => {
      btn.classList.remove("activeSlide");
    });
  });

  slides[currentSlide - 1].classList.add("activeSlide");
  btns[currentSlide - 1].classList.add("activeSlide");
  currentSlide--;
  console.log(currentSlide);
});

const circle = document.querySelector("#circle-one");
console.log();

/*Slide Section code */
var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
let currentSlide = 1;

// javacript slider manual navigation
var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("activeSlide");

    btns.forEach((btn) => {
      btn.classList.remove("activeSlide");
    });
  });

  slides[manual].classList.add("activeSlide");
  btns[manual].classList.add("activeSlide");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

/*Sticky Nav code Starts*/
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
/*Sticky Nav code Ends*/
