$(document).ready(function() {
    var headerHeight = $('.header-container').outerHeight();

    function checkScroll() {
        if ($(window).scrollTop() > 0) {
            $('.header-container').css({
                'position': 'fixed',
                'top': '0',
                'width': '100%',
                'z-index': '1000'
            });
            $('body').css('padding-top', headerHeight + 'px'); 
        } else {
            $('.header-container').css({
                'position': 'relative'
            });
            $('body').css('padding-top', '0'); 
        }
    }

    checkScroll();

    $(window).scroll(function() {
        checkScroll();
    });

    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - headerHeight
        }, 500, 'linear');
    });
});

 
 

 
