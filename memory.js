var state = 'first';

var source1;
var source2;
var solved = 0;

$(document).ready(function() {
  var pictures = _.shuffle([
    'monsters-01.png',
    'monsters-02.png',
    'monsters-03.png',
    'monsters-04.png',
    'monsters-05.png',
    'monsters-06.png',
    'monsters-07.png',
    'monsters-08.png',
    'monsters-09.png',
    'monsters-10.png',
    'monsters-11.png',
    'monsters-12.png',
    'monsters-13.png',
    'monsters-14.png',
    'monsters-15.png',
    'monsters-16.png'
  ]);

  var fourPics = [];
  fourPics = pictures.slice(0, 4)

  var eightPics = [];
  eightPics = fourPics.concat(fourPics);

  shuffledPics = _.shuffle(eightPics);

  for (var i = 0; i < 8; i++) {
    $('#grid').append('<div class="tile">' + '<img class="monster" src="images/' + shuffledPics[i] + '">' + '<div class="back"></div>' + '</div>');
  }



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
