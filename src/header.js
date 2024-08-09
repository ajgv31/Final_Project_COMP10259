$(document).ready(function() {
    var $header = $('.header-container');
    var headerInitialHeight = $header.outerHeight();

    //Set the header as fixed immediately
    $header.css({
        'position': 'fixed',
        'top': '0',
        'width': '100%',
        'z-index': '1000',
        'box-shadow': '0 4px 8px rgba(0,0,0,0.1)',
        'transition': 'top 0.3s ease, box-shadow 0.3s ease'
    });

    //Offset the content immediately by the height of the header
    $('body').css('padding-top', headerInitialHeight + 'px');

});
