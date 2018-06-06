$(function(){


  $('.btn').on('click', function(){
    var request = $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET",
      // data: { id : menuId },
      // dataType: "html"
    });

    request.done(function( data ) {
      console.log(data)
    });

    request.fail(function( jqXHR, textStatus, error) {
      alert( "Request failed: " + textStatus + ' ' + error);
    });
  })

});



// END
