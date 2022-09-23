$(function () {
    $('.first_slider').slick({
        slidesToShow: 3,
        slidesToScroll:3,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 851,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },

            {
                breakpoint: 601,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    });
$('.second_slider').slick({
    slidesToShow:1,
    slidesToScroll:1,
    dots:true,
    arrows:false,
    infinite: true,
    speed:1000,
    autoplay:true,
    autoplaySpeed:10000,
    fade:true,
});
$('.third_slider').slick({
    slidesToShow:1,
    slidesToScroll:1,
    dots:true,
    arrows:false,
    Infinity:true,
    speed:1000,
    autoplay:true,
    autoplaySpeed:10000,
    fade:true,
});
});