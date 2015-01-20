$.getJSON('data.json', function(tracks){
  var $tracksTemplate = $('.tracksTemplate').html();
  var newHTML = Mustache.to_html($tracksTemplate, tracks);

  $('.tracks').html(newHTML);

  $.each(tracks.tracks, function(index, track){
      $('.'+track.file).on('click', '.fa-play', function(){
      $('i').removeClass('fa-stop');
      $('i').addClass('fa-play');
      $(this).removeClass('fa-play');
      $(this).addClass('fa-stop');
      console.log(track.title);
      $('audio').each(function(){
        this.pause();
      });
      $('h1').text("Now playing: " + track.title);
      document.getElementById(track.file).play();
    })

    $('.'+track.file).on('click', '.fa-stop', function(){
      $(this).removeClass('fa-stop');
      $(this).addClass('fa-play');
      $('h1').text( "Select a Song!" );
      document.getElementById(track.file).pause();
    })

  });
});
