$(function(){
  $(document).on('click', '.box1', function(){
    $('body').css({
      background: 'red'
    })
  })

  $( ".box2" ).on({
    click: function() {
      $('body').css({
      background: 'purple'
      })
    }, mouseenter: function() {
      $('body').css({
      background: 'yellow'
      })
    }, mouseleave: function() {
      $('body').css({
      background: 'red'
      })
    }
  });
});



// END
