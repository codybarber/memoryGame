var state = 'first';

var source1;
var source2;
var solved = 0;


$(document).ready(function() {

  $('.tile').click(function() {
    if (state === 'first') {
      $(this).addClass('open');
      source1 = $(this).find('img').attr('src');
      // $('img').addClass('animated rubberBand');
      state = 'second';
    } else if (state === 'second') {
      $(this).addClass('open');
      // $('img').addClass('animated rubberBand');
      source2 = $(this).find('img').attr('src');
      state = 'first';
      if (source1 === source2) {
        solved += 2;
        $('.open').addClass('solved');
        $('.solved').removeClass('open');
        // $('.solved').removeClass('animated rubberBand');
        // $('.solved').addClass('animated infinite pulse');
      } else {
        var timeoutId = setTimeout(function() {
          $('.tile').removeClass('open');
          // $('img').removeClass('animated rubberBand');
        }, 1000);
      }
    }
    var solved = $('.solved').length;
    var totalCards = $('.tile').length;
    if (solved === totalCards) {
      $('#message').text('You Win!!!').addClass('animated infinite flash');
    }
  });
  $('.button').click(function() {
    location.reload();
  })
});
