$(document).ready(function(){
    $("#page-loader").delay(1500).fadeOut(500);

    // $(".navbar-toggler.sidebar").click(function(){
    //     $(".side-footer").slideToggle("slow");
    // })
    // UPLOAD FILE
    $(".careers-details-block .upload-file").on("change", ".file-upload", function(){
        $(this).attr("data-text", $(this).val().replace(/.*(\/|\\)/, ''));
    })

    AOS.init();

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

    // navbar-active class
    $( '.nav-sticky .navbar-nav .nav-item > a' ).on( 'click', function () {
        $( '.nav-sticky .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
        $( this ).parent( '.nav-item' ).addClass( 'active' );
    });

    $(".navbar-brand + .navbar-toggler").click(function(){
        var hambar = $(".navbar-brand + .navbar-toggler").attr("class");
        if(hambar == "navbar-toggler collapsed"){
            $(".navbar-brand + .navbar-toggler .close-icon").addClass("dnone");
            $(".navbar-brand + .navbar-toggler .hamber-icon").removeClass("dnone");
        }else{
            $(".navbar-brand + .navbar-toggler .close-icon").removeClass("dnone");
            $(".navbar-brand + .navbar-toggler .hamber-icon").addClass("dnone");
        }
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

    // Header_fixed Style
    var $page_title =  $("#header-1").attr("class");
    // console.log($info_block);
    if($page_title == "header active"){
        $("header ~ .page-title").addClass("page-title-padd");
    }else{
        $("header ~ .page-title").removeClass("page-title-padd");
    }

    // HEADER-2 FIXED
    var $page_title =  $("#header-2").attr("class");
    // console.log($info_block);
    if($page_title == "header active"){
        $("header ~ .page-title").addClass("header2-margin");
        $("header + section").addClass("header2-margin");
    }else{
        $("header ~ .page-title").removeClass("header2-margin");
        $("header + section").removeClass("header2-margin");
    }

    // HEADER-3 FIXED
    var $page_title =  $("#header-3").attr("class");
    // console.log($info_block);
    if($page_title == "header active"){
        $("header ~ .page-title").addClass("header3-padding");
        $("header + section").addClass("header3-padding");
    }else{
        $("header ~ .page-title").removeClass("header3-padding");
        $("header + section").removeClass("header3-padding");
    }

    // ADD STICKY HEADER
    var $height = $(".header.active .header-top");
    var $withoutheadertop = $(".header.active .nav-sticky");
    // console.log($withoutheadertop.height() - 100);
    
    if($(window).scrollTop() > $height.height()){
        $(".header.active .nav-sticky").addClass("sticky");
    }else if($(window).scrollTop() > $withoutheadertop.height() - 50){
        $(".header.active .nav-sticky").addClass("sticky");
    }
    else{
        $(".header.active .nav-sticky").removeClass("sticky");
    }
    $(window).scroll(function(){
        // console.log($(window).scrollTop() - 100);
        if($(window).scrollTop() > $height.height()){
            $(".header.active .nav-sticky").addClass("sticky");
        }else if($(window).scrollTop() > $withoutheadertop.height() - 50){
            $(".header.active .nav-sticky").addClass("sticky");
        }
        else{
            $(".header.active .nav-sticky").removeClass("sticky");
        } 
    });

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
        // options
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

    // COMING SOON PAGE
    var $coming_soon =  $(".page-Coming #timer-wrapper").attr("class");
    if($coming_soon == "timer-wrapper"){
        let dayItem = document.querySelector("#day");
        let hourItem = document.querySelector("#hour");
        let minuteItem = document.querySelector("#minute");
        let secondItem = document.querySelector("#second");

        let countDown = () =>{
            let futureDate = new Date("18 Dec 2022");
            let currentDate = new Date();
            let myDate = futureDate - currentDate;

            let days = Math.floor(myDate / 1000 / 60 / 60 /24);
            let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
            let minutes = Math.floor(myDate / 1000 / 60) % 60;
            let seconds = Math.floor(myDate / 1000) % 60;

            dayItem.innerHTML = days;
            hourItem.innerHTML = hours;
            minuteItem.innerHTML = minutes;
            secondItem.innerHTML = seconds;
        }

        countDown()
        setInterval(countDown, 1000)
    }else{
        console.log("Error");
    }
})