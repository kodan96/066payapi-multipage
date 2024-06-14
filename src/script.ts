import $ from 'jquery';

$(function() {
    $('.open, .close').on('click', () => {
        $('nav').slideToggle();
        $('.open, .close').toggle();
        $('body').toggleClass('hidden')
    });
});