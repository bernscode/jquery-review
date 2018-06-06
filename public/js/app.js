$(function(){
  $('div').addClass('active')

  if($('div').hasClass('active')) {
    console.log('This element has been activated')
  } else{
    console.log('Sorry, waiting to be activated')
  }



  $('.button').on('click', function(){
    $('div').toggleClass('active')
  })




});



// END
