$(function(){

  console.log($('.box1').children())

  $('.box1').children().css({
    background: 'blue',
    display: 'inline-block',
    padding: '20px',
    margin: '20px',
    color: 'white'
  })


  $('p').each(function(){
    console.log(this)

    $(this).css({
      background: 'yellow'
    })
  })


  $('ul li').first().css({
    background: 'green'
  })


});



// END
