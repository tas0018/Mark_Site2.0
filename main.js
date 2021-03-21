const tabs = document.querySelectorAll(['[data-tab-target]'])
const tabContents = document.querySelectorAll('[data-tab-content]')



tabs.forEach(tab => {
    tab.addEventListener('click',()=> {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        
        target.classList.add('active')
    })
})

const circle = document.querySelector('#circle-one');
console.log()

/*Slide Section code */
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// javacript slider manual navigation
var manualNav = function(manual){
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
    btn.addEventListener("click", ()=> {
        manualNav(i);
        currentSlide = i;
    });
});

/*Dot Nov code */
$(window).scroll(function(){
    var scrollPosition = $(window).scrollTop();
    var dotOne = $('#dot-one').offset().top;
    var dotTwo = $('#dot-two').offset().top;
    var dotThree = $('#dot-three').offset().top;
    var dotFour =$('dot-four').offset().top;

    var nav1 = $('a[href="#dot-one"]');
    var nav2 = $('a[href="#dot-two"]');
    var nav3 = $('a[href="#dot-three"]');
    var nav4 = $('a[href="#dot-four"]');

    if (scrollPosition >= dotOne){
        $('.activeNav').removeClass('activeNav');
        $('#nav1').addClass('activeNav');
        nav1.contents('li').text('Section 1');
        nav1.siblings().contents('li').text('');
    }

    if (scrollPosition >= dotTwo){
        $('.activeNav').removeClass('activeNav');
        $('#nav2').addClass('activeNav');
        nav2.contents('li').text('Section 2');
        nav2.siblings().contents('li').text('');
    }

    if (scrollPosition >= dotThree){
        $('.activeNav').removeClass('activeNav');
        $('#nav3').addClass('activeNav');
        nav1.contents('li').text('Section 3');
        nav1.siblings().contents('li').text('');
    }


});


