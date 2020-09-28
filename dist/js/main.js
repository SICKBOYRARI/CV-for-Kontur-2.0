$(function(){
    $('#sandwichmenu').on('click', function(e) {
        e.preventDefault();
        $('#sandwichmenu').toggleClass("active");
        $('.js_menu').toggleClass("active");
        $('.header__ul').toggleClass("header__ul-active");
        // $('body').toggleClass("body-block")
    });
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:"<img class='a-left control-c prev slick-prev' src='./img/left.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='./img/right.png'>",
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 850,
            settings:{
                arrows: false
            }
        }]
    });

    var btn = $('.ontop-button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.removeClass('show');
        } else {
            btn.addClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
    const homeBtn = $('#homeBtn');
    const aboutBtn = $('#aboutBtn');
    const skillsBtn = $('#skillsBtn');
    const portfolioBtn = $('#portfolioBtn');
    const contactBtn = $('#contactBtn');
    // $(homeBtn).click(function(event) {
    //     event.preventDefault();
    //
    //     $('html, body').animate({
    //         scrollTop: $("#home").offset().top
    //     }, 2000);
    // });
    $(aboutBtn).click(function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
    $(skillsBtn).click(function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 1000);
    });
    $(portfolioBtn).click(function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 1000);
    });
    $(contactBtn).click(function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 1000);
    });
    AOS.init();

// You can also pass an optional settings object
// below listed default settings
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
});