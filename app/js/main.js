$(function(){
    $('#sandwichmenu').on('click', function(e) {
        e.preventDefault();
        $('#sandwichmenu').toggleClass("active");
        $('.js_menu').toggleClass("active");
        $('.header__ul').toggleClass("header__ul-active");
        $('body').toggleClass("body-block")
    });
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:"<img class='a-left control-c prev slick-prev' src='../img/left.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='../img/right.png'>",
        autoplay: true,
        autoplaySpeed: 4000,
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
});