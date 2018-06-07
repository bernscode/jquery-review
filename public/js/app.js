$(function(){


  $('.btn').on('click', function(){
    var request = $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/1",
      method: "DELETE",
      // data: {
      //   title: 'Top 5 Best Cities To Live',
      //   body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      //   userId: 5
      // },
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
