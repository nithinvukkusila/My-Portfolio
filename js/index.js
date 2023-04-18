// NAVIGATION LOGO SCROLL TOP
$('.logo').on('click', function(e) {
    e.preventDefault();
    $('.nav-toggle').removeClass('open');
    $('.menu-left').removeClass('collapse');
    $('html, body').animate({
      scrollTop: 0
    }, 750, 'easeInOutQuad')
  });
  // LINKS TO ANCHORS
  $('a[href^="#"]').on('click', function(event) {
  
    var $target = $(this.getAttribute('href'));
  
    if($target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: $target.offset().top
      }, 750, 'easeInOutQuad');
    }
  });
  
  // TOGGLE HAMBURGER & COLLAPSE NAV
  $('.nav-toggle').on('click', function() {
    $(this).toggleClass('open');
    $('.menu-left').toggleClass('collapse');
  });
  // REMOVE X & COLLAPSE NAV ON ON CLICK
  $('.menu-left a').on('click', function() {
    $('.nav-toggle').removeClass('open');
    $('.menu-left').removeClass('collapse');
  });
  
  // SHOW/HIDE NAV
  
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();
  
  $(window).scroll(function(event){
      didScroll = true;
  });
  
  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);
  
  function hasScrolled() {
      var st = $(this).scrollTop();
  
      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;
  
      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('header').removeClass('show-nav').addClass('hide-nav');
          $('.nav-toggle').removeClass('open');
          $('.menu-left').removeClass('collapse');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('header').removeClass('hide-nav').addClass('show-nav');
          }
      }
  
      lastScrollTop = st;
  }




  // skills
  var commute = new Boolean;
function css3RadialProgressBar() {
  
  var xvaluenow;
  
  console.log(commute);
  
if (commute == 0) {
   xvaluenow = 80;
   var progreso = document.getElementById('progreso');
   progreso.innerHTML = 'Progress '+ xvaluenow + '%';
  commute = 1;
  } else {
  xvaluenow = 0;
  
  var progreso = document.getElementById('progreso');
   progreso.innerHTML = 'Click to view';
    commute = 0;
 
  };
  

  var rotatenum = 'rotate(' + xvaluenow * 1.8 + 'deg)';
  //var progress = document.getElementById('progress');
  
  var progress_circle = document.getElementById('progress-circle');
  var progress_style = document.getElementById('progress-style');
  
  /* Fix: Cover gap with shadow */
  if (xvaluenow == 0) {
    var shadowfix = "0";
  }
  else {
    var shadowfix = "1px";
  }
  
 
  
  progress_circle.setAttribute("aria-valuenow", xvaluenow);  
  progress_style.innerHTML = " \
.p-h:before, .p-f, .p-f:before{ \
-moz-transform: " + rotatenum + "; \
-webkit-transform: " + rotatenum + "; \
-o-transform: " + rotatenum + "; \
-ms-transform: " + rotatenum + "; \
transform: " + rotatenum + "; \
-webkit-box-shadow: 0 0 0 " + shadowfix + " #828282; \
  box-shadow: 0 0 0 " + shadowfix + " #828282;}\
\ ";
}
 /*----------------------------------------------------*/

var commute01 = new Boolean;
function css3RadialProgressBar01() {
  
  var xvaluenow01;
  
  console.log(commute01);
  
if (commute01 == 0) {
   xvaluenow01 = 70;
   var progreso01 = document.getElementById('progreso01');
   progreso01.innerHTML = 'Progress '+ xvaluenow01 + '%';
  commute01 = 1;
  } else {
  xvaluenow01 = 0;
  
  var progreso01 = document.getElementById('progreso01');
   progreso01.innerHTML = 'Click to view';
    commute01 = 0;
 
  };
  

  var rotatenum = 'rotate(' + xvaluenow01 * 1.8 + 'deg)';
  //var progress = document.getElementById('progress');
  
  var progress_circle01 = document.getElementById('progress-circle01');
  var progress_style01 = document.getElementById('progress-style01');
  
  /* Fix: Cover gap with shadow */
  if (xvaluenow01 == 0) {
    var shadowfix = "0";
  }
  else {
    var shadowfix = "1px";
  }
  
 
  
  progress_circle01.setAttribute("aria-valuenow", xvaluenow01);  
  progress_style01.innerHTML = " \
.p-h01:before, .p-f01, .p-f01:before{ \
-moz-transform: " + rotatenum + "; \
-webkit-transform: " + rotatenum + "; \
-o-transform: " + rotatenum + "; \
-ms-transform: " + rotatenum + "; \
transform: " + rotatenum + "; \
-webkit-box-shadow: 0 0 0 " + shadowfix + " #828282; \
  box-shadow: 0 0 0 " + shadowfix + " #828282;}\
\ ";
}


//document.body.onload = function() {css3RadialProgressBar()};

 /*----------------------------------------------------*/

var commute02 = new Boolean;
function css3RadialProgressBar02() {
  
  var xvaluenow02;
  
  console.log(commute02);
  
if (commute02 == 0) {
   xvaluenow02 = 50;
   var progreso02 = document.getElementById('progreso02');
   progreso02.innerHTML = 'Progress '+ xvaluenow02 + '%';
  commute02 = 1;
  } else {
  xvaluenow02 = 0;
  
  var progreso02 = document.getElementById('progreso02');
   progreso02.innerHTML = 'Click to view';
    commute02 = 0;
 
  };
  

  var rotatenum = 'rotate(' + xvaluenow02 * 1.8 + 'deg)';
  //var progress = document.getElementById('progress');
  
  var progress_circle02 = document.getElementById('progress-circle02');
  var progress_style02 = document.getElementById('progress-style02');
  
  /* Fix: Cover gap with shadow */
  if (xvaluenow02 == 0) {
    var shadowfix = "0";
  }
  else {
    var shadowfix = "1px";
  }
  
 
  
  progress_circle02.setAttribute("aria-valuenow", xvaluenow02);  
  progress_style02.innerHTML = " \
.p-h02:before, .p-f02, .p-f02:before{ \
-moz-transform: " + rotatenum + "; \
-webkit-transform: " + rotatenum + "; \
-o-transform: " + rotatenum + "; \
-ms-transform: " + rotatenum + "; \
transform: " + rotatenum + "; \
-webkit-box-shadow: 0 0 0 " + shadowfix + " #828282; \
  box-shadow: 0 0 0 " + shadowfix + " #828282;}\
\ ";
}


//document.body.onload = function() {css3RadialProgressBar()};