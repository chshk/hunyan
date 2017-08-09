
$.fn.tabChange = function(obj){
        var par = this;
        par.find(".news-nav ul").children("li").on("click",function(){
        $(this).attr("class","cur").siblings().removeAttr("class");
        par.find(".news-content .cs-left .c-left").eq($(this).index()).show().siblings().hide();
    });
}