$(function(){

  $('.button').on('click', function(){
    $('.firstP:first').before('<p>NEW MESSAGE</p>')

    $('<p>NEW MESSAGE</p>').insertAfter('.firstP:first')

  })


});



// END
