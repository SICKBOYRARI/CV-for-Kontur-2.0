$(function(){
    $('#sandwichmenu').on('click', function(e) {
        e.preventDefault();
        $('#sandwichmenu').toggleClass("active");
        $('.js_menu').toggleClass("active");
        $('.header__ul').toggleClass("header__ul-active");
        $('body').toggleClass("body-block")
    });
});