$(window).load(function () {
    $(".se-pre-con").fadeOut(800);
    $(function () {
        $("img").lazyload({
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        });
    });
});

$(document).ready(function () {
    // 스크롤시 헤더 사라짐
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();
    $(window).scroll(function (event) {
        didScroll = true;
    });
    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }﻿
    }, 100);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('header').addClass('nav-up');
            $('.menu-sub').addClass('fadeout');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up');
                 $('.menu-sub').removeClass('fadeout');
            }
        }
        lastScrollTop = st;
    }


    $('.animate').scrolla({
        mobile: true,
        once: true
    });

    $('#button-show-window').click(function () {
        var template = $('#modal-template').html();
        $('body').append(template);
        $('.animate').scrolla('bind');
        $('section.modal .modal-close').click(function () {
            $(this).closest('section.modal').remove();
        });

        return false;
    });


    $('.burger').click(function () {
        $(this).toggleClass('open');
        $('.sidemenu').toggleClass('open')
    })

    $('.burger-white').click(function () {
        $(this).toggleClass('open');
        $('.sidemenu').toggleClass('open')
    })

});
