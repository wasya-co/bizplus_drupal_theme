/**
 * @file
 * Global utilities.
 *
 */
 (function ($, Drupal) {

  'use strict';
  Drupal.behaviors.business_plus = {
    attach: function (context, settings) {
      $('.masonry-portfolio .row').isotope({
        itemSelector: '.item1',
        masonry: {
            columnWidth: 1
         }
      }); 
      $('.masonry-portfolio2 .row').isotope({
        itemSelector: '.item2',
        masonry: {
            columnWidth: 1
        }
      });
      $(document).ready(function () { 
        $('#Check1').click(function(){
          if($(this).is(":checked")){
          $('#main').addClass('responsive-sticky');
          $('.header.active .nav-sticky').addClass('navigation-sticky');
          }
          else if($(this).is(":not(:checked)")){
            $('#main').removeClass('responsive-sticky');
            $(".header.active .nav-sticky").removeClass("navigation-sticky");
            $(".header.active .nav-sticky").removeClass("sticky");
          }
        });
        $(function () {
          $(document).scroll(function () {
            var $nav = $(".header.active .nav-sticky.navigation-sticky");
            $nav.toggleClass("sticky", $(this).scrollTop() > 20);
          });
        });
        $(function () {
          $(document).scroll(function () {
            var $nav = $("#header-1 .navigation-sticky");
            // var $na = $("#main");
            // var $height = $("#header-1 .navbar-wrapper");
            var $height = $("#header-1");
            // $nav.toggleClass("header-fixed", $(this).scrollTop() > $height.height());
            $nav.toggleClass("header-fixed", $(this).scrollTop() > 10);
          });
        });
        $(function () {
          $(document).scroll(function () {
            var $na = $("#main");
            var $nav = $("#header-3 .navigation-sticky");
            $na.toggleClass("header-fixed", $(this).scrollTop() > 0);
            $nav.toggleClass("header-fixed", $(this).scrollTop() > 10);
          });
        });
      });
      // navbar-active class
      $('.page-node-1 .nav-sticky .navbar-nav .nav-item:first-child,.page-node-2 .nav-sticky .navbar-nav .nav-item:first-child,.page-node-3 .nav-sticky .navbar-nav .nav-item:first-child').addClass('active');
      $( '.nav-sticky .navbar-nav .nav-item > a' ).on( 'click', function () {
        $( '.nav-sticky .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
        $( this ).parent( '.nav-item' ).addClass( 'active' );
      });

        // slider 2
      $(document).ready(function(){
        $(".home2-info-block ul li").first().addClass( "active" );
        $(".carousels3 ul li").first().addClass( "active" );
        
      });   
      // Start
      $(document).ready(function(){
        $("#loader").delay(1500).fadeOut(500);
        // UPLOAD FILE
        $(".careers-details-block .upload-file").on("change", ".file-upload", function(){
            $(this).attr("data-text", $(this).val().replace(/.*(\/|\\)/, ''));
        })
        // AOS.init();
        AOS.init({
          duration: 1200,
        })


        // PAGE SCROLL-TOP
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        });
        $('.scroll-top').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 100);
            return false;
        });
        // TOOLTIPS PAGE
        $(function(){
            $('[data-tooltip]').tooltip();
        })
      
        // Custom js 
        $('.hamber-icon').click(function(){
            $('.hamber-icon').addClass('dnone');
            $('.close-icon ').removeClass('dnone');
            
        });
         $('.close-icon').click(function(){
            $('.close-icon').addClass('dnone');
            $('.hamber-icon').removeClass('dnone');
         });


        // MAGNIFIC POPUP
        $('.video-popup').magnificPopup({
            type:'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">'+
                          '<div class="mfp-close"></div>'+
                          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                        '</div>',
              
                patterns: {
                  youtube: {
                    index: 'youtube.com/',
              
                    id: 'v=',
              
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                  },
                  vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                  },
                  gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                  }
              
                },
                srcAction: 'iframe_src',
            }
        });
    
        // CODE_BLOCK
        var $code_block =  $("pre").attr("class");
        // console.log($code_block);
        if($code_block == "language-markup")
        {
            var elementCopy = document.getElementsByClassName("language-markup");
            if(typeof(elementCopy) != 'undefined' && elementCopy != null){ 
                var clipboard = new ClipboardJS('.clipboard');   
                clipboard.on('success', function (e) {
                e.trigger.textContent = 'Copied';
                window.setTimeout(function() {
                    e.trigger.textContent = 'Copy to Clipboard';
                }, 8000);
                console.log(e);
                });
                clipboard.on('error', function (e) {
                console.log(e);
                });
            }
        }
    
        // ACCORDION COLLAPSE
        $('.accordion-block .collapse').on('shown.bs.collapse', function(){
            $(this).parent().find(".svg-minus").removeClass("d-none").addClass("d-block");
            $(this).parent().find(".svg-plus").removeClass("d-block").addClass("d-none");
        }).on('hidden.bs.collapse', function(){
            $(this).parent().find(".svg-plus").removeClass("d-none").addClass("d-block");
            $(this).parent().find(".svg-minus").removeClass("d-block").addClass("d-none");
        });
    
        // ALERTS CLOSE
        $(".alert-block .close").click(function(){
            $(this).parent(".alert-area").fadeOut();
        })
    
    
        // SWIPER JS
        var swiper = new Swiper(".carousels-block .mySwiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            // autoplay: {
            //   delay: 5000,
            //   disableOnInteraction: false,
            // },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
              576: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                  slidesPerGroup: 2,
              },
            },
        });
    
        var swiper = new Swiper(".carousels-block .mySwiper1", {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            // autoplay: {
            //   delay: 5000,
            //   disableOnInteraction: false,
            // },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
              576: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  slidesPerGroup: 1,
              },
              767: {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 2,
              },
            },
        });
    
        var swiper = new Swiper(".home1-info-block .mySwiper", {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              type: "fraction",
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
              576: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  slidesPerGroup: 1,
              },
            },
        });
    
        var swiper = new Swiper(".home3-info-block .mySwiper", {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            // autoplay: {
            //   delay: 1000,
            //   disableOnInteraction: false,
            // },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              type: "fraction",
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
              576: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  slidesPerGroup: 1,
              },
            },
        });
    
        // OWL JS
        var $first_owl =  $(".carousels-block .carousels4 #owl-carousel1").attr("class");
        if($first_owl == "owl-carousel owl-theme"){
            $(".carousels-block .carousels4 .owl-carousel").owlCarousel({
                nav: false,
                navText: ["<i class='fas fa-angle-double-left'></i>", "<i class='fas fa-angle-double-right'></i>"],
                margin: 30,
                slideBy: 1,
                dots: false,
                autoplay: true,
                autoplayTimeout: 50000,
                loop: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                    },
                    576: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    }
                }
            });
        }
        
        var $first_owl =  $(".carousels-block .carousels5 #owl-carousel2").attr("class");
        if($first_owl == "owl-carousel owl-theme"){
            $(".carousels-block .carousels5 .owl-carousel").owlCarousel({
                nav: false,
                navText: ["<i class='fas fa-angle-double-left'></i>", "<i class='fas fa-angle-double-right'></i>"],
                margin: 30,
                slideBy: 1,
                dots: false,
                autoplay: true,
                autoplayTimeout: 50000,
                loop: true,
                responsive: {
                    0: {
                        items: 2,
                        nav: false,
                    },
                    576: {
                        items: 3,
                    },
                    768: {
                        items: 5,
                    }
                }
            });
        }
    
    
    
        // PORTFOLIO 
        $('.home1-portfolio-block .row').isotope({
            itemSelector: '.item1',
            masonry: {
                columnWidth: 1
             }
        });
        $('.home2-portfolio .home2-portfolio-block .row').isotope({
            // options
            itemSelector: '.item2',
            masonry: {
                columnWidth: 1
             }
        });
        

        
            //COMING SOON
            function getTimeRemaining(endtime) {
              var t = Date.parse(settings.custom_date) - Date.parse(new Date());
              var seconds = Math.floor((t / 1000) % 60);
              var minutes = Math.floor((t / 1000 / 60) % 60);
              var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
              var days = Math.floor(t / (1000 * 60 * 60 * 24));
              return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
                };
            }
            function initializeClock(id, endtime) {
              var clock = document.getElementById(id);
              var daysSpan = clock.querySelector('.days');
              var hoursSpan = clock.querySelector('.hours');
              var minutesSpan = clock.querySelector('.minutes');
              var secondsSpan = clock.querySelector('.seconds');
              function updateClock() {
                var t = getTimeRemaining(endtime);
                daysSpan.innerHTML = t.days;
                hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
                if (t.total <= 0) {
                  clearInterval(timeinterval);
                  document.getElementById("clockdiv").innerHTML = settings.custom_message_dateExpired;
                }
              }
              updateClock();
              var timeinterval = setInterval(updateClock, 1000);
              }
              var deadline = new Date(Date.parse(new Date()));
              if($("#clockdiv").length){
                initializeClock('clockdiv', deadline);
              }

    })
      //End
    // ID REMOVAL
    $(function(){
      $(".hamburger-footer-form input").removeAttr("id");
    })
  

    // LANGUAGE DROPDOWN
    $(".language").hover(function () {
      $(".language .dropdown-menu").toggleClass("lang-active");
    });
    // COMMENT VALIDATOR
    function validate(){
      var cnv = $('form.comment-form textarea').val();
      if (!$.trim(cnv)) {
        $(once('commentForm_validate','form.comment-form textarea')).after('<strong class="error">This field is required</strong>');
          return false;
      } else { return true; }
    }
    $(once('commentform_validate','form.comment-form')).submit(validate);





    }

  };


})(jQuery, Drupal);
