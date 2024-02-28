function menu() {
    $("#mobile-menu ul li a").click(function(x) {
        if ($(this).closest("li").children("ul").length) {
            x.preventDefault();
            $(this).closest("li").toggleClass("acik");
        }
    });
}

function mobileMenu() {
    $(".mobile-hamburger-menu").click(function() {
        $("body, html, #mobile-menu, .menuKapa, .gridAll").toggleClass('mobile-menu-active');
    });
    $(".menuKapa").click(function() {
        $("body, html, #mobile-menu, .menuKapa, .gridAll").removeClass('mobile-menu-active');
    });
    $(".subPage aside.sidebar input, .subPage aside.sidebar textarea").click(function() {
        $(".topIcon").toggleClass('active');
    });
}

let map;

function initMap() {
    const myLatLng = { lat: 41.06872428015757, lng: 29.00645303122103 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: myLatLng,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#f5f5f5"
                }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#616161"
                }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                {
                    "color": "#f5f5f5"
                }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#bdbdbd"
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#eeeeee"
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#757575"
                }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#e5e5e5"
                }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#9e9e9e"
                }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#ffffff"
                }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#757575"
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#dadada"
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#616161"
                }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#9e9e9e"
                }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#e5e5e5"
                }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#eeeeee"
                }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#c9c9c9"
                }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#9e9e9e"
                }
                ]
            }
        ]
    });
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "MGC",
    });
}

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.posts').slick('setPosition');
});

$(document).ready(function() {
    menu();
    mobileMenu();

    $(window).trigger('resize');
    
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 150, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init(); 

    $('#slider .items').slick({
        dots: true,
        arrows: false,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        prevArrow: $('#slider .prev'),
        nextArrow: $('#slider .next'),
    });

    $('.posts').slick({
        dots: false,
        arrows: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
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

    $('.bigVideo .items').slick({
        dots: false,
        arrows: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
    });

    $('.smallVideo .items').slick({
        dots: false,
        arrows: true,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: $('#videos .prev'),
        nextArrow: $('#videos .next'),
        asNavFor: '.bigVideo .items',
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
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

    $(window).scroll(function () {
        var sc = $(window).scrollTop()
        var header = $('.site-header').height();
        if (sc > header) {
            $(".site-header").addClass("fixed")
        } else {
            $(".site-header").removeClass("fixed")
        }
    });

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        
    } else {
        $( ".service-select a" ).bind( "click", function() {
            var title = $(this).data("title");
            var desc = $(this).data("desc");
            var link = $(this).data("link");
            var image = $(this).data("image");
            $( "#serviceTitle" ).text(title);  
            $( "#serviceParagraph" ).text(desc);
            document.getElementById("serviceThumbnail").src = image;
            document.getElementById("serviceURL").href = link;
            $(".service").removeClass('active');
            $(this).closest(".service").addClass('active');
        });
    }
});

$( window ).resize(function() {
    var container = $('.container').offset();
    $('.offset-left').css("padding-left", container.left);
    $('.offset-right').css("padding-right", container.left);
});