$(function(){

  //create a div with class of box1 and a display of none on the style, with an h1 tag that says box1
  //create a button outside of box1 that when clicked adds a class of active to box1. Now on your css file make the class active display block

  $('.btn1').on('click', function(){
    $('.box1').addClass('active')
  })

  //create a div with a class of box2 and add an h1 tag inside of it that says box2. create an input text field then create a button under the input field.
  //Now when you click on this second button count how many letters inside of the input field, then display that inside of the div with the class box2.

  $('.box2 button').on('click', function(){
    var value = $('.box2 input[type="text"]').val()


    $('.box2').append('<span>This field has ' + value.length + ' characters</span>')
  })



});



// END
