$(document).ready(function (){
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        margin: 30,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3
            },
            1400:{
                items:4
            }
        },
    })
})