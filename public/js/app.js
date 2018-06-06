$(function(){

  $('.button').on('click', function(){
    $('.box1').wrapInner('<div class="active"></div>')
  })

  $('.box3').on('click', function(){
    $('.box1').unwrap('.active')
  })

});



// END
