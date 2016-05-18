$(document).ready(function() {

  $('.tile').click(function() {
    $(this).addClass('open');
    $('img').addClass('animated rubberBand');
      var timeoutId = setTimeout(function() {
        $('.tile').removeClass('open');
        $('img').removeClass('animated rubberBand');
      }, 1500);
  });

});
