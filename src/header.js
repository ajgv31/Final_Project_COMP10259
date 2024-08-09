$(document).ready(function() {
    var headerHeight = $('.header-container').outerHeight();

    // Check if the header should be fixed
    function checkScroll() {
        if ($(window).scrollTop() > 0) {
            $('.header-container').css({
                'position': 'fixed',
                'top': '0',
                'width': '100%',
                'z-index': '1000'
            });
            $('body').css('padding-top', headerHeight + 'px'); // Offset content
        } else {
            $('.header-container').css({
                'position': 'relative'
            });
            $('body').css('padding-top', '0'); // Remove offset when at top
        }
    }

    // Run the function on page load
    checkScroll();

    // Run the function when the page is scrolled
    $(window).scroll(function() {
        checkScroll();
    });

    // Optional: Smooth scrolling for in-page navigation
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - headerHeight
        }, 500, 'linear');
    });
});
