$(function(){
  var pokemonSearch;
  var defaultPokemon = '1'
  var defaultPokemonData;

  var initFunc = function() {
    // access all pokemon
    // https://pokeapi.co/api/v2/pokemon/?limit=811
    defaultPokemonData = $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + defaultPokemon,
      method: "GET",
    });
    defaultPokemonData.done(function( data ) {
      defaultPokemonData = data;

      $('.loading-container').removeClass('active')

      $('.pokedex h3').text(defaultPokemonData.name.toUpperCase())

      $('.poke-img img').attr('src', defaultPokemonData.sprites.front_default)
      console.log(data)
    });

    defaultPokemonData.fail(function( jqXHR, textStatus, error) {
      alert( "Request failed: " + textStatus + ' ' + error);
    });
  }


  initFunc()


  $('.btn').on('click', function(){

    $('.loading-container').addClass('active')

    pokemonSearch = $('.pokedex input[type="text"]').val()

    var request = $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch,
      method: "GET",
    });

    request.done(function( data ) {

      $('.loading-container').removeClass('active')

      $('.pokedex h3').text(data.name.toUpperCase())

      $('.poke-img img').attr('src', data.sprites.front_default)
      console.log(data)
    });

    request.fail(function( jqXHR, textStatus, error) {
      alert( "Request failed: " + textStatus + ' ' + error);
    });
  })

});



// END
