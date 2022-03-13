function setProgress(index) {
    var calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;

    $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );

    $progressBarLabel.text(calc + '% completed');
}

var $slider = $('.pagesSlider');
var $progressBar = $('.progress');
var $progressBarLabel = $( '.slider__label' );

$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    setProgress(nextSlide);
});

$slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    prevArrow: $('.pagesSlider-prev'),
    nextArrow: $('.pagesSlider-next'),
    responsive: [
        {
            breakpoint: 1348,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }
        ,{
            breakpoint: 1056,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
});

setProgress(0);
