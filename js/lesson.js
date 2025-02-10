/*======================
スライダー
======================*/
$('.slider').slick({
    arrows: false,
    // autoplay: true,
    infinite: true,
    // centerMode: true,
    // centerPadding: '10%',
    autoplaySpeed: 5000,
    speed: 500,
    pauseOnFocus: false,
    pauseOnHover: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '10%',
            }
        },
    ]
});
