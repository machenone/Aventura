$(function() {

    $('.owl-carousel').owlCarousel({
        items: 1,
        navText: ['', ''],
        autoplay: true,
        autoplayTimeout: 6000,
        loop: true,
        center: true,
        responsive: {
            0: {
                nav: false
            },
            820: {
                stagePadding: 50,
            },
            920: {
                nav: true

            },
            1280: {
                stagePadding: 210,
                nav: true

            },
            1400: {
                stagePadding: 350,
                nav: true

            }
        }


    });
    var i = true,
        mMenuOpen = function() {
            $('.l_navlist').css({
                'left': 0
            });
            i = false;
            $('#pull').removeClass("fa-bars j_open").addClass("fa-times j_close");
        },
        mMenuClose = function() {
            $('.l_navlist').css({
                'left': -1000
            });
            i = true;
            $('#pull').removeClass("fa-times j_close").addClass("fa-bars j_open");
        };
    $(window).on('load resize', function() {
        mMenuClose();
        if ($(window).width() > '768') {
            mMenuClose();
            $('.l_navlist').css({
                'height': ''
            });
            // i = true;

            // $('.l_navlist').css({
            //     // 'top': '0',
            //     'position': 'absolute',
            //     'left': '-1000'
            // });
        } else {

            $('.l_navlist').css({
                'height': $(window).height()
            });
        }
    });
    $('#pull').click(function() {
        if (i)
            mMenuOpen();
        else
            mMenuClose();
    });

});