const tabs = document.querySelectorAll(['[data-tab-target]'])
const tabContents = document.querySelectorAll('[data-tab-content]')


//Smooth scroll using jquery



tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })

        target.classList.add('active')
    })
})

//jquery code move to top of PoweEd section on click
$(".btn").click(function () {
    $('html,body').animate({
        scrollTop: $(".img-slider").offset().top
    },
        'slow');
});

const circle = document.querySelector('#circle-one');
console.log()

/*Slide Section code */
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// javacript slider manual navigation
var manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('activeSlide');

        btns.forEach((btn) => {
            btn.classList.remove('activeSlide');
        });
    });

    slides[manual].classList.add('activeSlide');
    btns[manual].classList.add('activeSlide')
}

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
})
/*Sticky Nav code Ends*/


