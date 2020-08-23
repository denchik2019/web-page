'use strict';

function onClick() {
    
        $(this).toggleClass('selected');
        $(this).find('.product__ellipse').toggleClass('active-selected');
        $(this).find('.product__title').toggleClass('active-selected');
        
        if($(this).hasClass('product__item--disable')) {
            $(this).removeClass('selected');
            $(this).find('.product__ellipse').removeClass('active-selected');
            $(this).find('.product__title').removeClass('active-selected')
        }
    
        if($(this).hasClass('selected')) {
            $(this).removeClass('selected-hover');
            $(this).find('.product__ellipse').removeClass('selected-hover');
            $(this).find('.product__title').removeClass('selected-hover');
            $(this).unbind('mouseleave', mouseleave);
        }
    
        if(!$(this).hasClass('selected')) {
            $(this).removeClass('selected-hover');
            $(this).find('.product__ellipse').removeClass('selected-hover');
            $(this).find('.product__title').removeClass('selected-hover');
            $(this).hover('', mouseleave);
        }
    }


$('.product__item').on('click', onClick);

$('.product__link').on('click', function(e) {
    e.preventDefault();
    let elem = $(this).parent().parent().parent();
    elem.find('.product__item').toggleClass('selected');
});


function mouseleave() {
    $(this).not('.product__item--disable').addClass('selected-hover');
    $(this).find('.product__ellipse').not('.product__ellipse--disable').addClass('selected-hover');
    $(this).find('.product__title').not('.product__title--disable').addClass('selected-hover');
    if($(this).hasClass('selected-hover')) {
        $(this).removeClass('selected');
        $(this).find('.product__ellipse').removeClass('active-selected');
    }
}

$('.product__item').hover('', mouseleave);