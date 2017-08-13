$(document).ready(function() {
  var fader = $('.slide');

  fader.find('li:gt(0)').hide();

  fader.fadeTo(500, 1);

  setInterval(function(){
    fader.find(':first-child')
      .fadeTo(500, 0)
      .next('li')
      .fadeTo(500, 1)
      .end()
      .appendTo(fader);
  }, 4000);
});
