AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Initialize testimonial carousel
$(document).ready(function(){
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
});