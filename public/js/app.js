$(function(){
  $('.selectoptions').change(function(){
    alert('Changed Value')
  })


  $('.myname').change(function(event){
    $('.box1').html('<h1>' + event.target.value + '</h1>')
  }).focusin(function(){
    $('.box2').css({
      background: 'blue'
    })
  }).focusout(function(){
    $('.box2').css({
      background: 'green'
    })
  })
});



// END
