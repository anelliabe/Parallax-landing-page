// Paarallax header
$(window).scroll(function(){

    var wScroll = $(this).scrollTop(); // this = window. It tells how far it is scrolled from the top

    $('.logo').css({
       'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.siluet').css({
        'transform' : 'translate(0px, '+ wScroll /6 +'%)'
    });

    $('.model').css({
        'transform' : 'translate(0px, -'+ wScroll /14 +'%)' //with "-" the object move UP while scrolling
    });

    $('.siluet-content-img').css({
        'transform' : 'translate(0px, '+ wScroll /6 +'%)'
    });

    /* Gallery */
    if(wScroll > $('.gallery').offset().top - ($(window).height() / 2.2)){
    $('.gallery figure').each(function(i){   //show each image while scrolling
        setTimeout(function(){              //(i) => means each one
            $('.gallery figure').eq(i).addClass('is-showing');  //eq() => means look at the index and find the right one
        }, 250 * (i + 1));    //set the time interval
        });
    }

    /* Periscope with price */
    if(wScroll > $('.periscope-price').offset().top - $(window).height()){
        var opacity = (wScroll - $('.periscope-price').offset().top + 400) / (wScroll / 5);
        $('.promo-text').css({'opacity': opacity});
    }


});

