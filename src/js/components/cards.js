$(document).ready(function () {
    $('.js-cards__items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow:
			'<div class="cards__prev-arrow" aria-label="Previous" type="button"><img src="../images/prev-arrow.svg"></div>',
        nextArrow:
			'<div class="cards__next-arrow" aria-label="Next" type="button"><img src="../images/next-arrow.svg"></div>',
    });
});
