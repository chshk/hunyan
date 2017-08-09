$(function(){
    //获得滚条卷去的高度
    $(window).on("scroll",function(){
        var height  = $(window).scrollTop();
        if(800<height){
            $(".floatImg").css({
                top:$(window).scrollTop()+80
            })
            
        }else{
            $(".floatImg").css({
                top: 860
            });
        }

        var top1 = ($(window).scrollTop()+$(window).height()/2);
        // console.log(top1);
        $("#float-gift").stop().animate({
            top:top1
        },1000,"swing");
    })

})