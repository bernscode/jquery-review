$(function(){
  $(window).resize(function() {

    if($(window).width() > 1000){
      $('body').css({
        background: 'red'
      })
    }else if ($(window).width() > 700) {
      $('body').css({
        background: 'blue'
      })
    }else {
      $('body').css({
        background: 'yellow'
      })
    }

  })
});



// END
