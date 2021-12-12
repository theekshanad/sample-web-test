$(document).ready(function() {
    scrollPoints = 0;
    $('.sereen1').on('mousewheel', function(event) {
        if(scrollPoints <=1 ){
            scrollPoints += event.deltaY;
        }else{
            scrollPoints = 0
        }
        console.log(scrollPoints);
        var scale = 1;
        if(Math.abs(scrollPoints/80) > 1){
            scale =Math.abs(scrollPoints/80);
        }else{
            scale =1;
        }
        if(event.deltaY /120 < 0) {
            $('.img-wap img').css('transform','scale('+scale+')');
            if(scrollPoints < -300){
                $('.sereen1').hide();
                $('.sereen2').show();
            }
        }else{
            $('.img-wap img').css('transform','scale('+scale+')');
        }
    });

    $('.sereen2').on('mousewheel', function(event) {
        if(event.deltaY /120 > 0) {
            if(event.deltaY > 10){
                $('.sereen2').hide();
                $('.sereen1').show();
            }
        }
        else{
            if(event.deltaY < -10){
                $('.sereen2').hide();
                $('.sereen3').show();
            }
        }
    });

    $('.sereen3').on('mousewheel', function(event) {
        if(event.deltaY /120 > 0) {
            if(event.deltaY > 10){
                $('.sereen3').hide();
                $('.sereen2').show();
            }
        }
        else{
            if(event.deltaY < -10){
                $('.wrapper').hide();
                $('.sereen4').show();
                $('body').css('overflow','auto');
            }
        }
    });

    $('.sereen4').on('mousewheel', function(event) {
        if(event.deltaY /120 > 0) {
            if(event.deltaY > 10){
                if($(window).scrollTop()===0){
                    $('.sereen4').hide();
                    $('.wrapper').show();
                    $('body').css('overflow','hidden');
                }
            }
        }
    });
});