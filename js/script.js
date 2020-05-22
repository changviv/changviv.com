$(document).ready(function() {
  $('#slides').superslides({
    animation: 'fade',
    play: 4000,
    pagination: false
  });

  var options = {
    strings: ["Software Engineer ^1000", "Freelancer ^1000", "Coffee Addict ^1000", "Rock Climber ^1000", "Plant Killer ^1000"],
    typeSpeed: 100,
    loop: true,
    startDelay: 1000,
    showCursor: false,
    smartBackspace: true
  };

  var typed = new Typed('.typed', options);
});