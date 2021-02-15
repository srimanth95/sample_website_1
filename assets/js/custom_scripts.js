//Scroll to top when arrow up clicked END
var btn = $('.backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '200');
});
//Scroll to top when arrow up clicked END

// Page loading animation
$(window).on('load', function() {
    if($('.cover').length){
        $('.cover').parallax({
            imageSrc: $('.cover').data('image'),
            zIndex: '1'
        });
    }

    $("#preloader").animate({
        'opacity': '0'
    }, 600, function(){
        setTimeout(function(){
            $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
    });
});

//our clients 
$('.ourclient_slider').owlCarousel({
    items:5,
    loop:true,
    dots: true,
    nav: true,
    autoplay: true,
    margin:5,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            768:{
                items:3
            },
            990:{
                items:4
            },
            1200:{
                items:5
            }
        }
})