$(function(){
  $('.box1 a').on('click', function(event){
    event.preventDefault()
    $('.box3').css({
      background: 'purple'
    })
  })

  $('.box2').on('click', function(){
    $('.box3').css({
      background: 'red'
    })
  })

  $('.button').on('click', function(event){
    event.stopPropagation()
    if(event.target.nodeName == 'DIV') {
      console.log(event.target.nodeName)
      $('.box3').css({
        background: 'purple'
      })
    } else {
      console.log(event.target.nodeName)
      $('.box3').css({
        background: 'yellow'
      })
    }

  })
});



// END
