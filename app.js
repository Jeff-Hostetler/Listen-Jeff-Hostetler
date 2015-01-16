"use strict";
$('.container').on('click', '.fa-play', function(){
  $('i').removeClass('fa-stop');
  $('i').addClass('fa-play');
  $(this).removeClass('fa-play');
  $(this).addClass('fa-stop');
})
$('.container').on('click', '.fa-stop', function(){
  $(this).removeClass('fa-stop');
  $(this).addClass('fa-play');
})



$('div').on('mouseenter', function(){
  document.getElementById('breathing').play();
  setTimeout(
    function()
  {
    $('body').addClass('scare')
    document.getElementById('scream').play();
  }, 15000);
})
$('div').on('mouseleave', function(){
  document.getElementById('honk').play();
})
