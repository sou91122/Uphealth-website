

$(document).ready(function () {
});
  // product-carousel  and trending carousel//
  $('#product-carousel, #trending-carousel').slick({
    dots: false,
    infinite: false,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// product-carousel //
// -------------------banner carousel-----------//
$('#banner-area-carousel').slick({
  dots: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 10,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true
          }
      },
      {
          breakpoint: 767,
          settings: {
              slidesToShow: 5,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1
          }
      }
  ]
});

//-------- brands carousel ---------//

$('#brand-carousel').slick({
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
  });


  // login signup modal

$('.btn.loginbtn').click(function(){
    $(".login-signup-sec .login-signup .login-area").addClass("active");
    $(".login-signup-sec .login-signup .signup-area").removeClass("active");
  
  });
  $('.change-opt .signup-in').click(function(){
    $(".login-signup-sec .login-signup .login-area").removeClass("active");
    $(".login-signup-sec .login-signup .signup-area").addClass("active");
  
  });
  $('.change-opt .login-in').click(function(){
    $(".login-signup-sec .login-signup .login-area").addClass("active");
    $(".login-signup-sec .login-signup .signup-area").removeClass("active");
  
  });
  
  $('.btn.signupbtn').click(function(){
    $(".login-signup-sec .login-signup .signup-area").addClass("active");
    $(".login-signup-sec .login-signup .login-area").removeClass("active");
  });
  
  // password eye open close
  $('.password-eye').click(function(){
    $(this).toggleClass("active");
  });


//   range slider   //

(function() {

    var parent = document.querySelector(".range-slider");
    if(!parent) return;
  
    var
      rangeS = parent.querySelectorAll("input[type=range]"),
      numberS = parent.querySelectorAll("input[type=number]");
  
    rangeS.forEach(function(el) {
      el.oninput = function() {
        var slide1 = parseFloat(rangeS[0].value),
              slide2 = parseFloat(rangeS[1].value);
  
        if (slide1 > slide2) {
                  [slide1, slide2] = [slide2, slide1];
          // var tmp = slide2;
          // slide2 = slide1;
          // slide1 = tmp;
        }
  
        numberS[0].value = slide1;
        numberS[1].value = slide2;
      }
    });
  
    numberS.forEach(function(el) {
      el.oninput = function() {
              var number1 = parseFloat(numberS[0].value),
                      number2 = parseFloat(numberS[1].value);
              
        if (number1 > number2) {
          var tmp = number1;
          numberS[0].value = number2;
          numberS[1].value = tmp;
        }
  
        rangeS[0].value = number1;
        rangeS[1].value = number2;
  
      }
    });
  
  })();


// heart shape //
$(".hrticon1 ul li a").click(function(){
  $(this).toggleClass("active");
});


// checkout panel increment decrement
(function() {
 
  window.inputNumber = function(el) {

    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();

inputNumber($('.updown-btn .input-number'))

// weightbtn //
$(".weight-label.area1 .waitbtn li").click(function(){
  $(".weight-label.area1 .waitbtn li").removeClass("active");
  $(this).toggleClass("active");

});

$(".weight-label.area2 .waitbtn li").click(function(){
  $(".weight-label.area2 .waitbtn li").removeClass("active");
  $(this).toggleClass("active");

});

$(".weight-label.area3 .waitbtn li").click(function(){
  $(".weight-label.area3 .waitbtn li").removeClass("active");
  $(this).toggleClass("active");

});

// //   chosen plugin
// $(".form-control.chosen") .chosen();



// login loader
// $(".hidesmall button .btn").click(function(){
//   $(".loader-main-area .loader-area").toggleClass("active");
// });