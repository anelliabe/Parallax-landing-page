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

});


// Stop parallax at certain point
