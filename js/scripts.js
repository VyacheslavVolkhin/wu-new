$(document).ready(function(){

    //item-tile-video
    $('.js-btn-video').on('click', function () {
        let videoURL = $(this).parent('.item-tile-video').attr('data-video');
        $(this).parents('.item-tile-video').addClass('active');
        $(this).parents('.item-tile-video').append('<iframe width="100%" height="100%" src="' + videoURL + '" frameborder="0" allowfullscreen></iframe>')
        return false;
    })

    //section-top-box
    if (!!$('.section-top-box').offset()) {
        $('.section-top-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                    }
                },
            ]
        });
    }

    //section-teams-box
    if (!!$('.section-teams-box').offset()) {
        $('.section-teams-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                        variableWidth: true,
                    }
                },
            ]
        });
    }


    //section-portfolio-box
    if (!!$('.section-portfolio-box').offset()) {
        $('.section-portfolio-box .slider').slick({
            dots: false,
            slidesToShow: 4,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        prevArrow: false,
                        nextArrow: false,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                    }
                },
            ]
        });
    }

    //section-srt-box
    if (!!$('.section-srt-box').offset()) {
        $('.section-srt-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: true,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                    }
                },
            ]
        });
    }

    //section-reviews-box
    if (!!$('.section-reviews-box').offset()) {
        $('.section-reviews-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: true,
            rows: 1,
            swipeToSlide: true,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                    }
                },
            ]
        });
    }


    //section-sps-box
    if (!!$('.section-sps-box').offset()) {
        $('.section-sps-box .slider').slick({
            dots: true,
            slidesToShow: 4,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        variableWidth: true,
                        slidesToShow: 1,
                        dots: false,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                    }
                },
            ]
        });
    }

});


