$(function(){
  $('.button1').on('click',function(){
    console.log('bernscode')
  })

  $('.button2').hover(function(){
    for(i = 1; i <= 25; i++) {
      console.log(i);
    }
  })


  $('.square').mouseenter(function(){
    $(this).css({
      background: 'red'
    })
  })
});



// END
