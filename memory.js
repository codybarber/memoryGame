$(document).ready(function() {

  $('.tile').click(function() {
    $(this).addClass('selected');
      var timeoutId = setTimeout(function() {
        $('.tile').removeClass('selected');
      }, 1250);
  });

});
