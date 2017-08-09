/**
 * Created by MacPro on 2017/6/20.
 */

$(function(){
    var naArr1 = ["HOME","ABOUT","SHOW CASE","LOVE SHOW","NEWS","SERVICE","CONTACT","ORDERS"];
    var naArr2 = ["首页","关于我们","作品展示","客片大赏","新闻中心","服务报价","联系我们","在线订单"];
    var q = $(".q4>ul li.cur").prevAll().length;
    $(".q4>ul li.cur").children("a").text(naArr1[$(".q4>ul li.cur").prevAll().length]);
    //导航鼠标经过时下拉菜单
    $(".q4>ul>li").on("mouseenter",function(){
        var len = $(this).find("li").length;
        var hei = $(this).find("li").height();
        $(this).children("ul").stop().animate({
            height:len*hei+10
        },500);
        eTe = $(this).children("a").text();

        $(this).children("a").text(naArr1[$(this).index()]);

    }).on("mouseleave",function(){
        $(this).children("a").text(eTe);
        $(".q4>ul li.cur").children("a").text(naArr1[$(".q4>ul li.cur").prevAll().length]);
        $(this).children("ul").stop().animate({
            height:0
    },500)
}).on("click",function(){
    $(".q4>ul li.cur").children("a").text(naArr2[$(".q4>ul li.cur").prevAll().length]);
    $(this).attr("class","cur").siblings().removeAttr("class");
    })
})

$.fn.tabChange = function(obj){
    var par = this;
    par.find(".w6 ul").children("li").on("click",function(){
        $(this).attr("class","cur").siblings().removeAttr("class");
        par.find(".e1 .e12 .e2").eq($(this).index()).show().siblings().hide();
    });
}


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

        $("#float-gift").stop().animate({
            top:top1
        },1000,"swing");
    })

})



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



