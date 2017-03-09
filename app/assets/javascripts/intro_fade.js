$(document).ready(function() {
  $("#fade p").delay(10).animate({ opacity: 1 }, 900)
})


$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('#fade').css({
        'opacity': ((height - scrollTop) / height)
    });
});


