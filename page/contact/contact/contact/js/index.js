/**
 * Created by ASUS on 2017/4/6.
 */
$(function(){

    //最新动态鼠标经过的事件
    $(".newS-bottom dl").on("mouseenter",function(){
        $(this).find("dt").addClass("onimg");
        $(this).find("h4").addClass("onclass");
    })

    $(".newS-bottom dl").on("mouseleave",function(){
        $(this).find("dt").removeClass("onimg");
        $(this).find("h4").removeClass("onclass");
    })

//热门活动缩放的事件
    // scale(".hotA-center",2.0);
    // scale(".hotA-right",2.0);
    //封装了一个缩放的函数
    $.fn.scale = function(obj,multiple){
        $(obj).find("img").on("mouseenter",function(){
            var multiple = multiple*100;
            $(this).stop().animate({
                width:multiple+"%",
                height:multiple+"%",
                left:- (multiple-100)/2+"%",
                top:- (multiple-100)/2+"%"
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

    $(".hotA-left").scale(2.0);
    
    // function scale(obj){
    //     $(obj).find("img").on("mouseenter",function(){
    //         $(this).stop().animate({
    //             width:"110%",
    //             height:"110%",
    //             left:"-5%",
    //             top:"-5%"
    //         },500)
    //     }).on("mouseleave",function(){
    //         $(this).stop().animate({
    //             width :"100%",
    //             height:"100%",
    //             top:0,
    //             left:0
    //         })
    //     })
    // }

    //客片大赏滑入的鼠标经过滑入的事件
    $(".clent-t-imgs ul li").on("mouseenter",function(){
        $(this).children("div").stop().animate({
            top:0
        },400)
    }).on("mouseleave",function(){
        $(this).children("div").stop().animate({
            top:-335
        },400)
    })

    //微电影滑入的事件
    $(".movie-bottom a").on("mouseenter",function(){
        $(this).children("div:eq(1)").stop().animate({
            top:0
        },500)
    }).on("mouseleave",function(){
        $(this).children("div:eq(1)").stop().animate({
            top:-240
        },500)
    })



    var navArr=["HOME","ABOUT","SHOW CASE","LOVE SHOW","NEWS","SERVICE","CONTACT","ORDERS"];
    var navArr2 = ["首页","关于我们","作品展示","客片大赏","新闻中心","服务报价","联系我们","在线订单"];
    var q = $(".header-nav>ul li.cur").prevAll().length;
    console.log(q);
    $(".header-nav>ul li.cur").children("a").text(navArr[$(".header-nav>ul li.cur").prevAll().length]);
    //导航鼠标经过时下拉菜单
    $(".header-nav>ul>li").on("mouseenter",function(){
        var len = $(this).find("li").length;
        var hei = $(this).find("li").height();
        $(this).children("ul").stop().animate({
            height:len*hei+10
        },500);
        navText =$(this).children("a").text();
        $(this).children("a").text(navArr[$(this).index()]);
    }).on("mouseleave",function(){
        $(this).children("a").text(navText);
        $(".header-nav>ul li.cur").children("a").text(navArr[$(".header-nav>ul li.cur").prevAll().length]);
        $(this).children("ul").stop().animate({
            height:0
        },500)
    }).on("click",function(){
        $(".header-nav>ul li.cur").children("a").text(navArr2[$(".header-nav>ul li.cur").prevAll().length]);
        $(this).attr("class","cur").siblings().removeAttr("class");
    })

})


