$(function(){

  console.log($('.box2').width())

  if ($('.box2').width() > 500) {
    $('.box2').css({
      background: 'red'
    })
  }


  $('.box2').css({
    paddingLeft: '50px',
    
  })

});



// END
