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


  $('.owl-carousel').owlCarousel({
    loop:true,
    items: 5,
    responsive:{
      0:{
          items:1
      },
      480:{
          items:2
      },
      768:{
          items:3
      },
      938:{
          items:4
      }
    }
  })


  var skillsOffTopSet = $('.section-skill').offset().top;
  var statsOffTopSet = $('.statSection').offset().top;
  var countUpFinished = false
  
  $(window).scroll(function() {
    if (window.pageYOffset > skillsOffTopSet - $(window).height() + 200) {

      $('.chart').easyPieChart({
        easing: "easeInOut",
        trackColor: false,
        barColor: '#fff',
        scaleColor: false,
        lineWidth: 6,
        size: 152,
        onStep: function(from,to,percent) {
          $(this.el).find('.percent').text(Math.round(percent));
        }
      });
    }

    if (!countUpFinished && window.pageYOffset > statsOffTopSet - $(window).height() + 200) {

      $(".counter").each(function() {
        var element = $(this);
        var endVal = parseInt(element.text());

        element.countup(endVal);
      })

      countUpFinished = true;
    }

  });

  $('[data-fancybox]').fancybox();

  $('.portfolio-container-items').isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linar',
      queue: false
    }
  })

  $("#filters a").click(function() {
    $("#filters .current").removeClass('current')
    $(this).addClass("current")

    var selector = $(this).attr('data-filter')
    $('.portfolio-container-items').isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: 'linar',
        queue: false
      }
    })

    return false;
  })

  $("#navigation li a").click(function(e) {
    e.preventDefault();

    var targetEl = $(this).attr('href')
    var targetPosition = $(targetEl).offset().top;

    $("html, body").animate({
      scrollTop: targetPosition - 30
    }, "slow");
  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    const body = $("body")

    if ($(window).scrollTop() > navTop) {
      body.css("padding-top", nav.outerHeight() + "px")
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  };

});