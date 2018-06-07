$(function(){
  var pokemonSearch;

  $('.btn').on('click', function(){

    pokemonSearch = $('.pokedex input[type="text"]').val()

    var request = $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch,
      method: "GET",
      // data: {
      //   title: 'Top 5 Best Cities To Live',
      //   body: "",
      //   userId: 5
      // },
      // dataType: "html"
    });

    request.done(function( data ) {

      $('.pokedex h3').text(data.name)

      $('.poke-img img').attr('src', data.sprites.front_default)
      console.log(data)
    });

    request.fail(function( jqXHR, textStatus, error) {
      alert( "Request failed: " + textStatus + ' ' + error);
    });
  })

});



// END
