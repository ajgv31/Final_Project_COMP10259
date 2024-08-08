$(document).ready(function() {
    var header = $('.header-container');
    var headerHeight = header.outerHeight();
    $(window).scroll(function() {
        if ($(this).scrollTop() > headerHeight) {
            header.css({
                'position': 'fixed',
                'top': '0',
                'width': '100%',
                'z-index': '1000',
                'box-shadow': '0 4px 8px rgba(0,0,0,0.1)'
            });
        } else {
            header.css({
                'position': 'static',
                'box-shadow': 'none'
            });
        }
    });
});