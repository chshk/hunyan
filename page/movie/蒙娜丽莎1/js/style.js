
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




