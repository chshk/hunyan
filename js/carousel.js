


// 轮播图插件

$.fn.carousel=function(){
    var playimg = this.find("ul").eq(0);
    var playlis = this.children().eq(1).find("li");
    var timeId = null;
    var pic = 0 ;
    var index;
    playimg.append(playimg.find("li").eq(0).clone());
    playlis.on("mouseenter",function(){
        $(this).attr("class","cur").siblings().removeAttr("class");
        index = $(this).index()
        playimg.stop().animate({
            left:- index*playimg.find("li").width()
        });
        pic = index;
        clearInterval(timeId);
    }).on("mouseleave",function(){
        play(playimg,playlis,pic);
    });

    playimg.on("mouseenter",function(){
        clearInterval(timeId);
    }).on("mouseleave",function(){
        play(playimg,playlis,pic);
    });
    play(playimg,playlis,pic);
    function play(img,lis,pos){
        timeId =setInterval(function(){
            if(pos>lis.length-1){
                img.css("left",0);
                pos=0;
            }
            pos++;
            lis.removeAttr("class");  
            if(pos==lis.length){
                lis.removeAttr("class");  
                $(lis[0]).attr("class","cur");
            }else{
                $(lis[pos]).attr("class","cur");
            }
            img.stop().animate({
                left : -pos * img.find("li").width()
            })
        },2000)
    }
}


// 封装了一缩放的插件
    $.scale = function(obj,multiple){
        $(obj).find("img").on("mouseenter",function(){
            
            var mul = multiple*100;
            $(this).stop().animate({
                width:mul+"%",
                height:mul+"%",
                left:- (mul-100)/2+"%",
                top:- (mul-100)/2+"%"
            },500)
        }).on("mouseleave",function(){
            $(this).stop().animate({
                width :"100%",
                height:"100%",
                top:0,
                left:0
            })
        });
    }


// 封装了呼吸灯的插件
 $.fn.breathe = function(){
        var obj = this;
       obj.find("ul").children("li").on("mouseenter",function(){
        $(this).attr("class","cur").siblings().removeAttr("class");
        $(this).parent().prev().find("li").eq($(this).index()).stop().animate({
            opacity:1
        }).siblings().stop().animate({opacity:0});
        pic = $(this).index();
    });
    var pic = 0 ;
    var timeId = setInterval(function(){
        playopa();
    },2000)
    function playopa(){
        if(pic==2){
            pic=0;
        }else{
            pic++;
        }
        obj.find("ul").eq(1).find("li").eq(pic).attr("class","cur").siblings().removeAttr("class");
        obj.find("ul").children("li").eq(pic).stop().animate({
            opacity:1
        }).siblings().stop().animate({opacity:0});
    }
    obj.on("mouseenter",function(){
        clearInterval(timeId);
    }).on("mouseleave",function(){
        timeId = setInterval(playopa,2000);
    })
 }